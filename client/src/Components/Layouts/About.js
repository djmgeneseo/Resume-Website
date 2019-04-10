import React, {Fragment} from 'react';
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
        // max width instead?
        position: 'relative',
        maxWidth: '1280px',
        margin: '30px auto 0 auto',
        // width: '70%',
        // marginLeft: '15%',
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
    tooltipPopper: {
        // backgroundColor: theme.palette.primary['500']
        height: '40px !important'
    },
    arrowRight: {
        right: '0%',
        top: '35%',
        position: 'absolute',
        marginRight: '-50px',
        width: '100px',
        height: '100px',
        cursor: 'pointer',
        '&:hover': {
            transform: 'rotate(-360deg)',
            transition: 'all .4s'
        }
    },
    circleRight: {
        position: 'absolute',
        boxSizing: 'border-box',
        height: '100px',
        width: '100px',
        border: '15px solid ' + theme.palette.primary["500"],
        borderRadius: '50%',
        clipPath: 'inset(0 0 0 50%)'
    },
    triangleRight: {
        position: 'absolute',
        width: '35px',
        height: '30px',
        background: theme.palette.primary["500"],
        marginTop: '-6px',
        marginLeft: '30px',
        clipPath: 'polygon(50% 100%, 100% 0%, 0% 0%)',
        transform: 'rotate(90deg)'
    },
    arrowLeft: {
        left: '0%',
        top: '35%',
        position: 'absolute',
        marginLeft: '-50px',
        width: '100px',
        height: '100px',
        cursor: 'pointer',
        '&:hover': {
            transform: 'rotate(360deg)',
            transition: 'all .4s'
        }
    },
    circleLeft: {
        position: 'absolute',
        boxSizing: 'border-box',
        height: '100px',
        width: '100px',
        border: '15px solid ' + theme.palette.primary["500"],
        borderRadius: '50%',
        clipPath: 'inset(0 50% 0 0)'
    },
    triangleLeft: {
        position: 'absolute',
        width: '35px',
        height: '30px',
        background: theme.palette.primary["500"],
        marginTop: '-6px',
        marginLeft: '38px',
        clipPath: 'polygon(50% 0, 0% 100%, 100% 100%)',
        transform: 'rotate(90deg)'
    },
    '@media only screen and (max-width: 1300px)': {
        aboutMeSection: {
            padding: '35px',
            paddingTop: '25px'
        },
        aboutMeCard: {
            width: '85%',
            marginLeft: '7.5%'
        }
    },
    '@keyframes spin': {
        from: {transform: 'rotate(0deg)'},
        to: {transform: 'rotate(360deg)'}
    }
})

const info = {
    Age: 24,
    Phone: '(516) 993-7871',
    Email: 'djmgeneseo@gmail.com',
    Home: 'Long Island - Oceanside, NY'
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
        
    return (
        <Fragment>
        <Paper className={classes.aboutMeCard}>
            <div className={classes.arrowLeft}>
                <div className={classes.circleLeft}></div>
                <div className={classes.triangleLeft}></div>
            </div>
            <Grid container>
                <Grid container className={classes.body}>
                    <Grid item xs={12} sm={12} md={6} style={{textAlign: "center"}} >
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
                    <Grid className={classes.aboutMeSection} item xs={12} sm={12} md={6}>
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
            <div className={classes.arrowRight}>
             <div className={classes.circleRight}></div>
             <div className={classes.triangleRight}></div>
            </div>
        </Paper>
      </Fragment>
    )
}

export default withStyles(jssStyle)(About)