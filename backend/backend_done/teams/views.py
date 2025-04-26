from rest_framework import viewsets, permissions, status
from rest_framework.decorators import action
from rest_framework.response import Response
from django.shortcuts import get_object_or_404
from .models import Team, TeamMembership, TeamInvitation
from .serializers import TeamSerializer, TeamMembershipSerializer, TeamInvitationSerializer
from .permissions import IsTeamLeaderOrReadOnly, IsInvitationRecipient

class TeamViewSet(viewsets.ModelViewSet):
    queryset = Team.objects.all()
    serializer_class = TeamSerializer
    permission_classes = [permissions.IsAuthenticated, IsTeamLeaderOrReadOnly]
    
    @action(detail=False, methods=['get'])
    def my_team(self, request):
        user = request.user
        teams = user.teams.all()
        serializer = self.get_serializer(teams, many=True)
        return Response(serializer.data)
    
    @action(detail=True, methods=['post'])
    def join(self, request, pk=None):
        team = self.get_object()
        user = request.user
        
        # Check if user is already in a team
        if user.teams.exists():
            return Response({"detail": "You are already a member of a team."}, 
                            status=status.HTTP_400_BAD_REQUEST)
        
        # Check if team is full
        if team.members.count() >= team.max_members:
            return Response({"detail": "This team is already full."}, 
                            status=status.HTTP_400_BAD_REQUEST)
        
        # Check if team is looking for members
        if not team.looking_for_members:
            return Response({"detail": "This team is not looking for members."}, 
                            status=status.HTTP_400_BAD_REQUEST)
        
        # Add user to team
        TeamMembership.objects.create(user=user, team=team, role='member')
        return Response({"detail": "Successfully joined the team."}, 
                        status=status.HTTP_200_OK)
    
    @action(detail=True, methods=['post'])
    def leave(self, request, pk=None):
        team = self.get_object()
        user = request.user
        
        try:
            membership = TeamMembership.objects.get(user=user, team=team)
            
            # Check if user is the team leader
            if membership.role == 'leader':
                # Check if there are other members
                other_members = TeamMembership.objects.filter(team=team).exclude(user=user)
                if other_members.exists():
                    return Response({"detail": "You cannot leave the team as a leader. Transfer leadership first."}, 
                                    status=status.HTTP_400_BAD_REQUEST)
                else:
                    # If leader is the only member, delete the team
                    team.delete()
                    return Response({"detail": "Team deleted as you were the only member."}, 
                                    status=status.HTTP_200_OK)
            else:
                # Regular member can leave
                membership.delete()
                return Response({"detail": "Successfully left the team."}, 
                                status=status.HTTP_200_OK)
        except TeamMembership.DoesNotExist:
            return Response({"detail": "You are not a member of this team."}, 
                            status=status.HTTP_400_BAD_REQUEST)
    
    @action(detail=True, methods=['post'])
    def transfer_leadership(self, request, pk=None):
        team = self.get_object()
        user = request.user
        new_leader_id = request.data.get('new_leader_id')
        
        if not new_leader_id:
            return Response({"detail": "New leader ID is required."}, 
                            status=status.HTTP_400_BAD_REQUEST)
        
        try:
            # Check if current user is the leader
            current_leader_membership = TeamMembership.objects.get(user=user, team=team, role='leader')
            
            # Check if new leader is a team member
            new_leader_membership = TeamMembership.objects.get(user_id=new_leader_id, team=team)
            
            # Update roles
            current_leader_membership.role = 'member'
            current_leader_membership.save()
            
            new_leader_membership.role = 'leader'
            new_leader_membership.save()
            
            return Response({"detail": "Leadership transferred successfully."}, 
                            status=status.HTTP_200_OK)
        except TeamMembership.DoesNotExist:
            return Response({"detail": "Invalid team membership."}, 
                            status=status.HTTP_400_BAD_REQUEST)

class TeamInvitationViewSet(viewsets.ModelViewSet):
    queryset = TeamInvitation.objects.all()
    serializer_class = TeamInvitationSerializer
    permission_classes = [permissions.IsAuthenticated]
    
    def get_permissions(self):
        if self.action in ['update', 'partial_update', 'accept', 'decline']:
            self.permission_classes = [permissions.IsAuthenticated, IsInvitationRecipient]
        return super().get_permissions()
    
    def get_queryset(self):
        user = self.request.user
        if self.action == 'sent':
            return TeamInvitation.objects.filter(inviter=user)
        elif self.action == 'received':
            return TeamInvitation.objects.filter(invitee=user)
        return super().get_queryset()
    
    @action(detail=False, methods=['get'])
    def sent(self, request):
        queryset = self.get_queryset()
        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)
    
    @action(detail=False, methods=['get'])
    def received(self, request):
        queryset = self.get_queryset()
        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)
    
    @action(detail=True, methods=['post'])
    def accept(self, request, pk=None):
        invitation = self.get_object()
        user = request.user
        
        # Check if user is already in a team
        if user.teams.exists():
            return Response({"detail": "You are already a member of a team."}, 
                            status=status.HTTP_400_BAD_REQUEST)
        
        # Check if team is full
        if invitation.team.members.count() >= invitation.team.max_members:
            invitation.status = 'declined'
            invitation.save()
            return Response({"detail": "This team is already full."}, 
                            status=status.HTTP_400_BAD_REQUEST)
        
        # Accept invitation and add user to team
        invitation.status = 'accepted'
        invitation.save()
        TeamMembership.objects.create(user=user, team=invitation.team, role='member')
        
        return Response({"detail": "Invitation accepted. You are now a member of the team."}, 
                        status=status.HTTP_200_OK)
    
    @action(detail=True, methods=['post'])
    def decline(self, request, pk=None):
        invitation = self.get_object()
        
        invitation.status = 'declined'
        invitation.save()
        
        return Response({"detail": "Invitation declined."}, 
                        status=status.HTTP_200_OK)
