import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes, { shape } from 'prop-types'
import { fetchWatched } from 'actions/movieActions'
import shortid from 'shortid'
import MovieCard from 'components/MovieCard'
import CardArea from 'components/CardArea'

class WatchedMovies extends Component{
  nextPage = () => {
    const { current_page, fetchWatched, total_page } = this.props;
    if (current_page < total_page)
      fetchWatched(current_page+1);
  }
  prevPage = () => {
    const { current_page, fetchWatched } = this.props;
    if (current_page > 1) 
      fetchWatched(current_page-1)   
  }
  render() {
    const { Movies, total_page, current_page } = this.props;
    if(Movies.length > 0){
      return (
        <CardArea
          title="WATCHED MOVIES"
          nextPage={this.nextPage}
          prevPage={this.prevPage}
          total_page={total_page}
          current_page={current_page}
        >
          {
            Movies.slice(0,8).map(Movie=>(
              <MovieCard
                key={shortid.generate()}
                title={Movie.movie.title}
                poster={Movie.movie.poster}
                genre={Movie.movie.genres[0]&&Movie.movie.genres[0].genre.toUpperCase()}              
                favourite={Movie.movie.favourite}
                watch_later={Movie.movie.watch_later}
                watched={Movie.movie.watched}
                rating={Movie.movie.rating}
                allDetails={Movie}
                cardArea='watched'
              />
            ))
          }
        </CardArea>
      )
    }
    return null;
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