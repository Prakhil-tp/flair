import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieCard from 'components/MovieCard';
import CardArea from 'components/CardArea';
import SearchResults from './components/SearchResults';


class Dashboard extends Component {
  constructor(props){
    super(props);
    this.state={}
  }

  render(){
    return(
      <div className="dashboard">
        <SearchResults {...this.props} />
        <WhiteSpace {...this.props} />
        <CardArea title="POPULAR MOVIES">
          <MovieCard 
            image="https://images-na.ssl-images-amazon.com/images/I/717QDxYBkbL._SY606_.jpg" 
            title="The Lord of the Rings: The Fellowship of the Ring"
            genre="ACTION"
            rating="4.8"
          />
          <MovieCard 
            image="https://i.imgur.com/NL57XsO.jpg"
            title="Black Panther"
            genre="DRAMA"
            rating="3.4"
          />
          <MovieCard 
            image="https://i.pinimg.com/736x/2b/72/d3/2b72d3a848eb97c4e5834a6c31e0bb99.jpg"
            title="Knight and Day"
            genre="THRILLER"
            rating="4.4"
          />
          <MovieCard 
            image="https://m.media-amazon.com/images/M/MV5BMjM3NzQ5NDcxOF5BMl5BanBnXkFtZTgwNzM4MTQ5NTM@._V1_.jpg"
            title="The Nun"
            genre="HORROR"
            rating="4.7"
          />
        </CardArea>
        <div style={{height:'40px', width:'auto'}} />

      </div>
    );
  }
}
export default Dashboard;

Dashboard.defaultProps = {
  searchLoading: false,
  searchScreen: false,
};

Dashboard.propTypes = {
  searchLoading: PropTypes.bool,
  searchScreen: PropTypes.bool,
};



//whitespace
const WhiteSpace = (props) => {
  const { searchScreen } = props;
  if(searchScreen)
    return<div style={{height:'40px', width:'auto'}} />;
  return <div />;
}

WhiteSpace.defaultProps = { searchScreen: false };
WhiteSpace.propTypes = { searchScreen: PropTypes.bool };