from rest_framework import viewsets, permissions, status
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.parsers import MultiPartParser, FormParser
from django.shortcuts import get_object_or_404
from .models import Project, ProjectImage, ProjectFeedback
from .serializers import ProjectSerializer, ProjectImageSerializer, ProjectFeedbackSerializer
from .permissions import IsTeamMemberOrReadOnly, IsProjectOwnerOrReadOnly
from teams.models import TeamMembership

class ProjectViewSet(viewsets.ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer
    permission_classes = [permissions.IsAuthenticated, IsTeamMemberOrReadOnly]
    
    def get_queryset(self):
        queryset = super().get_queryset()
        status_filter = self.request.query_params.get('status', None)
        if status_filter:
            queryset = queryset.filter(status=status_filter)
        return queryset
    
    @action(detail=False, methods=['get'])
    def my_project(self, request):
        user = request.user
        teams = user.teams.all()
        
        if not teams.exists():
            return Response({"detail": "You are not a member of any team."}, 
                            status=status.HTTP_404_NOT_FOUND)
        
        try:
            project = Project.objects.get(team__in=teams)
            serializer = self.get_serializer(project)
            return Response(serializer.data)
        except Project.DoesNotExist:
            return Response({"detail": "Your team has not created a project yet."}, 
                            status=status.HTTP_404_NOT_FOUND)
    
    @action(detail=True, methods=['post'])
    def submit(self, request, pk=None):
        project = self.get_object()
        
        if project.status != 'draft':
            return Response({"detail": "This project has already been submitted."}, 
                            status=status.HTTP_400_BAD_REQUEST)
        
        project.status = 'submitted'
        project.save()
        
        serializer = self.get_serializer(project)
        return Response(serializer.data)

class ProjectImageViewSet(viewsets.ModelViewSet):
    queryset = ProjectImage.objects.all()
    serializer_class = ProjectImageSerializer
    permission_classes = [permissions.IsAuthenticated, IsProjectOwnerOrReadOnly]
    parser_classes = [MultiPartParser, FormParser]
    
    def get_queryset(self):
        project_id = self.kwargs.get('project_pk')
        if project_id:
            return ProjectImage.objects.filter(project_id=project_id)
        return super().get_queryset()
    
    def perform_create(self, serializer):
        project_id = self.kwargs.get('project_pk')
        project = get_object_or_404(Project, id=project_id)
        
        # Check if user is a member of the project's team
        user = self.request.user
        if not TeamMembership.objects.filter(user=user, team=project.team).exists():
            self.permission_denied(self.request, message="You are not a member of this project's team.")
        
        serializer.save(project=project)

class ProjectFeedbackViewSet(viewsets.ModelViewSet):
    queryset = ProjectFeedback.objects.all()
    serializer_class = ProjectFeedbackSerializer
    permission_classes = [permissions.IsAuthenticated]
    
    def get_queryset(self):
        project_id = self.kwargs.get('project_pk')
        if project_id:
            return ProjectFeedback.objects.filter(project_id=project_id)
        return super().get_queryset()
    
    def perform_create(self, serializer):
        project_id = self.kwargs.get('project_pk')
        project = get_object_or_404(Project, id=project_id)
        serializer.save(project=project, user=self.request.user)
