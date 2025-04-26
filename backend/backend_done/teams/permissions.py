from rest_framework import permissions

class IsTeamLeaderOrReadOnly(permissions.BasePermission):
    """
    Custom permission to only allow team leaders to edit their team.
    """
    def has_object_permission(self, request, view, obj):
        # Read permissions are allowed to any request
        if request.method in permissions.SAFE_METHODS:
            return True
        
        # Write permissions are only allowed to the team leader
        try:
            return obj.teammembership_set.filter(user=request.user, role='leader').exists()
        except:
            return False

class IsInvitationRecipient(permissions.BasePermission):
    """
    Custom permission to only allow the invitation recipient to accept/decline.
    """
    def has_object_permission(self, request, view, obj):
        # Only the invitee can update the invitation
        return obj.invitee == request.user
