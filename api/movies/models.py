from django.db import models
from django.contrib.auth.models import User

# Create your models here.


class Movie(models.Model):
    """
    Class that represents the Movie details.
    """
    title = models.CharField(max_length=200)
    imdbID = models.CharField(max_length=15)
    # imbVotes = models.IntegerField()
    poster = models.URLField()
    # director = models.CharField(max_length=40)
    mid = models.CharField(max_length=20)
    # year = models.CharField(max_length=4)
    plot = models.TextField()
    language = models.CharField(max_length=15)
    # country = models.CharField(max_length=20)
    #production = models.CharField(max_length=20)

    def __str__(self):
        return self.title
    class Meta:
        ordering = ('title',)


class MovieGenre(models.Model):
    movie = models.ForeignKey(Movie,on_delete=models.CASCADE)
    genre = models.CharField(max_length=20)


class Cast(models.Model):
    """
    Class that represents the cast that appeared in a movie.
    """
    movie = models.ForeignKey(Movie, on_delete=models.CASCADE)
    actor = models.CharField(max_length=40)


class MovieWriter(models.Model):
    movie = models.ForeignKey(Movie, on_delete=models.CASCADE)
    writer = models.CharField(max_length=40)


class Rating(models.Model):
    movie = models.ForeignKey(Movie, on_delete=models.CASCADE)
    name = models.CharField(max_length=30)
    rating = models.CharField(max_length=5)


class Recommendation(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    movie = models.ForeignKey(Movie, on_delete=models.CASCADE)
    based_on = models.ForeignKey(Movie, on_delete=models.CASCADE,related_name="based_on_which_movie",null=True)
    strength = models.IntegerField(default=1)

class UserList(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    movie = models.ForeignKey(Movie, on_delete=models.CASCADE)
    favourite = models.BooleanField(default=False)
    watched = models.BooleanField(default=False)
    watch_later = models.BooleanField(default=False)


# class Favourite(models.Model):
#     user = models.ForeignKey(User, on_delete=models.CASCADE)
#     movie = models.ForeignKey(Movie, on_delete=models.CASCADE)

# class WatchLater(models.Model):
#     user = models.ForeignKey(User, on_delete=models.CASCADE)
#     movie = models.ForeignKey(Movie, on_delete=models.CASCADE)

# class Watched(models.Model):
#     user = models.ForeignKey(User, on_delete=models.CASCADE)
#     movie = models.ForeignKey(Movie, on_delete=models.CASCADE)

class Trending(models.Model):
    movie = models.ForeignKey(Movie, on_delete=models.CASCADE)

class Popular(models.Model):
    movie = models.ForeignKey(Movie, on_delete=models.CASCADE)