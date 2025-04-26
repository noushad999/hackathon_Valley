from rest_framework import viewsets, permissions
from rest_framework.decorators import action
from rest_framework.response import Response
from .models import ResourceCategory, Resource
from .serializers import ResourceCategorySerializer, ResourceSerializer
from .permissions import IsAdminOrReadOnly

class ResourceCategoryViewSet(viewsets.ModelViewSet):
    queryset = ResourceCategory.objects.all()
    serializer_class = ResourceCategorySerializer
    permission_classes = [IsAdminOrReadOnly]

class ResourceViewSet(viewsets.ModelViewSet):
    queryset = Resource.objects.all()
    serializer_class = ResourceSerializer
    permission_classes = [permissions.IsAuthenticated]
    
    def get_permissions(self):
        if self.action in ['list', 'retrieve']:
            permission_classes = [permissions.IsAuthenticated]
        elif self.action in ['create']:
            permission_classes = [permissions.IsAuthenticated]
        else:
            permission_classes = [permissions.IsAdminUser]
        return [permission() for permission in permission_classes]
    
    def get_queryset(self):
        queryset = super().get_queryset()
        
        # Filter by category
        category_id = self.request.query_params.get('category', None)
        if category_id:
            queryset = queryset.filter(category_id=category_id)
        
        # Filter by type
        resource_type = self.request.query_params.get('type', None)
        if resource_type:
            queryset = queryset.filter(type=resource_type)
        
        # Filter featured resources
        featured = self.request.query_params.get('featured', None)
        if featured and featured.lower() == 'true':
            queryset = queryset.filter(featured=True)
        
        return queryset
    
    @action(detail=False, methods=['get'])
    def types(self, request):
        return Response(dict(Resource.TYPE_CHOICES))
