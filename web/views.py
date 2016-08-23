from django.shortcuts import render

from .models import Link


def index(request):
    context = {'links': Link.objects.all()}
    return render(request, 'web/index.html', context)
