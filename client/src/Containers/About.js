import React, {Component, Fragment} from 'react';
import { withStyles } from '@material-ui/styles'; // jss library

import resume from '../assets/pdf/David_Murphy_-_Full_Stack_Applications_Developer.pdf'

import {Fade, CardContent, CardMedia, Card, IconButton, Fab, Tooltip, Grid, Toolbar, AppBar, Typography, Paper} from '@material-ui/core';

import {FaFileDownload} from "react-icons/fa";
import {FaLinkedin} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";
import { isAbsolute } from 'path';
// import { Button } from '@material-ui/core';

const jssStyle = theme => ({
    inflate: {
        transform: 'scale(1.2) !important',
        zIndex: '190',
    },
    sectionAboutCard: {
        maxWidth: '1280px',
        margin: '75px auto'
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
        borderWidth: '0 3px 3px 0',
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
        paddingBottom: '50px'
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
        top: '5%',
        right: '0%',
        marginRight: '-20px',
        cursor: 'pointer',
        transform: 'translate(-50%, -60%)',
        '&:hover $arrowRound': {
            transform: 'rotate(1turn) scale(1.2)'
        }
      },
    arrowRound: {
        position: 'absolute',
        width: '50px',
        height: '50px',
        border: 'calc(50px / 4) solid '+theme.palette.primary['500'],
        borderRadius: '50%',
        borderRightColor: 'transparent',
        transition: 'transform .5s',
        '&::after': {
            content: "' '",
            position: 'absolute',
            top: '-22.5%',
            left: '65%',
            border: 'calc(50px * 0.5) solid #fff',
            borderBottomColor: theme.palette.primary['500'],
            borderLeftColor: 'transparent',
            borderTopWidth: '0',
            borderRightWidth: '0'
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

const info = {
    Age: 24,
    Phone: '(516) 993-7871',
    Email: 'djmgeneseo@gmail.com',
    Home: 'Long Island - Oceanside, NY'
}

const hobbies = {
    'Cycling': {
        icon: require('../assets/icons/hobbies/bicycle.png'),
        description: ['I bought this Domane AL 2 as my first road bike in August of 2018. By September of that year, my furthest recorded Distance reached 37.47 miles in 4h 02m 27s.'],
        images: [require('../assets/img/hobbies/bicycle.jpg')]
    },
    'Hiking': {
        icon: require('../assets/icons/hobbies/boots.png'),
        description: ["The Ein Gedi in Israel, located south-east of Jerusalem. This picture was taken nearby the Dead Sea - Earth's lowest elevation on land.", "Half-way point to the top of the 1240ft Breakneck Ridge, NY. Located 1 hour north of NYC along the Hudson River.", "Cathedral Rock - Sedona, Arizona", "Devil's Bridge - Sedona, Arizona", "Grand Canyon (Southern Rim) - Grand Canyon National Park, Arizona", "Angel's Landing - Zion National Park, Utah"],
        images: [require('../assets/img/hobbies/hike_1.jpg'), require('../assets/img/hobbies/hike_2.jpg'),require('../assets/img/hobbies/hike_3.jpg'),require('../assets/img/hobbies/hike_4.jpg'),require('../assets/img/hobbies/hike_5.jpg'),require('../assets/img/hobbies/hike_6.jpg')]
    },
    'Drumming': {
        icon: require('../assets/icons/hobbies/drums.png'),
        description: ['Battle of the Bands at my hometown High School in Oceanside, NY - 2012.', "Live at my High School reunion/charity event (with a different band) on my High School's football field - 2014."],
        images: [require('../assets/img/hobbies/drum_1.jpg'),require('../assets/img/hobbies/drum_2.jpg')]
    },
    'Snowboarding': {
        icon: require('../assets/icons/hobbies/snowboard.png'),
        description: ['My first snowboarding trip! I (right) purchased this board and pair of boots from Facebook Marketplace and hit the slopes the next day. January 2019 @ Mountain Creek, NJ (~1300ft elevation).', "After 3 sessions of many bruises and wipeouts, I finally felt comfortable carving both toeside and heelside on blue squares. One month later, armed with proper padding, new bindings, and a new pair of boots, I felt confident enough to hit my first-ever black diamond. February 2019 @ Mountain Creek, NJ.", "After snowboarding every weekend for two months, I was hooked. I could hit almost every black diamond, and began transitioning into the terrain park. Pictured is me with my new snowboard atop Killington Mountain, VT (~4500ft). Other mountains I visited before the season's close include Hunter Mountain, Mount Snow, and Camelback."],
        images: [require('../assets/img/hobbies/snowboard_1.jpg'),require('../assets/img/hobbies/snowboard_2.jpg'),require('../assets/img/hobbies/snowboard_3.jpg')]
    },
    'Volleyball': {
        icon: require('../assets/icons/hobbies/volleyball.png'),
        description: ["Pictured is my Geneseo club Volleyball team versing SUNY Buffalo. I was vice president on the e-board, and designated right-side hitter."],
        images: [require('../assets/img/hobbies/volleyball.jpg')]
    },
    'Tennis': {
        icon: require('../assets/icons/hobbies/tennis.png'),
        description: ["I started playing Tennis in the Summer of '18. At this point, I was self-taught; here's me, applying skills I learned after watching Youtube tutorials and the pros play live. I recorded myself playing against the wall to debug my forehand and serve after every practice.", "By the end of the Summer, I met old friends and new players who helped push me to NTRP level 3.0. Pictured is a still-frame from a video I recorded of a late-summer session. At this point, I recorded myself to debug my backhand."],
        images: [require('../assets/img/hobbies/tennis_1.jpg'),require('../assets/img/hobbies/tennis_2.jpg')]
    },
    'Surfing': {
        icon: require('../assets/icons/hobbies/surfboard.png'),
        description: ["Me (on the right) teaching my friend from upstate how to surfboard. Picture taken in the Summer of '18.  I've been surfing since the Summer of '14."],
        images: [require('../assets/img/hobbies/surf_1.jpg')]
    },
    'Research': {
        icon: require('../assets/icons/hobbies/research.png'),
        description: ["I completed my mentor-guided research on forest succession at Geneseo in 2016. I utilized transect data from a 1999 study of the Roemer Arboretum to parameterize a transition matrix model that predicts the arboretum’s future tree composition."],
        images: [require('../assets/img/hobbies/research_1.png')]
    },
    'Climbing': {
        icon: require('../assets/icons/hobbies/climbing.png'),
        description: ["I've been indoor climbing for over two years, and recently decided to take climbing outdoors. The crashpad on my back is meant to support climbing falls of up to 20ft. Pictured is me at the half-way point up Bear Mountain, NY (1200ft)", "One of two boulders I found with decent holds for many possible climbing routes. I am currently developing an App with a fellow climber and developer to make sharing rare climbing spots easy. Many boulders exist that have evaded the more popular yet unmaintained climbing databases.", "Lately I've been climbing in the gym at Island Rock (Plainview, NY). My focus is on top roping, to transition into the world of lead and sport climbing."],
        images: [require('../assets/img/hobbies/climb_2.jpg'), require('../assets/img/hobbies/climb_1.jpg'), require('../assets/img/hobbies/climb_3.jpg')]
    }
}

class About extends Component {
    classes = this.props.classes;

    state = {
        flippedCard: false,
        activeHobbyKey: 'Cycling',
        activeImageIdx: 0
    }

    handleActiveHobbyClick = (newHobbyKey) => {
        this.setState({
            activeHobbyKey: newHobbyKey,
            activeImageIdx: 0
        })
    }

    handleArrowClick = (additionOrSubtraction) => {
        this.setState(state => {
            return {
                activeImageIdx: state.activeImageIdx + additionOrSubtraction
            }
        })
    }

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
                                <img alt='Self Portrait of David Murphy' src={require('../assets/img/me.png')}/>
                            </div>
                            <Typography variant="h4" style={{marginTop: '10px'}}>David Murphy</Typography>
                            <Typography style={{padding: '5px', fontWeight: "bold"}} variant="body2" color="primary">Applications Developer/Implementation Specialist <br/> <span style={{fontWeight: 'normal'}}>@</span> Molloy College</Typography>
                        </Grid>
                        <Grid className={this.props.classes.aboutMeSection} item xs={12} sm={12} md={6}>
                            <Typography className={this.props.classes.aboutMeHeader} variant="h5">
                            ABOUT ME
                            </Typography> 
                            <Typography variant="body2">
                                Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose injected humour and the like. Various versions have evolved over the years, sometimes by accident, sometimes on purpose injected humour and the like.
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
                <div onClick={this.handleCardFlip} className={this.props.classes.arrowBox}>
                    <div className={this.props.classes.arrowRound}></div>
                </div>
            </Paper>
        )
    }

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
                <div onClick={this.handleCardFlip} className ={this.props.classes.arrowBox}>
                    <div className={this.props.classes.arrowRound}></div>
                </div>
            </Paper>
       )
    }

    generateBioAndInfo = () => {
        let props = this.props;
        return Object.keys(info).map(function(key) {
            return (
            <div key={key} style={{paddingTop: '5px'}}>
                <Typography variant="body1"><span className={props.classes.infoSpan}>{key}</span> {info[key]}</Typography>
            </div>)
        })
    }

    handleCardFlip = (event) => {
        this.setState(state => ({
            flippedCard: !state.flippedCard
        }));
    }

    render() {
        return (
            <section className={this.props.classes.sectionAboutCard}>
                <div className={this.props.classes.flipContainer}>
                    <div className={this.props.classes.flipper} style={ this.state.flippedCard === true? {transform: 'rotateY(180deg)'} : null}>
                        <div className={this.props.classes.frontOfCard}>
                            {this.generateFrontOfCard()}
                        </div>
                        <div className={this.props.classes.backOfCard}>
                            {this.generateBackOfCard()}
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default withStyles(jssStyle)(About)