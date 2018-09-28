import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes, { shape } from 'prop-types'
import { fetchPopular } from 'actions/movieActions'
import shortid from 'shortid'
import MovieCard from 'components/MovieCard'
import CardArea from 'components/CardArea'

class PopularMovies extends Component{
  changePage = () => {
    const { current_page, total_page, fetchPopular } = this.props;
    if (current_page < total_page) 
      fetchPopular(current_page+1);
    
  }
  render() {
    const { Movies } = this.props;
    if(Movies.length > 0){
      return (
        <CardArea title="POPULAR MOVIES" changePage={this.changePage}>
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
                cardArea='popular'
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
  Movies: state.Movies.popularMovies,
  current_page: state.Movies.popularCurrentPage,
  total_page: state.Movies.popularTotalPage,
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
    })),
  current_page: PropTypes.number.isRequired,
  total_page: PropTypes.number.isRequired,
  fetchPopular: PropTypes.func.isRequired
}
const mapDispatchToProps = {fetchPopular}

export default connect(mapStateToProps,mapDispatchToProps)(PopularMovies)