import React from 'react';

import { withStyles } from '@material-ui/styles'; // jss library
import {Typography} from '@material-ui/core';
import {Link} from 'react-router-dom';
import ExternalLink from '../../../ExternalLink';

import img1 from '../../../../assets/img/articles/messapps/restaurant-apps-a-closer-look-at-the-numbers/1.jpg';
import img2 from '../../../../assets/img/articles/messapps/restaurant-apps-a-closer-look-at-the-numbers/2.jpg';
import img3 from '../../../../assets/img/articles/messapps/restaurant-apps-a-closer-look-at-the-numbers/3.jpg';

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

const RestaurantAppsACloserLookAtTheNumbers = (props) => {
  const {classes} = props;
  return (
    <div>
        <Typography paragraph>
        <ExternalLink url={`https://www.opentable.com/`}>OpenTable</ExternalLink> an app with a 4.5 star rating and over 50,000+ reviews that lets users make reservations at local restaurants -­ <ExternalLink url={`https://www.nrn.com/consumer-trends/report-consumers-hungry-more-restaurant-technology`}>conducted a survey</ExternalLink> in 2015 to help restaurants understand how diners would like their mobile apps to function. Over 6,000 adults were surveyed in different metropolitan areas around the United States and <strong>approximately 76% of those surveyed agreed that incorporating technology into their dining experience would be a tremendous improvement.</strong>
        </Typography>
        <Typography paragraph>To debunk what restaurants think diners might expect out of the restaurant’s app, a surprising 86% of respondents could not see themselves pre­ordering a meal and an even higher 88% said they probably wouldn’t make a purchase beforehand. So what are some of the things diners seek in mobile apps? The results were surprisingly unanimous:</Typography>
        <ul>
            <li><Typography paragraph>­87% wanted an app that could find local restaurants</Typography></li>
            <li><Typography paragraph>­86% simply wished to view a restaurant's menu</Typography></li>
            <li><Typography paragraph>­85% wanted to know how long the wait would be</Typography></li>
            <li><Typography paragraph>83% wished they could add themselves to the wait­list before arriving</Typography></li>
            <li><Typography paragraph>­68% thought it’d be convenient to choose their own table</Typography></li>
            <li><Typography paragraph>60% wanted to read reviews for the restaurant</Typography></li>
            <li><Typography paragraph>­48% would prefer to read reviews from professional critics</Typography></li>
        </ul>
        <Typography paragraph>Diners seem to have nothing but great things to say about technology, so why not plug into the grid with an app of your own? If you aren’t already aware, <strong>the large majority of restaurants are adapting touch­screen technology into their services to help both improve and expedite the ordering process.</strong></Typography>
        <Typography paragraph>On­table touchscreens have been trending the United States in recent times: I recall using one myself at several Applebees across New York State. When respondents were asked about these touchscreens, <strong>55 percent said that they too had used them before, and four out of five seemed to enjoy or at the very least felt neutral about them.</strong></Typography>
        <Typography paragraph><ExternalLink url={'https://marketingland.com/study-50-percent-of-mobile-queries-in-travel-restaurants-autos-result-in-a-purchase-18404'}>A similar study was made two years prior by Telmetrics and xAd;</ExternalLink> it was found that <strong>89% of users who searched for a restaurant with their smartphone made a purchase within 24 hours and 64% made a transaction within the hour.</strong> This 2012 study had already fortified the notion that <strong>smartphone users are more likely to make a purchase than desktop users.</strong> So why not make their search easier with an app? In fact, 53% of respondents said they had searched for an app for restaurants within their local directory.
        </Typography>

        <Typography paragraph><ExternalLink url={'https://telmetrics.com/mp2p-reports-infographics-ty/'}>Research from Telmetrics and xAd’s more recent 2014 campaign on mobile purchasing</ExternalLink> had substantiated the above demands of diners:</Typography>
        <img src={img1} className={classes.img} alt='Mobile shoppers focus on price and location for purchase decisions'/>
        <Typography paragraph className={classes.center}>Source: telemetrics.com</Typography>
        <Typography paragraph>Price and location are two big driving points for potential diners. The majority of users just want to know where your restaurant is, and how much their meal is going to cost.</Typography>
        <img src={img2} className={classes.img} alt='Mobile is an essential, everyday purchase tool'/>
        <Typography paragraph className={classes.center}>Source: telemetrics.com</Typography>
        <Typography paragraph>Times are changing, and users expect to find what they want by simply reaching for their phone and pulling up information. If your restaurant can be easily found by a quick search on any old smartphone, then your business will be significantly impacted.</Typography>
        <img src={img3} className={classes.img} alt='Mobile search drives purchases'/>
        <Typography paragraph className={classes.center}>Source: telemetrics.com</Typography>
        <Typography paragraph>Out of every other category, restaurant shoppers have the highest rate of conversion from potential consumers into paying customers. An app that’s personalized to your restaurant’s audience will ensure that users will enjoy their browsing experience and share it with friends and family, giving your restaurant that much more publicity.</Typography>
        <Typography paragraph><strong>Ads seem to have a big impact on compelling potential diners into choosing a particular restaurant.</strong> 3 out of 5 respondents in the 2012 Telmetrics and xAd survey claimed that they seldom know what they wanted to eat before making a search on their mobile device, and 75% reported to have noticed mobile ads particularly for restaurants. Funneling resources into developing and more importantly marketing and advertising a great, user­friendly app for your restaurant could be a big game­ changer for your business.</Typography>
        <Typography paragraph><strong>As more and more customers plug into the grid with their smartphones, it’s important that your restaurant’s presence on the web doesn’t get left behind.</strong> For more on how developing an app can help the discoverability of your restaurant, <Link underline='always' to='/articles/messapps/app-indexing-the-latest-and-greatest-in-marketing'>check out my article on how to index an app with Google Search.</Link></Typography>
    </div>
  )
}

export default withStyles(jssStyle, {withTheme: true})(RestaurantAppsACloserLookAtTheNumbers)