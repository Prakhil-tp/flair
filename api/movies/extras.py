from bs4 import BeautifulSoup
from urllib.request import urlopen
from pprint import pprint
import csv
import requests
from .models import Movie, MovieWriter, MovieGenre, Cast, Rating


def get_movie_details(movie_name):
    response = requests.get("http://www.omdbapi.com/?apikey=15df1e05&t={}".format(movie_name))
    data = response.json()
    if data['Response']:
        movie = Movie.objects.create(title=data['Title'], imdbID = data['imdbID'], imbdVotes=data['imdbVotes'],
                             rated=data['Rated'], poster=data['Poster'],director=data['Director'],year=data['Year'],
                             plot=data['Plot'],language=data['Language'], country=data['Country'], production=data['Production'])

        for genre in data['Genre']:
            MovieGenre.objects.create(movie=movie, genre=genre)
        for actor in data['Actors']:
            Cast.objects.create(movie=movie, actor=actor)
        for writer in data['Writer']:
            MovieWriter.objects.create(movie=movie, writer=writer)

        Rating.objects.create(movie=movie, name="IMDB",rating=data['imdbRating'])

        for rating in data['Ratings']:
            Rating.objects.create(movie=movie, name=rating['Source'], rating=data['Value'])




def movie_name_list_scrapper():

        url = "https://en.wikipedia.org/wiki/List_of_films:_A"
        html_page = urlopen(url=url).read()
        page = BeautifulSoup(html_page, 'html.parser')
        page = page.find("div",{
            'class':'div-col columns column-width'})
        lis = page.find_all('a')
        for i in lis:
            pprint(i.text)
            get_movie_details(i.text)



