import React, {Fragment, Component} from 'react';
import {Fab, CardActions, Slide, Typography, Divider, Button, Tab, Tabs, CardMedia, CardContent, Card, Grid, Modal} from '@material-ui/core';

import {FaGithub, FaYoutubeSquare} from "react-icons/fa";
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
    opacity: '0',
    transition: 'opacity .5s'
  },
  seeMoreCardEffect: {
    display: 'none',
    transition: 'display .5s'
  },
  seeMoreButtonWrapper: {
    marginTop: '15px'
  },
  cardActionIcon: {
    // fontSize: '23px'
  },
  cardMediaText: {
    color: '#fff !important'
  },
  cardMediaContainerModal: {
    position: 'relative', 
    overflow: 'auto',
    maxHeight: '70vh'
},
modalCard: {
    maxWidth: '60%',
    maxHeight: '70%',
    margin: 'auto',
    marginTop: '5%'
},
video: {
},
  '@media only screen and (max-width: 600px)': { // Phone screens
    cardCaptionActions: {
      opacity: '1'
    },
    cardMediaCaptionContainer: {
      top: '150px'
    }
  }
})

const portfolioItems = {
  'Resume Website': {
    git: 'https://github.com/djmgeneseo/Resume-Website',
    tags: ['React', 'JavaScript', 'ES6', 'JSS', 'Material-UI', 'npm'],
    img: require('../../assets/img/resume_site.png')
  },
  'Molloy Data Dashboard': {
    tags: ['HTML & CSS','JavaScript', 'SQL', 'jQuery', 'Bootstrap', 'PHP', 'IIS'],
    img: require('../../assets/img/data_dashboard.png'),
    video: require('../../assets/mp4/datacenter.mp4')
  },
  'Skinno': {
    tags: ['Swift', 'Firebase', 'Firestore', 'NoSQL', 'CocoaPods'],
    img: require('../../assets/img/skinno.jpg'),
    video: require('../../assets/mp4/skinno.mp4')
  },
  'Skinno Landing Page': {
    link: 'https://djmgeneseo.github.io/Skinno_Website/',
    git: 'https://github.com/djmgeneseo/Skinno_Website',
    tags: ['HTML & CSS','JavaScript', 'jQuery', 'Heroku'],
    img: require('../../assets/img/skinno_site.png')
  },
  'Job Listing Automation': {
    git: 'https://github.com/djmgeneseo/Job-Listing-Generator',
    tags: ['HTML & CSS', 'JavaScript', 'Node.js'],
    img: require('../../assets/img/job_listing.png'),
    video: require('../../assets/mp4/job_listing_automation.mp4')
  },
  'Mock Food App Website': {
    link: 'https://djmgeneseo.github.io/MOCK-FOOD-DELIVERY-WEBSITE/',
    git: 'https://github.com/djmgeneseo/MOCK-FOOD-DELIVERY-WEBSITE',
    tags: ['HTML & CSS', 'JavaScript', 'jQuery'],
    img: require('../../assets/img/food_site.png')
  },
  'iOS OCR Mobile Vision': {
    git: 'https://github.com/djmgeneseo/mlpractice',
    tags: ['Swift','Tensorflow', 'Mobile Vision', 'CocoaPods'],
    video: require('../../assets/mp4/ml_practice.mp4'),
    img: require('../../assets/img/mobile_vision.png')
  },
  'Roemer Arboretum Research': {
    git: 'https://github.com/djmgeneseo/Roemer-Arboretum-Research',
    tags: ['R'],
    img: require('../../assets/img/arboretum.png')
  },
  'Flappy Bird': {
    link: 'https://djmgeneseo.github.io/FLAPPY-BIRD/',
    git: 'https://github.com/djmgeneseo/FLAPPY-BIRD/tree/master',
    tags: ['JavaScript', 'ES6'],
    img: require('../../assets/img/flappy_bird.png')
  },
  'Ping Pong': {
    link: 'https://djmgeneseo.github.io/PING-PONG/',
    git: 'https://github.com/djmgeneseo/PING-PONG',
    tags: ['JavaScript', 'ES5'],
    img: require('../../assets/img/ping_pong.png')
  }
}

const filterOptions = ['All','JavaScript','HTML & CSS', 'SQL', 'NoSQL','Swift','jQuery','React','R']

/**
 * Cannot declare 'classes' as a class-wide property value because of complications 
 * with the theme. Everytime a theme value is changed, element classes will 
 * suddenly not apply on the DOM. Fixed by making jss 'classes' variable a local variable
 * to all closures within the Portfolio class.
 */
class Portfolio extends Component {
  
  state = {
    tabValue: 0,
    seeMorePortfolio: false,
    openModal: false,
    activePortfolioKey: 'Molloy Data Dashboard'
  }

  /**
   * Modal open handler
   */
  handleOpenModal = (newKey) => {
    this.setState({
        openModal: true,
        activePortfolioKey: newKey,
        activeImageIdx: 0
    });
  }

  /**
   * Modal close handler
   */
  handleCloseModal = () => {
      this.setState({openModal: false});
  }

  /**
   * Tab handler
   */
  handleTabChange = (event, tabValue) => {
    this.setState({ tabValue });
  };

  /**
   * 'See more' button handler
   */
  handleSeeMoreButton = (event) => {
    this.setState(state => {
      return {seeMorePortfolio: !state.seeMorePortfolio}
    });
  }

  /**
   * @param {string} portfolioItemName - The name of the portfolio 'item.' Ex) 'Molloy Data Dashboard'
   */
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
        (
          <Fab key={portfolioItemName + 'portfolio'} size="small" color="primary" onClick={() => this.handleOpenModal(portfolioItemName)}>
            <FaYoutubeSquare className={classes.cardActionIcon}/>
          </Fab>)
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

  /**
   * @param {string} portfolioItemName - The name of the portfolio 'item.' Ex) 'Molloy Data Dashboard'
   */
  generatePortfolioTags = (portfolioItemName) => {
    const classes = this.props.classes;
    return portfolioItems[portfolioItemName].tags.map(tagName => {
      return (
        <div key={tagName} className={classes.tagButton}>
          <Button size='small' variant="outlined" color="primary">
            {tagName}
          </Button>
        </div>
      )  
    })
  }

  /**
   * 
   * @param {number} filterIndex - The index of the currently activated tab
   * 
   * Uses:
   *    generateActionButtons()
   *    generatePortfolioTags()
   */
  generatePortfolioItems = (filterIndex) => {
    const classes = this.props.classes;
    let transitionDelay = 0;
    let cardsOnScreen = 0;

    return Object.keys(portfolioItems).map(portfolioItemName => {
      if(filterIndex===0 || portfolioItems[portfolioItemName].tags.includes(filterOptions[filterIndex])){
        cardsOnScreen++;
        transitionDelay+=75; // creates a staggered transition effect between every card
        return (
        <Grid key={filterIndex + portfolioItemName} className={!this.state.seeMorePortfolio && cardsOnScreen>6 ? classes.seeMoreCardEffect : null} item xs={12} sm={6} md={4}>
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
              { this.generatePortfolioTags(portfolioItemName) }
              </div>
              </CardContent>
            </Card>
          </Slide>
        </Grid>)
      } else {return null}
    })
  }
  
  /**
   * Uses: generatePortfolioItems()
   */
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
            value={this.state.tabValue}
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
        { this.generatePortfolioItems(this.state.tabValue) }
        <div style={{display: 'flex',justifyContent: 'center', width: '100%'}}>
          <Button className={classes.seeMoreButtonWrapper} onClick={this.handleSeeMoreButton} size='large' color="primary">{this.state.seeMorePortfolio ? '- See Less' : '+ See More'}</Button>
        </div>

        <Modal
          open={this.state.openModal}
          onClose={this.handleCloseModal}>
              <div style={{position: 'relative'}}>
                  <Typography variant={'h3'} style={{position: 'absolute', right:'15%', color: 'white', cursor: 'pointer'}}onClick={this.handleCloseModal}>X</Typography>
                  <Card className={this.props.classes.modalCard}>
                      <div className={this.props.classes.cardMediaContainerModal}>
                        <video className={classes.video} width="100%" height="100%" controls>
                          <source src={portfolioItems[this.state.activePortfolioKey].video} type="video/mp4"/>
                          Your browser does not support HTML5 video.
                        </video>
                      </div>
                      <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                          {this.state.activePortfolioKey}
                      </Typography>
                      </CardContent>
                  </Card>
              </div>
        </Modal>
    </Fragment>
    )
  }
}

export default withStyles(jssStyle)(Portfolio);