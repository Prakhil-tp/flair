import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux'
import store from 'store';
import Router from './containers/Router';

const MainApp = () => (
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/" component={Router} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
);
    
export default MainApp;
