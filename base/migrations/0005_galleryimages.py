# Generated by Django 4.2 on 2024-03-12 13:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0004_delete_galleryimages'),
    ]

    operations = [
        migrations.CreateModel(
            name='GalleryImages',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('image', models.ImageField(upload_to='gallery')),
                ('date', models.DateTimeField(auto_now_add=True)),
            ],
        ),
    ]