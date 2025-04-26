from django.contrib import admin
from .models import Project, ProjectImage, ProjectFeedback

class ProjectImageInline(admin.TabularInline):
    model = ProjectImage
    extra = 1

class ProjectFeedbackInline(admin.TabularInline):
    model = ProjectFeedback
    extra = 0
    readonly_fields = ('created_at',)

@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = ('title', 'team', 'created_by', 'status', 'created_at')
    list_filter = ('status', 'created_at')
    search_fields = ('title', 'description', 'team__name', 'created_by__username')
    inlines = [ProjectImageInline, ProjectFeedbackInline]

@admin.register(ProjectImage)
class ProjectImageAdmin(admin.ModelAdmin):
    list_display = ('project', 'caption', 'order')
    list_filter = ('project',)
    search_fields = ('project__title', 'caption')

@admin.register(ProjectFeedback)
class ProjectFeedbackAdmin(admin.ModelAdmin):
    list_display = ('project', 'user', 'rating', 'created_at')
    list_filter = ('rating', 'created_at')
    search_fields = ('project__title', 'user__username', 'comment')
