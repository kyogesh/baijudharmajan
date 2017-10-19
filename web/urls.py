from django.conf.urls import url
from .views import index, home, GetLinks, ContactView, GalleryAPIView

urlpatterns = [
    url(r'^$', home),
    url(r'^get-links/$', GetLinks.as_view(), name='get_links'),
    url(r'^contact/$', ContactView.as_view(), name='contact'),
    url(r'^gallery/$', GalleryAPIView.as_view(), name='gallery'),
    # url(r'^home/$', home),
]
