from rest_framework import permissions

class IsRecipient(permissions.BasePermission):
    """
    Custom permission to only allow recipients to view their notifications.
    """
    def has_object_permission(self, request, view, obj):
        # Permissions are only allowed to the recipient of the notification
        return obj.recipient == request.user
