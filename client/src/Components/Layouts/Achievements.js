import React, {Fragment} from 'react';
import { withStyles } from '@material-ui/styles'; // jss library

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const certificateIcon = require('../../assets/icons/certificate.png');

const jssStyle = theme => ({
    sectionWrapper: {
        width: '100%',
        padding: '75px 0'
    },
    educationPaperOrientation: {
        marginBottom: '15px',
        position: 'relative',
        padding: '15px 25px',
        boxSizing: 'border-box'
    },
    certificateIconDiv: {
        position: 'absolute',
        top: '-10px',
        right: '10px',
        width: '30px',
        height: 'auto',
        '& img': {
            width: '70px',
            height: 'auto'
        }
    },
    timePeriodParagraph: {
        color: '#fff !important'
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
    heading: {
        textAlign: 'center',
        marginBottom: '25px',
    },
    gpa: {
        display: 'inline',
        marginLeft: '10px'
    },
    '@media only screen and (max-width: 1300px)': {
        sectionWrapper: {
            width: '85%',
            marginLeft: '7.5%'
        }
    }
})

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
      major: 'English Literature (Biology Minor)',
      minor: 'Biology',
      start: 2014,
      end: 2017,
      gpa: 3.46
    }
}

const Achievements = (props) => {
    const {classes} = props;

    const generateEducationInfo = () => {
        return Object.keys(educationJSON).map(function(collegeName) {
            return (
            <Paper key={collegeName} className={classes.educationPaperOrientation}>
                <div className={classes.certificateIconDiv}>
                    <img alt='Certificate Icon' src={certificateIcon}/>
                </div>
                <Typography>{collegeName}</Typography>
                <Typography variant={'h5'}>{educationJSON[collegeName].degree +' in ' + educationJSON[collegeName].major}</Typography>
                    <div className={classes.timePeriodDiv}>
                <Typography variant={'body2'} className={classes.timePeriodParagraph} >{educationJSON[collegeName].start + ' - ' + educationJSON[collegeName].end}</Typography>
                </div>
                <div className={classes.gpa}>GPA: {educationJSON[collegeName].gpa}</div>
            </Paper>)
        })
    }

    return (
        <section className={classes.sectionWrapper}>
            <Grid item xs={12} sm={12} md={12}>
            <div className={classes.heading}><Typography style={{color: '#fff'}} variant="h4">ACHIEVEMENTS</Typography></div>
            </Grid>
            <Grid className={classes.aboutMeSection} item xs={12} sm={12} md={4}>
                {  generateEducationInfo() }
            </Grid>
        </section>
    )
}

export default withStyles(jssStyle)(Achievements)