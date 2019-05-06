import React from 'react';
import {Modal, Grid, Card, CardActionArea, CardContent, CardMedia, Typography} from '@material-ui/core';

import MessAppsLogo from '../assets/img/blogs/messapps_logo.png';

import { withStyles } from '@material-ui/styles'; // jss library

const jssStyle = theme => ({
    modalContainerCard: {
      height: '70%',
      width: '90%',
      margin: '5%',
      overflowY: 'scroll !important'
    },
    modalContainerContent: {
      padding: '20%'
    },
    categoryCard: {
      height: '200px',
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
    img: '',
    link: ''
  },
  'Coming Soon2': {
    img: '',
    link: ''
  },
  'Coming Soon3': {
    img: '',
    link: ''
  },
  'Coming Soon4': {
    img: '',
    link: ''
  },
  'Coming Soon5': {
    img: '',
    link: ''
  },
  'Coming Soon6': {
    img: '',
    link: ''
  },
  'Coming Soon7': {
    img: '',
    link: ''
  },
  'Coming Soon8': {
    img: '',
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
      return <Grid key={categoryName + idx} item xs={12} sm={12} md={4}>
      <Card className={classes.categoryCard}>
        <CardActionArea>
          <CardMedia className={classes.categoryCardMedia} image={MessAppsLogo}>
            <Typography>{categoryName}</Typography>
          </CardMedia>
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
        <Card className={classes.modalContainerCard}>
          <CardContent className={classes.modalContainerContent}>
            <Grid container spacing={32}>
              {generateCategoryCards()}
            </Grid>
          </CardContent>
        </Card>
    </Modal>
  )
}

export default withStyles(jssStyle)(BlogsModal)