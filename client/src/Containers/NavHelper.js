import React, { Component } from 'react';
import {Card, CardActionArea, CardContent, Typography} from '@material-ui/core';

import { withStyles } from '@material-ui/styles'; // jss library

import { GoChevronUp, GoFileCode, GoBriefcase, GoTools } from "react-icons/go";
import { IoMdTrophy } from "react-icons/io"

const jssStyle = theme => ({
    navHelperContainer: {
        position: 'fixed',
        right: '-3px',
        top: '50%',
        height: 'auto',
        zIndex: '1101'
    },
    icon: {
        width: '20px',
        height: 'auto',
        fontSize: '30px',
        color: theme.palette.primary['500']
    },
    topIcon: {
        color: '#fff'
    },
    backgroundColor: {
        backgroundColor: theme.palette.primary['500'],
        color: '#fff'
    }
});

/**
 * Escorts user to different parts of the page
 */
export class NavHelper extends Component {
  render() {
      const {classes} = this.props;
    return (
        <Card className={classes.navHelperContainer}>
            <CardActionArea>
                <CardContent className={classes.backgroundColor}>
                    <GoChevronUp className={classes.icon + ' ' + classes.topIcon}/>
                </CardContent>
            </CardActionArea>
            <CardActionArea>
                <CardContent>
                    <IoMdTrophy className={classes.icon}/>
                </CardContent>
            </CardActionArea>
            <CardActionArea>
                <CardContent>
                    <GoFileCode className={classes.icon}/>
                </CardContent>
            </CardActionArea>
            <CardActionArea>
                <CardContent>
                    <GoBriefcase className={classes.icon}/>
                </CardContent>
            </CardActionArea>
            <CardActionArea>
                <CardContent>
                    <GoTools className={classes.icon}/>
                </CardContent>
            </CardActionArea>
        </Card>
    )
  }
}

export default withStyles(jssStyle)(NavHelper);