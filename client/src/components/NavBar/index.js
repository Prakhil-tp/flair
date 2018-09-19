import React, { Component } from 'react';
import {
    AppBar,
    Toolbar,
    Avatar,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import { isMobile } from 'react-device-detect';
import SearchBar from 'material-ui-search-bar';
import avatar from 'assets/images/avatar2.jpg';
import logo from 'assets/flairLogo.png';
import { HttpService } from 'util/services';

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
      if(event.key === ' ') this.handleSearch();
    }
    
		handleSearch(){
      const { searchValue } = this.state;
      const {  searchScreen, searchLoadingTrue, searchLoadingFalse } = this.props;

      searchScreen();
      searchLoadingTrue();

      // httpService.post('url',{data})
      const promise = httpService.post('/search/',{ searchValue });
      promise.then(res => {
        if (!res.ok) res.text().then((text) => console.log(text));
        return res.json();
      })
        .then(resData => {
          //response
          setTimeout(()=>searchLoadingFalse(),1000); 
          console.log(resData);
        })
        .catch(err => {
          if (typeof err.message !== 'undefined') 
            console.log(err.message);
        });
    }

    handleValueChange(value){
      this.setState({ searchValue: value });
    }


    render() {
      const {  searchScreenFalse } = this.props;
      const { searchValue } = this.state;
      return (	
        <AppBar position="static">
          <Toolbar>
            <div
              className="logo_wrapper"
              role="button"
              onClick={()=>{searchScreenFalse();}} 
              onKeyUp={()=>{searchScreenFalse();}}
              tabIndex={0}
            >
              <img src={logo} className="logo" alt="logo" />
            </div>
            <div style={{flexGrow: 1}} />
            {
              !isMobile? (
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
              ):
                <div />
            }
            <div style={{flexGrow: 1}} />
            <Avatar alt="Remy Sharp" src={avatar} />
          </Toolbar>  
        </AppBar>
        );
    }
}

export default NavBar;

NavBar.defaultProps = {
  searchScreen: () => {},
  searchScreenFalse: () => {},
  searchLoadingTrue: () => {},
  searchLoadingFalse: () => {},
}
NavBar.propTypes = {
  searchScreen: PropTypes.func,
  searchScreenFalse: PropTypes.func,
  searchLoadingTrue: PropTypes.func,
  searchLoadingFalse: PropTypes.func,

};
