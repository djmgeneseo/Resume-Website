import React, {Fragment} from 'react'

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Timeline from '../../Timeline/Timeline'
import Paper from '@material-ui/core/Paper';

import styles from './Education.module.css'

const Education = () => {

  const educationJSON = {
    "Molloy College": {
      degree: "Bachelor's Degree",
      major: 'Computer Science',
      start: 2012,
      end: 2018,
      gpa: 3.49
    },
    "SUNY Geneseo": {
      degree: "Bachelor's Degree",
      major: 'English Literature',
      minor: 'Biology',
      start: 2014,
      end: 2017,
      gpa: 3.46
    }
  }

  const generateEducationListItems = () => {
    let i=0;
    // i%2=0 means even, which means a right-hand list item. So styleRef[0] will contain right-hand <li> jss
    return Object.keys(educationJSON).map(function(jobName) {
      i++;
      
      let largeMarginTop = null;

      if(i===2) {
        largeMarginTop = {
          marginTop: '50px'
        }
      }

      if(i%2===1) { // shift list item to the left
        return(
        <li className={styles.floatLeft + ' ' + styles.educationItem} key={jobName}>
          
          
          
          <Paper className={styles.floatLeft + ' ' + styles.educationPaperLeft}>
            <Typography variant={'body1'}>{jobName}</Typography>
          </Paper>
        </li>)
      } else { // shift list item to the right
        return(
        <li className={styles.floatRight + ' ' + styles.educationItem} style={largeMarginTop} key={jobName}>
          <Paper className={styles.floatRight + ' ' + styles.educationPaperRight}>
            <Typography variant={'body1'}>{jobName}</Typography>
          </Paper>
        </li>)
      }
    });
  }

  return (
    <Fragment>
      <Grid md={12}>
            <div className={styles.heading}><Typography variant="h3">Education</Typography></div>
      </Grid>
      <Timeline listGenerator={() => generateEducationListItems()}></Timeline>
    </Fragment>
  )
}

export default Education