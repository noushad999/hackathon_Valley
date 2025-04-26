from rest_framework import serializers
from .models import Event, EventAttendee
from users.serializers import UserSerializer

class EventAttendeeSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)
    
    class Meta:
        model = EventAttendee
        fields = ['id', 'user', 'registered_at']
        read_only_fields = ['id', 'registered_at']

class EventSerializer(serializers.ModelSerializer):
    created_by = UserSerializer(read_only=True)
    attendees = EventAttendeeSerializer(many=True, read_only=True)
    attendee_count = serializers.SerializerMethodField()
    is_attending = serializers.SerializerMethodField()
    
    class Meta:
        model = Event
        fields = ['id', 'title', 'description', 'start_time', 'end_time', 
                  'location', 'created_by', 'created_at', 'updated_at', 
                  'is_important', 'attendees', 'attendee_count', 'is_attending']
        read_only_fields = ['id', 'created_by', 'created_at', 'updated_at']
    
    def get_attendee_count(self, obj):
        return obj.attendees.count()
    
    def get_is_attending(self, obj):
        request = self.context.get('request')
        if request and request.user.is_authenticated:
            return obj.attendees.filter(user=request.user).exists()
        return False
    
    def create(self, validated_data):
        user = self.context['request'].user
        validated_data['created_by'] = user
        return super().create(validated_data)
