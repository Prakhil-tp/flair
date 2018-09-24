import React from 'react'
import { connect } from 'react-redux'
import PropTypes, { shape } from 'prop-types'
import shortid from 'shortid'
import MovieCard from 'components/MovieCard'
import CardArea from 'components/CardArea'

const TrendingMovies = (props) => {
  const { Movies } = props;
  if(Movies.length > 0){
    return (
      <CardArea title="TRENDING MOVIES">
        {
          Movies.map(Movie=>(
            <MovieCard
              key={shortid.generate()}
              title={Movie.title}
              poster={Movie.poster}
              genre={Movie.genre}
              favorate={Movie.favorate}
              watch_later={Movie.watch_later}
              watched={Movie.watched}
              rating={Movie.rating}
            />
          ))
        }
      </CardArea>
    )
  }
  return <div />
}


const mapStateToProps = state => ({
  Movies: state.Movies.trendingMovies
})

TrendingMovies.propTypes = {
  Movies: PropTypes.arrayOf(
    shape({
      title:PropTypes.string,
      poster:PropTypes.node,
      genre:PropTypes.string,
      rating:PropTypes.node
    })
    ).isRequired
}

export default connect(mapStateToProps,{})(TrendingMovies)