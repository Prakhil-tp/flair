from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
# from .extras import get_movie_details
from .tasks import run_scraping,run_scraping1,run_scraping2,run_scraping3,run_scraping4,run_scraping5,run_scraping6
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
    run_scraping1.delay()
    run_scraping2.delay()
    run_scraping3.delay()
    run_scraping4.delay()
    run_scraping5.delay()
    run_scraping6.delay()
    
    return Response({"success":True })