import React from 'react';

import { withStyles } from '@material-ui/styles'; // jss library
import {Typography} from '@material-ui/core';
import {Link} from 'react-router-dom';
import ExternalLink from '../../../ExternalLink';

import img1 from '../../../../assets/img/articles/messapps/should-i-develop-my-app-alone-or-with-a-team/1.jpg';

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

const ShouldIDevelopMyAppAloneOrWithATeam = (props) => {
  const {classes} = props;
  return (
    <div>
        <img src={img1} alt={'Development team'} className={classes.img}/>
        <Typography paragraph className={classes.blockQuote}>"It is so easy, especially for developers who can do everything by themselves, to just keep tinkering. It becomes a hobby and not a business. They are not hitting their own goals" ­<strong>- Chris Chidgey</strong></Typography>
        <Typography paragraph>Your app won't catch fire with a solid framework of coding and design alone ­ you need to get out there and show others what your app has to offer. To a developer who’s inexperienced in the trade, marketing might not be the most attractive adventure to embark on. <strong>If time and energy were unlimited, then working alone would be a non­issue. Working with a team is all about reaching deadlines by splitting efforts and delegating tasks of lesser importance to those who are the most cut­out for them.</strong></Typography>
        <Typography paragraph className={classes.blockQuote}>“You have a finite amount of resources, time, money, etc. You have to delegate. You have to figure out, ‘Where am I going to spend my time?’”<strong> - Peggy Anne Salz</strong></Typography>
        <Typography paragraph><strong>By splitting efforts, you can focus on the essentials of your project.</strong> Split the exhausting tasks that aren’t as critical, such as customer service and social media posts ­ this way, you can concentrate on the ones that are.While reaching out to others, you're more likely to make contacts whom are more adept at certain tasks than you are. Seek advice from these other talented developers: share ideas, and even pass down wisdom that you’ve collected on your way to success.Collaboration has its marketing benefits as well. If you're lucky enough, you can find another entrepreneur with a larger following to boost the size of your app's user base.</Typography>
        <Typography paragraph className={classes.blockQuote}>"The web is full of entrepreneurs who have built an engaged audience. They have best­selling books, or a huge email list. What they don't have is the technical expertise to build an app" ­<strong>- Charlyn Keating</strong></Typography>
    </div>
  )
}

export default withStyles(jssStyle, {withTheme: true})(ShouldIDevelopMyAppAloneOrWithATeam)