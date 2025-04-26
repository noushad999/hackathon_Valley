from django.contrib import admin
from .models import Event, EventAttendee

class EventAttendeeInline(admin.TabularInline):
    model = EventAttendee
    extra = 0
    readonly_fields = ('registered_at',)

@admin.register(Event)
class EventAdmin(admin.ModelAdmin):
    list_display = ('title', 'start_time', 'end_time', 'location', 'is_important', 'created_by')
    list_filter = ('is_important', 'start_time')
    search_fields = ('title', 'description', 'location')
    readonly_fields = ('created_at', 'updated_at')
    inlines = [EventAttendeeInline]

@admin.register(EventAttendee)
class EventAttendeeAdmin(admin.ModelAdmin):
    list_display = ('user', 'event', 'registered_at')
    list_filter = ('registered_at',)
    search_fields = ('user__username', 'event__title')
    readonly_fields = ('registered_at',)
