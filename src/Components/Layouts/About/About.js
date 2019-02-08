import React from 'react';
import styles from './About.module.css'

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';

export default function About() {

    const info = {
        Age: 24,
        Location: 'Long Island - Nassau County, New York',
        Email: 'djmgeneseo@gmail.com',
        Phone: '(516) 993-7871'
    }

  return (
    <Paper id={styles.aboutMeCard}>
        <Grid container style={{height: '96%'}}>
            <Grid container className={styles.body}>
                <Grid item xs={12} sm={12} md={5} style={{textAlign: "center"}} >
                    <div style={{display: "inline-block"}}  className={styles.circularImageContainer}>
                        <img src={require('../../../assets/img/me.png')}/>
                    </div>
                    <Typography variant="h4" style={{marginTop: '10px'}}>David Murphy</Typography>
                    <Typography variant="body2" color="primary">Applications Developer/Implementation Specialist</Typography>
                </Grid>
                <Grid style={{paddingRight: '50px'}} item xs={12} sm={12} md={7}>
                    <Typography className={styles.aboutMeHeader} variant="h4">
                       About Me
                    </Typography>
                    <Typography variant="body2">
                        Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose injected humour and the like.
                    </Typography>
                    
                    <Typography variant="body1">
                        {
                            Object.entries(info).forEach(([key,val]) => {
                                console.log(key)
                                return (<div><span>{key}</span>{val}</div>)
                            })
                        }
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
