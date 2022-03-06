import React from 'react';

import { withStyles } from '@material-ui/styles'; // jss library
import {Typography} from '@material-ui/core';
import {Link} from 'react-router-dom';
import ExternalLink from '../../../ExternalLink';

import img1 from '../../../../assets/img/articles/messapps/app-indexing-the-latest-and-greatest-in-marketing/1.jpg';
import img2 from '../../../../assets/img/articles/messapps/app-indexing-the-latest-and-greatest-in-marketing/2.jpg';

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

const AppIndexingTheLatestAndGreatestInMarketing = (props) => {
  const {classes} = props;
  return (
    <div>
        <Typography paragraph>
        The buzz surrounding App Indexing lately is, in our opinion, warranted. Essentially, Google’s refined search engine will also include a thumbnail alongside all appropriate results that, when opened, will redirect the browsing user to a pre­ designated screen on your app. If the user does not own your app, then they will instead be redirected onto the app's installation page through the Play Store.</Typography>
        <Typography paragraph>
        Indexing was exclusively available for the Android community until May 2015 when, under the pressure of increasing demand, Google’s team developed and released an API for the iOS platform. Google’s product manager even acknowledged the apparent advantages inherent in App Indexing in <ExternalLink url='https://webmasters.googlearticle.com/2015/04/drive-app-installs-through-app-indexing.html'>a post on Google’s official article.</ExternalLink>
        </Typography>
        <Typography className={classes.blockQuote}>
        “With the addition of these install links, we are starting to use App Indexing as a ranking signal for all users on Android, regardless of whether they have your app installed or not” — Product Manager at Google, Lawrence Chang
        </Typography>
        <Typography paragraph>
        Even though App Indexing has been free and available for both platform developers for over a year, <ExternalLink url='https://article.searchmetrics.com/us/app-indexing-2016/'>only 30% of top ranking websites with an Android app and 19% with an iOS have made use of its benefits.</ExternalLink> By indexing your app with Google, you’ll be ahead of the marketing curve and better-equipped to contend with some of the highest ranking apps out there. Use App Indexing to your advantage while you still can!
        </Typography>
        <Typography variant='h4' gutterBottom>The Discovery of Deep Linking</Typography>
        <Typography paragraph>Standard hyperlinks contain URLs which direct a user to a site’s homepage. Deep links, however, are hyperlinks containing URLs which redirect the user to a particular location or piece of content on a website. The recent development of hyperlinking with apps, however, has allowed developers to redirect users straight to their app from their websites. By deep linking a user to a specific screen on their app, developers bypass the normal amount of input required by users to visit particular content on their app. Taking deep linking to another level, Google hybridized its search engine with app deep linking for the sake of re-engaging users with the previously installed yet forgotten apps on their devices.</Typography>
        <Typography paragraph>
        Here’s the kicker: <strong>if a mobile user inserted a query into Google’s search engine and does not own the app yet clicks on its thumbnail anyway, a deep link to the Google Play store will send them to the app’s particular installation page through the Play Store/App Store instead.</strong> This is called deferred deep linking, and it’s extremely useful in that it helps both developers and Google by improving the Play Store’s traffic and increasing the amount of exposure that indexed apps receive.With another type of redirecting called contextual deep linking, developers can mine information about their users, including where they’re coming from and how they were ultimately converted from a potential user into an actual consumer. Developers use this to re-evaluate their marketing strategy, and to essentially get the most bang for their marketing buck.
        </Typography>
        <Typography variant='h4' gutterBottom>How to index your app with Google Search</Typography>
        <Typography paragraph>
        Getting an app indexed requires implementations into your app’s source code and your app’s own dedicated website for Google Search to reference.The process to acquire an index for your app is slightly complex; luckily, <ExternalLink url="https://firebase.google.com/">Firebase</ExternalLink> offers detailed instructions, and different SDKs such as <ExternalLink url="https://cocoapods.org">CocoaPods</ExternalLink> and <ExternalLink url="https://branch.io/">Branch</ExternalLink> equip developers with necessary tools for free.
        </Typography>
        <Typography variant='h5' gutterBottom>1. Create Support for App Indexing inside the app itself</Typography>
        <Typography paragraph>Acquired by Google, Firebase is a data and service provider that specializes in app development, analytics, and indexing.</Typography>
        <Typography paragraph>For Android...</Typography>
        <Typography paragraph>The process will be much more tedious relative to that of iOS source coding; Google provides the API through their Google Play services, so it's just a matter of implementation. The steps are broken down into fine detail <ExternalLink url="https://firebase.google.com/docs/app-indexing/android/app#reference-the-noindexxml-file">here.</ExternalLink> 
        </Typography>
        <Typography paragraph>For iOS...</Typography>
        <Typography paragraph>Firebase suggests that interested developers install the SDK CocoaPods to help attach the necessary index dependencies into the app’s Xcode project. Again, the process for iOS is much more straightforward compared to android’s; more details about debugging and installation are also covered on Firebase’s website <ExternalLink url="https://firebase.google.com/docs/app-indexing/ios/app">here.</ExternalLink></Typography>
        <Typography variant='h5' gutterBottom>2. Test for App Indexing functionality</Typography>
        <Typography paragraph>For Android...</Typography>
        <Typography paragraph>Follow the steps provided <ExternalLink url="https://firebase.google.com/docs/app-indexing/android/test#testing-urls-with-android-studio"></ExternalLink>by Google</Typography>
        <Typography paragraph>For iOS...</Typography>
        <Typography paragraph><ExternalLink url="https://firebase.google.com/docs/app-indexing/ios/test#preview-search-result-on-ios">A quick search with your app’s URL through Google’s system should suffice.</ExternalLink></Typography>
        <Typography variant='h5' gutterBottom>3. Observe the impact that App Indexing has on your app's growth</Typography>
        <Typography paragraph>For Android...</Typography>
        <Typography paragraph>Google provides an optimization service through their <ExternalLink url="https://search.google.com/search-console/about?hl=en&utm_source=wmx&utm_medium=wmx-welcome">Search Console</ExternalLink>, which has its function rooted in app analytics:</Typography>
        <Typography className={classes.blockQuote}>
        “Analytics typically focuses on how the user is behaving after they click; what are they clicking on, how often they click, and so forth. Google’s Search Console focuses on how what happens before someone enters your app. Specifically, if you’ve implemented app indexing, the Search Console will provide you with a ton of data about how users are searching for, finding, and navigating to content inside your app” – Mariya moeva, Google’s Webmaster Trends Analyst
        </Typography>
        <Typography paragraph>Below is a demonstration of Google Search Console’s UI:</Typography>
        <img src={img1} className={classes.img} alt="Google Search Console screenshot"/>
        <Typography paragraph>For iOS...</Typography>
        <Typography paragraph>Unfortunately, the Google Search Console is not available for iOS apps:</Typography>
        <img src={img2} className={classes.img} alt="Search console does not currently support iOs applications"/>
        <Typography paragraph>You can still, however, measure the impact that app indexing has on an iOS app through various methods of analytics: you can start by comparing and contrasting your pre­index user count against your post­index user count.</Typography>
        <Typography variant='h4'>Branch</Typography>
        <Typography paragraph>
            Another indexing service, <ExternalLink url="https://docs.branch.io/">Branch</ExternalLink> also offers their own open­source SDK. What’s unique about Branch is their original API, which allows Branch's own development team to monitor and safeguard your app's indexing on a daily basis ­ app indexes need to always be up to code with Google's requirements. 
            <ul>
                <li>
                <ExternalLink url="https://docs.branch.io/organic-search/firebase/">Android</ExternalLink>      
                </li>
                <li>
                <ExternalLink url="https://dev.branch.io/features/google-app-indexing/guide/">iOS</ExternalLink>
                </li>
            </ul>Android /iOS
        </Typography>
    </div>
  )
}

export default withStyles(jssStyle, {withTheme: true})(AppIndexingTheLatestAndGreatestInMarketing)
