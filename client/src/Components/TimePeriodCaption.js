import React from 'react'
import { withStyles } from '@material-ui/styles'
import {Typography} from '@material-ui/core';

const jssStyle = theme => ({
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
    }
})

/**
 * @param {json} classes
 * @param {string} timeDescription
 */
const TimePeriodDiv = (props) => {
    const {classes} = props
  return (
    <div className={classes.timePeriodDiv}>
        <Typography className={classes.timePeriodParagraph} color="inherit" variant={'body2'}>{props.timeDescription}</Typography>
    </div>
  )
}

export default withStyles(jssStyle)(TimePeriodDiv)