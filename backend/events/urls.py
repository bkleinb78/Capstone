from django.urls import path
from . import views

urlpatterns = [
    path('', views.events_list),
    path('<int:pk>/', views.cars_detail),
]