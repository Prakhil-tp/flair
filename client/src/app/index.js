import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import Dashboard from './routes/Dashboard';
import UserProfile from './routes/UserProfile';
import NavBar from '../components/NavBar';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      searchLoading:false
    }
  }

  render(){
    const { match } = this.props;
    const { searchLoading } = this.state;
    return(
      <div>
        <NavBar 
          loadingTrue={()=>{this.setState({searchLoading:true})}}
          loadingFalse={()=>{this.setState({searchLoading:false})}}
        />
        <div>
          <Switch>
            <Route
              exact
              path={`${match.url}`}
              render={(props)=><Dashboard {...props} searchLoading={searchLoading} />}
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