import React, {Fragment, Component} from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Zoom from '@material-ui/core/Zoom';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';

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
    height: '360px'

  },
  tagsContainer: {
    marginTop: '15px'
  },
  tagButton: {
    marginTop: '5px',
    marginRight: '5px',
    display: 'inline-block'
  }
})

const portfolioItems = {
  'Skinno': {
    tags: ['Swift', 'Firebase', 'Firestore']
  },
  'Skinno Landing Page': {
    link: 'https://djmgeneseo.github.io/Skinno_Website/',
    git: 'https://github.com/djmgeneseo/Skinno_Website',
    tags: ['HTML & CSS','JavaScript', 'jQuery']
  },
  'Molloy Data Dashboard': {
    tags: ['HTML & CSS','JavaScript', 'jQuery', 'Bootstrap', 'PHP', 'IIS']
  },
  'Resume Website': {
    tags: ['React', 'JavaScript', 'JSS', 'Material-UI']
  },
  'Machine Learning Practice': {
    git: 'https://github.com/djmgeneseo/mlpractice',
    tags: ['Swift','Tensorflow']
  },
  'Roemer Arboretum Research': {
    git: 'https://github.com/djmgeneseo/Roemer-Arboretum-Research',
    tags: ['R']
  },
  'Mock Food Delivery Website': {
    link: 'https://djmgeneseo.github.io/MOCK-FOOD-DELIVERY-WEBSITE/',
    git: 'https://github.com/djmgeneseo/MOCK-FOOD-DELIVERY-WEBSITE',
    tags: ['HTML & CSS', 'JavaScript', 'jQuery']
  },
  'Flappy Bird': {
    link: 'https://djmgeneseo.github.io/FLAPPY-BIRD/',
    git: 'https://github.com/djmgeneseo/FLAPPY-BIRD/tree/master',
    tags: ['JavaScript']
  },
  'Ping Pong': {
    link: 'https://djmgeneseo.github.io/PING-PONG/',
    git: 'https://github.com/djmgeneseo/PING-PONG',
    tags: ['JavaScript']
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

  handleChange = (event, value) => {
    this.setState({ value });
  };

  generatePortfolioItems = (filterIndex) => {
    const classes = this.props.classes;
    return Object.keys(portfolioItems).map(itemName => {
      if(filterIndex===0 || portfolioItems[itemName].tags.includes(filterOptions[filterIndex])){
        return (
        <Grid key={filterIndex + itemName} item xs={6} sm={6} md={4}>
          <Zoom in={true}>
            <Card className={classes.portfolioCard}>
              <CardHeader
                title={itemName}
              >
              </CardHeader>
              <CardMedia>

              </CardMedia>
              <CardContent>
              <Divider/>
              <div className={classes.tagsContainer}>
              {
                portfolioItems[itemName].tags.map(tagName => {
                  return (
                    <div className={classes.tagButton}>
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
          </Zoom>
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
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary">
            {
              filterOptions.map((filterName) => {
                return <Tab key={filterName} disableRipple label={filterName}/>
              })
            }
          </Tabs>
        </Grid>
        {
          this.generatePortfolioItems(this.state.value)
        }
      </Fragment>
    )
  }
}

export default withStyles(jssStyle)(Portfolio);