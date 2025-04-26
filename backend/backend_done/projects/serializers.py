from rest_framework import serializers
from .models import Project, ProjectImage, ProjectFeedback
from teams.serializers import TeamSerializer
from users.serializers import UserSerializer

class ProjectImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProjectImage
        fields = ['id', 'image', 'caption', 'order']

class ProjectFeedbackSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)
    
    class Meta:
        model = ProjectFeedback
        fields = ['id', 'user', 'comment', 'rating', 'created_at']
        read_only_fields = ['id', 'created_at']

class ProjectSerializer(serializers.ModelSerializer):
    team = TeamSerializer(read_only=True)
    team_id = serializers.IntegerField(write_only=True)
    created_by = UserSerializer(read_only=True)
    images = ProjectImageSerializer(many=True, read_only=True)
    feedback = ProjectFeedbackSerializer(many=True, read_only=True)
    
    class Meta:
        model = Project
        fields = ['id', 'title', 'description', 'team', 'team_id', 'created_by', 
                  'created_at', 'updated_at', 'github_url', 'demo_url', 
                  'video_url', 'presentation_url', 'technologies', 'status',
                  'images', 'feedback']
        read_only_fields = ['id', 'created_by', 'created_at', 'updated_at']
    
    def create(self, validated_data):
        user = self.context['request'].user
        validated_data['created_by'] = user
        return super().create(validated_data)
