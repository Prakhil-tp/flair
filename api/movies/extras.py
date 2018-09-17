from bs4 import BeautifulSoup
from urllib.request import urlopen
from pprint import pprint
import csv


def movie_name_list_scrapper():

        url = "https://en.wikipedia.org/wiki/List_of_films:_A"
        html_page =urlopen(url=url).read()
        page=BeautifulSoup(html_page, 'html.parser')
        page=page.find("div",{
            'class':'div-col columns column-width'})
        lis = page.find_all('a')
        for i in lis:
            pprint(i.text)


