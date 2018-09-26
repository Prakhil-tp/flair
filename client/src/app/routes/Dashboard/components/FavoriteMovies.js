import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes, { shape } from 'prop-types'
import shortid from 'shortid'
import { fetchFavorite } from 'actions/movieActions'
import MovieCard from 'components/MovieCard'
import CardArea from 'components/CardArea'

class FavoriteMovies extends Component{

  changePage = () => {
    const { current_page, total_page, fetchFavorite } = this.props;
    if (current_page < total_page) 
      fetchFavorite(current_page+1)   
  }

  render(){
    const { Movies } = this.props;

    if(Movies.length > 0){
      return (
        <CardArea title="FAVORITE MOVIES" changePage={this.changePage}>
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
}


const mapStateToProps = state => ({
  Movies: state.Movies.favoriteMovies,
  current_page: state.Movies.favoriteCurrentPage,
  total_page: state.Movies.favouriteTotalPage,
})

const mapDispatchToProps = { fetchFavorite }

FavoriteMovies.defaultProps = {
  Movies:[{title:''},]
}

FavoriteMovies.propTypes = {
  Movies: PropTypes.arrayOf(
    shape({
      title:PropTypes.string,
      poster:PropTypes.node,
      genre:PropTypes.string,
      rating:PropTypes.number
    })
    ),
    current_page: PropTypes.number.isRequired,
    total_page: PropTypes.number.isRequired,
    fetchFavorite: PropTypes.func.isRequired
}

export default connect(mapStateToProps,mapDispatchToProps)(FavoriteMovies)

