import React, {Fragment, Component} from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Slide from '@material-ui/core/Slide';
import CardActions from '@material-ui/core/CardActions';
import Fab from '@material-ui/core/Fab';

import {FaGithub} from "react-icons/fa";
import {FaYoutubeSquare} from "react-icons/fa";
import {MdLink} from "react-icons/md";

import { withStyles } from '@material-ui/styles'; // jss library

const jssStyle = theme => ({
  heading: {
    textAlign: 'center',
    marginBottom: '25px',
    marginTop: '75px'
  },
  portfolioTabs: {
    // marginLeft: '10px',
    marginBottom: '10px'
  },
  portfolioCard: {
    margin: '10px',
    height: '400px'
  },
  tagsContainer: {
    marginTop: '10px'
  },
  tagButton: {
    marginTop: '5px',
    marginRight: '5px',
    display: 'inline-block'
  },
  cardMediaContainer: {
    display: 'relative', 
    overflow: 'hidden',
      '&:hover $cardMedia': {
        transform: 'scale(1.2)'
      },
      '&:hover $cardCaptionActions': {
        opacity: '1'
      },
      '&:hover $cardMediaCaptionContainer': {
        top: '150px'
      }
  },
  cardMedia: {
    height: '270px',
    transition: 'transform .5s',
    position: 'relative',
    '&::before': {
      content: "' '",
	    position: 'absolute',
      top: '0',
      right: '0',
      bottom: '0',
      left: '0',
      background: `linear-gradient(to top,#000 40%, ${theme.palette.primary['200']})`,
      // background: 'linear-gradient(transparent, rgba(12, 24, 36, 1))',
      opacity: '.5'
    }
  },
  cardMediaCaptionContainer: {
    padding: '10px',
    position: 'absolute',
    top: '200px',
    left: '10px',
    transition: 'top ease 0.5s'
  },
  cardCaptionActions: {
    position: 'absolute',
    top: '195px',
    left: '12px',
    padding: '10px',
    opacity: 0,
    transition: 'opacity .5s'
  },
  cardActionIcon: {
    // fontSize: '23px'
  },
  cardMediaText: {
    color: '#fff !important'
  }
})

const portfolioItems = {
  'Resume Website': {
    git: 'https://github.com/djmgeneseo/Resume-Website',
    tags: ['React', 'JavaScript', 'ES6', 'JSS', 'Material-UI', 'npm'],
    img: require('../assets/img/resume_site.png')
  },
  'Molloy Data Dashboard': {
    tags: ['HTML & CSS','JavaScript', 'jQuery', 'Bootstrap', 'PHP', 'IIS'],
    img: require('../assets/img/me.png')
  },
  'Skinno': {
    tags: ['Swift', 'Firebase', 'Firestore', 'CocoaPods'],
    video: 'https://www.youtube.com/watch?v=aB-9-rHU7FA',
    img: require('../assets/img/skinno.jpg')
  },
  'Skinno Landing Page': {
    link: 'https://djmgeneseo.github.io/Skinno_Website/',
    git: 'https://github.com/djmgeneseo/Skinno_Website',
    tags: ['HTML & CSS','JavaScript', 'jQuery'],
    img: require('../assets/img/skinno_site.png')
  },
  'Mock Food Delivery Website': {
    link: 'https://djmgeneseo.github.io/MOCK-FOOD-DELIVERY-WEBSITE/',
    git: 'https://github.com/djmgeneseo/MOCK-FOOD-DELIVERY-WEBSITE',
    tags: ['HTML & CSS', 'JavaScript', 'jQuery'],
    img: require('../assets/img/food_site.png')
  },
  'iOS OCR Mobile Vision': {
    git: 'https://github.com/djmgeneseo/mlpractice',
    tags: ['Swift','Tensorflow', 'Mobile Vision', 'CocoaPods'],
    video: 'https://www.youtube.com/watch?v=sKEsSFrNkrQ',
    img: require('../assets/img/mobile_vision.png')
  },
  'Roemer Arboretum Research': {
    git: 'https://github.com/djmgeneseo/Roemer-Arboretum-Research',
    tags: ['R'],
    img: require('../assets/img/arboretum.png')
  },
  'Flappy Bird': {
    link: 'https://djmgeneseo.github.io/FLAPPY-BIRD/',
    git: 'https://github.com/djmgeneseo/FLAPPY-BIRD/tree/master',
    tags: ['JavaScript', 'ES6'],
    img: require('../assets/img/flappy_bird.png')
  },
  'Ping Pong': {
    link: 'https://djmgeneseo.github.io/PING-PONG/',
    git: 'https://github.com/djmgeneseo/PING-PONG',
    tags: ['JavaScript', 'ES5'],
    img: require('../assets/img/ping_pong.png')
  }
}

const filterOptions = ['All','JavaScript','HTML & CSS','Swift','jQuery','React','R']

/**
 * Cannot declare 'classes' as a class-wide property value because of complications 
 * with the theme. Everytime a theme value is changed, element classes will 
 * suddenly not apply on the DOM. Fixed by making jss 'classes' variable a local variable
 * to all closures within the Portfolio class.
 */
class Portfolio extends Component {
  
  state = {
    value: 0
  }

  handleTabChange = (event, value) => {
    this.setState({ value });
  };

  generateActionButtons = (portfolioItemName) => {
    const classes = this.props.classes;
    let elements = [];  
    
    if(portfolioItems[portfolioItemName].link) {
      elements.push(
        (<a key={portfolioItems[portfolioItemName].link} href={portfolioItems[portfolioItemName].link} target="_blank" rel="noopener noreferrer">
          <Fab size="small" color="primary">
            <MdLink className={classes.cardActionIcon}/>
          </Fab>
        </a>)
      )
    }

    if(portfolioItems[portfolioItemName].video) {
      elements.push(
        (<a key={portfolioItems[portfolioItemName].video} href={portfolioItems[portfolioItemName].video} target="_blank" rel="noopener noreferrer">
          <Fab size="small" color="primary">
            <FaYoutubeSquare className={classes.cardActionIcon}/>
          </Fab>
        </a>)
      )
    }

    if(portfolioItems[portfolioItemName].git){
      elements.push(
        (<a key={portfolioItems[portfolioItemName].git} href={portfolioItems[portfolioItemName].git} target="_blank" rel="noopener noreferrer">
          <Fab size="small" color="primary">
            <FaGithub className={classes.cardActionIcon}/>
          </Fab>
        </a>)
      )
    }

    return elements
  }

  generatePortfolioItems = (filterIndex) => {
    const classes = this.props.classes;
    let transitionDelay = 0;

    return Object.keys(portfolioItems).map(portfolioItemName => {
      if(filterIndex===0 || portfolioItems[portfolioItemName].tags.includes(filterOptions[filterIndex])){
        transitionDelay+=75; // creates a staggered transition effect
        return (
        <Grid key={filterIndex + portfolioItemName} item xs={12} sm={6} md={4}>
          <Slide direction='up' in={true} style={{ transitionDelay: transitionDelay }}>
            <Card className={classes.portfolioCard}>
              <div className={classes.cardMediaContainer}>
                <CardMedia className={classes.cardMedia} image={portfolioItems[portfolioItemName].img}/>
                <div className={classes.cardMediaCaptionContainer}>
                  <Typography className={classes.cardMediaText} variant='h5'>{portfolioItemName}</Typography>
                </div>
                <CardActions className={classes.cardCaptionActions}>
                  { this.generateActionButtons(portfolioItemName) }
                </CardActions>
              </div>
              <CardContent>
              <Divider/>
              <div className={classes.tagsContainer}>
              {
                portfolioItems[portfolioItemName].tags.map(tagName => {
                  return (
                    <div key={tagName} className={classes.tagButton}>
                      <Button size='small' variant="outlined" color="primary">
                        {tagName}
                      </Button>
                    </div>
                  )  
                })
              }  
              </div>
              </CardContent>
            </Card>
          </Slide>
        </Grid>)
      } else {return null}
    })
  }
  
  render() {
    const classes = this.props.classes;
    return (
      <Fragment>
        <Grid item xs={12} sm={12} md={12}>
          <div className={classes.heading}><Typography variant="h4">PORTFOLIO</Typography></div>
          <Tabs 
            // centered
            variant="scrollable"
            scrollButtons="on"
            className={classes.portfolioTabs} 
            value={this.state.value}
            onChange={this.handleTabChange}
            indicatorColor="primary"
            textColor="primary">
            {
              filterOptions.map((filterName) => {
                return <Tab key={filterName} disableRipple label={filterName}/>
              })
            }
          </Tabs>
        </Grid>
        { this.generatePortfolioItems(this.state.value) }
      </Fragment>
    )
  }
}

export default withStyles(jssStyle)(Portfolio);