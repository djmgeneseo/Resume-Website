import React, {Component} from 'react';
import {Card, CardActions, CardContent, CardMedia, Button, Typography, Grid, Modal} from '@material-ui/core';

import { withStyles } from '@material-ui/styles'; // jss library
import me from '../../assets/img/me.png';
import TimePeriodCaption from '../../Components/TimePeriodCaption';
import BlogsSelection from '../../Components/BlogsSelection';

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
                <Grid item xs={12} sm={12} md={12}>
                    <div style={{display: 'flex',justifyContent: 'center', width: '100%'}}>
                        <Button className={classes.allBlogsButton} color="primary" variant="contained" onClick={() => this.handleModalOpen()}>All Blog Posts</Button>
                    </div>
                    <Modal
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