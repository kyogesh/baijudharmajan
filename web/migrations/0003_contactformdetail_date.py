# -*- coding: utf-8 -*-
# Generated by Django 1.9 on 2016-11-13 20:32
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('web', '0002_contactformdetail'),
    ]

    operations = [
        migrations.AddField(
            model_name='contactformdetail',
            name='date',
            field=models.DateTimeField(auto_now_add=True, null=True),
        ),
    ]
