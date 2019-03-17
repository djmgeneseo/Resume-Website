import React, {Fragment} from 'react';
import { withStyles } from '@material-ui/styles'; // jss library
import styles from './Experience.module.css' // css modules

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

import {FaCircle} from 'react-icons/fa';

import Timeline from '../../Timeline/Timeline';

const jssStyle = theme => ({
  
  experiencePaperLeft: {
    width: '96%',
    height: '300px', // '300px'
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
    height: '300px', // '300px'
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
  }, 
  certificateIconDivLeft: {
    position: 'absolute',
    top: '-10px',
    left: '-10px',
    width: '30px',
    height: 'auto'
  },
  certificateIconDivRight: {
    position: 'absolute',
    top: '-10px',
    right: '10px',
    width: '30px',
    height: 'auto'
  },
    certificateIconDivImg: {
      width: '70px',
      height: 'auto'   
  },
  timelineMarkerRight: {
    color: theme.palette.primary['500'],
    lineHeight: '85px',
    textAlign: 'center',
    position: 'absolute',
    zIndex: '100',
    left: '49.4%'
},
timelineMarkerLeft: {
    color: theme.palette.primary['500'],
    lineHeight: '5.3',
    textAlign: 'center',
    position: 'absolute',
    zIndex: '100',
    left: '49.4%'
},
timePeriodDiv: {
  backgroundColor: theme.palette.primary['500'],
  color: '#fff !important',
  display: 'inline-block',
  padding: '3px 15px',
  position: 'relative',
  margin: '13px 0px',
  '&:before': {
    content: "''",
    position: 'absolute',
    background: 'transparent',
    display: 'inline-block',
    right: '0',
    width: '0',
    height: '0',
    top: '-10px',
    border: '10px solid',
    borderRightColor: 'transparent',
    borderTopColor: 'transparent',
    borderBottomColor: 'transparent',
    borderLeftColor: theme.palette.primary['500'],
    transform: 'rotate(180deg)'
  }
},
presentBorder: {
  border: `solid ${theme.palette.primary['500']}`
}
})

const Experience = (props) => {
  const {classes} = props;

  const experienceJSON = {
    'Applications Developer/Implementation Specialist': {
      company: 'Molloy College',
      start: 'Jun 2018',
      end: 'Present',
      description: 'Responsible for the development, analysis, implementation, documentation, training, and ongoing support of software applications. The software is designed to improve both administrative and academic processes, and the overall organizational effectiveness of the College.',
      present: true
    },
    'Chief Technology Officer': {
      company: 'Skinno Inc.',
      start: 'Dec 2017',
      end: 'Jun 2018',
      description: `Develop all aspects of Skinno's multi-platform service, including a website and a mobile application for iOS devices. Monitor technology trends in machine learning and UI/UX to improve the quality of our applications. Communicate the company's technology strategy to partners, management, investors, and employees.`
    },
    'Technology Specialist': {
      company: 'Molloy College',
      start: 'Nov 2017',
      end: 'Jun 2018',
      description: 'Monitor, manually re-image, and connect several computer labs onto both the student and faculty DNS, assigning user and admin privileges respectively. Working Experience with switch panels and patch panels in a professional environment.'
    },
    'Undergraduate Computer Science Tutor': {
      company: 'Molloy College',
      start: 'Oct 2017',
      end: 'Apr 2018',
      description: 'Provide guidance and instruction to college students for material related to their Computer Science studies, including (but not limited to): Web Scripting, Dynamic Programming, Object Oriented Concepts, and MVC Architecture'
    },
    'Undergraduate Teacher Assistant - Web Scripting': {
      company: 'Molloy College',
      start: 'Oct 2017',
      end: 'Dec 2017',
      description: 'Volunteer 5 hours per week to help instruct a college-level Web Scripting course.'
    },
    'Robotics Co-Advisor': {
      company: 'Hewlett-Woodmere School District',
      start: 'Sep 2017',
      end: 'Present',
      description: 'Board-certified to instruct Android mobile development for students between grades 9-12. Provide guidance for both software (Java - Android Studio & Eclipse) and hardware design and implementation in an academic setting.',
      present: true
    },
    'Intern Editor': {
      company: 'Messapps',
      start: 'May 2016',
      end: 'Feb 2017',
      description: 'Collaborate with the CEO and several project managers to produce online content on a weekly basis. Written content pertained to topics in both mobile devices and the development of mobile applications. Attended meetings to contribute topic suggestions for future web content.'
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
      let timelineMarker = classes.timelineMarkerRight
      let presentBorder = null;
      let certificateIconDiv = classes.certificateIconDivRight;

      if(i%2===1) { // left list item
        float = styles.floatLeft;
        experiencePaperOrientation = classes.experiencePaperLeft;
        timelineMarker = classes.timelineMarkerLeft
        certificateIconDiv = classes.certificateIconDivLeft;
      } else if(i===2) {
        largeMarginTop = {
          marginTop: '50px'
        }
      }

      if(experienceJSON[jobName].present) {
        presentBorder = classes.presentBorder
      }

      return(<li className={float + ' ' + styles.experienceItem} style={largeMarginTop} key={jobName}>
      <div className={timelineMarker}>
        <FaCircle></FaCircle>
      </div>
        <Paper className={float + ' ' + experiencePaperOrientation + ' ' + presentBorder}>
          <div className={certificateIconDiv}>
            {/* <img className={classes.certificateIconDivImg} alt='Certificate Icon' src={require('../../../assets/icons/certificate.png')}/> */}
          </div>
          <Typography variant={'body1'}>{experienceJSON[jobName].company}</Typography>          
          <Typography variant={'h5'}>{jobName}</Typography>
          <div className={classes.timePeriodDiv}>
            <Typography className={styles.timePeriodParagraph} variant={'body2'}>{experienceJSON[jobName].start + ' - ' + experienceJSON[jobName].end}</Typography>
          </div>
          <Typography variant={'body2'}>{experienceJSON[jobName].description}</Typography>
        </Paper>
      </li>)
    });
  }

  return (
    <div style={{padding: '10px'}}>
      <Grid item xs={12} sm={12} md={12}>
            <div className={styles.heading}><Typography variant="h4">EXPERIENCE</Typography></div>
            {/* <div className={styles.headerShadow}><img alt='section header shadow' src={require('../../../assets/img/section_header_shadow.png')}/></div> */}
      </Grid>
      <Timeline listItemsGenerator={() => generateExperienceListItems()}></Timeline>
    </div>
  )
}

export default withStyles(jssStyle)(Experience)