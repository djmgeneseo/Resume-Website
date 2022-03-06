import React from 'react';

import { withStyles } from '@material-ui/styles'; // jss library
import {Typography} from '@material-ui/core';
import {Link} from 'react-router-dom';
import ExternalLink from '../../../ExternalLink';

import img1 from '../../../../assets/img/articles/messapps/mobile-app-beta-testing-breaking-down-the-basics/1.jpg';

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

const MobileAppBetaTestingBreakingDownTheBasics = (props) => {
  const {classes} = props;
  return (
    <div>
        <img src={img1} className={classes.img} alt='person holding an iPhone'/>
        <Typography variant='h5' gutterBottom> For Android...</Typography>   
        <Typography paragraph>In 2013, Google announced both open and closed beta support for all apps via <ExternalLink url={`https://support.google.com/googleplay/android-developer/answer/3131213?hl=en`}>Google’s Developer Console services.</ExternalLink> If you’re testing an app to discern the stress levels that your servers can handle, an <strong>open beta</strong> would be ideal. Why? Open betas allow any and all users to find and access your beta ­ no invite required. Of course, thinking ahead, Google set optional user restrictions so that developers can limit the allowed capacity of their beta tests, preventing floods of users from bursting over a server limits. Conversely, google permits developers to invite up to 40,000 Google+ users into their <strong>closed betas</strong> ­only those users with granted permission can find and access the app's page on the Play Store.
        </Typography>
        <Typography variant='h5' gutterBottom> For iOS...</Typography>   
        <Typography paragraph>The following year, Apple acquired and released Burstly’s beta testing services to the public. Newly named, <ExternalLink url={'https://developer.apple.com/testflight/'}>TestFlight</ExternalLink> acts as a way for iOS development teams to test their apps through an invitation­-only <strong>closed beta </strong> (with a modest cap of 25 internal participants per app) and <strong>open beta</strong> service (with a more generous cap of 200 external users per app). To perform a closed beta, you’ll need to acquire trustworthy testers first. We suggest that our clients:
        </Typography>
        <ol>
            <li><Typography paragraph>Post on forums and articles whose audience might find your app appealing</Typography></li>
            <li><Typography paragraph>Ask friends and family through social media outlets for assistance</Typography></li>
            <li><Typography paragraph>Pay for or inquire about services that specialize in aggregating competent testers</Typography></li>
        </ol>
        <Typography paragraph>Interacting with professional­grade testers ensures that feedback will be both precise and constructive. Also, due to the tedious nature of assessment, it's possible to burn out a small set of testers. If you're having trouble finding newer and fresher candidates, one of the many benefits of beta testing services is their wealth of available testers. For any sort of testing, consistency in feedback is key, so having access to a bigger set of testers ­ such as those from an organization of professionals ­ is an invaluable asset to have while assessing an app.</Typography>
        <Typography paragraph>
        <ExternalLink url={'https://betafamily.com/'}>Beta Family</ExternalLink> ­- Paid, iOS and Android
        </Typography>
        <Typography paragraph>
        <ExternalLink url={'https://www.betabound.com/announce/'}>Betabound</ExternalLink> ­- Free, iOS and Android
        </Typography>
        <Typography paragraph>
        <strong>Promoting your app's beta through its landing page and requiring all interested testers to apply via signup forums.</strong> Use Google Docs or perhaps a dedicated launching page as a forum to identify:
        </Typography>
        <ul>
            <li><Typography paragraph>The tester's device</Typography></li>
            <li><Typography paragraph>Their reasons for signing up or their interest in the app</Typography></li>
            <li><Typography paragraph>Their emails that can be reached for when the launch date approaches</Typography></li>
        </ul>

        <Typography variant='h5' gutterBottom>Other things to consider:</Typography>
        <ul>
            <li><Typography paragraph>Which of your app's features are the least compelling? Remember - the more cluttered the UI, the more likely you'll overlook and never encounter an error.</Typography></li>
            <li><Typography paragraph>The time and resources that are delegated into testing should be proportional to the amount of resources you've invested into your app. A single experience­shattering error will be enough to dissuade a sizable fraction of your user base from wrestling with your unresponsive app.</Typography></li>
            <li><Typography paragraph>­	Gaming apps and difficulty testing: is your app intellectually stimulating on higher difficulties? Do testers feel a sense of fulfillment after completing difficult challenges? Are the easier levels too easy?</Typography></li>
        </ul>
    </div>
  )
}

export default withStyles(jssStyle, {withTheme: true})(MobileAppBetaTestingBreakingDownTheBasics)