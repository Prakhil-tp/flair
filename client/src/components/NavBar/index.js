import React, { Component } from 'react';
import {
    AppBar,
    Toolbar,
    Typography,
    Avatar,
} from '@material-ui/core';
import SearchBar from 'material-ui-search-bar';
import avatar from '../../assets/images/avatar2.jpg';
import logo from '../../assets/flairLogo.png';
import '../../styles/NavBar.css';


class NavBar extends Component {
    // Nav bar contains the title, search bar and the avatar logo 
    render() {
        return (
            <AppBar position="static">
                <Toolbar>
                    <img src={logo} className="logo" />
                    <SearchBar
                        //value={this.state.value}
                       // onChange={(newValue) => this.setState({ value: newValue })}
                       // onRequestSearch={() => doSomethingWith(this.state.value)}
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
