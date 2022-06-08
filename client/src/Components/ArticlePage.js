import React from 'react'

import { withStyles } from '@material-ui/styles'; // jss library

import {Typography, Grid, Paper} from '@material-ui/core'

const jssStyle = theme => ({
  articlePageContainer: {
    maxWidth: '1280px', 
    margin: '0 auto',
    marginTop: '75px'
  },
  articlePaper: {
    padding: '40px' 
  },
  center: {
      textAlign: 'center'
  }
})

/**
 * @param {json} classes
 * @param {jsx} children - article/article
 * @param {jsx} arrayOfRelatedArticleCards - related articles for the sidebar of the article page
 */
const ArticlePage = (props) => {
  const {classes} = props;
  return (
    <Grid container spacing={32}>
          <Grid item xs={12} sm={12} md={8}>
            <Paper className={classes.articlePaper}>
              {props.children}
            </Paper>
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <div>
              <Typography variant={'h5'} className={classes.center}>Related Posts</Typography>
              {props.arrayOfRelatedArticleCards == null? <div></div> : props.arrayOfRelatedArticleCards}
            </div>
          </Grid>
        </Grid>
  )
}

export default withStyles(jssStyle, {withTheme: true})(ArticlePage)