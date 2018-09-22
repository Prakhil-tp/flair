import React from 'react'
import { connect } from 'react-redux'
import PropTypes, { shape } from 'prop-types'
import shortid from 'shortid'
import MovieCard from 'components/MovieCard'
import CardArea from 'components/CardArea'

const FavoriteMovies = (props) => {
  const { Movies } = props;
  if(Movies.length > 0){
    return (
      <CardArea title="FAVORITE MOVIES">
        {
          Movies.map(Movie=>(
            <MovieCard
              key={shortid.generate()}
              title={Movie.title}
              poster={Movie.poster}
              genre={Movie.genre}
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
  Movies: state.Movies.favoriteMovies
})

FavoriteMovies.propTypes = {
  Movies: PropTypes.arrayOf(
    shape({
      title:PropTypes.string,
      poster:PropTypes.node,
      genre:PropTypes.string,
      rating:PropTypes.number
    })
    ).isRequired
}

export default connect(mapStateToProps,{})(FavoriteMovies)

