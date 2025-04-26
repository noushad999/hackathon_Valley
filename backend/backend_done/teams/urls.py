from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import TeamViewSet, TeamInvitationViewSet

router = DefaultRouter()
router.register(r'', TeamViewSet)
router.register(r'invitations', TeamInvitationViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
