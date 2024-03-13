from django.db import models
import random
import string


def generate_random_name(length=16):
    letters = string.ascii_letters
    return "".join(random.choice(letters) for _ in range(length))


# Create your models here.
class Contact(models.Model):
    fname = models.CharField(max_length=100)
    lname = models.CharField(max_length=100)
    subject = models.CharField(max_length=100)
    email = models.EmailField(max_length=100)
    message = models.TextField()
    date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name


class VideoLinks(models.Model):
    link = models.CharField(unique=True, max_length=100)
    date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.link


class GalleryImages(models.Model):
    image = models.ImageField(upload_to="gallery")
    date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.image.url
