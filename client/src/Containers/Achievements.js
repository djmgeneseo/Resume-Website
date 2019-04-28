import React, {Fragment, Component} from 'react';
import { withStyles } from '@material-ui/styles'; // jss library

import { Typography, Grid, Fab, Modal, Card, CardMedia, CardContent } from '@material-ui/core';
import AchievementCard from '../Components/AchievementCard';

import {FaRegImages} from "react-icons/fa";

// Icons
const certificateIcon = require('../assets/icons/certificate.png');
const trophyIcon = require('../assets/icons/trophy.png');
const memberIcon = require('../assets/icons/member.png');
const teacherIcon = require('../assets/icons/teacher.png');

// Logos
const stdLogo = require('../assets/img/achievements/sigma_tau_delta.jpg');
const jlabsLogo = require('../assets/img/achievements/jlabs_logo.png');
const zahnLogo = require('../assets/img/achievements/zahn_center.png');
const molloyLogo = require('../assets/img/achievements/molloy_logo.jpg');
const geneseoLogo  = require('../assets/img/achievements/geneseo_logo.png');
const galvanizeLogo = require('../assets/img/achievements/galvanize_logo.jpg');
const massChallengeLogo = require('../assets/img/achievements/masschallenge_logo.png');
const ftcLogo = require('../assets/img/achievements/ftc_logo.jpg');

// Pictures
const stdCertificate = require('../assets/img/achievements/sigma_cert.jpg');
const skinno1 = require('../assets/img/achievements/skinno_1.jpg');
const skinno2 = require('../assets/img/achievements/skinno_2.jpg');
const skinno3 = require('../assets/img/achievements/skinno_3.jpg');
const robotics1 = require('../assets/img/achievements/robotics_1.jpg');
const robotics2 = require('../assets/img/achievements/robotics_2.jpg');
const robotics3 = require('../assets/img/achievements/robotics_3.jpg');

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
        marginBottom: '32px',
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
    cardMediaContainer: {
        position: 'relative', 
        overflow: 'hidden',
        '&:hover $hobbyCardMedia': {
            transform: 'scale(1.2)'
        }
    },
    hobbyCard: {
        maxWidth: '40%',
        maxHeight: '70%',
        margin: 'auto',
        marginTop: '10%'
    },
    hobbyCardMedia: {
        height: '370px',
        transition: 'transform .5s',
        cursor: 'pointer',
        '&::before': {
            content: "' '",
            position: 'absolute',
            top: '0',
            right: '0',
            bottom: '0',
            left: '0',
            //background: `linear-gradient(to top,#000 40%, ${theme.palette.primary['200']})`,
            // background: 'linear-gradient(transparent, rgba(12, 24, 36, 1))',
            opacity: '.3'
          }
    },
    arrowIcon: {
        border: `solid ${theme.palette.primary['200']}`,
        borderWidth: '0 3px 3px 0',
        display: 'inline-block',
        padding: '40px',
        width: '20px',
        height: '15px',
        cursor: 'pointer'
      },
    right: {
        transform: 'rotate(-45deg)',
        position: 'absolute',
        right: '15%',
        top: '50%'
    },
    left: {
        transform: 'rotate(135deg)',
        position: 'absolute',
        left: '15%',
        top: '50%'
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
      end: 18,
      gpa: 3.49,
      logo: molloyLogo
    },
    "SUNY Geneseo": {
      degree: "BA",
      major: 'English Literature (Biology Minor)',
      minor: 'Biology',
      start: 2014,
      end: 17,
      gpa: 3.46,
      logo: geneseoLogo
    }
}

const achievements = {
    'Zahn Innovation Center': {
        images: [skinno1, skinno2, skinno3],
        description: ['blah', 'blah', 'blah']
    },
    'FIRST Tech Challenge': {
        images: [robotics1, robotics2, robotics3],
        description: ['blah', 'blah', 'blah']
    },
    'Sigma Tau Delta': {
        images: [stdCertificate],
        description: ['blah']
    }
}

class Achievements extends Component {

    state = {
        openModal: false,
        activeAchievementKey: 'Zahn Innovation Center',
        activeAchievementIdx: 0
    }

    handleOpenModal = (newKey) => {
        this.setState({
            openModal: true,
            activeAchievementKey: newKey,
            activeImageIdx: 0
        });
    }

    handleCloseModal = () => {
        this.setState({openModal: false});
    }

    generateEducationInfo = () => {
        const {theme} = this.props;
        return Object.keys(educationJSON).map(function(collegeName) {
            return (
            <Grid key={collegeName} item xs={12} sm={12} md={12}>
                <AchievementCard
                    theme={theme}
                    achievementAffiliation={collegeName}
                    achievement={educationJSON[collegeName].degree +' in ' + educationJSON[collegeName].major}
                    year={educationJSON[collegeName].start + '-' + educationJSON[collegeName].end}
                    icon={certificateIcon}
                    adjacentToDate={'GPA: ' + educationJSON[collegeName].gpa}
                    marginBottom={'32px'}
                    logo={educationJSON[collegeName].logo}
                />
            </Grid>
            )
        })
    }

    generateRightArrow = () => {
        if(achievements[this.state.activeAchievementKey].images[this.state.activeImageIdx + 1]) {
            return (
                <i 
                    onClick={()=>{
                        this.handleArrowClick(1)
                    }} 
                    className={this.props.classes.arrowIcon + ' ' + this.props.classes.right}></i>
            )
        }
    }

    generateLeftArrow = () => {
        if(achievements[this.state.activeAchievementKey].images[this.state.activeImageIdx -1]) {
            return (
                <i 
                    onClick={()=>{
                        this.handleArrowClick(-1)
                    }} 
                    className={
                        this.props.classes.arrowIcon + ' ' + 
                        this.props.classes.left}></i>
            )
        }
    }

    handleArrowClick = (additionOrSubtraction) => {
        this.setState(state => {
            return {
                activeImageIdx: state.activeImageIdx + additionOrSubtraction
            }
        })
    }

    render() {
        const {classes} = this.props;
        const {theme} = this.props;

        return (
            <section className={classes.sectionWrapper}>
                <Grid item xs={12} sm={12} md={12}>
                    <div className={classes.heading}><Typography style={{color: '#fff'}} variant="h4">ACHIEVEMENTS</Typography></div>
                </Grid>
                <Grid container spacing={32}>
                    {/* Zahn */}
                    <Grid item xs={12} sm={12} md={12}>
                        <AchievementCard
                            theme = {theme}
                            achievementAffiliation={'Zahn Innovation Center 2018 - Technology Track'}
                            achievement={'Grand Prize Winner'}
                            year={'2018'}
                            icon={trophyIcon}
                            logo={zahnLogo}
                            adjacentToDate={(
                                <Fab onClick={() => this.handleOpenModal('Zahn Innovation Center')} style={{marginTop: '-8px', marginLeft: '5px'}} size="small" color="primary">
                                    <FaRegImages></FaRegImages>
                                </Fab>
                            )}
                            >
                            <Typography><em>“Startups in this category were challenged to develop ventures that use technology to solve problems otherwise untouched. Their products include transformative new apps, web platforms, database tools, or e-commerce sites.”</em></Typography>
                                <ul>
                                    <li><Typography>Lead the development and communication of Skinno Inc.'s technology as <strong>Co-founder & Chief Technology Officer</strong> to win the <strong>$25,000 Technology Grand Prize</strong> in the Zahn Innovation Venture Competition</Typography></li>
                                    <li><Typography>Winner of the <strong>$1,000 People's Choice Award</strong> associated with this competition.</Typography></li>
                                    <li>
                                        <Typography>Judges were chosen based on their advanced knowledge of and expertise in the latest technologies:</Typography>
                                        <ul>
                                            <li><Typography><strong><em>Howard Morgan:</em></strong> Co-Founder at First Round Capital</Typography></li>
                                            <li><Typography><strong><em>Noel Goddard:</em></strong> Principal at Accelerate NY Seed Fund</Typography></li>
                                            <li><Typography><strong><em>Chuck Pettid:</em></strong> Senior Partner at Republic.co</Typography></li>
                                            <li><Typography><strong><em>Sandford (Sandy) Wollman:</em></strong> Co-Founder & Managing Director at The Westchester Angels, Leader and Connector in the Angel Investing Space</Typography></li>
                                            <li><Typography><strong><em>Kimberly Yarnell:</em></strong> Global Marketing Solutions at Facebook</Typography></li>
                                            <li><Typography><strong><em>Arber Ruci:</em></strong> Director of NYC Innovation Hot Spot, Founder and CEO of InYourClass Corp.</Typography></li>
                                        </ul>
                                    </li>
                                </ul>
                        </AchievementCard>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12}>
                        <AchievementCard
                            theme = {theme}
                            achievementAffiliation={'FTC Robotics 2018 @ Hewlett-Woodmere High School'}
                            achievement={'Software Advisor/Mentor of the Robotics Long Island Regional Champions'}
                            year={'2018'}
                            icon={teacherIcon}
                            logo={ftcLogo}
                            adjacentToDate={(
                                <Fab onClick={() => this.handleOpenModal('FIRST Tech Challenge')} style={{marginTop: '-8px', marginLeft: '5px'}} size="small" color="primary">
                                    <FaRegImages></FaRegImages>
                                </Fab>
                            )}
                            >
                            <ul>
                                <li><Typography>
                                <strong>Manage & mentor three high school software development teams,</strong> all of whom competed in several Nassau County qualifiers. All three teams advanced into the Long Island First Tech Regional Challenge at Smithtown High West.
                                </Typography></li>
                                <li><Typography>
                                One team, Roboboogie, won <strong>first place in The Long Island First Tech Regional Challenge.</strong> Another team, Innovo, advanced further to the 'Super Regional' level to <strong>compete at the North American/North-Eastern Super Regional competition</strong> in Scranton, PA.
                                </Typography></li>
                            </ul>
                            </AchievementCard>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4}>
                        {/* Education */}
                        {  this.generateEducationInfo() }
                        <Grid item xs={12} sm={12} md={12}>
                        {/* Galvanize */}
                        <AchievementCard
                            theme={theme}
                            achievementAffiliation={"Galvanize"}
                            achievement={'Company Member (Skinno Inc.)'}
                            year={'2018-19'}
                            icon={memberIcon}
                            logo={galvanizeLogo}
                        >
                            <Typography><em>"Galvanize is the recognized leader in technology education with a focus in software development, data science and data engineering. We have a world-renowned team of experienced, full-time instructional faculty with decades of experience among them."</em></Typography>
                        </AchievementCard>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} sm={12} md={8}>
                        <Grid container>
                        {/* Sigma Tau Delta */}
                            <Grid item xs={12} sm={12} md={12}>
                                <AchievementCard
                                    theme = {theme}
                                    marginBottom = {'32px'}
                                    achievementAffiliation={'Sigma Tau Delta - International English Honors Society'}
                                    achievement={'Honorary Member'}
                                    year={'2016'}
                                    icon={certificateIcon}
                                    logo={stdLogo}
                                    adjacentToDate={(
                                        <Fab onClick={() => {this.handleOpenModal('Sigma Tau Delta')}} style={{marginTop: '-8px', marginLeft: '5px'}} size="small" color="primary">
                                            <FaRegImages></FaRegImages>
                                        </Fab>
                                    )}
                                >
                                    <Typography><strong>One of the top 30% of writers internationally to receive an invitation.</strong> Eligibility requires the demonstration of high writing proficiency, a combination of courses taken, and a minimum 3.0 GPA.</Typography>
                                </AchievementCard>
                            </Grid>
                            {/* Jlabs */}
                            <Grid item xs={12} sm={12} md={12}>
                                    <AchievementCard
                                        theme = {theme}
                                        marginBottom = {'32px'}
                                        achievementAffiliation={'Johnson & Johnson 2018 Digital Beauty QuickFire Challenge'}
                                        achievement={'Top 5 Finalist'}
                                        year={'2018'}
                                        icon={trophyIcon}
                                        logo={jlabsLogo}
                                    >
                                        <Typography>Participate in an international tech challenge sponsored by Johnson & Johnson Innovation, JLABS (JLABS) and Johnson & Johnson Consumer Inc.</Typography>
                                    </AchievementCard>
                            </Grid>
                            {/* MassChallenge */}
                            <Grid item xs={12} sm={12} md={12}>
                                    <AchievementCard
                                        theme = {theme}
                                        achievementAffiliation={'MassChallenge Accelerator - Boston'}
                                        achievement={'Round 2 Finalist'}
                                        year={'2018'}
                                        icon={trophyIcon}
                                        logo={massChallengeLogo}
                                    >
                                        <Typography>As the Chief Technology Officer of Skinno Inc., communicate the company's computer vision software to judges & investors.</Typography>
                                    </AchievementCard>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Modal
                open={this.state.openModal}
                onClose={this.handleCloseModal}>
                    <div style={{position: 'relative'}}>
                        {this.generateLeftArrow()}
                        <Card className={this.props.classes.hobbyCard}>
                            <div className={this.props.classes.cardMediaContainer}>
                                <CardMedia
                                onClick={() => {window.open(achievements[this.state.activeAchievementKey].images[this.state.activeAchievementIdx])}}
                                className={this.props.classes.hobbyCardMedia}
                                image={achievements[this.state.activeAchievementKey].images[this.state.activeImageIdx]}
                                title={this.state.activeHobbyKey}
                                />
                            </div>
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {this.state.activeAchievementKey}
                            </Typography>
                            <Typography component="p">
                                {achievements[this.state.activeAchievementKey].description[this.state.activeAchievementIdx]}
                            </Typography>
                            </CardContent>
                        </Card>
                        {this.generateRightArrow()}
                    </div>
            </Modal>
            </section>
        )
    }
}

export default withStyles(jssStyle, {withTheme: true})(Achievements);