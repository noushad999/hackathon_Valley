from django.urls import path, include
from rest_framework_nested import routers
from .views import ProjectViewSet, ProjectImageViewSet, ProjectFeedbackViewSet

router = routers.DefaultRouter()
router.register(r'', ProjectViewSet)

# Nested routes for project images and feedback
project_router = routers.NestedSimpleRouter(router, r'', lookup='project')
project_router.register(r'images', ProjectImageViewSet, basename='project-images')
project_router.register(r'feedback', ProjectFeedbackViewSet, basename='project-feedback')

urlpatterns = [
    path('', include(router.urls)),
    path('', include(project_router.urls)),
]
