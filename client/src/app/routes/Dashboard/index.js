import React, { Component } from 'react';
import MovieCard from '../../../components/MovieCard';
import TestCard from '../../../components/TestCard';
import CardArea from '../../../components/CardArea';
import '../../../styles/pages/_dashboard.css';

class Dashboard extends Component {
  render(){
    return(
      <div className="dashboard">
        <CardArea title="POPULAR MOVIES">
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <TestCard />
        </CardArea>
      </div>
    );
  }
}
export default Dashboard;