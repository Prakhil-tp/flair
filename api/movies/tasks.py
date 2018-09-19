from celery import shared_task
from .models import Movie, MovieGenre ,Rating
import requests

@shared_task
def run_scraping():
  num = 100015
  upper_limit= 5814065
  for i in range(num,upper_limit):
      api_key='7a7ca71ccad13021d6221b381bcb7b00'
      url = "https://api.themoviedb.org/3/movie/tt{}?api_key={}&language=en-US".format(str(i).zfill(7),api_key)
      try:
          response = requests.get(url)
          resdata = response.json()
      except:
          print("error opening or parsing")
          continue
      #pprint(data)
      if  not 'status_code' in resdata:    
          title = resdata['title']
          poster = resdata['poster_path']
          if not poster:
            continue
          imdbID = resdata['imdb_id']
          plot = resdata['overview']
          mid = resdata['id']
          language =  resdata['original_language']
          print(title," ",poster," ", imdbID ," " ,mid)
          # url = "https://www.imdb.com/title/tt{}/".format(str(i).zfill(7))
          # try:
          #     html_page = urlopen(url=url).read()
          #     page = BeautifulSoup(html_page, 'html.parser')
          # except:
          #     print("error in imdb page")
          #     continue

          # try:
          #     rating = page.find("div",class_='ratingValue')
          #     rating=rating.span
          #     pprint(rating.text)
          # except:
          #     print("error finding rating")
          #     continue
          import random
          imdbRating = round(random.uniform(1,10), 1)
          
          movie = Movie.objects.create(title=title, imdbID = imdbID, poster=poster,plot=plot,language=language,mid=mid)
          Rating.objects.create(movie=movie,name='imdb',rating=imdbRating)
          for genre in resdata['genres']:
              print(genre['name'])
              MovieGenre.objects.create(movie=movie,genre=genre['name'])




      else:
          print("No data found for given ID")

          