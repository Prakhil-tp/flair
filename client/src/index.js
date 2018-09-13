import React from 'react';
import ReactDOM from 'react-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';
import registerServiceWorker from './registerServiceWorker';
import MainApp from './MainApp';
import './styles/index.css';

const theme = createMuiTheme({
  palette: {
    primary: { main : '#fefefe', },
    secondary: deepPurple,
  },
  status: {
    danger: 'orange',
  },
});

ReactDOM.render(
  <MuiThemeProvider theme={theme} >
    <MainApp />
  </MuiThemeProvider>, document.getElementById('root'),
);
registerServiceWorker();
