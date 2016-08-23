from __future__ import unicode_literals

from django.db import models
from embed_video.fields import EmbedVideoField


class Link(models.Model):
    video = EmbedVideoField()