from rest_framework import serializers
from .models import ResourceCategory, Resource
from users.serializers import UserSerializer

class ResourceCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = ResourceCategory
        fields = ['id', 'name', 'description', 'order']

class ResourceSerializer(serializers.ModelSerializer):
    created_by = UserSerializer(read_only=True)
    category = ResourceCategorySerializer(read_only=True)
    category_id = serializers.IntegerField(write_only=True)
    
    class Meta:
        model = Resource
        fields = ['id', 'title', 'description', 'url', 'type', 'category', 
                  'category_id', 'created_by', 'created_at', 'updated_at', 'featured']
        read_only_fields = ['id', 'created_by', 'created_at', 'updated_at']
    
    def create(self, validated_data):
        user = self.context['request'].user
        validated_data['created_by'] = user
        return super().create(validated_data)
