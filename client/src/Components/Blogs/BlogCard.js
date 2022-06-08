import React from 'react'

import TimePeriodCaption from '../../Components/TimePeriodCaption';
import { withStyles } from '@material-ui/styles'; // jss library
import {Typography, Grid, Card, CardContent, CardMedia, CardActions, Button} from '@material-ui/core'

import {Link} from "react-router-dom";

const jssStyle = theme => ({  
    heading: {
      textAlign: 'center',
      width: '100%',
      marginBottom: '25px',
      marginTop: '25px'
    },
    blogPageContainer: {
      maxWidth: '1280px', 
      margin: '0 auto',
      marginTop: '75px'
    },
    articlePaper: {
      padding: '40px' 
    },
    siteContainer: {
      margin: '75px auto',
      maxWidth: '1280px',
      padding: '10px'
    },
    truncate: {
      overflow: 'hidden',
      height: '75px'
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
    }
})

/**
 * @param {json} classes
 * @param {img} blogImg
 * @param {string} blogDate
 * @param {string} blogTitle
 * @param {string} blogIntro
 * @param {string} blogLink
 * @param {num} sm - For Grid system; default set to 6
 * @param {num} md - For Grid system; default set to 4
 */
const BlogCard = (props) => {
    const {classes} = props;
    return (
        <Grid key={props.blogTitle} item xs={12} sm={ props.sm == null? 6 : props.sm} md={props.md == null? 4 : props.md}>
            <Card className={classes.blogCard}>
                <CardMedia className={classes.cardMedia} image={props.blogImg}>
                    <div className={classes.timePeriodContainer}>
                        <TimePeriodCaption theme={props.theme} timeDescription={props.blogDate}/>
                    </div>
                </CardMedia>
                <CardContent className={classes.cardContentContainer}>
                    <Link to={`/blogs/${props.blogLink}`}><Typography variant="h5">{props.blogTitle}</Typography></Link>
                    <Typography className={classes.truncate}>{props.blogIntro}</Typography>
                </CardContent>
                <CardActions><Link to={`/blogs/${props.blogLink}`}><Button size="small" color="primary">Read More</Button></Link></CardActions>
            </Card>
        </Grid>
    )
}

export default withStyles(jssStyle, {withTheme: true})(BlogCard)