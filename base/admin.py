from django.contrib import admin
from .models import Contact, VideoLinks, GalleryImages, NoticeBoard

# Register your models here.
admin.site.register(Contact)
admin.site.register(GalleryImages)
admin.site.register(VideoLinks)
admin.site.register(NoticeBoard)
