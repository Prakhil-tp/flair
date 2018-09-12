import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import App from '../app';
import SignIn from './SignIn';
import SignUp from './SignUp';


class Router extends Component {
  constructor(props){
    super(props);
    this.state = {
      isLoggedIn: true,
    };
  }
  render(){
    const { match } = this.props;
    return(
      <Switch>
        {
          this.state.isLoggedIn?
            <Route path={`${match.url}`} component={App} />
            :
            <Route path={`${match.url}`} component={SignIn} />
        }
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/signup" component={SignUp} />
      </Switch>
    );
  }
}
export default Router;