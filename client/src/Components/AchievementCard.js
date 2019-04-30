import React from 'react';
import { withStyles } from '@material-ui/styles'; // jss library

import { Paper,Typography} from '@material-ui/core';

const jssStyle = theme => ({
    paper: {
        position: 'relative',
        padding: '30px',
        boxSizing: 'border-box'
    },
    certificateIconDiv: {
        position: 'absolute',
        top: '-10px',
        right: '20px',
        width: '30px',
        height: 'auto',
        '& img': {
            width: '70px',
            height: 'auto',
            boxShadow: '0px 3px 5px -1px rgba(0,0,0,0.2), 0px 6px 10px 0px rgba(0,0,0,0.14), 0px 1px 18px 0px rgba(0,0,0,0.12)',
            borderRadius: '50%'
        }
    },
    timePeriodParagraph: {
        color: '#fff !important'
    },
    timePeriodDiv: {
        backgroundColor: theme.palette.primary['500'],
        color: '#fff !important',
        display: 'inline-block',
        padding: '3px 15px',
        position: 'relative',
        margin: '13px 0px',
        boxShadow: '0px 3px 5px -1px rgba(0,0,0,0.2), 0px 6px 10px 0px rgba(0,0,0,0.14), 0px 1px 18px 0px rgba(0,0,0,0.12)',
        '&:before': {
          content: "''",
          position: 'absolute',
          background: 'transparent',
          display: 'inline-block',
          right: '0',
          width: '0',
          height: '0',
          top: '-10px',
          border: '10px solid',
          borderRightColor: 'transparent',
          borderTopColor: 'transparent',
          borderBottomColor: 'transparent',
          borderLeftColor: theme.palette.primary['500'],
          transform: 'rotate(180deg)'
        }
    },
    adjacentToDate: {
        display: 'inline',
        marginLeft: '10px'
    },
    achievementLogoContainer: {
        height: '90px',
        margin: '5%',
        float: 'right',
        maxWidth: '50%'
    },
    achievementLogoImage: {
        maxWidth: '100%',
        maxHeight: '100%'
    },
    '@media only screen and (max-width: 1300px)': {

    }
})

/**
 * Props: 
 * @param {string}     achievementAffiliation 
 * @param {json}       theme
 * @param {string}     achievement
 * @param {string}     marginBottom - OPTIONAL
 * @param {string}     year
 * @param {jsx/string} adjacentToDate - OPTIONAL
 * @param {image}      icon
 * @param {image}      logo - OPTIONAL
 * @param {jsx}        children - OPTIONAL
 */

const AchievementCard = (props) => {
  const {classes} = props;

  const generateAdjacentToDate = () => {
    if(props.adjacentToDate) {
        return <div className={classes.adjacentToDate}>{props.adjacentToDate}</div>
    }
  }

  const generateLogo = () => {
    if(props.logo) {
        return <div className={classes.achievementLogoContainer}>
        <img className={classes.achievementLogoImage} src={props.logo} alt="Achievement logo"/>
    </div>
    }
  }

  return (
      <Paper className={classes.paper} style={props.marginBottom ? {marginBottom: props.marginBottom} : null}>
        <div className={classes.certificateIconDiv}>
            <img alt='Achievement icon' src={props.icon}/>
        </div>
        <Typography color="inherit">{props.achievementAffiliation}</Typography>
        { generateLogo() }
        <Typography color="inherit" variant={'h5'}>{props.achievement}</Typography>
        <div className={classes.timePeriodDiv}>
            <Typography color="inherit" variant={'body2'} className={classes.timePeriodParagraph}>{props.year}</Typography>
        </div>
        { generateAdjacentToDate() }
        <div>
            {props.children}
        </div>
    </Paper>
  )
}

export default withStyles(jssStyle)(AchievementCard)
