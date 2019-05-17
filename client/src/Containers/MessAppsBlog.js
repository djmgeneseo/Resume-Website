import React, { Component } from 'react'

import {BrowserRouter as Router, Route} from "react-router-dom";
import { withStyles } from '@material-ui/styles'; // jss library
import {Typography, Grid, Paper} from '@material-ui/core'

import ArticleHOC from '../Components/ArticleHOC' 

import NavBar from '../Containers/NavBar';
import {Three_easy_ways_to_improve_your_restaurants_app} from '../Components/BlogEntries/MessApps/index';

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

const articles = {
  'Three_easy_ways_to_improve_your_restaurants_app': <Three_easy_ways_to_improve_your_restaurants_app/>,

}

class MessAppsBlog extends Component {
  state = {
    isLandingPage: true
  }

    // TODO - callback? or setup router properly...
  disableLandingPage = () => {
    this.setState({
      isLandingPage: false
    })
  }

  generateArticles = () => {
    return Object.keys(articles).map((articleName, index) => {
        return <Route path={`/blogs/MessApps/${articleName}`} component={(routeProps) => <ArticleHOC {...routeProps}>{articles[articleName]}</ArticleHOC>}/>
    })
  }

  render() {
    const {classes} = this.props;
    return (
      <div className={classes.blogPageContainer}>
        <NavBar noScroll theme={this.props.theme}/>
        <Grid container spacing={32}>
          <Grid item xs={12} sm={12} md={8}>
            <Paper className={classes.articlePaper}>
            {/* TODO */}
              {this.isLandingPage === true ? <Three_easy_ways_to_improve_your_restaurants_app/> : null}
              {this.generateArticles()}
            </Paper>
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <Paper>
              <Typography>Hello</Typography>
            </Paper>
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default withStyles(jssStyle, {withTheme: true})(MessAppsBlog)