import React, { Component } from 'react';
// import {BrowserRouter as Router, Route} from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import {Blogs, MessAppsBlog} from './Blogs/index';
import {FrontPage} from './FrontPage/index';

import {BrowserRouter as Router, Route} from "react-router-dom";

import indigo from '@material-ui/core/colors/indigo';
import grey from '@material-ui/core/colors/grey';

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
      MuiTypography: {
        body1: {
          color: grey[800]
        },
        paragraph: {
          fontSize: 19
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

    return (
        <Router>
          <MuiThemeProvider theme={this.state.theme}>
            <Route path={`/`} exact component={(routeProps) => <FrontPage {...routeProps} changeColor={(color)=>this.changeColor(color)} theme={this.state.theme} />}/>
            <Route path={`/blogs`} component={(routeProps) => <Blogs {...routeProps} changeColor={(color)=>this.changeColor(color)} theme={this.state.theme}/>}/>
          </MuiThemeProvider>
        </Router>
    )
  }
}

export default App;