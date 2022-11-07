from django.db import models

# Create your models here.
from django.db import models

class Show(models.Model):
    name = models.Charfield(max_length=50)
    address = models.Charfield(max_length=50)
    date = models.Charfield(max_length=50)
    time = models.Charfield(max_length=50)