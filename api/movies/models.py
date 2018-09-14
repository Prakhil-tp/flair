from django.db import models

# Create your models here.


class Genre(models.Model):
    """
    Class that represents the genre of the movie.
    """
    name = models.CharField(max_length=30)
    description = models.CharField(max_length=100,default=None,blank=True)


class Actor(models.Model):
    """
    Class that represents the actor details.
    """
    name = models.CharField(max_length=100)


class Movie(models.Model):
    """
    Class that represents the Movie details.
    """
    title = models.CharField(max_length=100)
    genre = models.ForeignKey(Genre, on_delete=models.CASCADE)
    rating = models.IntegerField()
    poster = models.URLField()
    actor = models.CharField(max_length=100)


class Cast(models.Model):
    """
    Class that represents the cast that appeared in a movie.
    """
    actor = models.ForeignKey(Actor)
    movie = models.ForeignKey(Movie)