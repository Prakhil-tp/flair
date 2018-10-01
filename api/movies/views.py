from django.shortcuts import render, get_object_or_404
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status, generics, permissions, filters,pagination
from .serializers import TrendingSerializer, MovieSerializer, UserListSerializer,RecommendationSerializer
from .models import Trending, Movie, UserList, Popular,Recommendation
from .tasks import run_scraping,run_scraping1,run_scraping2,run_scraping3,run_scraping4,run_scraping5,run_scraping6,make_recommendations
from .paginations import StandardResultsSetPagination
from .tasks import run_int_scraping2,run_int_scraping1,run_int_scraping3,run_int_scraping4,add_rating_for_movie
import math
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


@api_view(['GET', ])
def movie_int_details(request):
    """
    View function to check whether an older configuration exists.
    :param request: Request object.
    :return: Response object.
    """
    run_int_scraping1.delay()
    run_int_scraping2.delay()
    run_int_scraping3.delay()
    run_int_scraping4.delay()
    return Response({"success":True })

@api_view(['GET', ])
def movie_rating_details(request):
    """
    View function to check whether an older configuration exists.
    :param request: Request object.
    :return: Response object.
    """
    add_rating_for_movie.delay()

    return Response({"success":True })

#trending/
class TrendingListApiView(generics.ListAPIView):
    pagination_class = StandardResultsSetPagination
    queryset = Trending.objects.all()
    permission_classes = (permissions.AllowAny,)
    serializer_class = TrendingSerializer

#list/
class MovieListApiView(generics.ListAPIView):
    pagination_class = StandardResultsSetPagination
    # paginator = Paginator(profile_list, 25)
    # queryset = Movie.objects.all().order_by('-id')
    permission_classes = (permissions.AllowAny,)
    serializer_class = MovieSerializer
    filter_backends = (filters.SearchFilter,)
    search_fields = ('title',)

#favourite/
class favouriteListApiView(generics.ListAPIView):
    # queryset = UserList.objects.filter(favourite=True)
    pagination_class = StandardResultsSetPagination
    permission_classes = (permissions.AllowAny,)
    serializer_class = UserListSerializer
    def get_queryset(self):
        return UserList.objects.filter(user=self.request.user,favourite=True)
    


#watchlater/
class WatchLaterListApiView(generics.ListAPIView):
    pagination_class = StandardResultsSetPagination
    permission_classes = (permissions.AllowAny,)
    serializer_class = UserListSerializer
    def get_queryset(self):
        return UserList.objects.filter(user=self.request.user,watch_later=True)


#watched/
class WatchedListApiView(generics.ListAPIView):
    pagination_class = StandardResultsSetPagination
    permission_classes = (permissions.AllowAny,)
    serializer_class = UserListSerializer
    def get_queryset(self):
        return UserList.objects.filter(user=self.request.user,watched=True)


#popular/
class PopularListApiView(generics.ListAPIView):
    queryset = Popular.objects.all()
    pagination_class = StandardResultsSetPagination
    permission_classes = (permissions.AllowAny,)
    serializer_class = UserListSerializer

#actions/apply
class UserActionView(APIView):

    def post(self, request, *args, **kwargs):
        movie_id = request.data.get('movie')
        movie = Movie.objects.get(id=movie_id)
        user_list = UserList.objects.filter(user=request.user, movie=movie)
        if user_list:
            user_list = user_list[0]
        if not user_list:
            user_list = UserList.objects.create(user=request.user, movie=movie)
        action = request.data.get('action_type')
        value = request.data.get('value')
        user_list_movies = None
        if action == 'favourite':
            user_list_movies = UserList.objects.filter(user=request.user, favourite=True)
            if value:
                print(movie_id)
                make_recommendations(user_pk=request.user.pk,fav_movie_id=movie.id)#.delay(user=request.user.pk,fav_movie=movie.id)
            user_list.favourite=value
        elif action == 'watch_later':
            user_list_movies = UserList.objects.filter(user=request.user, watch_later=True)
            user_list.watch_later = value
        else:
            user_list_movies = UserList.objects.filter(user=request.user, watched=True)
            user_list.watched = value
        user_list.save()
        if value:
            movies_in_rec=Recommendation.objects.filter(movie=movie)
            if movies_in_rec:
                movies_in_rec.delete()
        count  = user_list_movies.count()
        return Response({'success':True,
                         'page_count': math.ceil(count/8) 
                        })


class MovieSearchView(generics.ListAPIView):
    pagination_class = StandardResultsSetPagination
    serializer_class = MovieSerializer
    filter_backends = (filters.SearchFilter,)
    search_fields = ('title',)
    queryset = Movie.objects.all()


class RecommendationView(generics.ListAPIView):
    pagination_class = StandardResultsSetPagination
    serializer_class= RecommendationSerializer
   
    def get_queryset(self):
        return Recommendation.objects.filter(user=self.request.user)
    