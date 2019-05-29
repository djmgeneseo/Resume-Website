import React from 'react';

import { withStyles } from '@material-ui/styles'; // jss library
import {Typography} from '@material-ui/core';
import {Link} from 'react-router-dom';
import ExternalLink from '../../../ExternalLink';

import img1 from '../../../../assets/img/blogs/messapps/making-the-most-out-of-iOS-app-analytics/1.jpg';
import img2 from '../../../../assets/img/blogs/messapps/making-the-most-out-of-iOS-app-analytics/2.jpg';
import img3 from '../../../../assets/img/blogs/messapps/making-the-most-out-of-iOS-app-analytics/3.jpg';
import img4 from '../../../../assets/img/blogs/messapps/making-the-most-out-of-iOS-app-analytics/4.jpg';
import img5 from '../../../../assets/img/blogs/messapps/making-the-most-out-of-iOS-app-analytics/5.jpg';
import img6 from '../../../../assets/img/blogs/messapps/making-the-most-out-of-iOS-app-analytics/6.jpg';
import img7 from '../../../../assets/img/blogs/messapps/making-the-most-out-of-iOS-app-analytics/7.jpg';
import img8 from '../../../../assets/img/blogs/messapps/making-the-most-out-of-iOS-app-analytics/8.jpg';
import img9 from '../../../../assets/img/blogs/messapps/making-the-most-out-of-iOS-app-analytics/9.jpg';
import img10 from '../../../../assets/img/blogs/messapps/making-the-most-out-of-iOS-app-analytics/10.jpg';
import img11 from '../../../../assets/img/blogs/messapps/making-the-most-out-of-iOS-app-analytics/11.jpg';
import img12 from '../../../../assets/img/blogs/messapps/making-the-most-out-of-iOS-app-analytics/12.jpg';
import img13 from '../../../../assets/img/blogs/messapps/making-the-most-out-of-iOS-app-analytics/13.jpg';
import img14 from '../../../../assets/img/blogs/messapps/making-the-most-out-of-iOS-app-analytics/14.jpg';
import img15 from '../../../../assets/img/blogs/messapps/making-the-most-out-of-iOS-app-analytics/15.jpg';
import img16 from '../../../../assets/img/blogs/messapps/making-the-most-out-of-iOS-app-analytics/16.jpg';
import img17 from '../../../../assets/img/blogs/messapps/making-the-most-out-of-iOS-app-analytics/17.jpg';
import img18 from '../../../../assets/img/blogs/messapps/making-the-most-out-of-iOS-app-analytics/18.jpg';
import img19 from '../../../../assets/img/blogs/messapps/making-the-most-out-of-iOS-app-analytics/19.jpg';
import img20 from '../../../../assets/img/blogs/messapps/making-the-most-out-of-iOS-app-analytics/20.jpg';
import img21 from '../../../../assets/img/blogs/messapps/making-the-most-out-of-iOS-app-analytics/21.jpg';
import img22 from '../../../../assets/img/blogs/messapps/making-the-most-out-of-iOS-app-analytics/22.jpg';
import img23 from '../../../../assets/img/blogs/messapps/making-the-most-out-of-iOS-app-analytics/23.jpg';

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

const MakingTheMostOutOfIosAppAnalytics = (props) => {
  const {classes} = props;
  return (
    <div>
        <Typography paragraph className={classes.center}><strong>NOTE:</strong> To access App Analytics, you’ll need entry to an Apple Developer Account with a Published app; learn how to upgrade your Apple ID into a Developer Account <Link underline='always' to='/blogs/messapps/boost-your-apps-growth-social-implementations'>here</Link></Typography>
        <Typography paragraph>With <strong>App Analytics</strong> you can:</Typography>
        <ul>
            <li><Typography paragraph>­Gain insight on your app and users through factual and purely objective feedback</Typography></li>
            <li><Typography paragraph>­Learn how often potential users visit your app while browsing through the App Store</Typography></li>
            <li><Typography paragraph>­Discover the type of devices your app is being used on</Typography></li>
            <li><Typography paragraph>­Monitor the amount of time users spend on your app</Typography></li>
            <li><Typography paragraph>­Track both your app’s sales from the App Store as well as any in­app purchases</Typography></li>
            <li><Typography paragraph>Filter data by version, date, region, website referrer and more</Typography></li>
            <li><Typography paragraph>­Create campaign links and measure which marketing campaigns are the most successful</Typography></li>
        </ul>
        <Typography paragraph>App Analytics is available for individuals with both an Apple Developer ID and the delegated user permission role of either Admin, Finance, or Sales</Typography>
        <Typography paragraph className={classes.center}><strong>NOTE:</strong> apps currently running on iOS 7 devices and lower are not accounted for under Apple’s App Analytics services; statistics that appear may waver below the actual data</Typography>
        <Typography paragraph>To access App Analytics, sign­in to your Apple Developer Account <ExternalLink url={'https://itunesconnect.apple.com/itc/static/login'}>here</ExternalLink></Typography>
        <img src={img1} className={classes.img} alt='iTunes Connect login'/>
        <Typography paragraph>Once inside the <strong>iTunes Connect dashboard</strong>, click <strong>App Analytics</strong></Typography>
        <img src={img2} className={classes.img} alt='App Analytics'/>
        <Typography paragraph>Find and click the App to be analyzed. Once opened, App Analytics’s <strong>Overview</strong> tab breaks down your app's data using 8 different <strong>Metrics</strong></Typography>
        <img src={img3} className={classes.img} alt='Overview tab'/>
        <Typography paragraph><strong>Impressions: </strong>The amount of views your app received on the App Store for more than one second, including search results, Featured, Explore, Top Charts and app Product Page views.</Typography>
        <Typography paragraph><strong>Product Page Views: </strong>The number of times your app’s App Store page has been viewed on an iOS device</Typography>
        <Typography paragraph><strong>App Units: </strong>The total amount of first­time app purchases made on the App Store;re­downloads from the same device and/or from the same Apple ID are not included</Typography>
        <Typography paragraph><strong>In-app Purchases: </strong>The total amount of first­time In­App purchases made from an iOS device.</Typography>
        <Typography paragraph><strong>Sales: </strong>The total amount of revenue accumulated from your app; whether from In­App purchases, app bundles, or the initial price of the app itself.</Typography>
        <Typography paragraph><strong>Sessions: </strong>A value that represents the amount of times your app has been used for more than two seconds. This number will only increment upon usage based on whether a user agrees to share their data with you.</Typography>
        <Typography paragraph><strong>Active Devices: </strong>The number of sessions that are running during a chosen period of time. This number is also based on app users who agree to share their data with you.</Typography>
        <Typography paragraph><strong>Crashes: </strong> The total number of crashes that occur during a selected period of time. By clicking the small prompt at the upper­middle portion of this window, a new window with several different selectable</Typography>
        <Typography paragraph><strong>Time-Filters </strong>should appear. Mine’s currently toggled to display all data collected between the app’s launch date (Apr 1) and today (Jul 20)</Typography>
        <img src={img4} className={classes.img} alt='Range of dates'/>
        <Typography paragraph>Located at the bottom-­most portion of the screen is an aggregation of data concerning user devices:</Typography>
        <img src={img5} className={classes.img} alt='App Units by Device dropdown'/>
        <img src={img6} className={classes.img} alt='App Units selected'/>
        <Typography paragraph>You can focus on particular metrics and refine the data by toggling through different filters. First, click the <strong>Metrics</strong> tab at the upper­ left hand side of the UI:</Typography>
        <img src={img7} className={classes.img} alt='Metrics tab'/>
        <Typography paragraph>This tab essentially offers a more acute and refined look at each metric of data over time</Typography>
        <Typography paragraph>You can also compare different <strong>Metrics</strong> and save them under <strong>Saved Views</strong> for ease of access in the future. A great saved view to consider is <strong>App Units</strong> compared to <strong>Impressions.</strong></Typography>
        <Typography paragraph><strong>App Units/Impressions</strong> = <strong>Conversion Rate</strong>, or the total amount of <strong>Potential Users</strong> that bought or downloaded the app and converted into <strong>Actual Users</strong>:</Typography>
        <img src={img8} className={classes.img} alt='App Units, Impressions, Conversion Rate Ratio, and Date Range dropdown are highlighted'/>
        <Typography paragraph>Feel free to explore and discover different combinations of metrics! Solve the mystery of where your installs are coming from and which marketing avenues are the most effective: start by clicking the <strong>Sources</strong> tab:</Typography>
        <img src={img9} className={classes.img} alt='Sources tab'/>
        <Typography paragraph>Embedded within the <strong>Sources</strong> tab, the <strong>Top Websites</strong> sub­-tab contains a list of websites that refer visitors back to your app’s page on the App Store. The websites can either be ordered based on their <strong>Names</strong> or by the amount of <strong>Impressions, App Units, Sales and Sessions</strong> that they’ve generated. This data is useful for tracking which websites are attracting the most users while also helping to identify those demographics</Typography>
        <img src={img10} className={classes.img} alt='Under Sources tab, Top Websites, Name, Impressions, App Units, Sales, and Sessions highlighted'/>
        <Typography paragraph className={classes.center}><strong>NOTE: </strong>data pertaining to <strong>Session</strong> length may only be collected from those users who agree to share their usage information with developers; in this example, only 42% of users have agreed to do so:</Typography>
        <img src={img11} className={classes.img} alt='Disclaimer: Opt-in Rate for users who agreed to share usage information with app developers'/>
        <Typography paragraph>Located beside the <strong>Top Websites</strong> tab, <strong>Top Campaigns</strong> features a list of each <strong>Campaign Link</strong> that you’ve created:</Typography>
        <img src={img12} className={classes.img} alt='Top Campaigns'/>
        <Typography paragraph>To generate a Campaign Link, simply find and click the <strong>Generate a Campaign Link</strong> prompt indicated in the picture below:</Typography>
        <img src={img13} className={classes.img} alt='Generate a Campaign Link'/>
        <Typography paragraph>Next, double­check that the proper app is selected and type in an alphanumeric <strong>Campaign ID</strong> that doesn’t exceed 40 characters. We suggest that you refrain from incorporating spaces to save room; it also helps to tailor the ID in a way that best reflects its function. For instance; if I wanted to generate a new link to incorporate into a Facebook post, a fitting ID might be “facebookJuly20”.</Typography>
        <img src={img14} className={classes.img} alt='App and Campaign input fields'/>
        <Typography paragraph>Simply copy the <strong>Campaign</strong> Link and paste it accordingly - nothing more needs to be done</Typography>
        <img src={img15} className={classes.img} alt='Campaign Link input field'/>
        <Typography paragraph className={classes.center}><strong>NOTE: </strong>Each link must be visited by at least 5 different users in order for it to be displayed under the <strong>Top Campaigns</strong> tab for analysis</Typography>
        <Typography paragraph><strong>Retention</strong> is the last of the four main tabs in App Analytics</Typography>
        <img src={img16} className={classes.img} alt='Retention tab'/>
        <Typography paragraph>The longer users engage with your app, the more likely they are to make In­App purchases and to recommend the app to friends and family. To help analyze how well your app retains the interest of its users, the <strong>Retention</strong> tab is coded to organize an app’s data using Three main variables: <strong>Purchase Date, Devices and Retention Period</strong>.</Typography>
        <Typography paragraph>First, select a date from which to analyze your data. This date represents the <strong>Purchase Date</strong>, drawing upon all users that purchased and installed your app on this date ­- I’ll pick April 11, 2016 and use that date as a reference point moving forwards:</Typography>
        <img src={img17} className={classes.img} alt='Date range under retention'/>
        <Typography paragraph>The left-­most graph represents the percentage of users that purchased the app on April 11. The very first point on this line­graph indicates that percentage on April 12 or the day following the selected <strong>Purchase Date</strong>, and every proceeding point represents the day after that of the date preceding it:</Typography>
        <img src={img18} className={classes.img} alt='Breakdown of retention on a specific date'/>
        <img src={img19} className={classes.img} alt='Cursor placement on graph that illustrates retention'/>
        <Typography paragraph>Notice the change in numbers over time. The percentages listed at each point reflects the ratio of users that still use the app over the total amount of users that installed the app on April 11.</Typography>
        <Typography paragraph>The bar graph displayed beside the line­graph and the tiled chart underneath projects the same data in different formats.</Typography>
        <Typography paragraph>The tiled chart is titled <strong>Daily Retention</strong>, but note that this data may not be an accurate representation of your userbase, given that it only represents those of your userbase who opted to allow Apple to collect user data from their devices:</Typography>
        <img src={img20} className={classes.img} alt='The percentage of users that first installed the app on a given day and used it again in the following days'/>
        <Typography paragraph>Each number extending outward above the tiled columns represents ‘x’ number of days after the date displayed on the left­-hand side:</Typography>
        <img src={img21} className={classes.img} alt='Breakdown of table chart: Date against devices'/>
        <Typography paragraph>The tiles beneath represent the retention rate of users which installed the app on the corresponding <strong>Purchase Date</strong></Typography>
        <img src={img22} className={classes.img} alt='How to read into the many elements on the table chart'/>
        <Typography paragraph className={classes.center}><strong>EXAMPLE: </strong>the number “1” represents the date April 12 for the “April 11” column. 75% of users that downloaded the app on April 11 used the app the following day, April 12.</Typography>
        <Typography paragraph>By clicking a tile, both the line graph and the bar graph will adjust to reflect the data for the tile’s corresponding <strong>Purchase Date.</strong> Additionally, all data can be refined even further via a <strong>Filter</strong>; the button is located just below the main upper left­hand pane:</Typography>
        <img src={img23} className={classes.img} alt='Add Filter to App Analytics'/>
        <Typography paragraph><Link to='/blogs/messapps/app-analytics-what-you-can-find-out-about-your-users'>Read more on how to use App Analytics and help monitor and improve your app's performance today</Link></Typography>
    </div>
  )
}

export default withStyles(jssStyle, {withTheme: true})(MakingTheMostOutOfIosAppAnalytics)