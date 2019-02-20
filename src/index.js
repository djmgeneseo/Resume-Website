import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Containers/App';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';
import indigo from '@material-ui/core/colors/indigo';

const theme = createMuiTheme({
    palette: {
        primary: indigo,
        secondary: {
            main: '#fff'
        }
    },
    typography: {
      text: {
        color: 'white'
      }
    },
    overrides: {
        MuiTooltip: {
          tooltip: {
            color: "white",
            fontSize: '13px',
            backgroundColor: '#3f51b5'
          }
        },
        MuiTypography: {
            text: {
              color: '#7e7e7e'
            }
        }
      }
})

ReactDOM.render(
    <MuiThemeProvider theme={theme}>
        <App />
    </MuiThemeProvider>, document.getElementById('root')
);
