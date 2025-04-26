from rest_framework import serializers
from .models import Notification
from users.serializers import UserSerializer

class NotificationSerializer(serializers.ModelSerializer):
    recipient = UserSerializer(read_only=True)
    sender = UserSerializer(read_only=True)
    
    class Meta:
        model = Notification
        fields = ['id', 'recipient', 'sender', 'type', 'title', 'message', 
                  'read', 'created_at', 'related_object_id', 'related_object_type']
        read_only_fields = ['id', 'created_at']
