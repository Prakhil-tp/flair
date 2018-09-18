import React from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';
import MovieCard from '../../../../components/MovieCard';
import CardArea from '../../../../components/CardArea';

const SearchResults = (props) => {
  const { searchLoading, searchScreen } = props;
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
  else if(searchScreen && !searchLoading){
    return(
      <CardArea title="SEARCH RESULTS">
        <MovieCard 
          image="https://images-na.ssl-images-amazon.com/images/I/717QDxYBkbL._SY606_.jpg" 
          title="The Lord of the Rings: The Fellowship of the Ring"
          genre="ACTION"
          rating="4.8"
        />
      </CardArea>
    );
  }
  return(<div />);
}
export default SearchResults;

SearchResults.defaultProps = {
  searchLoading: false,
  searchScreen: false,
};

SearchResults.propTypes = {
  searchLoading: PropTypes.bool,
  searchScreen: PropTypes.bool,
};