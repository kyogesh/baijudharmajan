from django.conf.urls import url
from .views import index, home, GetLinks

urlpatterns = [
    url(r'^$', home),
    url(r'^get-links/', GetLinks.as_view(), name='get_links'),
    # url(r'^home/$', home),
]
