import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes, { shape } from 'prop-types'
import { fetchWatchLater } from 'actions/movieActions'
import shortid from 'shortid'
import MovieCard from 'components/MovieCard'
import CardArea from 'components/CardArea'

class WatchLaterMovies extends Component{
  nextPage = () => {
    const { current_page, fetchWatchLater, total_page } = this.props;
    if (current_page < total_page)
      fetchWatchLater(current_page+1);
  }
  prevPage = () => {
    const { current_page, fetchWatchLater } = this.props;
    if (current_page > 1) 
      fetchWatchLater(current_page-1)   
  }
  render() {
    const { Movies, total_page, current_page } = this.props;
    if(Movies.length > 0){
      return (
        <CardArea
          title="WATCH LATER"
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
                cardArea='watch_later'
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
  Movies: state.Movies.watchlaterMovies,
  current_page: state.Movies.watchlaterCurrentPage,
  total_page: state.Movies.watchlaterTotalPage,
})

WatchLaterMovies.defaultProps = {
  Movies:[{title:''},]
}

WatchLaterMovies.propTypes = {
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
  fetchWatchLater: PropTypes.func.isRequired
}

export default connect(mapStateToProps,{ fetchWatchLater })(WatchLaterMovies)