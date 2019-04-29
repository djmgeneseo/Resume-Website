import React, { Component } from 'react';
// import {BrowserRouter as Router, Route} from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import indigo from '@material-ui/core/colors/indigo';
import grey from '@material-ui/core/colors/grey';

import {Grid} from '@material-ui/core';

import {Abilities, Footer } from '../Components/Layouts';
import {Experience, NavBar, ColorPicker, Portfolio, Achievements, About} from './index';
import Parallax from '../Components/Parallax';

/*
  Contains Router structure for website - state manages route-specific layout features, such as header information.

  Fragment is a wrapper that circumvents the need for a div - aka, no extra markup 
*/

const achievementsBackgroundImage = require('../assets/img/jumbo.jpg');

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
    // create a new theme using the previous configuration; overide primary and secondary configurations
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
      <NavBar theme={this.state.theme}/>
      <ColorPicker theme={this.state.theme} changeColor={(color) => this.changeColor(color)}/>    
      <About theme={this.state.theme}/>
      <Parallax backgroundImage={achievementsBackgroundImage} theme={this.state.theme}>
        <Grid container style={{maxWidth: '1280px', margin: '0 auto'}}>
          <Achievements theme={this.state.theme}/>
        </Grid>
      </Parallax>
      <Grid container style={{maxWidth: '1280px', margin: '0 auto'}}>
        <Portfolio theme={this.state.theme}/>
        <Experience theme={this.state.theme}/>
      </Grid>
      <Abilities theme={this.state.theme}/>
      <Footer/>
    </MuiThemeProvider>
  }
}

export default App;