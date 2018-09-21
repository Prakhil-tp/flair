import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import NavBar from 'components/NavBar';
import Dashboard from './routes/Dashboard';
import UserProfile from './routes/UserProfile';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }

  render(){
    const { match } = this.props;
    return(
      <div>
        <NavBar />
        <div>
          <Switch>
            <Route
              exact
              path={`${match.url}`}
              render={(props)=> (
                <Dashboard
                  {...props} 
                />
              )}
            />
            <Route exact path={`${match.url}profile`} component={UserProfile} />
          </Switch>
        </div>
      </div>
    );
  }
}
export default App;

App.defaultProps = {
  match: { params: { url:''}}
};
App.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      url: PropTypes.node,
    }).isRequired,
  })
};