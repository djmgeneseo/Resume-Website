import React from 'react';

import { withStyles } from '@material-ui/styles'; // jss library
import {Typography, Link} from '@material-ui/core';

import img1 from '../../../../assets/img/articles/messapps/three-easy-ways-to-improve-your-restaurants-app/1.jpg';
import img2 from '../../../../assets/img/articles/messapps/three-easy-ways-to-improve-your-restaurants-app/2.jpg';
import img3 from '../../../../assets/img/articles/messapps/three-easy-ways-to-improve-your-restaurants-app/3.jpg';

const jssStyle = theme => ({
    img: {
      display: 'block',
      marginLeft: 'auto',
      marginRight: 'auto',
      marginBottom: '15px',
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
    }
})

const ThreeEasyWaysToImproveYourRestaurantsApp = (props) => {
  const {classes} = props;
  return (
    <div>
      <Typography paragraph>
      In 2015, total app revenue amounted to a total of 89.17 billion dollars. How can your business tap into that wealth? Better yet, if your business has an app, is user accessibility the sole determinant for its poor performance? 
      </Typography>
      <img src={img1} className={classes.img} alt="Chart of total app revenue"/>
      <Typography paragraph>
      The truth is, not many restaurant apps are successful, but the most recent statistics pulled from the <Link underline='always' href={'https://www.jumio.com/about/press-releases/24-5-billion-in-revenue-left-on-the-table-by-mobile-businesses-and-financial-services-last-year-due-to-poor-user-experience/'}>Jumio 2015 Survey</Link> is helping us understand why. Two years prior in 2013, the same study was made, which posited that 66% of respondents had failed to complete a transaction due to issues during the checkout process.
      </Typography>
      <Typography paragraph>
      Evidence from the more recent follow­up study in 2015 foreshadows a rising potential for commercial apps, as the number of failed transactions has decreased from 66% to 56% in just two years. Behind general retail, transactions regarding food and travel have been among the most frequently abandoned, but the problem is not necessarily grounded in the nature of food and travel apps.
      </Typography>
      <img src={img2} className={classes.img} alt="Mobile Abandonment Rate by Industry"/>
      <Typography paragraph>
      The issue can be broken down into three main causes, ordered below from the most prevalent to the least among users in the Jumio 2015 survey:
      </Typography>
      <ol>
        <li>
              <Typography paragraph>Slow loading times</Typography>
              <Typography className={classes.blockQuote}>
                "The loading bar's frozen...What now? Does that mean my order never went through?"
              </Typography>
              <Typography paragraph>
              36% of users cited slow loading speeds as the cause for abandoning mobile transactions.
              </Typography>
              <Typography paragraph>
                Based on the feedback gathered from respondents in the <Link underline='always' href={'http://pages.jumio.com/rs/jumio/images/Jumio%202013-%20Mobile%20Consumer%20Insights%20Study.pdf?mkt_tok=3RkMMJWWfF9wsRonuq3JZKXonjHpfsX56%2B8kULHr08Yy0EZ5VunJEUWy2YMFTdQ%2FcOedCQkZHblFnVUITq2yRqYNrqEM'}>Jumio 2013 Survey</Link>, nearly two­thirds (66%) of consumers attempting to make a transaction on their smartphone or tablet were forced to abandon their purchase:
              </Typography>
              <img src={img3} className={classes.img} alt="Jumio Inc. Chart of Top Roadblocks App Consumers Face"/>
              <Typography paragraph>The heightened competition across the app store leaves users with more reasons to leave your app than to remain loyal to it. Why should anyone struggle with a slow app when a faster one that promises to match the same function more consistency is available to them at the same price? The same notion applies to using an app over using a desktop: why should someone use an app for a service that’s faster on the web via their desktop?
              </Typography>
              <Typography paragraph>
              The point of your restaurant’s app should be to provide a faster and more convenient method than calling­in or using your website, which is a good introduction to the next point ­ user experience.
              </Typography>
        </li>
        <li>
              <Typography paragraph>User Experience</Typography>
              <Typography className={classes.blockQuote}>
                "How do I even place an order on this thing?"
              </Typography>
              <ul>
                <li>
                  <Typography paragraph>
                  31% reported that apps/mobile sites that are too difficult to navigate
                  </Typography>
                </li>
                <li>
                  <Typography paragraph>
                  28% responded that it is difficult to type personal information on small screen
                  </Typography>
                </li>
                <li>
                  <Typography paragraph>
                  22% reported that the payment process was too complicated
                  </Typography>
                </li>
              </ul>
              <Typography paragraph>
              Overall, 46% of users agree that apps that are accessible and easier to navigate would make them more likely to complete a payment transaction. The more difficult it is to make a transaction, the less likely users are to convert into paying customers. Your intention should be to mitigate the number of hurdles facing users before they can complete transactions, and the gathered data above affirms this notion. 
              </Typography>
        </li>
        <li>
            <Typography paragraph>Security concerns</Typography>
            <Typography className={classes.blockQuote}>
            “Their app doesn’t seem too official, I mean it’s very unresponsive and navigation isn’t user­friendly whatsoever...Maybe I downloaded the wrong app?”
            </Typography>
            <ul>
              <li>
                <Typography paragraph>
                  27% reported concerns around security of payment info
                </Typography>
              </li>
              <li>
                <Typography paragraph>
                  26% reported concerns around security of personal info
                </Typography>
              </li>
            </ul>
            <Typography paragraph>
            Although security and comfort contributed least to users' decisions, you can see how both an app’s responsiveness and its ease­of­use contribute to a user’s expectations and their overall sense of trust with the app. During the Jumio 2013 survey, 51% of users that abandoned an online transaction did so because they felt “uncomfortable entering their credit card information.”
            </Typography>
            <ul>
              <li><Typography paragraph>62% of respondents aged 55+ felt uncomfortable with the service they were using</Typography></li>
              <li><Typography paragraph>59% of respondents aged 45-­54</Typography></li>
              <li><Typography paragraph>45% of respondents aged 18­-34</Typography></li>
            </ul>
            <Typography paragraph>
            The ideal app should cater to and be easy­to­use for a sizable margin of users with a wide age group in mind.
            </Typography>
        </li>
      </ol>
    </div>
  )
}

export default withStyles(jssStyle, {withTheme: true})(ThreeEasyWaysToImproveYourRestaurantsApp)
