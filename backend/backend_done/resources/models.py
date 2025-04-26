from django.db import models
from django.conf import settings

class ResourceCategory(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField(blank=True)
    order = models.IntegerField(default=0)
    
    class Meta:
        ordering = ['order', 'name']
        verbose_name_plural = 'Resource Categories'
    
    def __str__(self):
        return self.name

class Resource(models.Model):
    TYPE_CHOICES = [
        ('article', 'Article'),
        ('video', 'Video'),
        ('tutorial', 'Tutorial'),
        ('tool', 'Tool'),
        ('library', 'Library'),
        ('documentation', 'Documentation'),
        ('other', 'Other'),
    ]
    
    title = models.CharField(max_length=200)
    description = models.TextField()
    url = models.URLField()
    type = models.CharField(max_length=20, choices=TYPE_CHOICES)
    category = models.ForeignKey(ResourceCategory, on_delete=models.CASCADE, related_name='resources')
    created_by = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.SET_NULL, null=True, related_name='resources')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    featured = models.BooleanField(default=False)
    
    class Meta:
        ordering = ['-featured', '-created_at']
    
    def __str__(self):
        return self.title
