import React, {Component, Fragment} from 'react';
import { withStyles } from '@material-ui/styles'; // jss library

import resume from '../../assets/pdf/David_Murphy_-_Full_Stack_Applications_Developer.pdf'

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import Tooltip from '@material-ui/core/Tooltip';
import Fab from '@material-ui/core/Fab';
// import Zoom from '@material-ui/core/Zoom';
import IconButton from '@material-ui/core/IconButton';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';

import {FaFileDownload} from "react-icons/fa";
import {FaLinkedin} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";
// import { Button } from '@material-ui/core';

const jssStyle = theme => ({
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
        paddingBottom: '15px',
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
    hobbyIcon: {
        width: '89px',
        cursor: 'pointer',
        transition: 'transform .25s',
        '&:hover': {
            transform: 'scale(1.2)',
            transition: 'transform .25s'
        }
    },
    hobbyCard: {
        maxWidth: '345px',
        margin: 'auto'
    },
    hobbyCardMedia: {
        height: '170px'
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
        padding: '50px'
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
    '@media only screen and (max-width: 1300px)': {
        aboutMeSection: {
            padding: '35px',
            paddingTop: '25px'
        },
        aboutMeCard: {
            width: '85%',
            marginLeft: '7.5%'
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
        icon: require('../../assets/icons/hobbies/bicycle.png'),
        description: 'Dummy text',
        image: require('../../assets/img/me.png')
    },
    'Hiking': {
        icon: require('../../assets/icons/hobbies/boots.png'),
        description: 'Dummy text',
        image: require('../../assets/img/me.png')
    },
    'Piano': {
        icon: require('../../assets/icons/hobbies/keyboard.png'),
        description: 'Dummy text',
        image: require('../../assets/img/me.png')
    },
    'Snowboarding': {
        icon: require('../../assets/icons/hobbies/snowboard.png'),
        description: 'Dummy text',
        image: require('../../assets/img/me.png')
    },
    'Volleyball': {
        icon: require('../../assets/icons/hobbies/volleyball.png'),
        description: 'Dummy text',
        image: require('../../assets/img/me.png')
    },
    'Tennis': {
        icon: require('../../assets/icons/hobbies/tennis.png'),
        description: 'Dummy text',
        image: require('../../assets/img/me.png')
    },
    'Surfing': {
        icon: require('../../assets/icons/hobbies/surfboard.png'),
        description: 'Dummy text',
        image: require('../../assets/img/me.png')
    },
    'Research': {
        icon: require('../../assets/icons/hobbies/research.png'),
        description: 'Dummy text',
        image: require('../../assets/img/me.png')
    },
    'Climbing': {
        icon: require('../../assets/icons/hobbies/climbing.png'),
        description: 'Dummy text',
        image: require('../../assets/img/me.png')
    }
}

class About extends Component {
    classes = this.props.classes;

    state = {
        flippedCard: false,
        activeHobbyKey: 'Cycling' 
    }

    handleActiveHobbyKey = (newHobbyKey) => {
        this.setState({
            activeHobbyKey: newHobbyKey
        })
        console.log(this.state.activeHobbyKey)
    }

    generateHobbyCard = () => {
        return (<Card className={this.classes.hobbyCard}>
                <CardMedia
                className={this.classes.hobbyCardMedia}
                image={hobbies[this.state.activeHobbyKey].image}
                title={this.state.activeHobbyKey}
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    {this.state.activeHobbyKey}
                </Typography>
                <Typography component="p">
                    {hobbies[this.state.activeHobbyKey].description}
                </Typography>
                </CardContent>
            </Card>)
    }
    
    generateHobbyIcons = () => {
        return Object.keys(hobbies).map((hobby, hobbyIdx) => {
            if((hobbyIdx+1)%3 === 0) {
                return (
                    <Fragment key={hobby+hobbyIdx}>
                        <img onClick={()=>{this.handleActiveHobbyKey(hobby)}} className={this.classes.hobbyIcon} alt={hobby + ' icon'} src={hobbies[hobby].icon}/>
                        <br/>
                    </Fragment>
                )
            }
            return (
                <img onClick={()=>{this.handleActiveHobbyKey(hobby)}} key={hobby+hobbyIdx} className={this.classes.hobbyIcon} alt={hobby + ' icon'} src={hobbies[hobby].icon}/>
            )
        })
    }

    generateFrontOfCard = () => {
        return (
            <Paper className={this.classes.aboutMeCard}>
                <Grid container>
                    <Grid container className={this.classes.frontCardBody}>
                        <Grid item xs={12} sm={12} md={6} style={{textAlign: "center"}} >
                            <div style={{display: 'inline-block'}} className={this.classes.downloadResumeButton}>
                                <a target="_blank" rel="noopener noreferrer" href={resume}>
                                    <Tooltip 
                                        leaveDelay={100} 
                                        title="DOWNLOAD RESUME" 
                                        placement='top' 
                                        color='primary' 
                                        classes={{ popper: this.classes.tooltipPopper }}>
                                        <Fab color="primary">
                                            <FaFileDownload className={this.classes.downloadResumeIcon}/>
                                        </Fab>
                                    </Tooltip>
                                </a>
                            </div>
                            <div style={{display: "inline-block"}}  className={this.classes.circularImageContainer}>
                                <img alt='Self Portrait of David Murphy' src={require('../../assets/img/me.png')}/>
                            </div>
                            <Typography variant="h4" style={{marginTop: '10px'}}>David Murphy</Typography>
                            <Typography style={{padding: '5px', fontWeight: "bold"}} variant="body2" color="primary">Applications Developer/Implementation Specialist <br/> <span style={{fontWeight: 'normal'}}>@</span> Molloy College</Typography>
                        </Grid>
                        <Grid className={this.classes.aboutMeSection} item xs={12} sm={12} md={6}>
                            <Typography className={this.classes.aboutMeHeader} variant="h5">
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
                    <Grid container className={this.classes.footer}>
                        <AppBar position="static" color="primary">
                            <Toolbar style={{textAlign: 'center', display: 'inline-block'}}>
                                <div className={this.classes.footerButton}>
                                    <a href='https://www.linkedin.com/in/david-murphy-830671106/' target="_blank" rel="noopener noreferrer">
                                        <IconButton color="secondary">
                                            <FaLinkedin className={this.classes.footerButtonIcon}/>
                                        </IconButton>
                                    </a>
                                </div>
                                <div className={this.classes.footerButton}>
                                    <a href='https://github.com/djmgeneseo' target="_blank" rel="noopener noreferrer">
                                        <IconButton color="secondary">
                                        <FaGithub className={this.classes.footerButtonIcon}/>
                                        </IconButton>
                                    </a>
                                </div>
                            </Toolbar>
                        </AppBar>
                    </Grid>
                </Grid>
                <div onClick={this.handleCardFlip} className={this.classes.arrowBox}>
                    <div className={this.classes.arrowRound}></div>
                </div>
            </Paper>
        )
    }

    generateBackOfCard = () => {
       return ( <Paper className={this.classes.aboutMeCard}>
                <Grid container>
                    <Grid container className={this.classes.backCardBody}>
                        <Grid item xs={12} sm={12} md={6}>
                            <Typography className={this.classes.hobbiesHeader} variant="h5">
                                Hobbies
                            </Typography> 
                            <div style={{textAlign: 'center'}}>
                                {this.generateHobbyIcons()}
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6}>
                            <div style={{textAlign: 'center'}}>
                                {this.generateHobbyCard()}
                            </div>
                        </Grid>
                    </Grid>
                    <Grid container className={this.classes.footer}>
                        <AppBar position="static" color="primary">
                            <Toolbar style={{textAlign: 'center', display: 'inline-block'}}>
                                <div className={this.classes.footerButton}>
                                    <a href='https://www.linkedin.com/in/david-murphy-830671106/' target="_blank" rel="noopener noreferrer">
                                        <IconButton color="secondary">
                                            <FaLinkedin className={this.classes.footerButtonIcon}/>
                                        </IconButton>
                                    </a>
                                </div>
                                <div className={this.classes.footerButton}>
                                    <a href='https://github.com/djmgeneseo' target="_blank" rel="noopener noreferrer">
                                        <IconButton color="secondary">
                                        <FaGithub className={this.classes.footerButtonIcon}/>
                                        </IconButton>
                                    </a>
                                </div>
                            </Toolbar>
                        </AppBar>
                    </Grid>
                </Grid>
                <div onClick={this.handleCardFlip} className ={this.classes.arrowBox}>
                    <div className={this.classes.arrowRound}></div>
                </div>
            </Paper>
       )
    }

    generateBioAndInfo = () => {
        const classes = this.classes;
        return Object.keys(info).map(function(key) {
            return (
            <div key={key} style={{paddingTop: '5px'}}>
                <Typography variant="body1"><span className={classes.infoSpan}>{key}</span> {info[key]}</Typography>
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
            <section className={this.classes.sectionAboutCard}>
                <div className={this.classes.flipContainer}>
                    <div className={this.classes.flipper} style={ this.state.flippedCard === true? {transform: 'rotateY(180deg)'} : null}>
                        <div className={this.classes.frontOfCard}>
                            {this.generateFrontOfCard()}
                        </div>
                        <div className={this.classes.backOfCard}>
                            {this.generateBackOfCard()}
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default withStyles(jssStyle)(About)