from django.contrib import admin
from .models import Movie, MovieGenre, MovieWriter, Rating, Recommendation, UserList, Cast, Trending, Popular

# Register your models here.
admin.site.register(Movie)
admin.site.register(MovieGenre)
admin.site.register(MovieWriter)
admin.site.register(Rating)
admin.site.register(Recommendation)
admin.site.register(UserList)
admin.site.register(Cast)
admin.site.register(Trending)
admin.site.register(Popular)


