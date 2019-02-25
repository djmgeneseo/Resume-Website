import React, {Fragment} from 'react';
import styles from './Education.module.css' // css modules
import { withStyles } from '@material-ui/styles'; // jss library

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Timeline from '../../Timeline/Timeline';
import Paper from '@material-ui/core/Paper';

const jssStyle = theme => ({
  educationPaperLeft: {
    width: '96%',
    height: '180px',
    position: 'relative',
    padding: '30px',
    boxSizing: 'border-box',
    '&:before': {
      position: 'absolute',
      top: '26px',
      right: '-15px',
      display: 'inline-block',
      borderTop: '15px solid transparent',
      borderLeft: '15px solid #ffffff',
      borderRight: '0 solid #ffffff',
      borderBottom: '15px solid transparent',
      content: "''"
    }
  },
  educationPaperRight: {
    width: '96%',
    height: '180px',
    position: 'relative',
    padding: '30px',
    boxSizing: 'border-box',
    '&:before': {
      position: 'absolute',
      top: '26px',
      left: '-15px',
      right: 'auto',
      display: 'inline-block',
      borderTop: '15px solid transparent',
      borderLeft: '15px solid #ffffff',
      borderRight: '0 solid #ffffff',
      borderBottom: '15px solid transparent',
      content: "''",
      borderLeftWidth: '0',
      borderRightWidth: '15px'
    }
  }
})

const Education = (props) => {

  const {classes} = props;

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

      // Default style = list item oriented to the right
      let largeMarginTop = null;
      let float = styles.floatRight;
      let educationPaperOrientation = classes.educationPaperRight;

      if(i%2===1) { // left list item
        float = styles.floatLeft;
        educationPaperOrientation = classes.educationPaperLeft;
      } else if(i===2) {
        largeMarginTop = {
          marginTop: '50px'
        }
      }

      return (
      <li className={float + ' ' + styles.educationItem} key={collegeName} style={largeMarginTop}>
        <Paper className={float + ' ' + educationPaperOrientation}>
          <Typography>{collegeName}</Typography>
          <Typography variant={'h5'}>{educationJSON[collegeName].degree +' in ' + educationJSON[collegeName].major}</Typography>
          <Typography variant={'body1'}>{educationJSON[collegeName].start + ' - ' + educationJSON[collegeName].end}</Typography>
          <Typography variant={'body1'}>{educationJSON[collegeName].gpa}</Typography>
        </Paper>
      </li>)
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

export default withStyles(jssStyle)(Education)