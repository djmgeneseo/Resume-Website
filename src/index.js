import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Containers/App';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';
import blue from '@material-ui/core/colors/indigo';

const theme = createMuiTheme({
    palette: {
        primary: blue,
        secondary: {
            main: '#fff'
        }
    }
})

ReactDOM.render(
    <MuiThemeProvider theme={theme}>
        <App />
    </MuiThemeProvider>, document.getElementById('root')
);
