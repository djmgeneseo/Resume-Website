import React from 'react';

import { withStyles } from '@material-ui/styles'; // jss library
import {Typography} from '@material-ui/core';
import {Link} from 'react-router-dom';
import ExternalLink from '../../../ExternalLink';

import img1 from '../../../../assets/img/blogs/messapps/the-app-store-a-comprehensive-analysis/1.jpg';
import img2 from '../../../../assets/img/blogs/messapps/the-app-store-a-comprehensive-analysis/2.jpg';
import img3 from '../../../../assets/img/blogs/messapps/the-app-store-a-comprehensive-analysis/3.jpg';
import img4 from '../../../../assets/img/blogs/messapps/the-app-store-a-comprehensive-analysis/4.jpg';
import img5 from '../../../../assets/img/blogs/messapps/the-app-store-a-comprehensive-analysis/5.jpg';
import img6 from '../../../../assets/img/blogs/messapps/the-app-store-a-comprehensive-analysis/6.jpg';
import img7 from '../../../../assets/img/blogs/messapps/the-app-store-a-comprehensive-analysis/7.jpg';
import img8 from '../../../../assets/img/blogs/messapps/the-app-store-a-comprehensive-analysis/8.jpg';
import img9 from '../../../../assets/img/blogs/messapps/the-app-store-a-comprehensive-analysis/9.jpg';

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

const TheAppStoreAComprehensiveAnalysis = (props) => {
  const {classes} = props;
  return (
    <div>
        <Typography paragraph>
            <ExternalLink url={`https://www.appannie.com/en/insights/app-annie-news/app-annie-releases-inaugural-mobile-app-forecast/`}>The app market's evolution seems justified</ExternalLink>, given the increase of demand for smartphone technology worldwide. As of now, 79% of mobile phone users own a smartphone, and the projection on the chart below posits a steady increase in that number over the next coming years:
        </Typography>
        <img src={img1} className={classes.img} alt='Share of mobile phone users per year'/>
        <Typography paragraph className={classes.center}>Source: <ExternalLink url={`https://www.statista.com/statistics/201184/percentage-of-mobile-phone-users-who-use-a-smartphone-in-the-us/`}>Statista</ExternalLink></Typography>
        <Typography paragraph>
            <strong>With the way smartphone sales are escalating, now would be a great time to make a profit off the app store.</strong> If you think you've formed the next best idea for an app, then let us know and we'll point you in the right direction: Give us a call at +1­646­741­4814. The longer you wait, the more heated the competition will be. To better understand just how quickly the market is growing, scan the numbers on the trend below:
        </Typography>
        <img src={img2} className={classes.img} alt='Android apps on Google Play'/>
        <Typography paragraph className={classes.center}>Source: AppBrain</Typography>
        <Typography paragraph>The question is . . . Which platform should you develop for: Android or iOS? To solve the question, consider the smaller questions first:</Typography>

        <Typography variant='h4' gutterBottom><i>Q: How many Apple and Android devices are currently active worldwide?</i></Typography>
        <Typography paragraph><strong>Android takes the lead for its density of active users:</strong> Apple announced its milestone of over <ExternalLink url={`https://www.theverge.com/2016/1/26/10835748/apple-devices-active-1-billion-iphone-ipad-ios`}>1 billion active devices</ExternalLink> four months after Google announced their own <ExternalLink url={`https://techcrunch.com/2015/09/29/android-now-has-1-4bn-30-day-active-devices-globally/`}>1.4 billion milestone</ExternalLink> in September of last year.</Typography>

        <Typography variant='h4' gutterBottom><i>Q: How do these numbers impact revenue acquisition from app purchases?</i></Typography>
        <Typography paragraph>
            In 2015 alone, Android users worldwide downloaded a record 200,000 million apps off the Google Play store, or roughly 547, 945 apps daily. Meanwhile, about 100,000 million apps were downloaded off the Apple store, or 273,972 daily. <strong>Counter­-intuitively, although more apps were downloaded from the Google Play store, more apps were purchased via the iOS App Store:</strong>
        </Typography>
        <img src={img3} className={classes.img} alt='Annual Worldwide App Downloads and Revenue on both iOS App Store and Google Play'/>
        <Typography paragraph>
            The amount of paid vs. free apps could be to blame for this counter­intuitive relationship between app downloads and app revenue gained. The "apps downloaded" statistic does not take into account the disproportionate averages of free­to­paid app downloads globally. Compared to the staggering 211.31 billion downloads of free apps, paid app downloads only reached a cumulative 13.49 billion:
        </Typography>
        <img src={img4} className={classes.img} alt='App downloads (in billions) free downloads and paid for downloads'/>
        <Typography paragraph className={classes.center}>Source: <ExternalLink url={`https://www.statista.com/statistics/201184/percentage-of-mobile-phone-users-who-use-a-smartphone-in-the-us/`}>Statista</ExternalLink></Typography>
        <Typography paragraph>
            Perhaps the difference in user demographics between Android and Apple is to blame? A user from <ExternalLink url={`https://www.quora.com/Why-does-iOS-have-paid-apps-that-are-free-on-Android`}>Quora</ExternalLink> speculates that, since iOS devices are more expensive on average than android devices, the iOS demographic is more willing to purchase a quality app. He also posits that, since iTunes saves credit card credentials, users can confirm their purchase with a single click, whereas Google Play sets up additional hurdles between a user and their potential purchase.
        </Typography>

        <Typography variant='h4' gutterBottom><i>Q: Which app category is currently the most popular?</i></Typography>
        <Typography paragraph>A: As was expected, gaming apps tend to generate the most downloads across both the Android and iOS app stores ­ and by a landslide.Although gaming apps lead in ranking, they are far less abundant on the market than apps that're listed under non­gaming categories.</Typography>
        <Typography paragraph>Between the dates of Jan 1st - May 14, 2016:</Typography>
        <Typography paragraph>231,365 apps were <strong>uploaded</strong> onto the Google Play market. This means that 11,568 apps were uploaded weekly, or 1,652 on a daily basis; essentially, you can expect quite a bit of competition.There are currently 41 categories on both Google Play and the iOS App Store.According to <ExternalLink url={`https://www.appbrain.com/stats/android-market-app-categories`}>AppBrain’s</ExternalLink> statistics on app categories...</Typography>

        <Typography variant='h6' gutterBottom>
                The Top 5 app categories with >50k downloads PER APP on Google Play are:
        </Typography>

        <Typography paragraph>
            Recorded May 18, 2016 (from highest to lowest):
        </Typography>
        <Typography paragraph>
            <ul>
                <li>
                    <strong>Entertainment</strong> with 12,117 apps
                </li>
                <li>
                    <strong>Tools</strong> with 11,555
                </li>
                <li>
                    <strong>Casual gaming</strong> with 11,300
                </li>
                <li>
                    <strong>Personalization</strong> with 11,007
                </li>
                <li>
                    <strong>Lifestyle</strong> with 7,946
                </li>
            </ul>
        </Typography>

        <Typography variant='h6' gutterBottom>The Top 5 categories with the most apps on the Google Play Store are:</Typography>
        <Typography paragraph>
            <ul>
                <li>
                    <strong>Education</strong> with 172,131 apps
                </li>
                <li>
                    <strong>Lifestyle</strong> with 152,867
                </li>
                <li>
                    <strong>Entertainment</strong> with 152,077
                </li>
                <li>
                    <strong>Business</strong> with 143,173
                </li>
                <li>
                    <strong>Personalization</strong> with 130,211
                </li>
            </ul>
        </Typography>

        <Typography paragraph>
            <strong>The Education category is the most dilute category of apps on the market,</strong> ranking sixth for total downloads per app while leading with the most amount of apps in general. <strong>Lifestyle and Personalization apps are both heavily saturated categories; since they're also among thetop 5 for the most downloads per app</strong>, expect to encounter a lot of competition under these categories. Not surprisingly, gaming apps take the lead on both Android and iOS’s top 100 apps, yet oddly more­so on Google Play’s store than on the iOS App Store (June 2015):
        </Typography>
        <img src={img5} className={classes.img} alt='Top 100 Android Apps by Category'/>
        <img src={img6} className={classes.img} alt='Top 100 iOS Apps by Category'/>
        <Typography paragraph className={classes.center}>Source: Apptentive</Typography>

        <Typography variant='h4'><i>Q: But how big of a difference does being on the top 100 list make?</i></Typography>
        <Typography paragraph>The apps which rank higher have a staggering and highly disproportionate increase in downloads than the apps which precede them in rank:</Typography>
        <img src={img7} className={classes.img} alt='Top 100 Android Apps by Installs'/>
        <Typography paragraph className={classes.center}>Source: Apptentive</Typography>
        <Typography paragraph><strong>Apps which are closer to the top have a number of downloads which exceeds nearly 100 times that of apps with a lower ranking. </strong> Obviously, since more installs means more revenue, it makes sense that <strong>gaming is the highest grossing app category; yet, the gaming app category is not nearly as crowded as the others are.</strong> Counter-­intuitively, app trends in yearly revenue across both app markets suggest that gaming will maintain its lead as the highest grossing app category, despite its low upload count:</Typography>
        <img src={img8} className={classes.img} alt='Share of total mobile download an in-app revenue'/>
        <Typography paragraph className={classes.center}>Source: Statista</Typography>
        <Typography paragraph>
            Just how large is the margin of revenue between the top selling game apps and the game apps which rank lower beneath it?
        </Typography>
        <img src={img9} className={classes.img} alt='Top apps daily revenue'/>
        <Typography paragraph className={classes.center}>Source: Statista</Typography>
        <Typography paragraph>
            The top gaming app in March 2016 weighed in with nearly twice as much revenue as the third top gaming app, 3.7 times as much as the fourth gaming app, and more than 5 times as much revenue as the fifth top-­gaming app on the iOS market. In other words, <strong>the difference in revenue between the first spot and the fourth spot is a steep margin of one million dollars.</strong>
        </Typography>
        <Typography paragraph>
            In summary, what you're looking at now is that each respective app store is growing and some of the categories ­- especially gaming -­ are dominating more-­so than others. Free apps tend to fare well on the Play Store and paid apps tend to sell better on the iOS App Store. With not just the mobile audience growing but also the number of paying users, you'll see a slight tick in revenue across the board with even higher ticks for apps which rank at the top 100. With potential profits favoring those who succeed, now's the best time to learn more about becoming an appreneur.
        </Typography>
    </div>
  )
}

export default withStyles(jssStyle, {withTheme: true})(TheAppStoreAComprehensiveAnalysis)