import React, {Component} from 'react';
import { withStyles } from '@material-ui/styles'; // jss library;

import resume from '../assets/pdf/David_Murphy_-_Full_Stack_Applications_Developer.pdf';

import {Link} from "react-router-dom";

import { Slide, Toolbar, AppBar, Typography, IconButton, Button, Menu, MenuItem } from '@material-ui/core';
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
    },
    removeTextDecoration: {
        textDecoration: 'none'
    },
    removeOutline: {
        outline: 'none'
    }
});

/**
 * props:
 * @param {bool} noScroll - removes scroll feature. Otherwise, must scroll below top of page to see navbar
 */
class NavBar extends Component {
    
    state = {
        topOfPage: true,
        anchorEl: null
    }

    handleMenu = event => {
        this.setState({ anchorEl: event.currentTarget });
    };
    
    handleClose = () => {
    this.setState({ anchorEl: null });
    };

    componentDidMount() {
        const self=this;
        
        if(this.props.noScroll || this.props.noScroll === undefined) {
        window.onscroll = function() { // Event listener
          if(window.pageYOffset === 0) {
            self.handleEnterTopScroll();
          } else {
            self.handleExitTopScroll();
          }
        };
      } 
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
        const {anchorEl} = this.state;
        const open = Boolean(anchorEl);

        return (
            <div className={classes.root}>
                <Slide in={this.props.noScroll===true ? this.state.topOfPage : !this.state.topOfPage} direction="down" timeout={250}>
                    <AppBar color="primary" position="fixed">
                        <Toolbar>
                        <div className={classes.grow}>
                            <Link to='/' className={classes.home}>
                                <IconButton color="secondary">
                                    <FaHome/>
                                </IconButton>
                            </Link>
                            <div style={{display: 'inline'}}>
                                <Button
                                    aria-owns={open ? 'menu-appbar' : undefined}
                                    aria-haspopup="true"
                                    onClick={this.handleMenu}
                                    color="inherit"
                                >
                                    Blogs
                                </Button>
                                <Menu
                                id="menu-appbar"
                                anchorEl={anchorEl}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={open}
                                onClose={this.handleClose}
                                >
                                <Link to="/blogs" className={classes.removeTextDecoration}><MenuItem style={{outline: 'none'}} onClick={this.handleClose}>All Blogs</MenuItem></Link>
                                <Link to="/blogs/MessApps" className={classes.removeTextDecoration}><MenuItem onClick={this.handleClose}>MessApps</MenuItem></Link>
                                </Menu>
                            </div>
                        </div>
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