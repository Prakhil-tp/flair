import React from 'react';
import ReactDOM from 'react-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import registerServiceWorker from './registerServiceWorker';
import MainApp from './MainApp';
import './styles/_index.css';

const theme = createMuiTheme({
  palette: {
    primary: { main : '#fefefe' },
    secondary: { main : '#dd5e64' },
  }
  // palette: {
  //   primary: { main : '#141414' },
  //   secondary: { main : '#dd5e64' },
  // }

});

ReactDOM.render(
  <MuiThemeProvider theme={theme} >
    <MainApp />
  </MuiThemeProvider>, document.getElementById('root'),
);
registerServiceWorker();
