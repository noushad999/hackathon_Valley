from rest_framework import viewsets, permissions, status
from rest_framework.decorators import action
from rest_framework.response import Response
from django.shortcuts import get_object_or_404
from .models import Event, EventAttendee
from .serializers import EventSerializer, EventAttendeeSerializer
from .permissions import IsAdminOrReadOnly

class EventViewSet(viewsets.ModelViewSet):
    queryset = Event.objects.all()
    serializer_class = EventSerializer
    permission_classes = [permissions.IsAuthenticated, IsAdminOrReadOnly]
    
    def get_queryset(self):
        queryset = super().get_queryset()
        
        # Filter by importance
        important = self.request.query_params.get('important', None)
        if important and important.lower() == 'true':
            queryset = queryset.filter(is_important=True)
        
        # Filter by date range
        start_date = self.request.query_params.get('start_date', None)
        end_date = self.request.query_params.get('end_date', None)
        
        if start_date:
            queryset = queryset.filter(start_time__gte=start_date)
        if end_date:
            queryset = queryset.filter(end_time__lte=end_date)
        
        return queryset
    
    @action(detail=True, methods=['post'])
    def attend(self, request, pk=None):
        event = self.get_object()
        user = request.user
        
        # Check if user is already attending
        if EventAttendee.objects.filter(event=event, user=user).exists():
            return Response({"detail": "You are already attending this event."}, 
                            status=status.HTTP_400_BAD_REQUEST)
        
        # Register user for the event
        EventAttendee.objects.create(event=event, user=user)
        
        return Response({"detail": "Successfully registered for the event."}, 
                        status=status.HTTP_201_CREATED)
    
    @action(detail=True, methods=['post'])
    def unattend(self, request, pk=None):
        event = self.get_object()
        user = request.user
        
        # Check if user is attending
        try:
            attendance = EventAttendee.objects.get(event=event, user=user)
            attendance.delete()
            return Response({"detail": "Successfully unregistered from the event."}, 
                            status=status.HTTP_200_OK)
        except EventAttendee.DoesNotExist:
            return Response({"detail": "You are not registered for this event."}, 
                            status=status.HTTP_400_BAD_REQUEST)
    
    @action(detail=False, methods=['get'])
    def my_events(self, request):
        user = request.user
        events = Event.objects.filter(attendees__user=user)
        serializer = self.get_serializer(events, many=True)
        return Response(serializer.data)
