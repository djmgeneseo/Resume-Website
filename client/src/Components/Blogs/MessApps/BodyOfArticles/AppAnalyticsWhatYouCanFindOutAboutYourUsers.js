import React from 'react';

import { withStyles } from '@material-ui/styles'; // jss library
import {Typography} from '@material-ui/core';
import {Link} from 'react-router-dom';
import ExternalLink from '../../../ExternalLink';

import img1 from '../../../../assets/img/blogs/messapps/app-analytics-what-you-can-find-out-about-your-users/1.jpg';
import img2 from '../../../../assets/img/blogs/messapps/app-analytics-what-you-can-find-out-about-your-users/2.jpg';
import img3 from '../../../../assets/img/blogs/messapps/app-analytics-what-you-can-find-out-about-your-users/3.jpg';

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

const AppAnalyticsWhatYouCanFindOutAboutYourUsers = (props) => {
  const {classes} = props;
  return (
    <div>
        <Typography paragraph>
        App analytics is a method or approach to marketing that, when utilized effectively, helps developers uncover their users' preferences. Analytics serves best when it’s utilized not only to improve an app’s marketing, but also its overall experience. With the information gathered from app analytics, developers can essentially hone in on the aspects of an app which users enjoy the most. Even if your app's launch is successful, user retention rates will inevitability decay. Passing judgments on your app's direction when retention rates dwindle would be difficult if your app reviews are bottlenecking from a general lack of user interest. App analytics offers a more precise, continuous, and objective stream of feedback about both your app's overall performance and its user base that is invaluable to those who wish to earn back user loyalty. Here is a random sampling of functions that analytic services such as <ExternalLink url="https://www.adjust.com/solutions/marketers-working-with-adjust/?utm_channel=1&utm_source=google&utm_medium=search&utm_term=mobile%20app%20tracking%20adjust&utm_content=form&utm_campaign=adjust_DT_US&_bt=190898160422&_bk=adjust&_bm=p&_bn=g&_bg=47197688292&gclid=Cj0KCQjwoInnBRDDARIsANBVyASmSrcLeW8ZOJiiZZs8M7Oo4MHVqQpja-pk2bmjscuT8jtCP6AQLVoaApb7EALw_wcB">Adjust</ExternalLink> and App Analytics are currently offering:
        </Typography>
        <Typography paragraph className={classes.center}>Heat Mapping</Typography>
        <img src={img1} className={classes.img} alt="App Analytics - Heat Mapping"/>
        <Typography paragraph>
        A feature that’s unique to App Analytics, heat mapping comes in handy while investigating how users interact with your app. A new feature to heat mapping is gesture recognition, which traces all touches and gestures including swipes, taps, rotations and pinches. Gesture recognition helps guide UI improvements in the right direction to ensure that the app will function and “feels” great based on popular user interactions.
        </Typography>
        <Typography variant='h4'>UI Suggestions</Typography>
        <Typography paragraph>
        A function that’s also unique to App Analytics, UI suggestions help developers by both detecting unresponsive gestures and by detecting screens which are causing confusion and therefore have the highest quit rates. It can even recognize which advertisements tend to be the viewed and generate the most revenue for your app.
        </Typography>

        <Typography variant='h4'>Conversion Funnels</Typography>
        <Typography paragraph>
        A conversion funnel is essentially a way to visualize e-commerce, or to better understand the process and rate by which browsing consumers are “converted” into paying users. Conversion funnels answer the question of “how many people are doing this after that?” and are formulated to help determine which of an app’s specific functions are aiding in the conversion rate of its users. Depicted in the funnel below; the more processes that are added, the more complex the funnel will be:
        </Typography>
        <img src={img2} className={classes.img} alt="Conversion Funnel illustration"/>
        <Typography paragraph>
        While a limit on the number of processes isn’t necessary, the amount that are applied to a conversion funnel is not what matters; what matters is their relevance towards the app being analyzed. For instance; a simpler funnel that investigates the awareness (where customers are coming from?), interest (how is my app grabbing attention?), desires (which desires does your app fulfill? Which problems does it solve?), and purchase rates of potential users may suffice for a majority of apps on the market.
        </Typography>
        <Typography paragraph>
        The success of app analytics is measured by one’s ability to utilize the metrics – or Key Performance Indicators (KPIs) – which are the most appropriate for the app in question.
        </Typography>
        
        <Typography className={classes.blockQuote}>
        “Define metrics to mirror the desired behavior of your users: what is important for your app?” — Sylvain Gauchet of <ExternalLink url="apptamin.com">Apptamin.com</ExternalLink>
        </Typography>
    
        <Typography paragraph>
            Here's a list that Dave McLure - founder of startup accelerator 500 Startups - suggests in <ExternalLink url="https://500hats.typepad.com/500blogs/2007/06/internet-market.html">his post about the chief metrics</ExternalLink> that startups should focus on first:
        </Typography>
        <img src={img3} alt="illustration of the 5 types of measurements of user behavior"/>
        <Typography paragraph>
        To become more acquainted with the paradigm of analytics, here are a few metrics that have a broader use across a range of different app categories:
        </Typography>
        <Typography variant="h4">
        DAU (Daily Active Users)
        </Typography>
        <Typography paragraph>
        A cohort group for daily active users, DAU is a generic metric that helps track how potential users are reacting to major events – such as updates and device releases – that could have an impact on an app’s popularity.
        </Typography>
        <Typography variant="h4">
        MAU (Monthly Active Users)
        </Typography>
        <Typography>
        Another cohort group, monthly active users is useful for measuring the impact of long-term investments, such as those made towards paid user acquisition. Which marketing investments are the most effective in helping your app’s growth?
        </Typography>
        <Typography variant="h4">
            Usage and Retention Rate
        </Typography>
        <Typography paragraph>
        Retention is a major issue that all developers encounter eventually. That’s why an app’s overall success is contingent on both whether and for how long a developer can retain their users’ interest. Splitting the users into groups depending on when they installed your app and the events which enticed them to do so can lead to uncovering what aspects of your app is so appealing to newer users.An analysis of the variability in active users – from the cohort group of monthly active users (MAU) to the cohort of daily active users (DAU) – can also help determine how your user’s loyalty is faring against the trials of time. Read more into Google’s response to user retention woes <Link underline="always" to="/blogs/app-indexing-the-latest-and-greatest-in-marketing">here.</Link>
        </Typography>
        <Typography paragraph>
        Analysing your user base shouldn’t stop at the solitary grouping of a singular “demographic.” Perhaps your app appeals to a more diverse audience than you previously anticipated – perhaps you don’t know your audience members as well as you think you do. A more in-depth investigation of your app’s audience will reveal the different groups of users which comprise your app’s demographic.
        </Typography>
        <Typography variant="h4">
            CLTV (Customer Lifetime Value)
        </Typography>
        <Typography paragraph>
        CLTV is a metric used to determine how much each new customer is worth, or how much you can pay to acquire that customer. CLTV should be what forms your marketing budget, as its value is usually measured against the cost of customer acquisition. A helpful approach is to analyze the cohorts which comprise your user base and to trace how their values differ across each of the different cohorts – this should help reveal which users are either the most or the least valuable to you.
        </Typography>
        <Typography variant='h4'>
        DARPU (Daily Average Revenue Per User)
        </Typography>
        <Typography paragraph>
        DARPU can also help determine the value of an individual user, which is usually based on the average amount of transactions they make from within the app itself.
        </Typography>
        <Typography variant="h4">
        Session Time
        </Typography>
        <Typography paragraph>
        A metric for gauging the depth of a person’s relationship with an app, or how compelling the app is to its users.
        </Typography>
        <Typography variant="h4">
        App Launch / Load Time
        </Typography>
        <Typography paragraph>
        Your app’s average loading time across different users’ devices can impact the rate at which users uninstall your app and turn elsewhere.
        </Typography>
        <Typography variant="h4">
        User Acquisition
        </Typography>
        <Typography paragraph>
        Are your paid advertisements improving sales? Track how users are reacting to your advertisements or how they’re discovering your app. This is useful for steering marketing investments towards the avenues which yield the best results.
        </Typography>
        <Typography variant="h4">
        User Experience / Happniess
        </Typography>
        <Typography paragraph>
        Just because someone’s using your app doesn’t mean they’re enjoying everything about it. <ExternalLink url="https://www.helpshift.com/">Helpshift</ExternalLink> is a service that uses analytics to improve the relationship between an app’s user and its developer.
        </Typography>
        <Typography paragraph>
        Since marketing should start as early in development as possible, developers who wishes to facilitate in their app’s success should be willing to invest in app analytics both before and after their app’s launch.A good time to start mining data is during beta testing when the app’s users can be controlled and easier to monitor.
        </Typography>
    </div>
  )
}

export default withStyles(jssStyle, {withTheme: true})(AppAnalyticsWhatYouCanFindOutAboutYourUsers)
