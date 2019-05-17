import React, { Component } from 'react'

import {Route} from "react-router-dom";
import { withStyles } from '@material-ui/styles'; // jss library
import {Typography, Grid, Paper} from '@material-ui/core'

import BlogArticlePage from '../../Components/BlogArticlePage' 

import {Three_easy_ways_to_improve_your_restaurants_app} from '../../Components/Blogs/BlogEntries/MessApps/index';

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

const articles = [
  {
    name: `3 Easy Ways To Improve Your Restaurant’s App`,
    id: 'three-easy-ways-to-improve-your-restaurants-app',
    component: <Three_easy_ways_to_improve_your_restaurants_app/>
  }
]

class MessAppsBlog extends Component {
  state = {
    currentPageIndex: 0
  }

    // TODO - callback? or setup router properly...
  disableLandingPage = () => {
    this.setState({
      isLandingPage: false
    })
  }

  // generateArticles = () => {
  //   return Object.keys(articles).map((articleName, index) => {
  //       return <Route path={`${this.props.match.path}/${articleName}`} component={(routeProps) => <ArticleHOC {...routeProps}>{articles[articleName]}</ArticleHOC>}/>
  //   })
  // }

  findComponentOfArticle = (articleId) => {
    const article = articles.find(({id}) => id === articleId)
    return article.component
  }

  generateListOfArticles = () => {
    
  }

  render() {
    const {classes} = this.props;

    return (
      <div className={classes.blogPageContainer}>
        <Route 
            exact 
            path={this.props.match.path}
            render={() => 
            
              <div>MessAppsBlog Page</div>
            
            }/>
        <Route
            path={`${this.props.match.path}/:articleId`}
            component={(reactProps) => <BlogArticlePage>{this.findComponentOfArticle(reactProps.match.params.articleId)}</BlogArticlePage>}
        />
      </div>
    )
  }
}

export default withStyles(jssStyle, {withTheme: true})(MessAppsBlog)