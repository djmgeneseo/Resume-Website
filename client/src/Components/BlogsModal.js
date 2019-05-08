import React from 'react';
import {Modal, Grid, Card, CardActionArea, CardContent, CardMedia, Typography} from '@material-ui/core';

// Blog Page
import {Link} from "react-router-dom";
import BlogPage from '../Containers/MessAppsBlog';

import MessAppsLogo from '../assets/img/blogs/messapps_logo.png';

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
      height: '50%',
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
    img: null,
    link: ''
  },
  'Coming Soon2': {
    img: null,
    link: ''
  },
  'Coming Soon3': {
    img: null,
    link: ''
  },
  'Coming Soon4': {
    img: null,
    link: ''
  },
  'Coming Soon5': {
    img: null,
    link: ''
  },
  'Coming Soon6': {
    img: null,
    link: ''
  },
  'Coming Soon7': {
    img: null,
    link: ''
  },
  'Coming Soon8': {
    img: null,
    link: ''
  }
}

/**
 * @param {func} handleClose
 * @param {bool} openModal
 * @param {json} theme
 */
const BlogsModal = (props) => {
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
    <Modal
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
      open={props.openModal}
      onClose={() => props.handleClose()}
    >
      <div className={classes.modalContainerCard}>
        <Grid container spacing={16}>
          <Grid item xs={12} sm={12} md={12}>
            <div className={classes.heading}>
              <Typography color="secondary" variant="h4">BLOG CATEGORIES</Typography>
            </div>
          </Grid>
          {generateCategoryCards()}
        </Grid>
      </div>
    </Modal>
  )
}

export default withStyles(jssStyle)(BlogsModal)