from django.contrib import admin
from django.urls import path, include
from . import views

urlpatterns = [
    path("", views.home),
    path("about", views.about),
    path("services", views.services),
    path("contact", views.contact, name="contact"),
    path("gallery", views.gallery),
    path("donate", views.donate),
]
