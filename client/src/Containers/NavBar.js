import React, {Component, Fragment} from 'react';
import { withStyles } from '@material-ui/styles'; // jss library;

import resume from '../assets/pdf/David_Murphy_-_Full_Stack_Applications_Developer.pdf';

import { Slide, Toolbar, AppBar, Typography, IconButton, Button } from '@material-ui/core';
import {FaLinkedin, FaHome, FaGithub} from "react-icons/fa";

const jssStyle = theme => ({
    root: {
        flexGrow: 1
    },
    grow: {
        flexGrow: 1
    },
    home: {
        marginRight: '10px'
    }
});

class NavBar extends Component {
    
    state = {
        topOfPage: true
    }

    componentDidMount() {
        const self=this;
        window.onscroll = function() { // Event listener
          if(window.pageYOffset === 0) {
            self.handleEnterTopScroll();
          } else {
            self.handleExitTopScroll();
          }
        };
      }

    handleExitTopScroll = () => {
        this.setState({
            topOfPage: false
        })
    }

    handleEnterTopScroll = () => {
        this.setState({
            topOfPage: true
        })
    }

    render() {
        const {classes} = this.props;
        return (
            <div className={classes.root}>
                <Slide in={!this.state.topOfPage} direction="down" timeout={250}>
                    <AppBar color="primary" position="fixed">
                        <Toolbar>
                        {/* <a href='' rel="noopener noreferrer" className={classes.home}>
                            <IconButton color="secondary">
                                <FaHome/>
                            </IconButton>
                        </a> */}
                        <Typography variant="h6" color="inherit" className={classes.grow}>
                            David Murphy - Online Resume
                        </Typography>
                        <a href='https://www.linkedin.com/in/david-murphy-830671106/' target="_blank" rel="noopener noreferrer">
                            <IconButton color="secondary">
                                <FaLinkedin/>
                            </IconButton>
                        </a>
                        <a href='https://github.com/djmgeneseo' target="_blank" rel="noopener noreferrer">
                            <IconButton color="secondary">
                                <FaGithub/>
                            </IconButton>
                        </a>
                        <Typography variant="h6" color="inherit" style={{marginLeft: '5px', marginRight: '5px'}}> | </Typography>
                        <Button href={resume} target="_blank" color="inherit">
                            Download Resume
                        </Button>
                        </Toolbar>
                    </AppBar>
                </Slide>
            </div>
        )
    }
}

export default withStyles(jssStyle)(NavBar);