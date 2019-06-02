import React, {Component} from 'react';
import {Card, CardActions, CardContent, CardMedia, Button, Typography, Grid, Modal} from '@material-ui/core';

import { withStyles } from '@material-ui/styles'; // jss library
import me from '../../assets/img/me.png';
import TimePeriodCaption from '../../Components/TimePeriodCaption';
import BlogsSelection from '../../Components/BlogsSelection';
import BlogCard from '../../Components/Blogs/BlogCard';

const jssStyle = theme => ({
    siteContainer: {
        margin: '75px auto',
        maxWidth: '1280px',
        padding: '10px'
    },
    blogCard: {
        margin: '10px',
        height: '420px'
    },
    cardMedia: {
        height: '200px',
        position: 'relative'
    },
    cardContentContainer: {
        height: '130px'
    },
    timePeriodContainer: {
        position: 'absolute',
        bottom:'30px',
        right:'0'
    },
    heading: {
        textAlign: 'center',
        width: '100%',
        marginBottom: '25px'
    },
    allBlogsButton: {
        marginTop: '15px !important'
    }
})

const blogs = [
    {
        title: `The App Store: A Comprehensive Analysis`,
        url: `messapps/the-app-store-a-comprehensive-analysis`,
        intro: `Despite their impressive pace, for the past two decades, the expansion rate of both the Google Play Store and the Apple App Store has yet to show any indications of slowing down.`,
        img: require(`../../assets/img/blogs/messapps/the-app-store-a-comprehensive-analysis/1.jpg`),
        date: `June 2nd, 2016`
    },
    {
        title: `A Complete Overview Of The App Development Cycle`,
        url: `messapps/a-complete-overview-of-the-app-development-cycle`,
        intro: `An app’s development cycle can be broken down into these five distinct steps.`,
        img: require('../../assets/img/blogs/messapps/a-complete-overview-of-the-app-development-cycle/1.jpg'),
        date: 'June 5th, 2016'
    },
    {
        title: `11 of The Most Frequently Asked App Marketing Questions`,
        url: `messapps/eleven-of-the-most-frequently-asked-app-marketing-questions`,
        intro: `An app's performance on the market is contingent on both its reputation and its discoverability.`,
        img: require('../../assets/img/blogs/messapps/eleven-of-the-most-frequently-asked-app-marketing-questions/1.jpg'),
        date: 'June 2nd, 2016'
    }
]

class BlogSection extends Component {

    state={
        modalOpen: false
    }

    handleModalOpen = () => {
        this.setState({ modalOpen: true });
    }

    handleModalClose = () => {
        this.setState({ modalOpen: false });
    }

    generateListOfArticles = () => {
        return blogs.map((blog, idx) => {
          return ( 
            <BlogCard sm={12} md={4} key={blog.url + blog.date} theme={this.props.theme} blogLink={blog.url} blogImg={blog.img} blogDate={blog.date} blogTitle={blog.title} blogIntro={blog.intro} />
          ) 
        })
      }

    render() {
        const {classes} = this.props
        const {theme} = this.props
        return (
            <Grid container className={classes.siteContainer}>
                <Grid item xs={12} sm={12} md={12}>
                    <div className={classes.heading}>
                        <Typography variant="h4">BLOGS</Typography>
                    </div>
                </Grid>
                {this.generateListOfArticles()}

        {/*
                <Grid item xs={12} sm={12} md={4}>
                    <Card className={classes.blogCard}>
                        <CardMedia className={classes.cardMedia} image={me}>
                            <div className={classes.timePeriodContainer}>
                                <TimePeriodCaption theme={theme} timeDescription={'Jan 25th, 2016'}/>
                            </div>
                        </CardMedia>
                        <CardContent className={classes.cardContentContainer}>
                            <Typography variant="h5">Mock Title</Typography>
                            <Typography>Lorem ipsum dolor sit amet, ne usu eius animal, nam accusata conceptam ea. Qui ut prima aliquip reprehendunt, eos ex nibh libris delectus, an has liber melius constituto. Epicuri mediocrem vis ex.</Typography>
                        </CardContent>
                        <CardActions><Button size="small" color="primary">Read More</Button></CardActions>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={12} md={4}>
                    <Card className={classes.blogCard}>
                        <CardMedia className={classes.cardMedia} image={me}>
                            <div className={classes.timePeriodContainer}>
                                <TimePeriodCaption theme={theme} timeDescription={'Jan 25th, 2016'}/>
                            </div>
                        </CardMedia>
                        <CardContent className={classes.cardContentContainer}>
                            <Typography variant="h5">Mock Title</Typography>
                            <Typography>Lorem ipsum dolor sit amet, ne usu eius animal, nam accusata conceptam ea. Qui ut prima aliquip reprehendunt, eos ex nibh libris delectus, an has liber melius constituto. Epicuri mediocrem vis ex.</Typography>
                        </CardContent>
                        <CardActions><Button size="small" color="primary">Read More</Button></CardActions>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={12} md={4}>
                    <Card className={classes.blogCard}>
                        <CardMedia className={classes.cardMedia} image={me}>
                            <div className={classes.timePeriodContainer}>
                                <TimePeriodCaption theme={theme} timeDescription={'Jan 25th, 2016'}/>
                            </div>
                        </CardMedia>
                        <CardContent className={classes.cardContentContainer}>
                            <Typography variant="h5">Mock Title </Typography>
                            <Typography>Lorem ipsum dolor sit amet, ne usu eius animal, nam accusata conceptam ea. Qui ut prima aliquip reprehendunt, eos ex nibh libris delectus, an has liber melius constituto. Epicuri mediocrem vis ex.</Typography>
                        </CardContent>
                        <CardActions><Button size="small" color="primary">Read More</Button></CardActions>
                    </Card>
                </Grid>
                */}
                <Grid item xs={12} sm={12} md={12}>
                    <div style={{display: 'flex',justifyContent: 'center', width: '100%'}}>
                        <Button className={classes.allBlogsButton} color="primary" variant="contained" onClick={() => this.handleModalOpen()}>All Blog Posts</Button>
                    </div>
                    <Modal
                        classes={{root: classes.removeOutline}}
                        aria-labelledby="simple-modal-title"
                        aria-describedby="simple-modal-description"
                        open={this.state.modalOpen}
                        onClose={() => this.handleModalClose()}>
                        <BlogsSelection/>
                    </Modal>
                </Grid>
            </Grid>
        )
    }
}

export default withStyles(jssStyle, {withTheme: true})(BlogSection)