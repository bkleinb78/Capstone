from django.db import models

class Event(models.Model):
    name = models.CharField(max_length=50)
    address = models.CharField(max_length=50)
    date = models.CharField(max_length=50)
    time = models.CharField(max_length=50)