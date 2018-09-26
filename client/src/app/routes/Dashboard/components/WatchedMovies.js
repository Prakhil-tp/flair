import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes, { shape } from 'prop-types'
import { fetchWatched } from 'actions/movieActions'
import shortid from 'shortid'
import MovieCard from 'components/MovieCard'
import CardArea from 'components/CardArea'

class WatchedMovies extends Component{
  changePage = () => {
    const { current_page, total_page, fetchWatched } = this.props;
    if (current_page < total_page) 
      fetchWatched(current_page+1);
  }
  render() {
    const { Movies } = this.props;
    if(Movies.length > 0){
      return (
        <CardArea title="WATCHED MOVIES" changePage={this.changePage}>
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
  Movies: state.Movies.watchedMovies,
  current_page: state.Movies.watchedCurrentPage,
  total_page: state.Movies.watchedTotalPage,
})

WatchedMovies.defaultProps = {
  Movies:[{title:''},]
}

WatchedMovies.propTypes = {
  Movies: PropTypes.arrayOf(
    shape({
      title:PropTypes.string,
      poster:PropTypes.node,
      genre:PropTypes.string,
      rating:PropTypes.node
    })
    ),
  current_page: PropTypes.number.isRequired,
  total_page: PropTypes.number.isRequired,
  fetchWatched: PropTypes.func.isRequired
}

export default connect(mapStateToProps,{ fetchWatched })(WatchedMovies)