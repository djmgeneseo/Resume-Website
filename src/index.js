import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Containers/App';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';
import indigo from '@material-ui/core/colors/indigo';
import grey from '@material-ui/core/colors/grey';

const theme = createMuiTheme({
    palette: {
        primary: indigo,
        secondary: {
            main: '#fff'
        }
    },
    typography: {
      useNextVariants: true,
      fontFamily: [
        'Calibri'
      ],
      fontSize: 16,
      textPrimary: '#fff'
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
          body1: {
            color: grey[800]
          },
          body2: {
            color: grey[800]
          },
          h1: {
            color: grey[900]
          },
          h2: {
            color: grey[900]
          },
          h3: {
            color: grey[900]
          },
          h4: {
            color: grey[800]
          },
          h5: {
            color: grey[800]
          }
          
        }
      }
})

ReactDOM.render(
    <MuiThemeProvider theme={theme}>
        <App />
    </MuiThemeProvider>, document.getElementById('root')
);
