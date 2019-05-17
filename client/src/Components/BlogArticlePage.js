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
  }
})

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
            <Paper>
              <Typography>Hello</Typography>
            </Paper>
          </Grid>
        </Grid>
  )
}

export default withStyles(jssStyle, {withTheme: true})(BlogArticlePage)