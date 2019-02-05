import React, { Component, Fragment } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import { Jumbotron, About, Footer } from '../Components/Layouts';
import './App.module.css';

/*
  Contains Router structure for website - state manages route-specific layout features, such as header information.

  Fragment is a wrapper that circumvents the need for a div - aka, no extra markup 
*/

class App extends Component {
  render() {
    return <Fragment>
      <Jumbotron/>
      <About/>
      <Footer/>
    </Fragment> 
  }
}

export default App;