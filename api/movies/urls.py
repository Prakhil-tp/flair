from django.urls import path
from .views import get_movie_details


urlpatterns = [
    path('insert/',get_movie_details)
]
