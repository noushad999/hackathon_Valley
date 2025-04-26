from django.contrib import admin
from .models import Team, TeamMembership, TeamInvitation

class TeamMembershipInline(admin.TabularInline):
    model = TeamMembership
    extra = 1

class TeamInvitationInline(admin.TabularInline):
    model = TeamInvitation
    extra = 1
    fk_name = 'team'

@admin.register(Team)
class TeamAdmin(admin.ModelAdmin):
    list_display = ('name', 'created_at', 'max_members', 'looking_for_members')
    search_fields = ('name',)
    inlines = [TeamMembershipInline, TeamInvitationInline]

@admin.register(TeamMembership)
class TeamMembershipAdmin(admin.ModelAdmin):
    list_display = ('user', 'team', 'role', 'joined_at')
    list_filter = ('role',)
    search_fields = ('user__username', 'team__name')

@admin.register(TeamInvitation)
class TeamInvitationAdmin(admin.ModelAdmin):
    list_display = ('invitee', 'team', 'inviter', 'status', 'created_at')
    list_filter = ('status',)
    search_fields = ('invitee__username', 'team__name', 'inviter__username')
