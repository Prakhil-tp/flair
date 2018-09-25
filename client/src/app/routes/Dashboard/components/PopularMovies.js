import React from 'react'
import { connect } from 'react-redux'
import PropTypes, { shape } from 'prop-types'
import shortid from 'shortid'
import MovieCard from 'components/MovieCard'
import CardArea from 'components/CardArea'

const PopularMovies = (props) => {
  const { Movies } = props;
  if(Movies.length > 0){
    return (
      <CardArea title="POPULAR MOVIES">
        {
          Movies.map(Movie=>(
            <MovieCard
              key={shortid.generate()}
              title={Movie.movie.title}
              poster={Movie.movie.poster}
              genre={Movie.movie.genres[0]&&Movie.movie.genres[0].genre.toUpperCase()}
              favorate={Movie.movie.favorate}
              watch_later={Movie.movie.watch_later}
              watched={Movie.movie.watched}
              rating={Movie.movie.rating}
            />
            ))
        }
      </CardArea>
    )
  }
  return <div />
}


const mapStateToProps = state => ({
  Movies: state.Movies.popularMovies
})

PopularMovies.defaultProps = {
  Movies:[{title:''},]
}
PopularMovies.propTypes = {
  Movies: PropTypes.arrayOf(
    shape({
      title:PropTypes.string,
      poster:PropTypes.node,
      genre:PropTypes.string,
      rating:PropTypes.node
    }))
}

export default connect(mapStateToProps,{})(PopularMovies)