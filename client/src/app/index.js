import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Dashboard from './routes/Dashboard';
import UserProfile from './routes/UserProfile';
import NavBar from '../components/NavBar';

class App extends Component {
  render(){
    const { match } = this.props;
    return(
      <div>
        <NavBar />
        <div>
          <Switch>
            <Route exact path={`${match.url}`} component={ Dashboard } />
            <Route exact path={`${match.url}profile`} component={ UserProfile } />
          </Switch>
        </div>
      </div>
    );
  }
}
export default App;