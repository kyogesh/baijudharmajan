from django.shortcuts import render
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import Link


class GetLinks(APIView):
    """
    Get links of a given type
    """
    def post(self, request):
        link_type = request.data.get('link_type', 'youtube')
        links = Link.objects.filter(link_type=link_type)
        return Response({'links': links.values()}, status=status.HTTP_200_OK)


def index(request):
    context = {'links': Link.objects.all()}
    return render(request, 'web/index.html', context)


def home(request):
    return render(request, 'index.html')
