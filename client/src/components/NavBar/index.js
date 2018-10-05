import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
    AppBar,
    Toolbar,
    Avatar,
    Menu,
    MenuItem
} from '@material-ui/core'
import PropTypes from 'prop-types'
import { isMobile } from 'react-device-detect'
import SearchBar from 'material-ui-search-bar'
import avatar from 'assets/images/avatar2.jpg'
import logo from 'assets/flairLogo.png'
import { changeScreen, changeLoading, navSearch } from 'actions/navActions'
import { clearData } from 'actions/userActions'

class NavBar extends Component {
    constructor(props){
			super(props);
			this.state = {
        search:'',
        anchorEl: null
			}
    }

    //runs when spacekey press
    // onKeyPress = (event) => {
    //   if(event.key === ' ') this.handleSearch();
    // }
    
		handleSearch = () => {
      const { search } = this.state;
      const { changeLoading, changeScreen, navSearch } = this.props;

      changeScreen(true);
      changeLoading(true);
      navSearch({search, page:1});
    }

    //handle text value changes
    handleValueChange = (value) => {
      this.setState({ search: value });
      this.handleSearch();
    }

    //handle menu close 
    handleClose = () => {
      this.setState({ anchorEl: null });
    };

    //clear data
    onClearDataClick = () =>{
      const { clearData } = this.props;
      clearData();
      this.setState({ anchorEl: null });
    }

    render() {
      const {  changeScreen, changeLoading } = this.props;
      const { search, anchorEl } = this.state;
      const menuOpen = Boolean(anchorEl);

      return (	
        <AppBar position="fixed">
          <Toolbar>
            <div
              className="logo_wrapper"
              role="button"
              onClick={()=>{changeScreen(false);changeLoading(false);}} 
              onKeyUp={()=>{changeScreen(false);changeLoading(false);}}
              tabIndex={0}
            >
              <img src={logo} className="logo" alt="logo" />
            </div>
            <div style={{flexGrow: 1}} />
            {
              !isMobile? (
                <SearchBar
                  value={search}
                  onChange={this.handleValueChange}
                  onRequestSearch={this.handleSearch}
                  // onKeyDown={this.onKeyPress}
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
            <Avatar alt="Remy Sharp" src={avatar} onClick={e=>this.setState({anchorEl: e.currentTarget})} />
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={menuOpen}
              onClose={this.handleClose}
            >
              <MenuItem onClick={this.handleClose}>Profile</MenuItem>
              <MenuItem onClick={this.onClearDataClick}>Clear data</MenuItem>
            </Menu>
          </Toolbar>  
        </AppBar>
        );
    }
}



const mapDispatchToProps = { navSearch, changeLoading, changeScreen, clearData };

export default connect(null,mapDispatchToProps)(NavBar);


NavBar.propTypes = {
  changeScreen: PropTypes.func.isRequired,
  changeLoading: PropTypes.func.isRequired,
  navSearch: PropTypes.func.isRequired,
  clearData: PropTypes.func.isRequired,
};
