from rest_framework import serializers

from .models import Gallery


class GallerySerializer(serializers.ModelSerializer):
    image_path = serializers.SerializerMethodField()

    class Meta:
        model = Gallery
        fields = ('image_path', 'description', )

    def get_image_path(self, obj):
        return 'static/' + '/'.join(obj.image.path.split('/')[-2:])
