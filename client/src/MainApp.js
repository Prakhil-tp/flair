import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Router from './containers/Router';

const MainApp = () => (
    <BrowserRouter>
        <div>
            <Switch>
                <Route path="/" component={ Router } />
            </Switch>
        </div>
    </BrowserRouter>
);
    
export default MainApp;
