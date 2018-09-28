import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes, { shape } from 'prop-types'
import { fetchWatchLater } from 'actions/movieActions'
import shortid from 'shortid'
import MovieCard from 'components/MovieCard'
import CardArea from 'components/CardArea'

class WatchLaterMovies extends Component{
  changePage = () => {
    const { current_page, total_page, fetchWatchLater } = this.props;
    if (current_page < total_page) 
    fetchWatchLater(current_page+1);
  }
  render() {
    const { Movies } = this.props;
    if(Movies.length > 0){
      return (
        <CardArea title="WATCH LATER" changePage={this.changePage}>
          {
            Movies.map(Movie=>(
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
    return <div />
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