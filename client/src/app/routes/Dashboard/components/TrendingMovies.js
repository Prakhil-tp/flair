import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes, { shape } from 'prop-types'
import { fetchTrending } from 'actions/movieActions'
import shortid from 'shortid'
import MovieCard from 'components/MovieCard'
import CardArea from 'components/CardArea'

class TrendingMovies extends Component{

  changePage = () => {
    const { current_page, total_page, fetchTrending } = this.props;
    if (current_page < total_page) 
      fetchTrending(current_page+1)   
  }
  render() {
    const { Movies } = this.props;
    if(Movies.length > 0){
      return (
        <CardArea title="TRENDING MOVIES" changePage={this.changePage}>
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