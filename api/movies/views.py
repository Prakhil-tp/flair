from django.shortcuts import render, get_object_or_404
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status, generics, permissions
from .serializers import TrendingSerializer, MovieSerializer, UserListSerializer
from .models import Trending, Movie, UserList, Popular
from .tasks import run_scraping,run_scraping1,run_scraping2,run_scraping3,run_scraping4,run_scraping5,run_scraping6


#insert/
@api_view(['GET', ])
def get_movie_details(request):
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

#trending/
class TrendingListApiView(generics.ListAPIView):
    queryset = Trending.objects.all()
    permission_classes = (permissions.AllowAny,)
    serializer_class = TrendingSerializer

#list/
class MovieListApiView(generics.ListAPIView):
    queryset = Movie.objects.all()
    permission_classes = (permissions.AllowAny,)
    serializer_class = MovieSerializer

#favourite/
class favouriteListApiView(generics.ListAPIView):
    # queryset = UserList.objects.filter(favourite=True)
    
    permission_classes = (permissions.AllowAny,)
    serializer_class = UserListSerializer
    def get_queryset(self):
        return UserList.objects.filter(user=self.request.user,favourite=True)

#watchlater/
class WatchLaterListApiView(generics.ListAPIView):
    permission_classes = (permissions.AllowAny,)
    serializer_class = UserListSerializer
    def get_queryset(self):
        return UserList.objects.filter(user=self.request.user,watch_later=True)

#watched/
class WatchedListApiView(generics.ListAPIView):
    permission_classes = (permissions.AllowAny,)
    serializer_class = UserListSerializer
    def get_queryset(self):
        return UserList.objects.filter(user=self.request.user,watched=True)

#popular/
class PopularListApiView(generics.ListAPIView):
    queryset = Popular.objects.all()
    permission_classes = (permissions.AllowAny,)
    serializer_class = UserListSerializer

#actions/id
# class UserListCreateOrUpdateView(generics.CreateAPIView):

#     def create(self, request, *args, **kwargs):
#        id=request.data.get("id")
#        movie_qr = Movie.objects.get(id=id) 
#        result = UserList.object.filter(user= self.request.user,movie=movie_qr)
#        if result:
#            if request.data.get('favourite'):

#        if mymodel:
#            return self.update(request, *args, **kwargs)
#        else: