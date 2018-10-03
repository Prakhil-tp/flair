import React, { Component } from 'react'
import PropTypes,{ shape } from 'prop-types'
import {connect} from 'react-redux'
import { navSearch } from 'actions/navActions'
import shortid from 'shortid'
import CircularProgress from '@material-ui/core/CircularProgress'
import Zoom from '@material-ui/core/Zoom';
import MovieCard from 'components/MovieCard'
import CardArea from 'components/CardArea'

class SearchResults extends Component {
  nextPage = () => {
    const { current_page, total_page, navSearch, search_key } = this.props;
    if (current_page < total_page) 
      navSearch({search:search_key, page:current_page+1})   
  }
  prevPage = () => {
    const { current_page, navSearch, search_key  } = this.props;
    if (current_page > 1) 
      navSearch({search:search_key, page:current_page-1})   
  }
  render(){
    const { searchLoading, searchScreen, Movies, total_page, current_page } = this.props;

    if(searchScreen && searchLoading){
      return(
        <CardArea 
          isLoading
          title="SEARCH RESULTS"
          nextPage={this.nextPage}
          prevPage={this.prevPage}
          total_page={total_page}
          current_page={current_page}
        >
          <CircularProgress 
            size={50} 
            thickness={2} 
            color="secondary"
          />
        </CardArea>
      );
    }
    else if(searchScreen && !searchLoading && Movies.length > 0 ){
      return(
        <CardArea
          title="SEARCH RESULTS"
          nextPage={this.nextPage}
          prevPage={this.prevPage}
          total_page={total_page}
          current_page={current_page}
        >
          {
            Movies.slice(0,8).map(Movie=>(
              <MovieCard
                key={shortid.generate()}
                title={Movie.title}
                poster={Movie.poster}
                genre={Movie.genres[0]&&Movie.genres[0].genre.toUpperCase()}
                favourite={Movie.favourite}
                watch_later={Movie.watch_later}
                watched={Movie.watched}
                hooq={Movie.on_hooq}
                rating={Movie.rating}
                allDetails={{movie:Movie}}
                cardArea='search'
              />
              ))
          }
        </CardArea>
      );
    }
    else if(searchScreen && !searchLoading && Movies.length === 0){
      return(
        <CardArea 
          title="SEARCH RESULTS"
          nextPage={this.nextPage}
          prevPage={this.prevPage}
          isLoading
          total_page={total_page}
          current_page={current_page}
        >
          <Zoom in timeout={1000}>
            <div className="no-search-results">
              <h3>No matching movies found</h3>
            </div>
          </Zoom>
        </CardArea>
      )
    }
    return null; 
  }
}

const mapStateToProps = state => ({
  Movies: state.SearchLoading.searchedMovies,
  current_page: state.SearchLoading.currentPage,
  total_page: state.SearchLoading.totalPage,
  search_key: state.SearchLoading.searchKey
})

export default connect(mapStateToProps,{navSearch})(SearchResults);

SearchResults.defaultProps = {
  Movies:[{title:''},]
}
SearchResults.propTypes = {
  Movies: PropTypes.arrayOf(
    shape({
      title:PropTypes.string,
      poster:PropTypes.node,
      genre:PropTypes.string,
      rating:PropTypes.node
    })),
  searchScreen: PropTypes.bool.isRequired,
  searchLoading: PropTypes.bool.isRequired,
  current_page: PropTypes.number.isRequired,
  total_page: PropTypes.number.isRequired,
  navSearch: PropTypes.func.isRequired,
  search_key: PropTypes.string.isRequired
};