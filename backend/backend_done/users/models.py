from django.db import models
from django.contrib.auth.models import AbstractUser
from django.utils.translation import gettext_lazy as _

class User(AbstractUser):
    """Custom user model for Hackathon Valley"""
    email = models.EmailField(_('email address'), unique=True)
    bio = models.TextField(blank=True)
    avatar = models.ImageField(upload_to='avatars/', null=True, blank=True)
    github_url = models.URLField(blank=True)
    linkedin_url = models.URLField(blank=True)
    twitter_url = models.URLField(blank=True)
    skills = models.JSONField(default=list, blank=True)
    
    # Required for using email as the login field
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']
    
    def __str__(self):
        return self.username

class UserProfile(models.Model):
    """Extended profile information for users"""
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='profile')
    phone = models.CharField(max_length=20, blank=True)
    institution = models.CharField(max_length=100, blank=True)
    location = models.CharField(max_length=100, blank=True)
    graduation_year = models.IntegerField(null=True, blank=True)
    major = models.CharField(max_length=100, blank=True)
    experience_level = models.CharField(max_length=20, blank=True)
    dietary_restrictions = models.TextField(blank=True)
    t_shirt_size = models.CharField(max_length=10, blank=True)
    
    def __str__(self):
        return f"{self.user.username}'s profile"
