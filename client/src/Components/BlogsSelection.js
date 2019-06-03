import React from 'react';
import {Grid, Card, CardActionArea, CardMedia, Typography} from '@material-ui/core';

import {Link} from "react-router-dom";

import MessAppsLogo from '../assets/img/blogs/messapps_logo.png';
import ComingSoon from '../assets/img/blogs/coming_soon.jpg'

import { withStyles } from '@material-ui/styles'; // jss library

const jssStyle = theme => ({
    heading: {
      textAlign: 'center',
      width: '100%',
      marginBottom: '25px'
    },
    whiteFont: {
      color: '#FFF !important'
    },
    modalContainerCard: {
      height: '60%',
      width: '70%',
      padding: '10px',
      overflowY: 'auto',
      position: 'absolute',
      left: '14%',
      top: '25%'
    },
    modalContainerContent: {
      padding: '20%'
    },
    categoryCard: {
      height: '100px',
      width: 'auto'
    },
    categoryCardMedia: {
      position: 'relative',
      height: '100%'
    }
})

const categories = {
  'MessApps': {
    img: MessAppsLogo,
    link: ''
  },
  'Coming Soon1': {
    img: ComingSoon,
    link: ''
  },
  'Coming Soon2': {
    img: ComingSoon,
    link: ''
  },
  'Coming Soon3': {
    img: ComingSoon,
    link: ''
  },
  'Coming Soon4': {
    img: ComingSoon,
    link: ''
  },
  'Coming Soon5': {
    img: ComingSoon,
    link: ''
  },
  'Coming Soon6': {
    img: ComingSoon,
    link: ''
  },
  'Coming Soon7': {
    img: ComingSoon,
    link: ''
  },
  'Coming Soon8': {
    img: ComingSoon,
    link: ''
  }
}

/**
 * @param {func} handleClose
 * @param {bool} openModal
 * @param {json} theme
 * @param {bool} removeHeader
 */
const BlogsSelection = (props) => {
  const {classes} = props;

  const generateCategoryCards = () => {
    return Object.keys(categories).map((categoryName, idx) => {
      return <Grid key={categoryName + idx} item xs={12} sm={6} md={4}>
      <Card className={classes.categoryCard}>
          <CardActionArea className={classes.categoryCard} style={{padding: '10px'}}>
            <Link to="/blogs/MessApps">
                <CardMedia className={classes.categoryCardMedia} image={categories[categoryName]['img']} title={categoryName}>
                  <Typography>{categories[categoryName]['img'] === null ? categoryName: ''}</Typography>
                </CardMedia>
            </Link>
          </CardActionArea>
      </Card>
    </Grid>
    })
  }

  return (
      <div className={classes.modalContainerCard}>
        <Grid container spacing={16}>
          <Grid item xs={12} sm={12} md={12}>
            <div className={classes.heading} style={props.removeHeader === true ? {display: 'none'} : {display: 'block'}}>
              <Typography color="secondary" variant="h4">BLOG CATEGORIES</Typography>
            </div>
          </Grid>
          {generateCategoryCards()}
        </Grid>
      </div>
  )
}

export default withStyles(jssStyle)(BlogsSelection)