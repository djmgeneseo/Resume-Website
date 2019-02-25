import React, {Fragment} from 'react'

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Timeline from '../../Timeline/Timeline'
import Paper from '@material-ui/core/Paper';

import styles from './Education.module.css'

const Education = () => {

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
    return Object.keys(educationJSON).map(function(collegeName) {
      i++;
      
      let largeMarginTop = null;

      if(i===2) {
        largeMarginTop = {
          marginTop: '50px'
        }
      }

      // degree, major, start, end, gpa
      if(i%2===1) { // left list item
        return(
        <li className={styles.floatLeft + ' ' + styles.educationItem} key={collegeName}>
          <Paper className={styles.floatLeft + ' ' + styles.educationPaperLeft}>
            <Typography>{collegeName}</Typography>
            <Typography variant={'h5'}>{educationJSON[collegeName].degree +' in ' +educationJSON[collegeName].major}</Typography>
            <Typography variant={'body1'}>{educationJSON[collegeName].start + ' - ' + educationJSON[collegeName].end}</Typography>
            <Typography variant={'body1'}>{educationJSON[collegeName].gpa}</Typography>
          </Paper>
        </li>)
      } else { // right list item
        return(
        <li className={styles.floatRight + ' ' + styles.educationItem} style={largeMarginTop} key={collegeName}>
          <Paper className={styles.floatRight + ' ' + styles.educationPaperRight}>
            <Typography>{collegeName}</Typography>
            <Typography variant={'h5'}>{educationJSON[collegeName].degree +' in ' +educationJSON[collegeName].major}</Typography>
            <Typography variant={'body1'}>{educationJSON[collegeName].start + ' - ' + educationJSON[collegeName].end}</Typography>
            <Typography variant={'body1'}>{educationJSON[collegeName].gpa}</Typography>
          </Paper>
        </li>)
      }
    });
  }

  return (
    <Fragment>
      <Grid md={12}>
            <div className={styles.heading}><Typography variant="h4">EDUCATION</Typography></div>
      </Grid>
      <Timeline listGenerator={() => generateEducationListItems()}></Timeline>
    </Fragment>
  )
}

export default Education