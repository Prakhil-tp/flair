import React, { Component } from 'react';
import TestCard from '../../../components/TestCard';
import CardArea from '../../../components/CardArea';
import '../../../styles/pages/_dashboard.css';

class Dashboard extends Component {
  render(){
    return(
      <div className="dashboard">
        <CardArea title="POPULAR MOVIES">
          <TestCard 
            image="https://images-na.ssl-images-amazon.com/images/I/717QDxYBkbL._SY606_.jpg" 
            title="The Lord of the Rings: The Fellowship of the Ring"
            genre="ACTION"
            rating="4.8"
          />
          <TestCard 
            image="https://i.imgur.com/NL57XsO.jpg"
            title="Black Panther"
            genre="DRAMA"
            rating="3.4"
          />
          <TestCard 
            image="https://i.pinimg.com/736x/2b/72/d3/2b72d3a848eb97c4e5834a6c31e0bb99.jpg"
            title="Knight and Day"
            genre="THRILLER"
            rating="4.4"
           />
          <TestCard 
            image="https://m.media-amazon.com/images/M/MV5BMjM3NzQ5NDcxOF5BMl5BanBnXkFtZTgwNzM4MTQ5NTM@._V1_.jpg"
            title="The Nun"
            genre="HORROR"
            rating="4.7"
           />
        </CardArea>
        <div style={{height:'40px', width:'auto'}}>

        </div>
        <CardArea title="FAVORITE MOVIES">
          <TestCard 
            image="https://images-na.ssl-images-amazon.com/images/I/717QDxYBkbL._SY606_.jpg" 
            title="The Lord of the Rings: The Fellowship of the Ring"
            genre="ACTION"
            rating="4.8"
          />
          <TestCard 
            image="https://i.imgur.com/NL57XsO.jpg"
            title="Black Panther"
            genre="DRAMA"
            rating="3.4"
          />
          <TestCard 
            image="https://i.pinimg.com/736x/2b/72/d3/2b72d3a848eb97c4e5834a6c31e0bb99.jpg"
            title="Knight and Day"
            genre="THRILLER"
            rating="4.4"
           />
          <TestCard 
            image="https://m.media-amazon.com/images/M/MV5BMjM3NzQ5NDcxOF5BMl5BanBnXkFtZTgwNzM4MTQ5NTM@._V1_.jpg"
            title="The Nun"
            genre="HORROR"
            rating="4"
           />
        </CardArea>
      </div>
    );
  }
}
export default Dashboard;