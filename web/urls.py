from django.conf.urls import url
from .views import index, home, GetLinks, ContactView

urlpatterns = [
    url(r'^$', home),
    url(r'^get-links/$', GetLinks.as_view(), name='get_links'),
    url(r'^contact/$', ContactView.as_view(), name='contact'),
    # url(r'^home/$', home),
]
