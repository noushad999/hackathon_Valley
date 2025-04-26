from rest_framework import serializers
from .models import Team, TeamMembership, TeamInvitation
from users.serializers import UserSerializer

class TeamMembershipSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)
    user_id = serializers.IntegerField(write_only=True)
    
    class Meta:
        model = TeamMembership
        fields = ['id', 'user', 'user_id', 'team', 'role', 'joined_at']
        read_only_fields = ['id', 'joined_at']

class TeamSerializer(serializers.ModelSerializer):
    members = UserSerializer(many=True, read_only=True)
    memberships = TeamMembershipSerializer(source='teammembership_set', many=True, read_only=True)
    
    class Meta:
        model = Team
        fields = ['id', 'name', 'description', 'created_at', 'updated_at', 
                  'members', 'memberships', 'max_members', 'looking_for_members']
        read_only_fields = ['id', 'created_at', 'updated_at']
    
    def create(self, validated_data):
        user = self.context['request'].user
        team = Team.objects.create(**validated_data)
        TeamMembership.objects.create(user=user, team=team, role='leader')
        return team

class TeamInvitationSerializer(serializers.ModelSerializer):
    inviter = UserSerializer(read_only=True)
    invitee = UserSerializer(read_only=True)
    invitee_id = serializers.IntegerField(write_only=True)
    team = TeamSerializer(read_only=True)
    team_id = serializers.IntegerField(write_only=True)
    
    class Meta:
        model = TeamInvitation
        fields = ['id', 'team', 'team_id', 'inviter', 'invitee', 'invitee_id', 
                  'status', 'created_at', 'updated_at']
        read_only_fields = ['id', 'inviter', 'created_at', 'updated_at']
    
    def create(self, validated_data):
        inviter = self.context['request'].user
        validated_data['inviter'] = inviter
        return super().create(validated_data)
