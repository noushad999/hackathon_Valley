from django.contrib import admin
from .models import ResourceCategory, Resource

@admin.register(ResourceCategory)
class ResourceCategoryAdmin(admin.ModelAdmin):
    list_display = ('name', 'order')
    search_fields = ('name', 'description')

@admin.register(Resource)
class ResourceAdmin(admin.ModelAdmin):
    list_display = ('title', 'type', 'category', 'created_by', 'featured', 'created_at')
    list_filter = ('type', 'category', 'featured', 'created_at')
    search_fields = ('title', 'description', 'created_by__username')
    readonly_fields = ('created_at', 'updated_at')
