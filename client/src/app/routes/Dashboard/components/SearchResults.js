import React from 'react'
import PropTypes,{ shape } from 'prop-types'
import {connect} from 'react-redux'
import shortid from 'shortid'
import CircularProgress from '@material-ui/core/CircularProgress'
import MovieCard from 'components/MovieCard'
import CardArea from 'components/CardArea'

const SearchResults = (props) => {
  const { searchLoading, searchScreen, Movies } = props;
  if(searchScreen && searchLoading){
    return(
      <CardArea isLoading title="SEARCH RESULTS">
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
      <CardArea title="SEARCH RESULTS">
        {
          Movies.map(Movie=>(
            <MovieCard
              key={shortid.generate()}
              title={Movie.title}
              poster={Movie.poster}
              genre={Movie.genres[0]&&Movie.genres[0].genre.toUpperCase()}
              favorate={Movie.favorate}
              watch_later={Movie.watch_later}
              watched={Movie.watched}
              rating={Movie.rating}
            />
            ))
        }
      </CardArea>
    );
  }
  return(<div />); 
}

const mapStateToProps = state => ({
  Movies: state.SearchLoading.searchedMovies
})

export default connect(mapStateToProps,{})(SearchResults);

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
};