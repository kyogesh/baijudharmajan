# -*- coding: utf-8 -*-
# Generated by Django 1.11.6 on 2017-10-19 08:34
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('web', '0006_auto_20171019_1332'),
    ]

    operations = [
        migrations.AlterField(
            model_name='gallery',
            name='image',
            field=models.ImageField(upload_to='gallery/'),
        ),
    ]
