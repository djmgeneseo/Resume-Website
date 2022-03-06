import React, { Component, Fragment } from 'react';
import { withStyles } from '@material-ui/styles'; // jss library
import {Card, CardActionArea, CardContent, Grid} from '@material-ui/core';

import {Experience, Portfolio, Achievements, About, Abilities, BlogSection} from './index';
import {NavBar, ColorPicker} from '../index';

import {Parallax} from '../../Components/index';

import scrollToComponent from 'react-scroll-to-component';

// Media
import { GoChevronUp, GoWatch, GoBriefcase, GoTools, GoBook } from "react-icons/go";
import { IoMdTrophy } from "react-icons/io";
import achievementsBackgroundImage from '../../assets/img/jumbo.jpg';

const jssStyle = theme => ({
    navHelperContainer: {
        position: 'fixed',
        right: '-3px',
        top: '40%',
        height: 'auto',
        zIndex: '1101'
    },
    icon: {
        width: '20px',
        height: 'auto',
        margin: 'auto auto',
        fontSize: '30px',
        color: theme.palette.primary['500']
    },
    topIcon: {
        color: '#fff'
    },
    backgroundColor: {
        backgroundColor: theme.palette.primary['500'],
        color: '#fff'
    },
    actionArea: {
        
    },
    '@media only screen and (max-width: 1400px)': { // for navHelper only; it's blocking text on smaller monitors/screens
        navHelperContainer: {
            right: '0%',
            top: 'auto',
            height: '55px',
            bottom: '0',
            display: 'flex',
            flexWrap: 'nowrap'
        },
        actionArea: {
            display: 'inline-flex !important'
        }
    },
    '@media only screen and (max-width: 600px)': { // Phone screens
        navHelperContainer: {
            left: '0%',
            right: '0%',
            bottom: '0',
            display: 'flex',
            flexWrap: 'nowrap'
        },
        actionArea: {
            display: 'inline-flex !important'
        }
    }
});

/**
 * Escorts user to different parts of the page
 * 
 * @param {ref} siteAbout - reference to site's about section
 */
export class FrontPage extends Component {

  render() {
      const {classes} = this.props;
      const navHelper = (
        <Card className={classes.navHelperContainer}>
                <CardActionArea className={classes.actionArea} onClick={() => scrollToComponent(this.aboutSection)}>
                    <CardContent className={classes.backgroundColor}>
                        <GoChevronUp className={classes.icon + ' ' + classes.topIcon}/>
                    </CardContent>
                </CardActionArea>
                <CardActionArea className={classes.actionArea} onClick={() => scrollToComponent(this.achievementsSection, {align: 'top'})}>
                    <CardContent>
                        <IoMdTrophy className={classes.icon}/>
                    </CardContent>
                </CardActionArea>
                <CardActionArea className={classes.actionArea} onClick={() => scrollToComponent(this.portfolioSection, {align: 'top'})}>
                    <CardContent>
                    <GoBriefcase className={classes.icon}/>
                    </CardContent>
                </CardActionArea>
                <CardActionArea className={classes.actionArea} onClick={() => scrollToComponent(this.experienceSection, {align: 'top'})}>
                    <CardContent>
                        <GoWatch className={classes.icon}/>
                    </CardContent>
                </CardActionArea>
                <CardActionArea className={classes.actionArea} onClick={() => scrollToComponent(this.abilitiesSection, {align: 'top'})}>
                    <CardContent>
                        <GoTools className={classes.icon}/>
                    </CardContent>
                </CardActionArea>
                <CardActionArea className={classes.actionArea} onClick={() => scrollToComponent(this.blogSection, {align: 'top'})}>
                    <CardContent>
                        <GoBook className={classes.icon}/>
                    </CardContent>
                </CardActionArea>
            </Card>
      )

    return (
        <Fragment>
            {navHelper}    
            <div ref={(ele) => { this.testRef = ele; }}></div>
            <NavBar theme={this.props.theme}/>
            <ColorPicker theme={this.props.theme} changeColorCallback={(color) => this.props.changeColor(color)}/>    
            <About ref={(ele) => { this.aboutSection = ele; }} theme={this.props.theme}/>
            <Parallax backgroundImage={achievementsBackgroundImage} theme={this.props.theme}>
            <Grid container style={{maxWidth: '1280px', margin: '0 auto'}}>
                <Achievements ref={(ele) => { this.achievementsSection = ele; }} theme={this.props.theme}/>
            </Grid>
            </Parallax>
            <Grid container style={{maxWidth: '1280px', margin: '0 auto'}}>
                <Portfolio ref={(ele) => { this.portfolioSection = ele; }} theme={this.props.theme}/>
                <Experience ref={(ele) => { this.experienceSection = ele; }} theme={this.props.theme}/>
            </Grid>
            <Abilities ref={(ele) => { this.abilitiesSection = ele; }} theme={this.props.theme}/>
            <BlogSection ref={(ele) => { this.blogSection = ele }} theme={this.props.theme}/>
        </Fragment>
    )
  }
}

export default withStyles(jssStyle, {withTheme: true})(FrontPage);