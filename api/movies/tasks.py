from celery import shared_task
from .models import Movie, MovieGenre, Rating, Recommendation, UserList
from django.contrib.auth.models import User
import requests
from random import randint
import os
from django.db.models.query import QuerySet


@shared_task
def run_scraping():
    num = 4514049  # 5214054#5514059#5814060#538852 #468926#463985#100015
    upper_limit = 4314049  # 5114054#5464059#5764060#588851 #5814065
    for i in range(num, upper_limit, -1):
        api_key = '7a7ca71ccad13021d6221b381bcb7b00'
        url = "https://api.themoviedb.org/3/movie/tt{}?api_key={}&language=en-US".format(
            str(i).zfill(7), api_key)
        try:
            response = requests.get(url)
            resdata = response.json()
        except:
            print("error opening or parsing")
            continue
        # pprint(data)
        if not 'status_code' in resdata:
            title = resdata['title']
            poster = resdata['poster_path']
            if not poster:
                continue
            imdbID = resdata['imdb_id']
            plot = resdata['overview']
            mid = resdata['id']
            language = resdata['original_language']
            print(title, " ", poster, " ", imdbID, " ", mid)
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
            imdbRating = round(random.uniform(1, 10), 1)

            movie = Movie.objects.create(
                title=title, imdbID=imdbID, poster=poster, plot=plot, language=language, mid=mid)
            Rating.objects.create(movie=movie, name='imdb', rating=imdbRating)
            for genre in resdata['genres']:
                print(genre['name'])
                MovieGenre.objects.create(movie=movie, genre=genre['name'])

        else:
            print("No data found for given ID")


@shared_task
def run_scraping1():
    num = 4314048  # 5114053#5464058#5764060#588852#479228#100015
    upper_limit = 4114049  # 5014053#5414058#5714060#638852 #488847
    for i in range(num, upper_limit, -1):
        api_key = '7a7ca71ccad13021d6221b381bcb7b00'
        url = "https://api.themoviedb.org/3/movie/tt{}?api_key={}&language=en-US".format(
            str(i).zfill(7), api_key)
        try:
            response = requests.get(url)
            resdata = response.json()
        except:
            print("error opening or parsing")
            continue
        # pprint(data)
        if not 'status_code' in resdata:
            title = resdata['title']
            poster = resdata['poster_path']
            if not poster:
                continue
            imdbID = resdata['imdb_id']
            plot = resdata['overview']
            mid = resdata['id']
            language = resdata['original_language']
            print(title, " ", poster, " ", imdbID, " ", mid)
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
            imdbRating = round(random.uniform(1, 10), 1)

            movie = Movie.objects.create(
                title=title, imdbID=imdbID, poster=poster, plot=plot, language=language, mid=mid)
            Rating.objects.create(movie=movie, name='imdb', rating=imdbRating)
            for genre in resdata['genres']:
                print(genre['name'])
                MovieGenre.objects.create(movie=movie, genre=genre['name'])

        else:
            print("No data found for given ID")


@shared_task
def run_scraping2():
    num = 4114048  # 5014052#5414057#5714060#638853#489135#488848#100015
    upper_limit = 3914048  # 4914052#5364057#5664060#688852#498849
    for i in range(num, upper_limit, -1):
        api_key = '7a7ca71ccad13021d6221b381bcb7b00'
        url = "https://api.themoviedb.org/3/movie/tt{}?api_key={}&language=en-US".format(
            str(i).zfill(7), api_key)
        try:
            response = requests.get(url)
            resdata = response.json()
        except:
            print("error opening or parsing")
            continue
        # pprint(data)
        if not 'status_code' in resdata:
            title = resdata['title']
            poster = resdata['poster_path']
            if not poster:
                continue
            imdbID = resdata['imdb_id']
            plot = resdata['overview']
            mid = resdata['id']
            language = resdata['original_language']
            print(title, " ", poster, " ", imdbID, " ", mid)
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
            imdbRating = round(random.uniform(1, 10), 1)

            movie = Movie.objects.create(
                title=title, imdbID=imdbID, poster=poster, plot=plot, language=language, mid=mid)
            Rating.objects.create(movie=movie, name='imdb', rating=imdbRating)
            for genre in resdata['genres']:
                print(genre['name'])
                MovieGenre.objects.create(movie=movie, genre=genre['name'])

        else:
            print("No data found for given ID")


@shared_task
def run_scraping3():
    num = 3914047  # 4914051#5364056#5664060#688853#498944#488848#100015
    upper_limit = 3714047  # 4814051#5314056#5614060#738853
    for i in range(num, upper_limit, -1):
        api_key = '7a7ca71ccad13021d6221b381bcb7b00'
        url = "https://api.themoviedb.org/3/movie/tt{}?api_key={}&language=en-US".format(
            str(i).zfill(7), api_key)
        try:
            response = requests.get(url)
            resdata = response.json()
        except:
            print("error opening or parsing")
            continue
        # pprint(data)
        if not 'status_code' in resdata:
            title = resdata['title']
            poster = resdata['poster_path']
            if not poster:
                continue
            imdbID = resdata['imdb_id']
            plot = resdata['overview']
            mid = resdata['id']
            language = resdata['original_language']
            print(title, " ", poster, " ", imdbID, " ", mid)
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
            imdbRating = round(random.uniform(1, 10), 1)

            movie = Movie.objects.create(
                title=title, imdbID=imdbID, poster=poster, plot=plot, language=language, mid=mid)
            Rating.objects.create(movie=movie, name='imdb', rating=imdbRating)
            for genre in resdata['genres']:
                print(genre['name'])
                MovieGenre.objects.create(movie=movie, genre=genre['name'])

        else:
            print("No data found for given ID")


@shared_task
def run_scraping4():
    num = 3714046  # 4814050#5314055#5614060#738853#518850#488848#100015
    upper_limit = 3514046  # 4714050#5264055#5564060#788853
    for i in range(num, upper_limit, -1):
        api_key = '7a7ca71ccad13021d6221b381bcb7b00'
        url = "https://api.themoviedb.org/3/movie/tt{}?api_key={}&language=en-US".format(
            str(i).zfill(7), api_key)
        try:
            response = requests.get(url)
            resdata = response.json()
        except:
            print("error opening or parsing")
            continue
        # pprint(data)
        if not 'status_code' in resdata:
            title = resdata['title']
            poster = resdata['poster_path']
            if not poster:
                continue
            imdbID = resdata['imdb_id']
            plot = resdata['overview']
            mid = resdata['id']
            language = resdata['original_language']
            print(title, " ", poster, " ", imdbID, " ", mid)
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
            imdbRating = round(random.uniform(1, 10), 1)

            movie = Movie.objects.create(
                title=title, imdbID=imdbID, poster=poster, plot=plot, language=language, mid=mid)
            Rating.objects.create(movie=movie, name='imdb', rating=imdbRating)
            for genre in resdata['genres']:
                print(genre['name'])
                MovieGenre.objects.create(movie=movie, genre=genre['name'])

        else:
            print("No data found for given ID")


@shared_task
def run_scraping5():
    num = 3514045  # 4714049#5264054#5564060 #788854#528851#488848#100015
    upper_limit = 3314045  # 4614049#5214054#5514060#838853
    for i in range(num, upper_limit, -1):
        api_key = '7a7ca71ccad13021d6221b381bcb7b00'
        url = "https://api.themoviedb.org/3/movie/tt{}?api_key={}&language=en-US".format(
            str(i).zfill(7), api_key)
        try:
            response = requests.get(url)
            resdata = response.json()
        except:
            print("error opening or parsing")
            continue
        # pprint(data)
        if not 'status_code' in resdata:
            title = resdata['title']
            poster = resdata['poster_path']
            if not poster:
                continue
            imdbID = resdata['imdb_id']
            plot = resdata['overview']
            mid = resdata['id']
            language = resdata['original_language']
            print(title, " ", poster, " ", imdbID, " ", mid)
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
            imdbRating = round(random.uniform(1, 10), 1)

            movie = Movie.objects.create(
                title=title, imdbID=imdbID, poster=poster, plot=plot, language=language, mid=mid)
            Rating.objects.create(movie=movie, name='imdb', rating=imdbRating)
            for genre in resdata['genres']:
                print(genre['name'])
                MovieGenre.objects.create(movie=movie, genre=genre['name'])

        else:
            print("No data found for given ID")


@shared_task
def run_scraping6():
    num = 3314044  # 4614049
    upper_limit = 3114044  # 4514049
    for i in range(num, upper_limit, -1):
        api_key = '7a7ca71ccad13021d6221b381bcb7b00'
        url = "https://api.themoviedb.org/3/movie/tt{}?api_key={}&language=en-US".format(
            str(i).zfill(7), api_key)
        try:
            response = requests.get(url)
            resdata = response.json()
        except:
            print("error opening or parsing")
            continue
        # pprint(data)
        if not 'status_code' in resdata:
            title = resdata['title']
            poster = resdata['poster_path']
            if not poster:
                continue
            imdbID = resdata['imdb_id']
            plot = resdata['overview']
            mid = resdata['id']
            language = resdata['original_language']
            print(title, " ", poster, " ", imdbID, " ", mid)
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
            imdbRating = round(random.uniform(1, 10), 1)

            movie = Movie.objects.create(
                title=title, imdbID=imdbID, poster=poster, plot=plot, language=language, mid=mid)
            Rating.objects.create(movie=movie, name='imdb', rating=imdbRating)
            for genre in resdata['genres']:
                print(genre['name'])
                MovieGenre.objects.create(movie=movie, genre=genre['name'])

        else:
            print("No data found for given ID")


ending_limit = 508788
decrease = 100000


@shared_task
def run_int_scraping1():
    num = 108785  #ending_limit  # 4614049
    upper_limit = 88785 #408788  # 4514049
    for i in range(num, upper_limit, -1):
        if Movie.objects.filter(mid=i).exists():
            print("Already in database", i)
            continue
        api_key = '7a7ca71ccad13021d6221b381bcb7b00'
        # .format(str(i).zfill(7),api_key)
        url = "https://api.themoviedb.org/3/movie/{}?api_key={}&language=en-US".format(
            i, api_key)
        try:
            response = requests.get(url)
            resdata = response.json()
        except:
            print("error opening or parsing")
            continue
        # pprint(data)
        if not 'status_code' in resdata:
            adult = resdata['adult']
            if adult:
                print("Adult movie", i, adult)
                continue
            if not resdata['genres']:
                continue
            title = resdata['title']
            poster = resdata['poster_path']
            if not poster:
                continue
            imdbID = resdata['imdb_id']
            if not imdbID:
                continue
            plot = resdata['overview']
            mid = resdata['id']
            language = resdata['original_language']
            print(title, " ", poster, " ", imdbID, " ", mid)
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
            # import random
            # imdbRating = round(random.uniform(1, 10), 1)
            movie = Movie.objects.create(
                title=title, imdbID=imdbID, poster=poster, plot=plot, language=language, mid=mid)
            # Rating.objects.create(movie=movie, name='imdb', rating=imdbRating)
            for genre in resdata['genres']:
                print(genre['name'])
                MovieGenre.objects.create(movie=movie, genre=genre['name'])

        else:
            print("No data found for given ID ", i)
            print(resdata)


@shared_task
def run_int_scraping2():
    num = 88784 #408787  # 2000#4614049
    upper_limit = 68784  #308787  # 4514049
    for i in range(num, upper_limit, -1):
        if Movie.objects.filter(mid=i).exists():
            print("Already in database", i)
            continue
        api_key = '7a7ca71ccad13021d6221b381bcb7b00'
        # .format(str(i).zfill(7),api_key)
        url = "https://api.themoviedb.org/3/movie/{}?api_key={}&language=en-US".format(
            i, api_key)
        try:
            response = requests.get(url)
            resdata = response.json()
        except:
            print("error opening or parsing")
            continue
        # pprint(data)
        if not 'status_code' in resdata:
            adult = resdata['adult']
            if adult:
                print("Adult movie", i, adult)
                continue
            if not resdata['genres']:
                continue
            title = resdata['title']
            poster = resdata['poster_path']
            if not poster:
                continue
            imdbID = resdata['imdb_id']
            if not imdbID:
                continue
            plot = resdata['overview']
            mid = resdata['id']
            language = resdata['original_language']
            print(title, " ", poster, " ", imdbID, " ", mid)
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
            # import random
            # imdbRating = round(random.uniform(1, 10), 1)
            movie = Movie.objects.create(
                title=title, imdbID=imdbID, poster=poster, plot=plot, language=language, mid=mid)
            # Rating.objects.create(movie=movie, name='imdb', rating=imdbRating)
            for genre in resdata['genres']:
                print(genre['name'])
                MovieGenre.objects.create(movie=movie, genre=genre['name'])

        else:
            print("No data found for given ID ", i)
            print(resdata)


@shared_task
def run_int_scraping3():
    num = 68783 #308786  # 2000#4614049
    upper_limit = 48783 #208786  # 3000#4514049
    for i in range(num, upper_limit, -1):
        if Movie.objects.filter(mid=i).exists():
            print("Already in database", i)
            continue
        api_key = '7a7ca71ccad13021d6221b381bcb7b00'
        # .format(str(i).zfill(7),api_key)
        url = "https://api.themoviedb.org/3/movie/{}?api_key={}&language=en-US".format(
            i, api_key)
        try:
            response = requests.get(url)
            resdata = response.json()
        except:
            print("error opening or parsing")
            continue
        # pprint(data)
        if not 'status_code' in resdata:
            adult = resdata['adult']
            if adult:
                print("Adult movie", i, adult)
                continue

            if not resdata['genres']:
                print("no genre movie")
                continue
            title = resdata['title']
            poster = resdata['poster_path']
            if not poster:
                continue
            imdbID = resdata['imdb_id']
            if not imdbID:
                continue
            plot = resdata['overview']
            mid = resdata['id']
            language = resdata['original_language']
            print(title, " ", poster, " ", imdbID, " ", mid)
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
            # import random
            # imdbRating = round(random.uniform(1, 10), 1)
            movie = Movie.objects.create(
                title=title, imdbID=imdbID, poster=poster, plot=plot, language=language, mid=mid)
            # Rating.objects.create(movie=movie, name='imdb', rating=imdbRating)
            for genre in resdata['genres']:
                print(genre['name'])
                MovieGenre.objects.create(movie=movie, genre=genre['name'])

        else:
            print("No data found for given ID ", i)
            print(resdata)


@shared_task
def run_int_scraping4():
    num = 48782 #208785  # 2000#4614049
    upper_limit = 0 #108785   # 3000#4514049
    for i in range(num, upper_limit, -1):
        if Movie.objects.filter(mid=i).exists():
            print("Already in database", i)
            continue
        api_key = '7a7ca71ccad13021d6221b381bcb7b00'
        # .format(str(i).zfill(7),api_key)
        url = "https://api.themoviedb.org/3/movie/{}?api_key={}&language=en-US".format(
            i, api_key)
        try:
            response = requests.get(url)
            resdata = response.json()
        except:
            print("error opening or parsing")
            continue
        # pprint(data)
        if not 'status_code' in resdata:
            adult = resdata['adult']
            if adult:
                print("Adult movie", i, adult)
                continue
            if not resdata['genres']:
                continue
            title = resdata['title']
            poster = resdata['poster_path']
            if not poster:
                continue
            imdbID = resdata['imdb_id']
            if not imdbID:
                continue
            plot = resdata['overview']
            mid = resdata['id']
            language = resdata['original_language']
            print(title, " ", poster, " ", imdbID, " ", mid)
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
            # import random
            # imdbRating = round(random.uniform(1, 10), 1)
            movie = Movie.objects.create(
                title=title, imdbID=imdbID, poster=poster, plot=plot, language=language, mid=mid)
            # Rating.objects.create(movie=movie, name='imdb', rating=imdbRating)
            for genre in resdata['genres']:
                print(genre['name'])
                MovieGenre.objects.create(movie=movie, genre=genre['name'])

        else:
            print("No data found for given ID ", i)
            print(resdata)


@shared_task
def add_rating_for_movie():
    path = os.path.abspath("C:\projects\data.tsv")
    import pandas as pd
    df = pd.read_csv(path, delimiter='\t')
    print(df.columns.values)
    for row in df.itertuples(index=True, name='Pandas'):
        print(getattr(row, "tconst"), getattr(row, "averageRating"))
        imdid = getattr(row, "tconst")
        rating = getattr(row, "averageRating")
        movies = Movie.objects.filter(imdbID=imdid)
        if movies.exists():
            for movie in movies:
                Rating.objects.create(
                    movie=movie, name='imdb-org', rating=rating)

    del df

# @shared_task
def make_recommendations(user_pk, fav_movie_id):
    user = User.objects.get(pk=user_pk)
    fav_movie = Movie.objects.get(id=fav_movie_id)
    api_key = '7a7ca71ccad13021d6221b381bcb7b00'
    url = "https://api.themoviedb.org/3/movie/{}/recommendations?api_key={}&language=en-US&page=1".format(
        fav_movie.mid, api_key)
    try:
        response = requests.get(url)
        resdata = response.json()
    except:
        print("error opening or parsing")
    limit = 2
    movie_list = resdata['results']
    for i in range(0, len(movie_list)):
        print("---------------lenthg", len(movie_list))
        if movie_list[i]['adult']:
            limit += 1
            print("adult movie")
            print(movie_list[i]['adult'])
            continue
        if i > limit:
            break
        movie = Movie.objects.filter(mid=movie_list[i]['id'])
        print(movie)
        if movie:
            movie = movie[0]
        else:
            limit += 1
            continue
        userlist = UserList.objects.filter(user=user)
        favourites = userlist.filter(favourite=True)
        watched = userlist.filter(watched=True)
        watch_later = userlist.filter(watch_later=True)
        if favourites.filter(movie=movie).exists() or watched.filter(movie=movie).exists() or watch_later.filter(movie=movie).exists() :
            continue
        #if not ((movie in favourites) or (movie in watched) or (movie in watch_later)):
        # if not (isinstance(movie, type(favourites))):
        if not Recommendation.objects.filter(movie=movie, user=user):
            Recommendation.objects.create(user=user, movie=movie, based_on=fav_movie)
        # else:
        #     title = resdata.results[i]['title']
        #     plot = resdata.results[i]['plot']
        #     imdbID = resdata.results[i]['title']
        #     title = resdata.results[i]['title']
        #     language=resdata.results[i]['language']
        #     mid = resdata.results[i]['id']
        #     poster = resdata.results[i]['poster']
        #     movie = Movie.objects.create(
        #         title=title, imdbID=imdbID, poster=poster, plot=plot, language=language, mid=mid)
