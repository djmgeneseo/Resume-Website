import React, { Component } from 'react'

import { withStyles } from '@material-ui/styles'; // jss library
import {Typography, Grid, Paper} from '@material-ui/core'

import NavBar from '../Containers/NavBar';
import {Three_easy_ways_to_improve_your_restaurants_app} from '../Components/BlogEntries/MessApps/index'

const jssStyle = theme => ({
    pageContainer: {
      maxWidth: '1280px', 
      margin: '0 auto',
      marginTop: '75px'
    }
})

class MessAppsBlog extends Component {
  render() {
    const {classes} = this.props;
    return (
      <div className={classes.pageContainer}>
        <NavBar noScroll theme={this.props.theme}/>
        <Grid container spacing={32}>
          <Grid item xs={12} sm={12} md={8}>
            <Paper>
              <Three_easy_ways_to_improve_your_restaurants_app/>
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