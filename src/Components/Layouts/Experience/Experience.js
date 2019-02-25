import React, {Fragment} from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

import Timeline from '../../Timeline/Timeline';
import styles from './Experience.module.css'

const Experience = () => {

  const experienceJSON = {
    'Applications Developer/Implementation Specialist': {
      company: 'Molloy College',
      start: 'Jun 2018',
      end: 'Present'
    },
    'Robotics Co-Advisor': {
      company: 'Hewlett-Woodmere School District',
      start: 'Sep 2017',
      end: 'Present'
    },
    'Chief Technology Officer': {
      company: 'Skinno Inc.',
      start: 'Dec 2017',
      end: 'Jun 2018'
    },
    'Technology Specialist': {
      company: 'Molloy College',
      start: 'Nov 2017',
      end: 'Jun 2018'
    },
    'Undergraduate Computer Science Tutor': {
      company: 'Molloy College',
      start: 'Oct 2017',
      end: 'Apr 2018'
    },
    'Undergraduate Teacher Assistant - Web Scripting': {
      company: 'Molloy College',
      start: 'Oct 2017',
      end: 'Dec 2017'
    },
    'Intern Editor': {
      company: 'Messapps',
      start: 'May 2016',
      end: 'Feb 2017'
    }
  }

  const generateExperienceListItems = (props) => {
    let i=0;
    // i%2=0 means even, which means a right-hand list item. So styleRef[0] will contain right-hand <li> jss
    return Object.keys(experienceJSON).map(function(jobName) {
      i++;
      
      let largeMarginTop = null;

      if(i===2) {
        largeMarginTop = {
          marginTop: '50px'
        }
      }

      if(i%2===1) { // shift list item to the left
        return(<li className={styles.floatLeft + ' ' + styles.experienceItem} key={jobName}>
          <Paper className={styles.floatLeft + ' ' + styles.experiencePaperLeft}>
            <Typography variant={'body1'}>{jobName}</Typography>
          </Paper>
        </li>)
      } else { // shift list item to the right
        return(<li className={styles.floatRight + ' ' + styles.experienceItem} style={largeMarginTop} key={jobName}>
          <Paper className={styles.floatRight + ' ' + styles.experiencePaperRight}>
            <Typography variant={'body1'}>{jobName}</Typography>
          </Paper>
        </li>)
      }
    });
  }

  return (
    <Fragment>
      <Grid md={12}>
            <div className={styles.heading}><Typography variant="h4">EXPERIENCE</Typography></div>
      </Grid>
      <Timeline listGenerator={() => generateExperienceListItems()}></Timeline>
    </Fragment>
  )
}

export default Experience