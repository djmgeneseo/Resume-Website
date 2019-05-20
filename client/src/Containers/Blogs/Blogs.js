import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles'; // jss library

import {Route} from "react-router-dom";
import {BlogsSelection} from '../../Components/index'
import {MessAppsBlog} from '../../Containers/Blogs/index';

import {NavBar} from '../index';

const jssStyle = theme => ({
    blogPageContainer: {
      maxWidth: '1280px', 
      margin: '0 auto',
      marginTop: '75px'
    },
    articlePaper: {
      padding: '40px' 
    }
})

class Blogs extends Component {
  render() {
      const {classes} = this.props;
    return (
      <div>
        <NavBar noScroll theme={this.props.theme}/>
        <Route 
            exact 
            path={this.props.match.path}
            render={() => <div className={classes.articlePaper}><BlogsSelection removeHeader /></div>}/>
        <Route 
            path={`${this.props.match.path}/MessApps`} 
            component={(routeProps) => <MessAppsBlog {...routeProps} theme={this.props.theme}/>}
        />
      </div>
    )
  }
}

export default withStyles(jssStyle, {withTheme: true})(Blogs)