import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import SearchBar from 'material-ui-search-bar';
import Avatar from '@material-ui/core/Avatar';
import avatar from '../images/avatar2.jpg';


class NavBar extends Component {
    // This component will act as core ui view which has a navbar and the all the recommended contents.
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
                       style={{
                        margin: '0 auto',
                        width: '60%'
                      }}
                    />
                    <Avatar alt="Remy Sharp" src={avatar} />
                </Toolbar>
            </AppBar>
        );
    }
}

export default NavBar;
