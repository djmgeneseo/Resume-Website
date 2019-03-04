import React, { Component } from 'react';
// import {BrowserRouter as Router, Route} from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import indigo from '@material-ui/core/colors/indigo';
import grey from '@material-ui/core/colors/grey';

import Grid from '@material-ui/core/Grid';

import { ColorPicker, Jumbotron, About, Experience, Abilities, Footer } from '../Components/Layouts';

import styles from './App.module.css';

/*
  Contains Router structure for website - state manages route-specific layout features, such as header information.

  Fragment is a wrapper that circumvents the need for a div - aka, no extra markup 
*/

let initialTheme = createMuiTheme({
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

class App extends Component {

  state= {
    color: indigo,
    theme: initialTheme
  }

  changeColor = (newColor) => {
    this.setState({color: newColor, theme: createMuiTheme(({...initialTheme, palette: {
      primary: newColor,
      secondary: {
          main: '#fff'
      }
      },}))})
  }

  render() {
    //console.log('state: ' + JSON.stringify(this.state.theme.palette.primary))
    return <MuiThemeProvider theme={this.state.theme}>
      <ColorPicker changeColor={(color) => this.changeColor(color)}/>
      <Jumbotron/>      
      <About theme={this.state.theme}/>
      <Grid container className={styles.siteContainer}>
        <Experience theme={this.state.theme}/>
      </Grid>
      <Abilities theme={this.state.theme}/>
      <Footer/>
    </MuiThemeProvider>
  }
}

export default App;