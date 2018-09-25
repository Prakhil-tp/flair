from django.urls import path
from .views import (
get_movie_details,
MovieListApiView,
TrendingListApiView, 
favouriteListApiView, 
PopularListApiView, 
WatchedListApiView,
WatchLaterListApiView,
UserActionView,
MovieSearchView
)


urlpatterns = [
    path('favourite/<int:id>',UserListCreateOrUpdateView.as_view()),
    path('actions/',UserActionView.as_view()),
    path('insert/',get_movie_details),
    path('list/', MovieListApiView.as_view()),
    path('trending/', TrendingListApiView.as_view()),
    path('popular/', PopularListApiView.as_view()),
    path('watched/', WatchedListApiView.as_view()),
    path('watchlater/', WatchLaterListApiView.as_view()),
    path('favourite/', favouriteListApiView.as_view()),
    path('find',MovieSearchView.as_view())
]
