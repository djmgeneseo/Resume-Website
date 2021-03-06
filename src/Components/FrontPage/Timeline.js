import React from 'react'

import Grid from '@material-ui/core/Grid';

import { withStyles } from '@material-ui/styles'; // jss library

const jssStyle = theme => ({
  section: {
    width: '100%'
  },
  timeline: {
    width: '100%',
    marginTop: '25px',
    display: 'inline-block',
    position: 'relative',
    padding: '0',
    '&::before': {
      top: '0',
      bottom: '0',
      position: 'absolute',
      content: '" "',
      width: '3px',
      background: '#ffffff',
      left: '50%',
      marginLeft: '-1.5px',
      boxShadow: '0px 1px 6px rgba(0, 0, 0, 0.10), 0px 1px 6px rgba(0, 0, 0, 0.20)'
    },
    '@media only screen and (max-width: 960px)': {
      '&::before': {
        left: '0%',
        width: '8px'
      }
    }
  }
})

/**
 * Props: 
 * @param {json} classes
 * @param {function} listItemsGenerator - returns list items to be placed alongside either end of the timeline bar
 */

const Timeline = (props) => {
  const {classes} = props;
  return (
    <section className={classes.section}>
        <Grid item md={12}>
        <ul className={classes.timeline}>
            {props.listItemsGenerator()}
        </ul>
        </Grid>
    </section>
  )
}

export default withStyles(jssStyle)(Timeline)