from rest_framework import permissions
from teams.models import TeamMembership

class IsTeamMemberOrReadOnly(permissions.BasePermission):
    """
    Custom permission to only allow team members to edit their project.
    """
    def has_object_permission(self, request, view, obj):
        # Read permissions are allowed to any request
        if request.method in permissions.SAFE_METHODS:
            return True
        
        # Write permissions are only allowed to team members
        return TeamMembership.objects.filter(user=request.user, team=obj.team).exists()

class IsProjectOwnerOrReadOnly(permissions.BasePermission):
    """
    Custom permission to only allow project owners to edit project resources.
    """
    def has_object_permission(self, request, view, obj):
        # Read permissions are allowed to any request
        if request.method in permissions.SAFE_METHODS:
            return True
        
        # Write permissions are only allowed to team members of the project
        return TeamMembership.objects.filter(user=request.user, team=obj.project.team).exists()
