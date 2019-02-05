import React from 'react';
import styles from './About.module.css'

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';

export default function About() {
  return (
    <Paper id={styles.aboutMeCard}>
        <Grid container style={{height: '96%'}}>
            <Grid container className={styles.body}>
                <Grid item sm={4}>
                    <div className={styles.circularPortrait}>
                        <img src={require('../../../assets/img/me.png')}/>
                    </div>
                    <Typography variant="h4">David Murphy</Typography>
                    <Typography variant="body2" color="primary">SOFTWARE ENGINEER</Typography>
                </Grid>
                <Grid item sm={8}>
                    <Typography className={styles.aboutMeHeader} variant="h4">
                       About Me
                    </Typography>
                    <Typography variant="body2">
                        Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose injected humour and the like.
                    </Typography>
                </Grid>
            </Grid>
            <Grid container className={styles.footer}>
                <AppBar position="static" color="primary">
                    <Toolbar></Toolbar>
                </AppBar>
            </Grid>
        </Grid>
    </Paper>
  )
}
