import React, { Component } from 'react';
import { Divider } from '@material-ui/core';
import MovieCard from '../../../components/MovieCard';
import CardArea from '../../../components/CardArea';
import '../../../styles/pages/_dashboard.css';

class Dashboard extends Component {
  render(){
    return(
      <div className="dashboard">
        <CardArea>
          <MovieCard />
          <MovieCard />
        </CardArea>
      </div>
    );
  }
}
export default Dashboard;