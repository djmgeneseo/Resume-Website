import React, {Fragment, Component} from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import AppBar from '@material-ui/core/AppBar';
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
    margin: '10px'
  },
  tagsContainer: {
    marginTop: '15px'
  }
})

const portfolioItems = {
  'Skinno': {
    tags: []
  },
  'Skinno Landing Page': {
    link: 'https://djmgeneseo.github.io/Skinno_Website/',
    git: 'https://github.com/djmgeneseo/Skinno_Website',
    tags: []
  },
  'Molloy Data Dashboard': {
    tags: []
  },
  'Machine Learning Practice': {
    git: 'https://github.com/djmgeneseo/mlpractice',
    tags: []
  },
  'Roemer Arboretum Research': {
    git: 'https://github.com/djmgeneseo/Roemer-Arboretum-Research',
    tags: []
  },
  'Mock Food Delivery Website': {
    link: 'https://djmgeneseo.github.io/MOCK-FOOD-DELIVERY-WEBSITE/',
    git: 'https://github.com/djmgeneseo/MOCK-FOOD-DELIVERY-WEBSITE',
    tags: []
  },
  'Flappy Bird': {
    link: 'https://djmgeneseo.github.io/FLAPPY-BIRD/',
    git: 'https://github.com/djmgeneseo/FLAPPY-BIRD/tree/master',
    tags: []
  },
  'Ping Pong': {
    link: 'https://djmgeneseo.github.io/PING-PONG/',
    git: 'https://github.com/djmgeneseo/PING-PONG',
    tags: []
  }
}

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

  generatePortfolioItems = () => {
    const classes = this.props.classes;
    return Object.keys(portfolioItems).map((itemName) => {
      return (
      <Grid item xs={6} sm={6} md={4}>
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
            <Button size='small' variant="outlined" color="primary">
              Tags
            </Button>  
          </div>
          </CardContent>
        </Card>
      </Grid>)
    })
  }
  
  render() {
    const classes = this.props.classes;
    return (
      <Fragment>
        <Grid item md={12}>
          <div className={classes.heading}><Typography variant="h4">PORTFOLIO</Typography></div>
          <Tabs 
            // centered
            className={classes.portfolioTabs} 
            value={this.state.value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary">
            <Tab disableRipple label="All"/>
            <Tab disableRipple label="Filter 1" />
            <Tab disableRipple label="Filter 2" />
          </Tabs>
        </Grid>
        {
          this.generatePortfolioItems()
        }
      </Fragment>
    )
  }
}

export default withStyles(jssStyle)(Portfolio);