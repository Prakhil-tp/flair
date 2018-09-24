from celery import shared_task
from .models import Movie, MovieGenre ,Rating
import requests

@shared_task
def run_scraping():
  num = 4514049#5214054#5514059#5814060#538852 #468926#463985#100015
  upper_limit= 4314049#5114054#5464059#5764060#588851 #5814065
  for i in range(num,upper_limit,-1):
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



@shared_task
def run_scraping1():
  num = 4314048#5114053#5464058#5764060#588852#479228#100015
  upper_limit= 4114049#5014053#5414058#5714060#638852 #488847
  for i in range(num,upper_limit,-1):
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


@shared_task
def run_scraping2():
  num = 4114048#5014052#5414057#5714060#638853#489135#488848#100015
  upper_limit= 3914048#4914052#5364057#5664060#688852#498849
  for i in range(num,upper_limit,-1):
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


@shared_task
def run_scraping3():
  num = 3914047#4914051#5364056#5664060#688853#498944#488848#100015
  upper_limit= 3714047#4814051#5314056#5614060#738853
  for i in range(num,upper_limit,-1):
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


@shared_task
def run_scraping4():
  num = 3714046#4814050#5314055#5614060#738853#518850#488848#100015
  upper_limit= 3514046#4714050#5264055#5564060#788853
  for i in range(num,upper_limit,-1):
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

@shared_task
def run_scraping5():
  num = 3514045#4714049#5264054#5564060 #788854#528851#488848#100015
  upper_limit= 3314045#4614049#5214054#5514060#838853
  for i in range(num,upper_limit,-1):
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

@shared_task
def run_scraping6():
  num = 3314044#4614049
  upper_limit= 3114044#4514049
  for i in range(num,upper_limit,-1):
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

