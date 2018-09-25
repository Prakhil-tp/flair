import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import {isLoggedIn} from 'util/services'
import App from '../app'
import SignIn from './SignIn'
import SignUp from './SignUp'
import Home from './Home'


class Router extends Component {
  constructor(props){
    super(props);
    this.state = {
      isLoggedIn: false,
    };
  }
  componentWillMount(){
    if (isLoggedIn()) this.setState({ isLoggedIn: true });
    else this.setState({ isLoggedIn: false });
  }
  render(){
    const { match } = this.props;
    const { isLoggedIn } = this.state;
    return(
      <Switch>
        {
          isLoggedIn?
            <Route path={`${match.url}`} component={App} />
            :
            <Route path={`${match.url}`} component={Home} />
        }
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/signup" component={SignUp} />
      </Switch>
    );
  }
}
export default Router;