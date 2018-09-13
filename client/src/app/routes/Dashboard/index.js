import React, { Component } from 'react';
import MovieCard from '../../../components/MovieCard';
import '../../../styles/pages/_dashboard.css';

class Dashboard extends Component {
  render(){
    return(
      <div className="dashboard">
        <MovieCard />
      </div>
    );
  }
}
export default Dashboard;