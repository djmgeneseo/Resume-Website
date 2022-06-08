import React from 'react'

import { withStyles } from '@material-ui/styles'; // jss library

import {Typography, Grid, Paper} from '@material-ui/core'

const jssStyle = theme => ({
  blogPageContainer: {
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
 * @param {jsx} children - article/blog
 * @param {jsx} arrayOfRelatedBlogCards - related blogs for the sidebar of the blog page
 */
const BlogArticlePage = (props) => {
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
              {props.arrayOfRelatedBlogCards == null? <div></div> : props.arrayOfRelatedBlogCards}
            </div>
          </Grid>
        </Grid>
  )
}

export default withStyles(jssStyle, {withTheme: true})(BlogArticlePage)