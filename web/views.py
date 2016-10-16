from django.shortcuts import render
from django.core.mail import send_mail
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import Link


class GetLinks(APIView):
    """
    Get links of a given type
    """
    def get(self, request):
        link_type = request.data.get('link_type', 'youtube')
        links = Link.objects.filter(link_type=link_type)
        links = links.values()
        [link.update({'video': 'https://www.youtube.com/embed/' + link['video']})
            for link in links]
        return Response({'links': links}, status=status.HTTP_200_OK)


class ContactView(APIView):

    def post(self, request, *args, **kwargs):
        subject = '[' + request.data['regarding'] + ']'
        body = request.data['message']
        sender = request.data['email']
        phone = request.data['phone']
        name = request.data['name']
        body = body + '\n--' + name + '\n' + phone
        recepient = ['baijudharmajan1@gmail.com', 'arvindchakrapal@gmail.com', ]
        try:
            send_mail(subject=subject, message=body, from_email=sender, recipient_list=recepient)
        except Exception as e:
            data = {'code': 500, 'message': e.message}
            return Response(data, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        return Response()


def index(request):
    context = {'links': Link.objects.all()}
    return render(request, 'web/index.html', context)


def home(request):
    return render(request, 'index.html')
