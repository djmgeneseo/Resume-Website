import React from 'react';

import { withStyles } from '@material-ui/styles'; // jss library
import {Typography, Link} from '@material-ui/core';

import img1 from '../../../../assets/img/blogs/messapps/a-complete-overview-of-the-app-development-cycle/1.jpg';
import img2 from '../../../../assets/img/blogs/messapps/a-complete-overview-of-the-app-development-cycle/2.jpg';
import img3 from '../../../../assets/img/blogs/messapps/a-complete-overview-of-the-app-development-cycle/3.jpg';
import img4 from '../../../../assets/img/blogs/messapps/a-complete-overview-of-the-app-development-cycle/4.jpg';

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

const ACompleteOverviewOfTheAppDevelopmentCycle = (props) => {
  const {classes} = props;
  return (
    <div>
        <Typography variant='h4' gutterBottom>
            1. The idea
        </Typography>
        <img src={img1} className={classes.img} alt="Lightbulb"/>
        <Typography paragraph>
        When forming your next big app idea, remember that <strong>you are selling a product via a highly saturated market.</strong> Statistically speaking, <strong>it’s highly unlikely that one, if not multiple app developers have yet to ponder or even publish an app that’s similar to your own.</strong> We usually suggest that our clients find an app on the market that’s firmly rooted within your app’s territory, and to make amendments to the original idea in order to avoid recreating an already-successful app.          
        </Typography>
        <Typography paragraph>
        <strong>The more knowledgeable you are about the competition, the better you can make your app stand out above the rest.</strong> If you wish to compete within a highly competitive territory on the market, gaining an edge on the competition is crucial. Start by addressing the flaws in other yet similar app designs – <strong>turn their weaknesses into your strength.</strong>          
        </Typography>
        <Typography variant='h4' gutterBottom>
            2. Finding a developer
        </Typography>
        <img src={img2} className={classes.img} alt="Java logo with developers"/>
        <Typography className={classes.center} gutterBottom>Source: NeuronGlobal</Typography>
        <Typography paragraph>
        MessApps specializes in connecting clients with experienced development teams. If you’re in need of a team, come discuss your idea with us and we’ll introduce you to some of our own: +1-646-741-4814. Conversely, say that you wanted to try your hand at coding yourself: we provide resources here on our website that are tailored to help guide the curious non-coder into the vast world of programming. Development is typically a longer process compared to the rest in an app’s development cycle, and learning to code competently enough to create an app would require an expensive investment of your time; the competition will only grow stronger in your stead, so weigh your priorities wisely. Although you could save money by coding alone, remember that the market’s competition is getting fiercer, and having a knowledgeable team on-board will ensure that your app functions as flawlessly as the other successful apps do.      
        </Typography>
        <Typography variant='h4' gutterBottom>
            3. Design and Wireframing
        </Typography>
        <img src={img3} className={classes.img} alt="Design and Wireframing graphic"/>
        <Typography className={classes.center} gutterBottom>
        Source: Interaction-Design
        </Typography>
        <Typography paragraph>
        <strong>When designing an app, we focus less on developing the “right look” and more on achieving the “right feel.”</strong> Creating a desired experience will take time, so we tend to leave adequate amounts to ensure that every detail is taken into consideration. Designing an app is like mapping out a novel: typically, authors don’t just sit behind a keyboard and churn out their magnum opus based on whatever comes to mind. Before jumping into the process, <strong>you need time to organize your thoughts and determine how your content will be ordered and presented to the user.</strong> Wireframing is helpful for doing just that: developers can better determine how an app’s elements will both function and be oriented in relation to one another. The visual component of wireframing also helps to elicit more precise and critical input from the team, which is crucial to making an app feel “just right.”
        </Typography>
        <Typography variant='h4' gutterBottom>
        4. Coding (Development) and Beta Testing
        </Typography>
        <Typography paragraph>
        What’s important isn’t how quickly an app is made, but rather how well and consistently it performs. Part of development includes extensive beta testing. <strong>Never assume that an app will work 100% of the time unless you’ve already proven so with ample amounts of evidence.</strong> An app that works only seven out of ten attempts will not sell more than an app that functions with higher consistency. That’s why we require all our clients to save time between an app’s launch date and its expected completion to search for any hidden errors or glitches that might impede on your user’s experience.
        </Typography>
        <Typography variant='h4' gutterBottom>
        5. Marketing
        </Typography>
        <img src={img4} className={classes.img} alt="Marketing diagram"/>
        <Typography className={classes.center} gutterBottom>
        Source: Clin-Edge
        </Typography>
        <Typography paragraph>
        <strong>Pre-launch advertising is just as vital to an app’s success as post-launch marketing is.</strong> The objective of pre-launch marketing is to create anticipation for the release of your app. Conversely, the objective of post-launch is to direct user traffic towards your app via Search Engine Optimization (SEO). To ensure that your investments will yield profits, it’s best to start researching advertisement methods as early in development as possible instead of waiting right before the app’s launched.
        </Typography>
        <Typography variant="h5" gutterBottom>
            Here's a bare-bones guide we consider following:
        </Typography>
        <ol>
            <li><Typography paragraph>Devise a well-timed launch date before coding the app</Typography></li>
            <li><Typography paragraph>Create a website and a landing page to promote the app during its development</Typography></li>
            <li><Typography paragraph>Research and deploy paid user acquisition strategies</Typography></li>
            <li><Typography paragraph>Advertise for and aggregate potential beta testers and users – collect their emails and notify them once the app nears its launch</Typography></li>
            <li><Typography paragraph>After launch, use analytics to improve your app and listen to feedback to increase user retention rates</Typography></li>
        </ol>
    </div>
  )
}

export default withStyles(jssStyle, {withTheme: true})(ACompleteOverviewOfTheAppDevelopmentCycle)
