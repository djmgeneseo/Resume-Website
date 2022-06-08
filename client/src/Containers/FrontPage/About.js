import React, {Component, Fragment} from 'react';
import { withStyles } from '@material-ui/styles'; // jss library

import resume from '../../assets/pdf/David_Murphy_Resume.pdf'

import {Slide, CardContent, CardMedia, Card, IconButton, Fab, Tooltip, Grid, Toolbar, AppBar, Typography, Paper} from '@material-ui/core';

import {FaFileDownload,FaLinkedin,FaGithub} from "react-icons/fa";

const selfPortrait = require('../../assets/img/me.png')

const cyclingPics = [require('../../assets/img/hobbies/bicycle.jpg')]
const hikingPics = [require('../../assets/img/hobbies/hike_1.jpg'),
                    require('../../assets/img/hobbies/hike_2.jpg'),
                    require('../../assets/img/hobbies/hike_3.jpg'),
                    require('../../assets/img/hobbies/hike_4.jpg'),
                    require('../../assets/img/hobbies/hike_5.jpg'),
                    require('../../assets/img/hobbies/hike_6.jpg')]

const drummingPics = [require('../../assets/img/hobbies/drum_1.jpg'),
                    require('../../assets/img/hobbies/drum_2.jpg')]

const snowboardingPics = [require('../../assets/img/hobbies/snowboard_1.jpg'),
                        require('../../assets/img/hobbies/snowboard_2.jpg'),
                        require('../../assets/img/hobbies/snowboard_3.jpg')]

const volleyballPics = [require('../../assets/img/hobbies/volleyball.jpg')]

const tennisPics = [require('../../assets/img/hobbies/tennis_1.jpg'),
                    require('../../assets/img/hobbies/tennis_2.jpg'),
                    require('../../assets/img/hobbies/tennis_3.png')]

const surfingPics = [require('../../assets/img/hobbies/surf_1.jpg')]

const researchPics = [require('../../assets/img/hobbies/research_1.png')]

const climbingPics = [require('../../assets/img/hobbies/climb_2.jpg'), 
                    require('../../assets/img/hobbies/climb_1.jpg'), 
                    require('../../assets/img/hobbies/climb_3.jpg')]

const jssStyle = theme => ({
    sectionBackground: {
        background: `linear-gradient(270deg, #cfcfcfbd, ${theme.palette.primary['50']}, #c8c8c8, ${theme.palette.primary['50']}, ${theme.palette.primary['50']}, #c8c8c8, #cfcfcfbd)`,
        backgroundSize: '1000% 1000%',
        animation: '$BackgroundAnimation 16s ease infinite',
        paddingTop: '75px',
        paddingBottom: '75px'
    },
    /*
    '@keyframes rotate-center': {
        '0%': {
                  transform: 'rotate(0)'
        },
        '100%': {
                  transform: 'rotate(360deg)'
        }
      },
    */
    inflate: {
        transform: 'scale(1.2) !important',
        zIndex: '190',
    },
    sectionAboutCard: {
        maxWidth: '1280px',
        margin: 'auto auto'
    },
    flipContainer: {
        perspective: '1000px'
        // '&:hover $flipper, $flipContainer:hover $flipper': {
        //     transform: 'rotateY(180deg)'
        // }
    },
    flipper: {
        transition: '0.6s',
        transformStyle: 'preserve-3d',
        position: 'relative'
    },
    frontOfCard: {
        backfaceVisibility: 'hidden',
        zIndex: '2',
	    transform: 'rotateY(0deg)'
    },  
    backOfCard: {
        backfaceVisibility: 'hidden',
        overflowY: 'scroll',
        position: 'absolute',
        top: '0',
        left: '0',
        transform: 'rotateY(180deg)',
        width: '100%',
        height: '100%'
    },
    aboutMeHeader: {
        paddingBottom: '15px',
        position: 'relative',
        '&:after': {
            position: 'absolute',
            display: 'inline-block',
            content: "''",
            left: '0',
            width: '65px',
            height: '3px',
            borderBottom: '3px solid',
            color: theme.palette.primary['500'],
            marginTop: '1.2em'
        }
    },
    hobbiesHeader: {
        position: 'absolute',
        left: '0',
        top: '0',
        paddingLeft: '50px',
        paddingTop: '25px',
        '&:after': {
            position: 'absolute',
            display: 'inline-block',
            content: "''",
            width: '65px',
            height: '3px',
            left: '50px',
            borderBottom: '3px solid',
            color: theme.palette.primary['500'],
            marginTop: '1.2em'
        }
    },
    hobbyIconCollectionContainer: {
        textAlign: 'center',
    },
    hobbyIconContainer: {
        display: 'inline-block',
        transition: 'margin .75s',
        margin: '5px',
        '&:hover $hobbyIcon': {
            transform: 'rotateY(180deg)',
            transition: 'transform .50s'
        }
    },
    hobbyIcon: {
        width: '89px',
        cursor: 'pointer',
        transition: 'transform .75s',
        boxShadow: '0px 3px 5px -1px rgba(0,0,0,0.2), 0px 6px 10px 0px rgba(0,0,0,0.14), 0px 1px 18px 0px rgba(0,0,0,0.12)',
        borderRadius: '50%'
    },
    hobbyPictureCardContainer: {
        textAlign: 'center',
        margin: '50px 0px',
        position: 'relative'
    },
    hobbyCard: {
        maxWidth: '80%',
        margin: 'auto',
    },
    cardMediaContainer: {
        position: 'relative', 
        overflow: 'hidden',
        '&:hover $hobbyCardMedia': {
            transform: 'scale(1.2)'
        }
    },
    hobbyCardMedia: {
        height: '170px',
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
        borderWidth: '0 6px 6px 0',
        display: 'inline-block',
        padding: '3px',
        width: '15px',
        height: '15px',
        cursor: 'pointer'
      },
    right: {
        transform: 'rotate(-45deg)',
        position: 'absolute',
        right: '5%',
        top: '50%'
    },
    left: {
        transform: 'rotate(135deg)',
        position: 'absolute',
        left: '5%',
        top: '50%'
    },
    aboutMeCard: {
        // max width instead?
        position: 'relative',
        minHeight: '446px',
        // width: '70%',
        // marginLeft: '15%',
        borderRadius: '0px',
        zIndex: '100'
    },
    frontCardBody: {
        boxSizing: 'border-box',
        alignItems: 'center',
        height: '87%',
        paddingTop: '30px',
        paddingBottom: '30px'
    },
    backCardBody: {
        boxSizing: 'border-box',
        alignItems: 'center',
        height: '87%',
        paddingBottom: '50px',
        overflowY: 'auto'
    },
    downloadResumeButton: {
        position: 'absolute',
        zIndex: '5',
        '& button': {
            width: '45px',
            height: '45px'
        }
    },
    downloadResumeIcon: {
        fontSize: '18px'
    },
    circularImageContainer: {
        position: 'relative',
        width: '200px',
        height: '200px',
        overflow: 'hidden',
        borderRadius: '50%',
        '&::after': {
            content: "' '",
            position: 'absolute',
            width: '200px',
            height: '200px',
            top: 0,
            left: 0,
            boxShadow: 'inset 0 0 20px 4px rgba(0, 0, 0, 0.44)',
            borderRadius: '50%'
        },
        '& img': {
            position: 'relative',
            width: '100%',
            height: '100%'
        }
    },
    aboutMeSection: {
        paddingRight: '50px'
    },
    infoSpan: {
        float: 'left',
        width: '80px',
        textTransform: 'uppercase',
        fontWeight: '600'
    },
    contactButton: {
        marginTop: '10px'
    },
    footer: {
        textAlign: 'center',
        position: 'absolute',
        bottom: '0'
    },
    footerButton: {
        margin: '11px',
        display: 'inline-block'
    },
    footerButtonIcon: {
        fontSize: '23px'
    },
    tooltipPopper: {
        // backgroundColor: theme.palette.primary['500']
        height: '40px !important'
    },
    arrowBox: {
        position: 'absolute',
        width: '50px',
        height: '50px',
        top: '-2%',
        right: '7%',
        cursor: 'pointer',
        zIndex: '100',
        transform: 'translate(-50%, -60%)',
        animation: '$flip-scale-up-hor 1s cubic-bezier(0.455, 0.030, 0.515, 0.955) 1s both',
        '&:hover $curvedArrow': {
            transform: 'rotateX(180deg) scale(1.2) !important'
        }
    },
      curvedArrow: {
          width: '0',
          height: '0',
          position: 'relative',
          transform: 'rotate(-9deg)',
          borderTop: '50px solid transparent',
          borderRight: `50px solid ${theme.palette.primary['500']}`,
          transition: 'transform .5s',
          '&::after': {
              top: '-57px',
              left: '-27px',
              width: '63px',
              border: '0 solid transparent',
              height: '14px',
              content: "' '",
              position: 'absolute',
              transform: 'rotate(45deg)',
              borderTop: `26px solid ${theme.palette.primary['500']}`,
              borderRadius: '107px 0 0 0'
          }
      },
    '@media only screen and (max-width: 1300px)': { // Smaller desktop/laptop screens
        aboutMeSection: {
            padding: '35px',
            paddingTop: '15px'
        },
        frontCardBody: {
            paddingTop: '20px',
            paddingBottom: '69px'
        },
        aboutMeCard: {
            width: '85%',
            marginLeft: '7.5%'
        }
    },
    '@keyframes BackgroundAnimation': { 
        '0%': {backgroundPosition:'0% 2%'},
        '50%':{backgroundPosition:'100% 99%'},
        '100%':{backgroundPosition:'0% 2%'}
    },
    '@keyframes rotate-vert-center': {
        '0%': {
                  transform: 'rotateY(0)'
        },
        '100%': {
                  transform: 'rotateY(360deg)'
        }
    },
    '@keyframes flip-scale-up-hor': {
        '0%': {
                  transform: 'scale(1) rotateX(0)'
        },
        '50%': {
                  transform: 'scale(1.5) rotateX(-180deg)'
        },
        '100%': {
                  transform: 'scale(1) rotateX(-360deg)'
        }
    },
    '@media only screen and (max-width: 959px)': { // Tablet screens
        hobbyIconCollectionContainer: {
            paddingTop: '50px'
        }
    },
    '@media only screen and (max-width: 600px)': { // Phone screens
        backCardBody: {
            padding: '75px 25px'
        },
        right: {
            right: '-10px',
        },
        left: {
            left: '-10px'
        },
        hobbiesHeader: {
            paddingLeft: '25px',
            '&:after': {
                left: '25px'
            }
        }
    }
})

// for the front-facing portion of the about card
const info = {
    Age: new Date().getMonth() < 8 ? new Date().getFullYear() - 1994 -1 : new Date().getFullYear()- 1994,
    Phone: '(516) 993-7871',
    Email: 'djmgeneseo@gmail.com',
    Home: 'Long Island - Oceanside, NY'
}

// for the rear-facing portion of the about card
const hobbies = {
    'Cycling': {
        icon: require('../../assets/icons/hobbies/bicycle.png'),
        description: ['I bought this Domane AL 2 as my first road bike in August of 2018. By September of that year, I reached my furthest cycling distance of 37.47 miles in 4h 02m 27s.'],
        images: cyclingPics
    },
    'Hiking': {
        icon: require('../../assets/icons/hobbies/boots.png'),
        description: ["The Ein Gedi in Israel, located south-east of Jerusalem. This picture (Spring 2014) was taken nearby the Dead Sea - Earth's lowest on-land elevation.", "Half-way point to the top of the 1240ft Breakneck Ridge (Aug 2018). Located just 1 hour north of NYC along the Hudson River.", "Cathedral Rock - Sedona, Arizona (April 2019)", "Devil's Bridge - Sedona, Arizona (April 2019)", "Grand Canyon (Southern Rim) - Grand Canyon National Park, Arizona (April 2019)", "Angel's Landing - Zion National Park, Utah (April 2019)"],
        images: hikingPics
    },
    'Drumming': {
        icon: require('../../assets/icons/hobbies/drums.png'),
        description: ["Battle of the Bands at my hometown High School in Oceanside, NY (Spring 2012).", "Live at my High School reunion/charity event (with a different band) on my High School's football field (Summer 2014)."],
        images: drummingPics
    },
    'Snowboarding': {
        icon: require('../../assets/icons/hobbies/snowboard.png'),
        description: ['My first snowboarding trip! I (right) purchased this board and pair of boots from Facebook Marketplace and hit the slopes the next day. Mountain Creek, NJ (~1300ft elevation) (Jan 2019).', "After 3 sessions and many bruises later, I finally felt comfortable carving both toeside and heelside on blue squares. One month later - armed with new bindings and a new pair of boots - I felt confident enough to hit my first-ever black diamond. For the next two months, feeling unsatisfied about waiting for the weekend to snowboard, I started to find time during the week. I was hooked. (February 2019 @ Mountain Creek, NJ)", "By the end of the season, I could hit almost every black diamond, and made my first steps into the terrain park. Pictured is me with my new board setup @ Killington Mountain, VT (~4500ft). Other mountains I visited before the season's close include Hunter Mountain, Mount Snow, and Camelback."],
        images: snowboardingPics
    },
    'Volleyball': {
        icon: require('../../assets/icons/hobbies/volleyball.png'),
        description: ["Pictured is my Geneseo club Volleyball team versing SUNY Buffalo. I was vice president on the e-board, and designated right-side hitter (Nov 2016)."],
        images: volleyballPics
    },
    'Tennis': {
        icon: require('../../assets/icons/hobbies/tennis.png'),
        description: ["I started playing Tennis in the Spring of '18. At this point, I was self-taught; here's me, applying skills I learned after watching Youtube tutorials and the pros play live. I recorded myself playing against the wall to debug my forehand and serve after every practice (Spring 2018).", "By the end of the Summer, I met old friends and new players who helped push me to NTRP level 3.0. Pictured is a still-frame from a video I recorded of a late-summer session. At this point, I recorded myself to debug my backhand (Summer 2018).", "I joined the Long Beach USTA 3.0 League in the Spring of 2019...and rediscovered how difficult tennis is. Playing others rekindled my drive to continue debugging my ground strokes and service game."],
        images: tennisPics
    },
    'Surfing': {
        icon: require('../../assets/icons/hobbies/surfboard.png'),
        description: ["Me (on the right - Summer 2017) teaching my friend from upstate how to surfboard. I've been surfing since the Summer of 2014."],
        images: surfingPics
    },
    'Research': {
        icon: require('../../assets/icons/hobbies/research.png'),
        description: ["I completed my mentor-guided research on forest succession at Geneseo in 2016. I utilized transect data from a 1999 study of the Roemer Arboretum to parameterize a transition matrix model that predicts the arboretum’s future tree composition."],
        images: researchPics
    },
    'Climbing': {
        icon: require('../../assets/icons/hobbies/climbing.png'),
        description: ["I've been indoor climbing since 2014, and recently decided to take climbing outdoors. The crashpad on my back is meant to support climbing falls of up to 20ft. Pictured is me at the half-way point up Bear Mountain, NY (1200ft) (April 2019)", "One of two boulders I found with decent holds for many possible climbing routes (April 2019). I am currently developing an App with a fellow climber and developer to make sharing rare climbing spots easy. Many boulders exist that have evaded the more popular yet unmaintained climbing databases.", "Lately I've been climbing in the gym at Island Rock (Plainview, NY). In preparation to transition into lead climbing, I turned my focus in the gym onto top roping. Pictured is me warming-up on a graded 5.9 problem. My highest achieved grade is 5.10d (April 2019)"],
        images: climbingPics
    }
}

/**
 * Props:
 * @param {json} classes
 */
class About extends Component {
    classes = this.props.classes;

    state = {
        flippedCard: false,
        activeHobbyKey: 'Cycling',
        activeImageIdx: 0
    }

    /**
     * Handler for when user clicks on a hobby button on rear-facing portion of about me card
     * @param {string} newHobbyKey
     */
    handleActiveHobbyClick = (newHobbyKey) => {
        this.setState({
            activeHobbyKey: newHobbyKey,
            activeImageIdx: 0
        })
    }

    /**
     * Handler for when user clicks on the 'next picture' arrow on rear-facing portion of about me card
     * @param {number} additionOrSubtration - either a '1' or '-1'
     */
    handleArrowClick = (additionOrSubtraction) => {
        this.setState(state => {
            return {
                activeImageIdx: state.activeImageIdx + additionOrSubtraction
            }
        })
    }

    /**
     * Generate the hobby card on the rear-facing portion of the about me card that corresponds with the currently selected hobby (that the user has chosen)
     */
    generateHobbyPictureCard = () => {
        return (
            <Card className={this.props.classes.hobbyCard}>
                <div className={this.props.classes.cardMediaContainer}>
                    <CardMedia
                    onClick={() => {window.open(hobbies[this.state.activeHobbyKey].images[this.state.activeImageIdx])}}
                    className={this.props.classes.hobbyCardMedia}
                    image={hobbies[this.state.activeHobbyKey].images[this.state.activeImageIdx]}
                    title={this.state.activeHobbyKey}
                    />
                </div>
                <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    {this.state.activeHobbyKey}
                </Typography>
                <Typography component="p">
                    {hobbies[this.state.activeHobbyKey].description[this.state.activeImageIdx]}
                </Typography>
                </CardContent>
            </Card>
            )
    }
    
    /**
     * Generate all hobby icons based on the hobbies json variable. Should only be called once. The hobby button that corresponds with the currently selected hobby should increase in scale, based on the "inflate" class
     */
    generateHobbyIcons = () => {
        return Object.keys(hobbies).map((hobby, hobbyIdx) => {
            if((hobbyIdx+1)%3 === 0) { // push icon to new row
                return (
                    <Fragment key={hobby+hobbyIdx}>
                        <div 
                            onClick={()=>{this.handleActiveHobbyClick(hobby)}} 
                            className={this.props.classes.hobbyIconContainer}>
                            <img  
                                className={
                                    hobby === this.state.activeHobbyKey ? this.props.classes.hobbyIcon + " " + this.props.classes.inflate : this.props.classes.hobbyIcon
                                } 
                                alt={hobby + ' icon'} 
                                src={hobbies[hobby].icon}/>
                        </div>
                        <br/>
                    </Fragment>
                )
            }
            return (
                <div 
                    onClick={()=>{this.handleActiveHobbyClick(hobby)}} 
                    className={this.props.classes.hobbyIconContainer} key={hobby+hobbyIdx}>
                    <img        
                        className={
                            hobby === this.state.activeHobbyKey ? 
                            this.props.classes.hobbyIcon + " " + this.props.classes.inflate : this.props.classes.hobbyIcon
                        } 
                        alt={hobby + ' icon'} 
                        src={hobbies[hobby].icon}/>
                </div>
            )
        })
    }

    /**
     * Generates the front-facing portion of the about me card. Should only be called once.
     */
    generateFrontOfCard = () => {
        return (
            <Paper className={this.props.classes.aboutMeCard}>
                <Grid container>
                    <Grid container className={this.props.classes.frontCardBody}>
                        <Grid item xs={12} sm={12} md={6} style={{textAlign: "center"}} >
                            <div style={{display: 'inline-block'}} className={this.props.classes.downloadResumeButton}>
                                <a target="_blank" rel="noopener noreferrer" href={resume}>
                                    <Tooltip 
                                        leaveDelay={100} 
                                        title="DOWNLOAD RESUME" 
                                        placement='top' 
                                        color='primary' 
                                        classes={{ popper: this.props.classes.tooltipPopper }}>
                                        <Fab color="primary">
                                            <FaFileDownload className={this.props.classes.downloadResumeIcon}/>
                                        </Fab>
                                    </Tooltip>
                                </a>
                            </div>
                            <div style={{display: "inline-block"}}  className={this.props.classes.circularImageContainer}>
                                <img alt='Self Portrait of David Murphy' src={selfPortrait}/>
                            </div>
                            <Typography variant="h4" style={{marginTop: '10px'}}>David Murphy</Typography>
                            <Typography style={{padding: '5px', fontWeight: "bold"}} variant="body2" color="primary">Applications Developer/Implementation Specialist <br/> <span style={{fontWeight: 'normal'}}>@</span> Molloy College</Typography>
                        </Grid>
                        <Grid className={this.props.classes.aboutMeSection} item xs={12} sm={12} md={6}>
                            <Typography className={this.props.classes.aboutMeHeader} variant="h5">
                            ABOUT ME
                            </Typography> 
                            <Typography variant="body1" style={{display: 'inline'}}>
                                I'm a <strong>Full Stack Mobile and Web Developer</strong> with experience in both entrepreneurial and collegiate working environments. I predominantly develop software with two stacks, but am often required to learn new languages & frameworks: [jQuery, HTML/CSS/JS, PHP, SQL, MySQL, IIS] and [React, materialUI, HTML/CSS/JS, nodeJS, MongoDB].
                            </Typography>
    
                            <div style={{marginTop: '10px'}}>
                            {
                                this.generateBioAndInfo()
                            }
                            </div>
    
                            {/* <Button variant="contained" color='primary' style={{marginTop: '20px'}}>CONTACT ME</Button> */}
                        </Grid>
                    </Grid>
                    <Grid container className={this.props.classes.footer}>
                        <AppBar position="static" color="primary">
                            <Toolbar style={{textAlign: 'center', display: 'inline-block'}}>
                                <div className={this.props.classes.footerButton}>
                                    <a href='https://www.linkedin.com/in/david-murphy-830671106/' target="_blank" rel="noopener noreferrer">
                                        <IconButton color="secondary">
                                            <FaLinkedin className={this.props.classes.footerButtonIcon}/>
                                        </IconButton>
                                    </a>
                                </div>
                                <div className={this.props.classes.footerButton}>
                                    <a href='https://github.com/djmgeneseo' target="_blank" rel="noopener noreferrer">
                                        <IconButton color="secondary">
                                        <FaGithub className={this.props.classes.footerButtonIcon}/>
                                        </IconButton>
                                    </a>
                                </div>
                            </Toolbar>
                        </AppBar>
                    </Grid>
                </Grid>
            </Paper>
        )
    }

    /**
     * Generates the left chevron arrow, intended to be adjacent to the hobby card on the rear-facing portion of the about me card. This function may or may not be called, depending on the location of the user in the photo gallery for a selected hobby.
     */
    generateLeftArrow = () => {
        if(hobbies[this.state.activeHobbyKey].images[this.state.activeImageIdx -1]) {
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

    /**
     * Generates the right chevron arrow, intended to be adjacent to the hobby card on the rear-facing portion of the about me card. This function may or may not be called, depending on the location of the user in the photo gallery for a selected hobby.
     */
    generateRightArrow = () => {
        if(hobbies[this.state.activeHobbyKey].images[this.state.activeImageIdx + 1]) {
            return (
                <i 
                    onClick={()=>{
                        this.handleArrowClick(1)
                    }} 
                    className={this.props.classes.arrowIcon + ' ' + this.props.classes.right}></i>
            )
        }
    }

    /**
     * Generates the rear-facing portion of the about me card. Should only be called once. 
     */
    generateBackOfCard = () => {
       return ( 
            <Paper className={this.props.classes.aboutMeCard}>
                <Grid container>
                    <Grid container className={this.props.classes.backCardBody}>
                        <Grid item xs={12} sm={12} md={6}>
                            <Typography className={this.props.classes.hobbiesHeader} variant="h5">
                                Hobbies
                            </Typography> 
                            <div className={this.props.classes.hobbyIconCollectionContainer}>
                                {this.generateHobbyIcons()}
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6}>
                            <div className={this.props.classes.hobbyPictureCardContainer}>
                                {this.generateLeftArrow()}
                                {this.generateHobbyPictureCard()}
                                {this.generateRightArrow()}
                            </div>
                        </Grid>
                    </Grid>
                    <Grid container className={this.props.classes.footer}>
                        <AppBar position="static" color="primary">
                            <Toolbar style={{textAlign: 'center', display: 'inline-block'}}>
                                <div className={this.props.classes.footerButton}>
                                    <a href='https://www.linkedin.com/in/david-murphy-830671106/' target="_blank" rel="noopener noreferrer">
                                        <IconButton color="secondary">
                                            <FaLinkedin className={this.props.classes.footerButtonIcon}/>
                                        </IconButton>
                                    </a>
                                </div>
                                <div className={this.props.classes.footerButton}>
                                    <a href='https://github.com/djmgeneseo' target="_blank" rel="noopener noreferrer">
                                        <IconButton color="secondary">
                                        <FaGithub className={this.props.classes.footerButtonIcon}/>
                                        </IconButton>
                                    </a>
                                </div>
                            </Toolbar>
                        </AppBar>
                    </Grid>
                </Grid>
            </Paper>
       )
    }

    /**
     * Utilizes data in the info json variable to generate 
     */
    generateBioAndInfo = () => {
        let props = this.props;
        return Object.keys(info).map(function(key) {
            return (
            <div key={key} style={{paddingTop: '5px'}}>
                <Typography variant="body1"><span className={props.classes.infoSpan}>{key}</span> {info[key]}</Typography>
            </div>)
        })
    }

    /**
     * Event handler for onClick of circular arrow located on both the front-side and rear-facing portion of the about me card 
     */
    handleCardFlip = () => {
        this.setState(state => ({
            flippedCard: !state.flippedCard
        }));
    }

    render() {
        return (
            <section className={this.props.classes.sectionBackground}>
                <div className={this.props.classes.sectionAboutCard}>
                    <Slide in={true} direction="right" timeout={500}>
                        <div className={this.props.classes.flipContainer}>
                        <div onClick={this.handleCardFlip} className={this.props.classes.arrowBox}>
                                    <div className={this.props.classes.curvedArrow}></div>
                                </div>
                            <div className={this.props.classes.flipper} style={ this.state.flippedCard === true? {transform: 'rotateY(180deg)'} : null}>
                                <div className={this.props.classes.frontOfCard}>
                                    {this.generateFrontOfCard()}
                                </div>
                                <div className={this.props.classes.backOfCard}>
                                    {this.generateBackOfCard()}
                                </div>
                            </div>
                        </div>
                    </Slide>
                </div>
            </section>
        )
    }
}

export default withStyles(jssStyle)(About)