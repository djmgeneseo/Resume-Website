import React, {Component} from 'react';
import { withStyles } from '@material-ui/styles'; // jss library

import {Grow, Grid, Typography, Paper} from '@material-ui/core';

import {FaCircle} from 'react-icons/fa';

import Timeline from '../Components/Timeline';
import ScrollTrigger from 'react-scroll-trigger';

const jssStyle = theme => ({
  heading: {
    textAlign: 'center',
    marginBottom: '25px',
    marginTop: '50px'
  },
  headerShadow: {
    '& img': {
      marginBottom: '15px',
      width: '100%'
    }
  },
  floatLeft: {
    float: 'left'
  },
  floatRight: {
    float: 'right'
  },
  experienceItem: {
    listStyleType: 'none',
    width: '49.2%',
    marginBottom: '25px',
    '@media only screen and (max-width: 960px)': {
      width: '94%',
      float: 'right !important'
    }
  },
  timePeriodParagraph: {
    color: '#fff !important',
    fontSize: '10px'
  },
  experiencePaperLeft: {
    width: '96%',
    height: '300px', // '300px'
    padding: '30px',
    boxSizing: 'border-box',
    position: 'relative',
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
    },
    '@media only screen and (max-width: 1160px)': {
      height: '400px'
    },
    '@media only screen and (max-width: 960px)': {
      width: '100%',
      height: '300px',
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
    '@media only screen and (max-width: 600px)': {
      height: '400px'
    }
  },
  experiencePaperRight: {
    width: '96%',
    height: '300px', // '300px'
    padding: '30px',
    boxSizing: 'border-box',
    position: 'relative',
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
    },
    '@media only screen and (max-width: 1160px)': {
      height: '400px'
    },
    '@media only screen and (max-width: 960px)': {
      width: '100%',
      height: '300px',
      marginTop: '0px !important'
    },
    '@media only screen and (max-width: 600px)': {
      height: '400px'
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
    left: '49.4%',
    '@media only screen and (max-width: 960px)': {
      left: '-4px'
    }
},
timelineMarkerLeft: {
    color: theme.palette.primary['500'],
    lineHeight: '5.3',
    textAlign: 'center',
    position: 'absolute',
    zIndex: '100',
    left: '49.4%',
    '@media only screen and (max-width: 960px)': {
      left: '-4px'
    }
},
timePeriodDiv: {
  backgroundColor: theme.palette.primary['500'],
  color: '#fff !important',
  display: 'inline-block',
  padding: '3px 15px',
  position: 'relative',
  margin: '13px 0px',
  boxShadow: '0px 3px 5px -1px rgba(0,0,0,0.2), 0px 6px 10px 0px rgba(0,0,0,0.14), 0px 1px 18px 0px rgba(0,0,0,0.12)',
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

class Experience extends Component {

  state={
    'show Applications Developer/Implementation Specialist': false,
    'show Chief Technology Officer': false,
    'show Technology Specialist': false,
    'show Undergraduate Computer Science Tutor': false,
    'show Undergraduate Teacher Assistant - Web Scripting': false,
    'show Robotics Co-Advisor': false,
    'show Intern Editor': false
  }

  handleOnScroll = (cardToggle) => {
    if(this.state[cardToggle] === false){ // prevent react from mounting component by preventing this function from reseting the state with another true value
        // [cardToggle] - array brackets is an es6 feature used to set key via variable
        this.setState({
            [cardToggle]: true
        });
    }
  }

  generateExperienceListItems = () => {
    const {classes} = this.props;
    const self=this;
    let i=0;
    // i%2=0 means even, which means a right-hand list item. So styleRef[0] will contain right-hand <li> jss
    return Object.keys(experienceJSON).map(function(jobName) {
      i++;
      
      // Default style = list item oriented to the right
      let largeMarginTop = null;
      let float = classes.floatRight;
      let experiencePaperOrientation = classes.experiencePaperRight;
      let timelineMarker = classes.timelineMarkerRight
      let presentBorder = null;
      let certificateIconDiv = classes.certificateIconDivRight;

      if(i%2===1) { // left list item
        float = classes.floatLeft;
        experiencePaperOrientation = classes.experiencePaperLeft;
        timelineMarker = classes.timelineMarkerLeft
        certificateIconDiv = classes.certificateIconDivLeft;
      } else if(i===2 && window.innerWidth > 960) {
        largeMarginTop = {
          marginTop: '50px'
        }
      }

      if(experienceJSON[jobName].present) {
        presentBorder = classes.presentBorder
      }
      
      return(
        <li className={float + ' ' + classes.experienceItem} style={largeMarginTop} key={jobName}>
          <div className={timelineMarker}>
            <FaCircle></FaCircle>
          </div>
          <ScrollTrigger onEnter={()=>self.handleOnScroll('show '+jobName)}>
            <Grow in={self.state['show '+jobName]} timeout={1000}>
              <div>
                <Paper className={float + ' ' + experiencePaperOrientation + ' ' + presentBorder}>
                  <div className={certificateIconDiv}></div>
                  <Typography variant={'body1'}>{experienceJSON[jobName].company}</Typography>          
                  <Typography variant={'h5'}>{jobName}</Typography>
                  <div className={classes.timePeriodDiv}>
                    <Typography className={classes.timePeriodParagraph} variant={'body2'}>{experienceJSON[jobName].start + ' - ' + experienceJSON[jobName].end}</Typography>
                  </div>
                  <Typography variant={'body2'}>{experienceJSON[jobName].description}</Typography>
                </Paper>
              </div>
            </Grow>
          </ScrollTrigger>
      </li>)
    });
  }

  render() {
    const {classes} = this.props;
    return (
      <div style={{padding: '10px'}}>
        <Grid item xs={12} sm={12} md={12}>
              <div className={classes.heading}><Typography variant="h4">EXPERIENCE</Typography></div>
              {/* <div className={classes.headerShadow}><img alt='section header shadow' src={require('../../../assets/img/section_header_shadow.png')}/></div> */}
        </Grid>
        <Timeline listItemsGenerator={() => this.generateExperienceListItems()}></Timeline>
      </div>
    )
  }
}

export default withStyles(jssStyle)(Experience)