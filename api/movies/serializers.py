from rest_framework import serializers
from .models import Movie, MovieGenre, Cast, MovieWriter
# Serializers goes here.


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

    genres = GenreSerializer(many=True, read_only=True)
    casts = CastSerializer(many=True, read_only=True)
    writers = MovieWriter(many=True,read_only=True)

    class Meta:
        model = Movie
        fields = ('__all__', 'casts', 'genres', 'writers',)
        read_only_fields = ('__all__', 'casts', 'genres', 'writers', )



