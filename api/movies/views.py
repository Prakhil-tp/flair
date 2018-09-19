from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
# from .extras import get_movie_details
from .tasks import run_scraping
# Create your views here.


@api_view(['GET', ])
def get_movie_details(request):
    #get_movie_details(movie_name)
    """
    View function to check whether an older configuration exists.
    :param request: Request object.
    :return: Response object.
    """
    run_scraping.delay()

    return Response({"success":True })