from __future__ import unicode_literals
from datetime import datetime

from django.db import models


class Link(models.Model):
    link_type = models.CharField(max_length=45, choices=[
        ('youtube', 'YouTube'), ('soundcloud', 'SoundCloud')],
        default='youtube')
    video = models.CharField(max_length=25)


class ContactFormDetail(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    date = models.DateTimeField(auto_now_add=True, blank=True, null=True)
    phone = models.CharField(max_length=15, null=True, blank=True)
    regarding = models.CharField(max_length=15, choices=[('None', 'none'),
        ('none', None), ('events', 'Events'), ('promo', 'Promotion'),
        ('endorse', 'Endorsement'), ('collab', 'Collaboration')])
    message = models.TextField()

    def __unicode__(self):
        return '[{0}] {1} {2} {3}'.format(self.regarding, self.date.ctime(), self.email, self.message)


class Gallery(models.Model):

    image = models.ImageField(upload_to='static/images/gallery/')
    description = models.CharField(max_length=255)

    class Meta:
        verbose_name = 'Gallery'
        verbose_name_plural = 'Galleries'
