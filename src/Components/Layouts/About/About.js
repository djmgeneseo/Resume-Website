import React, {Component} from 'react';
import styles from './About.module.css'; // css modules
import { withStyles } from '@material-ui/styles'; // jss library
import indigo from '@material-ui/core/colors/indigo';

import resume from '../../../assets/pdf/David_Murphy_-_Full_Stack_Applications_Developer.pdf'

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import Tooltip from '@material-ui/core/Tooltip';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';
import IconButton from '@material-ui/core/IconButton';

import {FaFileDownload} from "react-icons/fa";
import {FaLinkedin} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";
import { Button } from '@material-ui/core';

const jssStyle = theme => ({
    aboutMeHeader: {
        paddingBottom: '15px',
        position: 'relative',
        '&:after': {
            position: 'absolute',
            display: 'inline-block',
            content: "''",
            left: '0',
            width: '65px',
            height: '3px',
            borderBottom: '3px solid',
            color: indigo[500],
            marginTop: '1.2em'
        }
    },
    educationPaperOrientation: {
        marginBottom: '15px',
        position: 'relative',
        padding: '30px',
        boxSizing: 'border-box'
    },
    timePeriodDiv: {
        backgroundColor: indigo[500],
        color: '#fff !important',
        display: 'inline-block',
        padding: '3px 15px',
        position: 'relative',
        margin: '13px 0px',
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
          borderLeftColor: indigo[500],
          transform: 'rotate(180deg)'
        }
    }
})

const info = {
    Age: 24,
    Phone: '(516) 993-7871',
    Email: 'djmgeneseo@gmail.com',
    Home: 'Long Island - Oceanside, NY'
}

const educationJSON = {
    "Molloy College": {
      degree: "BA",
      major: 'Computer Science',
      start: 2012,
      end: 2018,
      gpa: 3.49
    },
    "SUNY Geneseo": {
      degree: "BA",
      major: 'English Literature (Biology Minor)',
      minor: 'Biology',
      start: 2014,
      end: 2017,
      gpa: 3.46
    }
  }

const About = (props) => {
        const {classes} = props;

        const generateBioAndInfo = () => {
            return Object.keys(info).map(function(key) {
                return (
                <div key={key} style={{paddingTop: '5px'}}>
                    <Typography variant="body1"><span className={styles.infoSpan}>{key}</span> {info[key]}</Typography>
                </div>)
            })
        }

        const generateEducationInfo = () => {
            return Object.keys(educationJSON).map(function(collegeName) {
                return (
                <Paper className={classes.educationPaperOrientation}>
                    <div className={styles.certificateIconDiv}>
                        <img alt='Certificate Icon' src={require('../../../assets/icons/certificate.png')}/>
                    </div>
                    <Typography>{collegeName}</Typography>
                    <Typography variant={'h5'}>{educationJSON[collegeName].degree +' in ' + educationJSON[collegeName].major}</Typography>
                    <div className={classes.timePeriodDiv}>
                        <Typography variant={'body2'} className={styles.timePeriodParagraph} >{educationJSON[collegeName].start + ' - ' + educationJSON[collegeName].end}</Typography>
                    </div>
                    <div className={styles.gpa}>GPA: {educationJSON[collegeName].gpa}</div>
                    
                </Paper>)
            })
        }

    return (
        <Paper id={styles.aboutMeCard}>
            <Grid container style={{height: '96%'}}>
                <Grid container className={styles.body}>
                    <Grid item xs={12} sm={12} md={4} style={{textAlign: "center"}} >
                        <div style={{display: 'inline-block'}} className={styles.downloadResumeButton}>
                            <a target="_blank" href={resume}>
                                <Tooltip TransitionComponent={Zoom} leaveDelay={200} title="DOWNLOAD RESUME" placement='top' color="primary">
                                    <Fab color="primary">
                                        <FaFileDownload className={styles.downloadResumeIcon}/>
                                    </Fab>
                                </Tooltip>
                            </a>
                        </div>
                        <div style={{display: "inline-block"}}  className={styles.circularImageContainer}>
                            <img alt='Self Portrait of David Murphy' src={require('../../../assets/img/me.png')}/>
                        </div>
                        <Typography variant="h4" style={{marginTop: '10px'}}>David Murphy</Typography>
                        <Typography style={{padding: '5px', fontWeight: "bold"}} variant="body2" color="primary">Applications Developer/Implementation Specialist <br/> <span style={{fontWeight: 'normal'}}>@</span> Molloy College</Typography>
                    </Grid>
                    <Grid className={styles.aboutMeSection} item xs={12} sm={12} md={4}>
                        <Typography className={classes.aboutMeHeader} variant="h5">
                        ABOUT ME
                        </Typography> 
                        <Typography variant="body2">
                            Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose injected humour and the like. Various versions have evolved over the years, sometimes by accident, sometimes on purpose injected humour and the like.
                        </Typography>

                        <div style={{marginTop: '10px'}}>
                        {
                            generateBioAndInfo()
                        }
                        </div>

                        {/* <Button variant="contained" color='primary' style={{marginTop: '20px'}}>CONTACT ME</Button> */}
                    </Grid>
                    <Grid className={styles.aboutMeSection} item xs={12} sm={12} md={4}>
                        {/* <Typography className={classes.aboutMeHeader} variant="h5">
                        MY EDUCATION
                        </Typography>  */}
                        { 
                            generateEducationInfo() 
                        }
                    </Grid>
                </Grid>
                <Grid container className={styles.footer}>
                    <AppBar position="static" color="primary">
                        <Toolbar style={{textAlign: 'center', display: 'inline-block'}}>
                            <div className={styles.footerButton}>
                                <a href='https://www.linkedin.com/in/david-murphy-830671106/' target="_blank">
                                    <IconButton color="secondary">
                                        <FaLinkedin className={styles.footerButtonIcon}/>
                                    </IconButton>
                                </a>
                            </div>
                            <div className={styles.footerButton}>
                                <a href='https://github.com/djmgeneseo' target="_blank">
                                    <IconButton color="secondary">
                                    <FaGithub className={styles.footerButtonIcon}/>
                                    </IconButton>
                                </a>
                            </div>
                        </Toolbar>
                    </AppBar>
                </Grid>
            </Grid>
        </Paper>
    )
}

export default withStyles(jssStyle)(About)