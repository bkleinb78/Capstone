# Generated by Django 4.0.4 on 2022-12-22 13:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('music', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='track',
            name='release_date',
            field=models.DateField(),
        ),
    ]