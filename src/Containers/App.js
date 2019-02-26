import React, { Component, Fragment } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Grid from '@material-ui/core/Grid';

import { Jumbotron, About, Education, Experience, Footer } from '../Components/Layouts';
import styles from './App.module.css';

/*
  Contains Router structure for website - state manages route-specific layout features, such as header information.

  Fragment is a wrapper that circumvents the need for a div - aka, no extra markup 
*/

class App extends Component {
  render() {
    return <Fragment>
      <Jumbotron/>      
      <About/>
      <Grid container className={styles.siteContainer}>
        <Experience/>
      </Grid>
      <Footer/>
    </Fragment> 
  }
}

export default App;