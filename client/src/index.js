import React from 'react';
import ReactDOM from 'react-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { red, indigo, blue } from '@material-ui/core/colors';
import registerServiceWorker from './registerServiceWorker';
import App from './App';
import './styles/index.css';

const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: blue,
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
