from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .extras import get_movie_details
# Create your views here.


@api_view(['GET', ])
def is_config_available_view(request, movie_name):
    #get_movie_details(movie_name)
    print(movie_name)
    """
    View function to check whether an older configuration exists.
    :param request: Request object.
    :return: Response object.
    """


    return Response({"success":True })