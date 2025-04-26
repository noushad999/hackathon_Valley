from django.db import models
from django.conf import settings
from teams.models import Team

class Project(models.Model):
    STATUS_CHOICES = [
        ('draft', 'Draft'),
        ('submitted', 'Submitted'),
        ('approved', 'Approved'),
        ('rejected', 'Rejected'),
    ]
    
    title = models.CharField(max_length=200)
    description = models.TextField()
    team = models.OneToOneField(Team, on_delete=models.CASCADE, related_name='project')
    created_by = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='created_projects')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    github_url = models.URLField(blank=True)
    demo_url = models.URLField(blank=True)
    video_url = models.URLField(blank=True)
    presentation_url = models.URLField(blank=True)
    technologies = models.JSONField(default=list, blank=True)
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='draft')
    
    def __str__(self):
        return self.title

class ProjectImage(models.Model):
    project = models.ForeignKey(Project, on_delete=models.CASCADE, related_name='images')
    image = models.ImageField(upload_to='project_images/')
    caption = models.CharField(max_length=200, blank=True)
    order = models.IntegerField(default=0)
    
    class Meta:
        ordering = ['order']
    
    def __str__(self):
        return f"Image for {self.project.title}"

class ProjectFeedback(models.Model):
    project = models.ForeignKey(Project, on_delete=models.CASCADE, related_name='feedback')
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    comment = models.TextField()
    rating = models.IntegerField(null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return f"Feedback on {self.project.title} by {self.user.username}"
