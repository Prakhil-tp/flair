import React from 'react';
import ReactDOM from 'react-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';
import registerServiceWorker from './registerServiceWorker';
import App from './App';
import './styles/index.css';

const theme = createMuiTheme({
  palette: {
    primary: {
      main : '#6200ee',
    },
    secondary: deepPurple,
  },
  status: {
    danger: 'orange',
  },
});

ReactDOM.render(
  <MuiThemeProvider theme={theme} >
    <App />
  </MuiThemeProvider>, document.getElementById('root'),
);
registerServiceWorker();
