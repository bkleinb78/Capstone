from django.urls import path
from . import views

urlpatterns=[
    path('', views.tracks_list),
    path('<int:pk>/', views.track_detail),
]
