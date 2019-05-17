import React, { Component, Fragment } from 'react';
import { withStyles } from '@material-ui/styles'; // jss library
import {Card, CardActionArea, CardContent, Grid} from '@material-ui/core';

import {Experience, Portfolio, Achievements, About, Blogs} from './index';
import {NavBar, ColorPicker} from '../index';

import {Parallax} from '../../Components/index';
import {Abilities, Footer} from '../../Components/FrontPage/index';

import scrollToComponent from 'react-scroll-to-component';

// Media
import { GoChevronUp, GoFileCode, GoBriefcase, GoTools } from "react-icons/go";
import { IoMdTrophy } from "react-icons/io";
import achievementsBackgroundImage from '../../assets/img/jumbo.jpg';

const jssStyle = theme => ({
    navHelperContainer: {
        position: 'fixed',
        right: '-3px',
        top: '50%',
        height: 'auto',
        zIndex: '1101'
    },
    icon: {
        width: '20px',
        height: 'auto',
        fontSize: '30px',
        color: theme.palette.primary['500']
    },
    topIcon: {
        color: '#fff'
    },
    backgroundColor: {
        backgroundColor: theme.palette.primary['500'],
        color: '#fff'
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
                <CardActionArea onClick={() => scrollToComponent(this.aboutSection)}>
                    <CardContent className={classes.backgroundColor}>
                        <GoChevronUp className={classes.icon + ' ' + classes.topIcon}/>
                    </CardContent>
                </CardActionArea>
                <CardActionArea onClick={() => scrollToComponent(this.achievementsSection, {align: 'top'})}>
                    <CardContent>
                        <IoMdTrophy className={classes.icon}/>
                    </CardContent>
                </CardActionArea>
                <CardActionArea onClick={() => scrollToComponent(this.portfolioSection, {align: 'top'})}>
                    <CardContent>
                        <GoFileCode className={classes.icon}/>
                    </CardContent>
                </CardActionArea>
                <CardActionArea onClick={() => scrollToComponent(this.experienceSection, {align: 'top'})}>
                    <CardContent>
                        <GoBriefcase className={classes.icon}/>
                    </CardContent>
                </CardActionArea>
                <CardActionArea onClick={() => scrollToComponent(this.abilitiesSection, {align: 'top'})}>
                    <CardContent>
                        <GoTools className={classes.icon}/>
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
            <Blogs theme={this.props.theme}/>
            <Footer/>
        </Fragment>
    )
  }
}

export default withStyles(jssStyle, {withTheme: true})(FrontPage);