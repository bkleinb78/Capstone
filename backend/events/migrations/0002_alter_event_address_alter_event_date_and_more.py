# Generated by Django 4.0.4 on 2022-12-22 13:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('events', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='event',
            name='address',
            field=models.CharField(max_length=255),
        ),
        migrations.AlterField(
            model_name='event',
            name='date',
            field=models.CharField(max_length=255),
        ),
        migrations.AlterField(
            model_name='event',
            name='name',
            field=models.CharField(max_length=255),
        ),
        migrations.AlterField(
            model_name='event',
            name='time',
            field=models.CharField(max_length=255),
        ),
    ]
