import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes, { shape } from 'prop-types'
import { fetchTrending } from 'actions/movieActions'
import shortid from 'shortid'
import MovieCard from 'components/MovieCard'
import CardArea from 'components/CardArea'

class TrendingMovies extends Component{

  nextPage = () => {
    const { current_page, fetchTrending, total_page } = this.props;
    if (current_page < total_page)
      fetchTrending(current_page+1)   
  }
  prevPage = () => {
    const { current_page, fetchTrending } = this.props;
    if (current_page > 1) 
      fetchTrending(current_page-1)   
  }
  render() {
    const { Movies, total_page, current_page } = this.props;
    if(Movies.length > 0){
      return (
        <CardArea
          title="TRENDING MOVIES"
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
                hooq={Movie.movie.on_hooq}
                allDetails={Movie}
                cardArea='trending'
                transition={Movie.movie.transition}
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
  Movies: state.Movies.trendingMovies,
  current_page: state.Movies.trendingCurrentPage,
  total_page: state.Movies.trendingTotalPage,
})

TrendingMovies.defaultProps = {
  Movies:[{title:''},]
}

TrendingMovies.propTypes = {
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
  fetchTrending: PropTypes.func.isRequired
}

export default connect(mapStateToProps,{ fetchTrending })(TrendingMovies)