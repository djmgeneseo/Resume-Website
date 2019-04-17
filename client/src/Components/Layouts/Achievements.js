import React, {Fragment} from 'react';
import { withStyles } from '@material-ui/styles'; // jss library

import Grid from '@material-ui/core/Grid';
import { Paper, Card, Typography, CardMedia, CardContent } from '@material-ui/core';

const certificateIcon = require('../../assets/icons/certificate.png');
const stdCertificate = require('../../assets/img/achievements/sigma_cert.jpg');
const stdLogo = require('../../assets/img/achievements/sigma_tau_delta.jpg');
const jlabsLogo = require('../../assets/img/achievements/jlabs_logo.png');
const zahnLogo = require('../../assets/img/achievements/zahn_center.png')

const jssStyle = theme => ({
    sectionWrapper: {
        width: '100%',
        padding: '75px 0'
    },
    paper: {
        marginBottom: '15px',
        position: 'relative',
        padding: '15px 25px',
        boxSizing: 'border-box'
    },
    certificateIconDiv: {
        position: 'absolute',
        top: '-10px',
        right: '20px',
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
    achievementLogoContainer: {
        height: '90px',
        margin: '5%',
        float: 'right',
        maxWidth: '50%'
    },
    achievementLogoImage: {
        maxWidth: '100%',
        maxHeight: '100%'
    },
    paperFlex: {
        display: 'flex'
    },
    paperDetails: {
        display: 'flex',
        flexDirection: 'column'
    },
    paperContent: {
        flex: '1 0 auto'
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
            <Grid item xs={12} sm={12} md={12}>
                <Paper key={collegeName} className={classes.paper}>
                    <div className={classes.certificateIconDiv}>
                        <img alt='Certificate Icon' src={certificateIcon}/>
                    </div>
                    <Typography>{collegeName}</Typography>
                    <Typography variant={'h5'}>{educationJSON[collegeName].degree +' in ' + educationJSON[collegeName].major}</Typography>
                        <div className={classes.timePeriodDiv}>
                    <Typography variant={'body2'} className={classes.timePeriodParagraph} >{educationJSON[collegeName].start + ' - ' + educationJSON[collegeName].end}</Typography>
                    </div>
                    <div className={classes.gpa}>GPA: {educationJSON[collegeName].gpa}</div>
                </Paper>
            </Grid>
            )
        })
    }

    return (
        <section className={classes.sectionWrapper}>
            <Grid item xs={12} sm={12} md={12}>
                <div className={classes.heading}><Typography style={{color: '#fff'}} variant="h4">ACHIEVEMENTS</Typography></div>
            </Grid>
            <Grid container spacing={40}>
                {/* Zahn */}
                <Grid item xs={12} sm={12} md={12}>

                </Grid>
                {/* Education */}
                <Grid item xs={12} sm={12} md={4}>
                    {  generateEducationInfo() }
                </Grid>
                <Grid item xs={12} sm={12} md={8}>
                    <Grid container>
                    {/* Sigma Tau Delta */}
                        <Grid item xs={12} sm={12} md={12}>
                            <Paper className={classes.paper}>
                                <div className={classes.certificateIconDiv}>
                                    <img alt='Certificate Icon' src={certificateIcon}/>
                                </div>
                                <Typography>Sigma Tau Delta - International English Honors Society</Typography>
                                <div className={classes.achievementLogoContainer}>
                                    <img className={classes.achievementLogoImage} src={stdLogo} alt="Sigma Tau Delta Logo"/>
                                </div>
                                <Typography variant={'h5'}>Honorary Member</Typography>
                                <div className={classes.timePeriodDiv}>
                                    <Typography variant={'body2'} className={classes.timePeriodParagraph} >{2016}</Typography>
                                </div>
                                <Typography>Only the top 30% of students internationally receive an invitation. Eligibility requires the demonstration of high writing proficiency, a combination of courses taken, and a minimum 3.0 GPA.</Typography>
                            </Paper>
                        </Grid>
                        {/* Jlabs */}
                        <Grid item xs={12} sm={12} md={12}>
                            <Paper className={classes.paper}>
                                <div className={classes.certificateIconDiv}>
                                    <img alt='Certificate Icon' src={certificateIcon}/>
                                </div>
                                <Typography>Johnson & Johnson 2018 Digital Beauty QuickFire Challenge</Typography>
                                <div className={classes.achievementLogoContainer}>
                                    <img className={classes.achievementLogoImage} src={jlabsLogo} alt="Johnson & Johnson Jlabs Logo"/>
                                </div>
                                <Typography variant={'h5'}>Top 5 Finalist (Skinno Inc.)</Typography>
                                <div className={classes.timePeriodDiv}>
                                    <Typography variant={'body2'} className={classes.timePeriodParagraph} >{2016}</Typography>
                                </div>
                                <Typography>International tech challenge sponsored by Johnson & Johnson Innovation, JLABS (JLABS) and Johnson & Johnson Consumer Inc.</Typography>
                            </Paper>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            
        </section>
    )
}

export default withStyles(jssStyle)(Achievements)