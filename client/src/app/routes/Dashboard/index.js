import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import MovieCard from 'components/MovieCard';
import CardArea from 'components/CardArea';
import SearchResults from './components/SearchResults';


const Dashboard = (props) => (

  <div className="dashboard">
    <SearchResults {...props} />
    <WhiteSpace {...props} />
    <CardArea title="POPULAR MOVIES">
 
        <MovieCard 
          poster="https://images-na.ssl-images-amazon.com/images/I/717QDxYBkbL._SY606_.jpg" 
          title="The Lord of the Rings: The Fellowship of the Ring"
          genre="ACTION"
          rating="4.8"
        />

      <MovieCard 
        poster="https://i.imgur.com/NL57XsO.jpg"
        title="Black Panther"
        genre="DRAMA"
        rating="3.4"
      />
      <MovieCard 
        poster="https://i.pinimg.com/736x/2b/72/d3/2b72d3a848eb97c4e5834a6c31e0bb99.jpg"
        title="Knight and Day"
        genre="THRILLER"
        rating="4.4"
      />
      <MovieCard 
        poster="https://m.media-amazon.com/images/M/MV5BMjM3NzQ5NDcxOF5BMl5BanBnXkFtZTgwNzM4MTQ5NTM@._V1_.jpg"
        title="The Nun"
        genre="HORROR"
        rating="4.7"
      />
    </CardArea>
    <div style={{height:'40px', width:'auto'}} />

  </div>
);

const mapStateToProps = state => ({
  searchScreen: state.SearchLoading.searchScreen,
  searchLoading: state.SearchLoading.searchLoading
})
export default connect(mapStateToProps,{})(Dashboard);


//whitespace
const WhiteSpace = (props) => {
  const { searchScreen } = props;
  if(searchScreen)
    return<div style={{height:'40px', width:'auto'}} />;
  return <div />;
}

//prop validataion
Dashboard.propTypes = {
  searchScreen: PropTypes.bool.isRequired,
  searchLoading: PropTypes.bool.isRequired
};
WhiteSpace.propTypes = { searchScreen: PropTypes.bool.isRequired };