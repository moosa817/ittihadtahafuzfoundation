# Generated by Django 4.2 on 2024-03-12 15:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0010_alter_galleryimages_name'),
    ]

    operations = [
        migrations.AlterField(
            model_name='galleryimages',
            name='name',
            field=models.CharField(default='uEeGDkWGbKRQKWun', max_length=100, unique=True),
        ),
    ]