from rest_framework import serializers
from .models import Movie, MovieGenre, Cast, MovieWriter, Trending, UserList, Popular,Rating, Recommendation



class GenreSerializer(serializers.ModelSerializer):

    class Meta:
        model = MovieGenre
        fields = ('genre', )
        read_only_fields = ('genre', )


class MovieWriterSerializer(serializers.ModelSerializer):

    class Meta:
        model = MovieWriter
        fields = ('writer', )
        read_only_fields = ('writer', )


class CastSerializer(serializers.ModelSerializer):

    class Meta:
        model = Cast
        fields = ('actor', )
        read_only_fields = ('actor', )


class MovieSerializer(serializers.ModelSerializer):
    rating = serializers.SerializerMethodField()
    genres = serializers.SerializerMethodField()
    favourite = serializers.SerializerMethodField()
    watch_later = serializers.SerializerMethodField()
    watched = serializers.SerializerMethodField()
    
    class Meta:
        model = Movie
        fields = ('id','title','genres','imdbID','poster','language','favourite','watch_later','watched','rating',)
        read_only_fields =('title','genres','imdbID' ,'poster','language',)

    def get_genres(self, obj):
        # return MovieGenre.objects.filter(movie=obj).values_list('genre', flat=True)
        qs = MovieGenre.objects.filter(movie=obj)
        return GenreSerializer(qs,many=True).data

    def get_favourite(self, obj):
        result = UserList.objects.filter(user=self.context.get('request').user,movie=obj)
        if result:
            return result[0].favourite
        return False

    def get_watch_later(self, obj):
        result = UserList.objects.filter(user=self.context.get('request').user,movie=obj)
        if result:
            return result[0].watch_later
        return False
        
    def get_watched(self, obj):
        result = UserList.objects.filter(user=self.context.get('request').user,movie=obj)
        if result:
            return result[0].watched
        return False
    
    def get_rating(self,obj):
        result = Rating.objects.filter(movie=obj)
        if result:
            return result[0].rating
        return None


class TrendingSerializer(serializers.ModelSerializer):

    movie = MovieSerializer()

    class Meta:
        model = Trending
        fields = ('movie',)


class PopularSerializer(serializers.ModelSerializer):

    movie = MovieSerializer()

    class Meta:
        model = Popular
        fields = ('movie',)


class UserListSerializer(serializers.ModelSerializer):

    movie = MovieSerializer()

    class Meta:
        model = UserList
        fields = ('movie',)

class RecommendationSerializer(serializers.ModelSerializer):
    movie =MovieSerializer()

    class Meta:
        model = Recommendation
        fields = ('movie',)
        