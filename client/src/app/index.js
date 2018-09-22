import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import NavBar from 'components/NavBar';
import Dashboard from './routes/Dashboard';
import UserProfile from './routes/UserProfile';

const App = props => {
    const { match } = props;
    return(
      <div>
        <NavBar />
        <div className="page-holder">
          <Switch>
            <Route exact path={`${match.url}`} component={Dashboard} />
            <Route exact path={`${match.url}profile`} component={UserProfile} />
          </Switch>
        </div>
      </div>
    );

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