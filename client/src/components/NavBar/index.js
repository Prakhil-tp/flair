import React, { Component } from 'react';
import {
    AppBar,
    Toolbar,
    Avatar,
} from '@material-ui/core';
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
    }
		handleSearch(){
      console.log(this.state.searchValue);
      const promise = httpService.post('/search/',{title:this.state.searchValue});
      promise.then((res) => {
        if (!res.ok) {
          res.text().then((text) => {
            console.log(text);
          });
        }
        return res.json();
      })
        .then((resData) => {
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
    onKeyPress(event){
      if(event.key === ' ')
        this.handleSearch();
    }
    render() {
      return (
					
        <AppBar position="static">
			    <Toolbar>
            <img src={logo} className="logo" alt="logo"/>
            <SearchBar
                value={this.state.searchValue}
                onChange={this.handleValueChange}
                onRequestSearch={this.handleSearch}
                onKeyDown={this.onKeyPress.bind(this)}
                placeholder = 'Start by searching for your favourite movie'
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
