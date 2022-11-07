from  rest_framework import serializers
from .models import Show

class ShowSerializer(serializers.ModelSerializer):
    class Meta:
        model = Show
    fields = ['name', 'address', 'date', 'time']