# -*- coding: utf-8 -*-
# Generated by Django 1.9 on 2016-09-02 21:47
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Link',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('link_type', models.CharField(choices=[('youtube', 'YouTube'), ('soundcloud', 'SoundCloud')], default='youtube', max_length=45)),
                ('video', models.CharField(max_length=25)),
            ],
        ),
    ]
