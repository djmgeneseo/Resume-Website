import React from 'react';

import { withStyles } from '@material-ui/styles'; // jss library
import {Typography} from '@material-ui/core';
import {Link} from 'react-router-dom';
import ExternalLink from '../../../ExternalLink';

import img1 from '../../../../assets/img/blogs/messapps/launch-day-can-be-difficult-to-prepare-for/1.jpg';

const jssStyle = theme => ({
    img: {
      display: 'block',
      marginLeft: 'auto',
      marginRight: 'auto',
      marginBottom: '30px',
      marginTop: '30px',
      maxWidth: '90%'
    },
    blockQuote: {
      background: '#f9f9f9',
      borderLeft: '10px solid #ccc',
      margin: '1.5em 10px !important',
      padding: '0.5em 10px',
      display: 'block',
      quotes: `'"''"''"''"'`,
      '&::before': {
        color: '#ccc',
        content: 'open-quote',
        fontSize: '4em',
        lineHeight: '0.1em',
        marginRight: '0.25em',
        verticalAlign: '-0.4em'
      }
    },
    center: {
        textAlign: 'center'
    }
})

const LaunchDayCanBeDifficultToPrepareFor = (props) => {
  const {classes} = props;
  return (
    <div>
        <img src={img1} className={classes.img} alt='LAUNCH'/>
        <Typography paragraph>The initial quantity and velocity of an app's download count will dictate how highly it'll rank on both the App Store and the Play Store:</Typography>
        <Typography className={classes.blockQuote} paragraph gutterBottom>“Keywords and your app store optimization are obviously factors, but in the end there is nothing higher than velocity­­--the number of downloads it generates over a period of time. And that’s why your marketing effort is critical on the day of launch­­--to be able to garner and drive as many users as humanly possible within that time period” -­ <strong>Founder/CEO of PreApps and author Sean Casto</strong>
        </Typography>   
        <Typography paragraph><strong>The best way to ensure that your downloads will hit some impressive heights at launch is by generating a user base well in advance.</strong> First, you'll need a plan. The goal of the plan is this: create a launch date, and collect as many interested users as you can pre­launch.</Typography>
        <Typography variant="h4" className={classes.center} gutterBottom>Start Early</Typography>
        <Typography paragraph>The earlier your landing page is developed, the greater your chances for user acquisition will be. This way, if your landing page isn’t promoting enough attention, you'll still have plenty of time to generate fans. An early start will give you enough room to locate and reformat the least­most inspiring aspects of your app/website.</Typography>
        <Typography variant='h4' className={classes.center} gutterBottom>Take Users Behind the Scenes</Typography>
        <Typography paragraph>On your landing page, create and maintain a developer’s log. Keep your users in the loop by being transparent about your goals: write blogs about what you're building, how you're building it, and about some of the problems you’ve encountered along the way. Blogs are also helpful for post­release: incorporate change logs, announcements, future updates, promotional codes, etc.</Typography>
        <Typography variant='h4' className={classes.center} gutterBottom>Beta Testing/Soft Launch</Typography>
        <Typography paragraph>The point of a soft launch is to uncover which parts of the app need improvement. Launching your app to a select group of people can offer you insight on where your app is both the weakest and the strongest. Quality testing should be iterated several times throughout development to ensure that the changes made to your app meets user expectations.</Typography>
        <Typography variant='h4' className={classes.center} gutterBottom>Delay Your Launch</Typography>
        <Typography paragraph>There’s time between when Google and Apple approves your app and when you can actually release it, so time your release wisely and finish any promotions you’ve neglected to deploy ­ take your time, there's no rush. Resisting the urge to launch a fully developed app takes willpower, but the end product will be worth it:</Typography>
        <Typography paragraph className={classes.blockQuote}>“You spend so long building an app and towards the end you get that fatigue. You just want to launch it and show it to the world” -­ <strong>Product Designer & Founder of Realmac Software Dan Counsell.</strong></Typography>
        <Typography paragraph>If your launch doesn’t seem promising, then you should wait. You’ll have nothing to lose, and only more to gain.</Typography>
        <Typography variant='h4' className={classes.center} gutterBottom>Most Importantly, Listen to Your Users</Typography>
        <Typography paragraph className={classes.blockQuote}>“Too many app developers are stubborn; they miss out on a great opportunity to provide people with what they want ­ and cultivate loyal followers” -­ <strong>Charlyn Keating</strong></Typography>
        <Typography paragraph>In the end, your opinion as the developer might be interesting, but it’s actually the least important. You’re building an app for others to use, and its implementations should be driven by both data collected about and from the app's users ­- <strong>we always suggest turning to App Analytics!</strong> Be prepared to take your app in different directions both before and after development, or whenever it's necessary.</Typography>
    </div>
  )
}

export default withStyles(jssStyle, {withTheme: true})(LaunchDayCanBeDifficultToPrepareFor)