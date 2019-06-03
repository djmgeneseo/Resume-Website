import React from 'react'
import { withStyles } from '@material-ui/styles'; // jss library
import {Typography} from '@material-ui/core';

import davidThumbnail from '../../../assets/img/blogs/david_thumbnail.png';
import TimePeriodCaption from '../../TimePeriodCaption';

const jssStyle = theme => ({
    headingAuthorContainer: {
      display: 'inline-block',
      marginLeft: '1em',
      position: 'relative'
    },
    headingAuthor: {
      marginBottom: '-5px !important'
    }
})

/**
 * @param {string} messappsURL - url to the article's home on MessApps site
 * @param {string} title
 * @param {string} intro
 * @param {string} date
 */
const MessAppsArticle = (props) => {
    const {classes} = props;
  return (
    <div>
      <div>
      <Typography style={{float: 'right', display: 'inline'}}><a href={props.messappsURL} rel="noopener noreferrer" target="_blank">Visit MessApps</a></Typography>
        <img src={davidThumbnail} style={{marginTop: '5px'}} alt="Caricature of David Murphy"/>
        <div className={classes.headingAuthorContainer}>
          <Typography variant="h6" className={classes.headingAuthor}>David Murphy</Typography>
          <TimePeriodCaption theme={props.theme} timeDescription={props.date}></TimePeriodCaption>
        </div>
      </div>
      <br/>
      <Typography variant="h3" gutterBottom>{props.title}</Typography>
      <Typography paragraph>{props.intro}</Typography>
      <br/>
      <hr/>
      <br/>
      {props.body}
    </div>
  )
}

export default withStyles(jssStyle, {withTheme: true})(MessAppsArticle)