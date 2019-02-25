import React, {Fragment} from 'react';
import { withStyles } from '@material-ui/styles'; // jss library
import styles from './Experience.module.css' // css modules

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

import Timeline from '../../Timeline/Timeline';

const jssStyle = theme => ({
  
  experiencePaperLeft: {
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
  experiencePaperRight: {
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

const Experience = (props) => {
  const {classes} = props;

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

  const generateExperienceListItems = () => {
    let i=0;
    // i%2=0 means even, which means a right-hand list item. So styleRef[0] will contain right-hand <li> jss
    return Object.keys(experienceJSON).map(function(jobName) {
      i++;
      
      // Default style = list item oriented to the right
      let largeMarginTop = null;
      let float = styles.floatRight;
      let experiencePaperOrientation = classes.experiencePaperRight;

      if(i%2===1) { // left list item
        float = styles.floatLeft;
        experiencePaperOrientation = classes.experiencePaperLeft;
      } else if(i===2) {
        largeMarginTop = {
          marginTop: '50px'
        }
      }
      return(<li className={float + ' ' + styles.experienceItem} style={largeMarginTop} key={jobName}>
        <Paper className={float + ' ' + experiencePaperOrientation}>
          <Typography variant={'body1'}>{jobName}</Typography>
        </Paper>
      </li>)
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

export default withStyles(jssStyle)(Experience)