import React from 'react';

import { withStyles } from '@material-ui/styles'; // jss library
import {Typography} from '@material-ui/core';
import {Link} from 'react-router-dom';
import ExternalLink from '../../../ExternalLink';

import img1 from '../../../../assets/img/blogs/messapps/the-top-five-greatest-pitfalls-in-app-marketing/1.jpg';
import img2 from '../../../../assets/img/blogs/messapps/the-top-five-greatest-pitfalls-in-app-marketing/2.jpg';
import img3 from '../../../../assets/img/blogs/messapps/the-top-five-greatest-pitfalls-in-app-marketing/3.jpg';
import img4 from '../../../../assets/img/blogs/messapps/the-top-five-greatest-pitfalls-in-app-marketing/4.jpg';
import img5 from '../../../../assets/img/blogs/messapps/the-top-five-greatest-pitfalls-in-app-marketing/5.jpg';

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

const TheTopFiveGreatestPitfallsInAppMarketing = (props) => {
  const {classes} = props;
  return (
    <div>
        <Typography paragraph>
            Naturally, there exists more than just one angle of approach to marketing; for whichever plan you devise, remember to avoid these common mistakes:
        </Typography>
        <Typography variant='h4' gutterBottom>
             1.	Inadequate focus on your app’s USP  
        </Typography>
        <Typography paragraph>
            Your chief objective while marketing should be to prevent your app from blending in with the rest on the app store. This is why successful marketing is contingent on the promotion of a product’s unique attribute ­ that is, its <strong>Unique Selling Proposition</strong>. If you feel as though you’ve lost a grasp on what makes your app unique, stop and ask yourself:
        </Typography>
        <Typography paragraph>
            <ul>
                <li>How can users benefit from using my app?</li>
                <li>How does my app compare to and contrast with my competition's?</li>
                <li>If I were browsing the app store today, which features would set my app apart from the rest?</li>
            </ul>
        </Typography>

        <Typography paragraph>
            The majority of your marketing efforts should be centered around how you will provide the answers to these above questions. If you plan on delegating all marketing responsibilities to a team, avoid the mistake of assuming that each individual is already on­board with the app's selling point.
        </Typography>

        <Typography paragraph>
            <strong>
                The success of an app depends on its popularity, which is largely contingent on how it's being marketed: the marketing team’s collective understanding of your app’s selling point is as vital to your app’s success as the selling point itself.
            </strong>
        </Typography>
        <Typography variant='h4' gutterBottom>
            2.	Unfamiliarity with the market's evolving stratagem        
        </Typography>
        <Typography paragraph>
            The common denominator between the most successful apps today concerns App store Search Optimization. ASO refers to the technique of choosing and incorporating specific keywords into an app description/name to generate the most visits from App Store search queries.
        </Typography>
        <Typography paragraph>
            The central ASO trend seems to be gravitating towards the incorporation of simplified phrasing and keywords within the app's description and title. The image below contains the top apps from Google Play Store’s Health & Fitness app category. Each of their names briefly yet concisely reflects their function:
        </Typography>
        <img src={img1} className={classes.img} alt='Top four Health and Fitness apps'/>
        <Typography paragraph>
            Notice how the two pedometer apps are simply named “Pedometer.”
        </Typography>
        <Typography paragraph>
            Before you publish your app, ask yourself: which keywords would a typical user search with to find an app like mine?
        </Typography>
        <Typography variant='h4' gutterBottom>
            3.	Neglecting feedback     
        </Typography>
        <Typography paragraph>
            Neglecting feedback is one of the most irresponsible things an appreneur can do. While marketing, your goal should be to improve communication between you, the developer, and the user. How big of an impact on an app's reviews does opening channels of communication have?
        </Typography>
        <Typography paragraph>
            Note the contrasting levels of effort invested in bolstering user­developer communication between the apps <strong>SoundCloud</strong> and <strong>Yik Yak</strong>:
        </Typography>
        <img src={img2} className={classes.img} alt='SoundCloud side-menu screenshot'/>
        <Typography paragraph className={classes.center}>
            <strong>SoundCloud</strong> (version 2016.05.04-­release)
        </Typography>
        <img src={img3} className={classes.img} alt='Yik Yak side-menu screenshot'/>
        <Typography paragraph className={classes.center}>
            <strong>Yik Yak</strong> (version 3.4.0)
        </Typography>
        <Typography paragraph>
            Unlike SoundCloud, <strong>notice how Yik Yak's developers implemented a review and feedback feature directly into their UI.</strong> The results were on par with what we expected:
        </Typography>
        <img src={img4} className={classes.img} alt='SoundCloud total reviews versus installs'/>
        <Typography paragraph className={classes.center}>
            <strong>SoundCloud:</strong> .88% of users left a review (assuming 250 million installs)
        </Typography>
        <img src={img5} className={classes.img} alt='Yik Yak total reviews versus installs'/>
        <Typography paragraph className={classes.center}>
            <strong>Yik Yak:</strong> 2.48% of users left a review (assuming 2.5 million installs)
        </Typography>
        <Typography paragraph>
            Although more users installed SoundCloud, <strong>approximately 3 times as many users left a review for Yik Yak</strong> (relative to each of the app’s installations). <strong>Fulfilling the demands of your current user base improves your application’s chances for success: your app is more likely to gain traction after it meets the interests of its user base.</strong> Better products equals better reviews, and having better reviews leaves an overall better impression on your app for potential users to see.
        </Typography>
        <Typography variant='h4' gutterBottom>
            4.	Launching apps with poor timing
        </Typography>
        <Typography paragraph>
            Setting and promoting a release date is a great way to build anticipation; however, be sure to leave adequate time for beta testing before the app's launch. <strong>If you release the app too soon, there’s a good chance that it'll contain either unattractive glitches or experience­-breaking errors ­- overlooked glitches and bugs will put a strain on any app’s reputation.</strong> Even if the errors are addressed and fixed, the disproportionate ratio of negative to positive reviews will likely bottleneck the potential of your app’s success, making it unattractive and that much more difficult to market.
        </Typography>
        <Typography paragraph>
            <strong>Also, try not to overlap your app’s release date with that of another highly anticipated app or tech.</strong> There's no risk in planning your app’s release for a later date; there is, however, a risk in endangering the success of your app by sharing its launch date with that of another anticipated product. 
        </Typography>
        <Typography variant='h4' gutterBottom>
            5.	Creating false expectations
        </Typography>
        <Typography paragraph>
            <strong>Market your app in a way that neither sails over nor falls short of its intended functionality.</strong> When marketing and developing, stay focused on your app’s selling point. Don’t try to impress yourself and others with unnecessary implementations that are irrelevant to your app’s chief function ­ aim to mitigate clutter. In other words, <strong>market what you develop, and develop what you market.</strong>
        </Typography>
    </div>
  )
}

export default withStyles(jssStyle, {withTheme: true})(TheTopFiveGreatestPitfallsInAppMarketing)