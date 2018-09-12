import React, { Component } from 'react';
import NavBar from './NavBar';
class ContentPage extends Component {
    // This component will act as core ui view which has a navbar and the all the recommended contents.
    render() {
        return (
            <div>
                <NavBar />
            </div>
        );
    }
}

export default ContentPage;
