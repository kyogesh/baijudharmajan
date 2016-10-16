from __future__ import unicode_literals

from django.db import models


class Link(models.Model):
    link_type = models.CharField(max_length=45, choices=[
        ('youtube', 'YouTube'), ('soundcloud', 'SoundCloud')],
        default='youtube')
    video = models.CharField(max_length=25)
