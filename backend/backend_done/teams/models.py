from django.db import models
from django.conf import settings

class Team(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    members = models.ManyToManyField(settings.AUTH_USER_MODEL, through='TeamMembership', related_name='teams')
    max_members = models.IntegerField(default=4)
    looking_for_members = models.BooleanField(default=True)
    
    def __str__(self):
        return self.name

class TeamMembership(models.Model):
    ROLE_CHOICES = [
        ('leader', 'Team Leader'),
        ('member', 'Team Member'),
    ]
    
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    team = models.ForeignKey(Team, on_delete=models.CASCADE)
    role = models.CharField(max_length=20, choices=ROLE_CHOICES, default='member')
    joined_at = models.DateTimeField(auto_now_add=True)
    
    class Meta:
        unique_together = ('user', 'team')
    
    def __str__(self):
        return f"{self.user.username} - {self.team.name} ({self.role})"

class TeamInvitation(models.Model):
    STATUS_CHOICES = [
        ('pending', 'Pending'),
        ('accepted', 'Accepted'),
        ('declined', 'Declined'),
    ]
    
    team = models.ForeignKey(Team, on_delete=models.CASCADE, related_name='invitations')
    inviter = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='sent_invitations')
    invitee = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='received_invitations')
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='pending')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    class Meta:
        unique_together = ('team', 'invitee')
    
    def __str__(self):
        return f"Invitation for {self.invitee.username} to join {self.team.name}"
