import React from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

import styles from './Experience.module.css'

const Experience = () => {

  const experienceJSON = {
    'Applications Developer/Implementation Specialist': {
      start: 'Jun 2018',
      end: 'Present'
    },
    'Robotics Co-Advisor': {
      start: 'Sep 2017',
      end: 'Present'
    },
    'Chief Technology Officer': {
      start: 'Dec 2017',
      end: 'Jun 2018'
    },
    'Technology Specialist': {
      start: 'Nov 2017',
      end: 'Jun 2018'
    },
    'Undergraduate Computer Science Tutor': {
      start: 'Oct 2017',
      end: 'Apr 2018'
    },
    'Undergraduate Teacher Assistant - Web Scripting': {
      start: 'Oct 2017',
      end: 'Dec 2017'
    },
    'Intern Editor': {
      start: 'May 2016',
      end: 'Feb 2017'
    }
  }

  const generateExperienceListItems = () => {
    let i=0;
    // i%2=0 means even, which means a right-hand list item. So styleRef[0] will contain right-hand <li> jss
    let styleItemRef = [{
      float: 'right',
      clear: 'right'
    }, {
      float: 'left',
      clear: 'left'    
    }]

    return Object.keys(experienceJSON).map(function(jobName) {
      i++;
      return(
        <li className={styles.experienceItem} style={styleItemRef[i%2]} key={jobName}>
          <Paper className={styles.experiencePaperRight} style={styleItemRef[i%2]}>
            <Typography variant={'body1'}>{jobName}</Typography>
          </Paper>
        </li>
        )
    });
  }

  return (
    <section className={styles.section}>
        <Grid md={12}>
          <div className={styles.heading}><Typography variant="h3">Experience</Typography></div>
        </Grid>
          <Grid md={12}>
            <ul className={styles.timeline}>
              { generateExperienceListItems() }
            </ul>
          </Grid>
    </section>
  )
}

export default Experience