import React, { Component } from 'react';
import {
    AppBar,
    Toolbar,
    Avatar,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import SearchBar from 'material-ui-search-bar';
import avatar from '../../assets/images/avatar2.jpg';
import logo from '../../assets/flairLogo.png';
import { HttpService } from '../../util/services';
import '../../styles/components/_navbar.css';

const httpService = HttpService();

class NavBar extends Component {
    constructor(props){
			super(props);
			this.state = {
				searchValue:'',
			}
      this.handleSearch = this.handleSearch.bind(this);
      this.handleValueChange = this.handleValueChange.bind(this);
      this.onKeyPress = this.onKeyPress.bind(this);
    }

    onKeyPress(event){
      const { loadingTrue } = this.props;
      if(event.key === ' '){
        loadingTrue();
        this.handleSearch();
      }

        
    }
    
		handleSearch(){
      const { searchValue } = this.state;
      const { loadingFalse } = this.props;
      const promise = httpService.post('/search/',{ searchValue });
      promise.then((res) => {
        if (!res.ok) {
          res.text().then((text) => {  
            console.log(text);
          });
        }
        return res.json();
      })
        .then((resData) => {
          //loading goes out when the data comes
          setTimeout(()=>{
            loadingFalse();
          },1000);
          
          console.log(resData);
        })
        .catch((err) => {
          if (typeof err.message !== 'undefined') {
            console.log(err.message);
          }
        });
    }

    handleValueChange(value){
      this.setState({ searchValue: value });
    }


    render() {
      const { searchValue } = this.state;
      return (	
        <AppBar position="static" >
          <Toolbar>
            <img src={logo} className="logo" alt="logo" />
            <SearchBar
              value={searchValue}
              onChange={this.handleValueChange}
              onRequestSearch={this.handleSearch}
              onKeyDown={this.onKeyPress}
              placeholder='Start by searching for your favourite movie'
              style={{
                margin: '0 auto',
                width:'60%',
                maxWidth: '60%',
                backgroundColor: '#eee',
                boxShadow: '0px 0px 0px inset'
              }}
            />
            <Avatar alt="Remy Sharp" src={avatar} />
          </Toolbar>  
        </AppBar>
        );
    }
}

export default NavBar;

NavBar.defaultProps = {
  loadingTrue: () => {},
  loadingFalse: () => {}
}
NavBar.propTypes = {
  loadingTrue: PropTypes.func,
  loadingFalse: PropTypes.func
};
