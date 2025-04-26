from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/users/', include('users.urls')),
    path('api/teams/', include('teams.urls')),
    path('api/projects/', include('projects.urls')),
    path('api/notifications/', include('notifications.urls')),
    path('api/resources/', include('resources.urls')),
    path('api/schedule/', include('schedule.urls')),
]

# Serve media files in development
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
