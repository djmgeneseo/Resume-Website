import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles'; // jss library

import {Route} from "react-router-dom";
import {ArticlesSelection} from '../../Components/index'
import {MessAppsArticle} from './index';

import {NavBar} from '../index';

const jssStyle = theme => ({
    articlePageContainer: {
      maxWidth: '1280px', 
      margin: '0 auto',
      marginTop: '75px'
    },
    articlePaper: {
      padding: '40px' 
    }
})

/**
 * Props:
 * @param {json} classes
 * @param {json} theme
 * @param {*} {...routeProps} - includes all properties passed from react-router-dom (Ex: match.path)
 */
class Articles extends Component {
  render() {
      const {classes} = this.props;
    return (
      <div>
        <NavBar noScroll theme={this.props.theme}/>
        <Route 
            exact 
            path={this.props.match.path}
            render={() => <div className={classes.articlePaper}><ArticlesSelection removeHeader /></div>}/>
        <Route 
            path={`${this.props.match.path}/MessApps`} 
            component={(routeProps) => <MessAppsArticle {...routeProps} theme={this.props.theme}/>}
        />
      </div>
    )
  }
}

export default withStyles(jssStyle, {withTheme: true})(Articles)