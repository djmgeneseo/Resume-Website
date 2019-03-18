import React from 'react';
import { withStyles } from '@material-ui/styles'; // jss library

import resume from '../../assets/pdf/David_Murphy_-_Full_Stack_Applications_Developer.pdf'

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import Tooltip from '@material-ui/core/Tooltip';
import Fab from '@material-ui/core/Fab';
// import Zoom from '@material-ui/core/Zoom';
import IconButton from '@material-ui/core/IconButton';

import {FaFileDownload} from "react-icons/fa";
import {FaLinkedin} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";
// import { Button } from '@material-ui/core';

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
            color: theme.palette.primary['500'],
            marginTop: '1.2em'
        }
    },
    aboutMeCard: {
        marginTop: '-28vh',
        width: '100%',
        borderRadius: '0px',
        zIndex: '100'
    },
    body: {
        boxSizing: 'border-box',
        alignItems: 'center',
        height: '87%',
        paddingTop: '30px',
        paddingBottom: '30px'
    },
    downloadResumeButton: {
        position: 'absolute',
        zIndex: '5',
        '& button': {
            width: '45px',
            height: '45px'
        }
    },
    downloadResumeIcon: {
        fontSize: '18px'
    },
    circularImageContainer: {
        position: 'relative',
        width: '200px',
        height: '200px',
        overflow: 'hidden',
        borderRadius: '50%',
        '&::after': {
            content: "' '",
            position: 'absolute',
            width: '200px',
            height: '200px',
            top: 0,
            left: 0,
            boxShadow: 'inset 0 0 20px 4px rgba(0, 0, 0, 0.44)',
            borderRadius: '50%'
        },
        '& img': {
            position: 'relative',
            width: '100%',
            height: '100%'
        }
    },
    aboutMeSection: {
        paddingRight: '50px'
    },
    infoSpan: {
        float: 'left',
        width: '80px',
        textTransform: 'uppercase',
        fontWeight: '600'
    },
    contactButton: {
        marginTop: '10px'
    },
    footer: {
        height: '18%',
        textAlign: 'center'
    },
    footerButton: {
        margin: '11px',
        display: 'inline-block'
    },
    footerButtonIcon: {
        fontSize: '23px'
    },
    certificateIconDiv: {
        position: 'absolute',
        top: '-10px',
        right: '10px',
        width: '30px',
        height: 'auto',
        '& img': {
            width: '70px',
            height: 'auto'
        }
    },
    timePeriodParagraph: {
        color: '#fff !important'
    },
    gpa: {
        display: 'inline',
        marginLeft: '10px'
    },
    educationPaperOrientation: {
        marginBottom: '15px',
        position: 'relative',
        padding: '15px 25px',
        boxSizing: 'border-box'
    },
    timePeriodDiv: {
        backgroundColor: theme.palette.primary['500'],
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
          borderLeftColor: theme.palette.primary['500'],
          transform: 'rotate(180deg)'
        }
    },
    tooltipPopper: {
        // backgroundColor: theme.palette.primary['500']
        height: '40px !important'
    },
    '@media only screen and (max-width: 959px)': {
        aboutMeSection: {
            padding: '35px',
            paddingTop: '25px'
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
                <Typography variant="body1"><span className={classes.infoSpan}>{key}</span> {info[key]}</Typography>
            </div>)
        })
    }

    const generateEducationInfo = () => {
        return Object.keys(educationJSON).map(function(collegeName) {
            return (
            <Paper key={collegeName} className={classes.educationPaperOrientation}>
                <div className={classes.certificateIconDiv}>
                    <img alt='Certificate Icon' src={require('../../assets/icons/certificate.png')}/>
                </div>
                <Typography>{collegeName}</Typography>
                <Typography variant={'h5'}>{educationJSON[collegeName].degree +' in ' + educationJSON[collegeName].major}</Typography>
                <div className={classes.timePeriodDiv}>
                    <Typography variant={'body2'} className={classes.timePeriodParagraph} >{educationJSON[collegeName].start + ' - ' + educationJSON[collegeName].end}</Typography>
                </div>
                <div className={classes.gpa}>GPA: {educationJSON[collegeName].gpa}</div>
            </Paper>)
        })
    }
        
    return (
        <Paper className={classes.aboutMeCard}>
            <Grid container>
                <Grid container className={classes.body}>
                    <Grid item xs={12} sm={12} md={4} style={{textAlign: "center"}} >
                        <div style={{display: 'inline-block'}} className={classes.downloadResumeButton}>
                            <a target="_blank" rel="noopener noreferrer" href={resume}>
                                <Tooltip 
                                    leaveDelay={100} 
                                    title="DOWNLOAD RESUME" 
                                    placement='top' 
                                    color='primary' 
                                    classes={{ popper: classes.tooltipPopper }}>
                                    <Fab color="primary">
                                        <FaFileDownload className={classes.downloadResumeIcon}/>
                                    </Fab>
                                </Tooltip>
                            </a>
                        </div>
                        <div style={{display: "inline-block"}}  className={classes.circularImageContainer}>
                            <img alt='Self Portrait of David Murphy' src={require('../../assets/img/me.png')}/>
                        </div>
                        <Typography variant="h4" style={{marginTop: '10px'}}>David Murphy</Typography>
                        <Typography style={{padding: '5px', fontWeight: "bold"}} variant="body2" color="primary">Applications Developer/Implementation Specialist <br/> <span style={{fontWeight: 'normal'}}>@</span> Molloy College</Typography>
                    </Grid>
                    <Grid className={classes.aboutMeSection} item xs={12} sm={12} md={4}>
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
                    <Grid className={classes.aboutMeSection} item xs={12} sm={12} md={4}>
                        { 
                            generateEducationInfo() 
                        }
                    </Grid>
                </Grid>
                <Grid container className={classes.footer}>
                    <AppBar position="static" color="primary">
                        <Toolbar style={{textAlign: 'center', display: 'inline-block'}}>
                            <div className={classes.footerButton}>
                                <a href='https://www.linkedin.com/in/david-murphy-830671106/' target="_blank" rel="noopener noreferrer">
                                    <IconButton color="secondary">
                                        <FaLinkedin className={classes.footerButtonIcon}/>
                                    </IconButton>
                                </a>
                            </div>
                            <div className={classes.footerButton}>
                                <a href='https://github.com/djmgeneseo' target="_blank" rel="noopener noreferrer">
                                    <IconButton color="secondary">
                                    <FaGithub className={classes.footerButtonIcon}/>
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