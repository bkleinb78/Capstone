from django.shortcuts import get_object_or_404
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status 
from .serializers import TrackSerializer
from .models import Track


@api_view(['GET', 'POST'])
def music_list(request):
    if request.method == 'GET':
        Music = Track.objects.all()
        serializer = TrackSerializer(music_list, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = TrackSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)

@api_view(['GET', 'PUT', 'DELETE'])
def music_detail(request, pk):
    event = get_object_or_404(Track, pk=pk)
    if request.method =='GET':
        track = get_object_or_404(Track, pk=pk)
        serializer = TrackSerializer(track)
        return Response(serializer.data)
    elif request.method == 'PUT':
        serializer = TrackSerializer(track, data=request.data)
        serializer.is_valid(raise_exception=True)
        return Response(serializer.data)
    elif request.method == 'DELETE':
        track.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


# Create your views here.
