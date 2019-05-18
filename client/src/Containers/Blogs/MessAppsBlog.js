import React, { Component } from 'react'

import {Route} from "react-router-dom";
import { withStyles } from '@material-ui/styles'; // jss library
import {Typography, Grid, Card, CardContent, CardMedia, CardActions, Button} from '@material-ui/core'

import BlogArticlePage from '../../Components/BlogArticlePage' 
import me from '../../assets/img/me.png';
import TimePeriodCaption from '../../Components/TimePeriodCaption';
import BlogCard from '../../Components/Blogs/BlogCard';

import {Three_easy_ways_to_improve_your_restaurants_app} from '../../Components/Blogs/BlogEntries/MessApps/index';

const jssStyle = theme => ({  
    heading: {
      textAlign: 'center',
      width: '100%',
      marginBottom: '25px',
      marginTop: '25px'
    },
    blogPageContainer: {
      maxWidth: '1280px', 
      margin: '0 auto',
      marginTop: '75px'
    },
    articlePaper: {
      padding: '40px' 
    },
    siteContainer: {
      margin: '75px auto',
      maxWidth: '1280px',
      padding: '10px'
    },
})

const articles = [
  {
    title: `3 Easy Ways To Improve Your Restaurant’s App`,
    id: 'three-easy-ways-to-improve-your-restaurants-app',
    component: <Three_easy_ways_to_improve_your_restaurants_app />,
    intro: `Restaurant apps are notorious for frozen payment transactions and horrific user accessibility. It's a shame, because a recent survey shows that 46% of users report that apps/websites with easier navigation would make them feel more comfortable with finishing a payment transaction.`,
    img: require('../../assets/img/blogs/messapps/three-easy-ways-to-improve-your-restaurants-app/1.jpg'),
    date: 'Jan 25th, 2016'
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

    return articles.map((article, idx) => {
      return ( 
        <BlogCard key={article.id} theme={this.props.theme} blogLink={`messapps/${article.id}`} blogImg={article.img} blogDate={article.date} blogTitle={article.title} blogIntro={article.intro} />
      ) 
    })
  }

  render() {
    const {classes} = this.props;
    
    return (
      <div className={classes.blogPageContainer}>
        <Grid container>
          <Grid item xs={12} sm={12} md={12}>
                      <div className={classes.heading}>
                          <Typography variant="h4">MESSAPPS</Typography>
                      </div>
                  </Grid>
          <Route 
              exact 
              path={this.props.match.path}
              render={() => 
                <Grid container>
                  {this.generateListOfArticles()}
                </Grid>
              }/>
          <Route
              path={`${this.props.match.path}/:articleId`}
              component={(reactProps) => 
                <BlogArticlePage>
                {// to add the theme prop, must create clone of component.
                  React.cloneElement(
                    this.findComponentOfArticle(reactProps.match.params.articleId),
                    {theme: this.props.theme}
                  )
                }
                </BlogArticlePage>
              }
          />
        </Grid>
      </div>
    )
  }
}

export default withStyles(jssStyle, {withTheme: true})(MessAppsBlog)