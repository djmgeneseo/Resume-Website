import React from 'react';
import styles from './About.module.css'
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

export default function About() {

    const info = {
        Age: 24,
        Phone: '(516) 993-7871',
        Email: 'djmgeneseo@gmail.com',
        Home: 'Long Island - Nassau County, NY'
    }

    const generateBioAndInfo = () => {
        return Object.keys(info).map(function(key) {
            return (<div key={key} style={{paddingTop: '5px'}}><Typography variant="body1"><span className={styles.infoSpan}>{key}</span> {info[key]}</Typography></div>)
        })
    }

  return (
    <Paper id={styles.aboutMeCard}>
        <Grid container style={{height: '96%'}}>
            <Grid container className={styles.body}>
                <Grid item xs={12} sm={12} md={5} style={{textAlign: "center"}} >
                    <div style={{display: 'inline-block'}} className={styles.downloadResumeButton}>
                    <a target="_blank" href={resume}>
                        <Tooltip TransitionComponent={Zoom} title="DOWNLOAD RESUME" placement='top' color="primary">
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
                <Grid className={styles.aboutMeSection} item xs={12} sm={12} md={7}>
                    <Typography className={styles.aboutMeHeader} variant="h5">
                       About Me
                    </Typography>
                    <Typography variant="body2">
                        Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose injected humour and the like. Various versions have evolved over the years, sometimes by accident, sometimes on purpose injected humour and the like.
                    </Typography>
                    <div style={{marginTop: '10px'}}>
                    {
                        generateBioAndInfo()
                    }
                    </div>
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
