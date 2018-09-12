import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import SearchBar from 'material-ui-search-bar';
import Avatar from '@material-ui/core/Avatar';
import avatar from '../images/avatar2.jpg';


class NavBar extends Component {
    // Nav bar contains the title, search bar and the avatar logo 
    render() {
        return (
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="title" color="inherit" >
                        Flair
                    </Typography>
                    <SearchBar
                        //value={this.state.value}
                       // onChange={(newValue) => this.setState({ value: newValue })}
                       // onRequestSearch={() => doSomethingWith(this.state.value)}
                       placeholder = 'Start by searching for your favourite movie'
                       style={{
                        margin: '0 auto',
                        width:'60%',
                        maxWidth: '60%',
                        backgroundColor: '#fefefe',
                      }}
                    />
                    <Avatar alt="Remy Sharp" src={avatar} />
                </Toolbar>
                
            </AppBar>
        );
    }
}

export default NavBar;
