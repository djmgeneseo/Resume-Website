import React from 'react';

import { withStyles } from '@material-ui/styles'; // jss library
import {Typography, Link} from '@material-ui/core';

import img1 from '../../../../assets/img/blogs/messapps/five-appreneur-books-that-guarantee-results/1.jpg';
import img2 from '../../../../assets/img/blogs/messapps/five-appreneur-books-that-guarantee-results/2.jpg';
import img3 from '../../../../assets/img/blogs/messapps/five-appreneur-books-that-guarantee-results/3.jpg';
import img4 from '../../../../assets/img/blogs/messapps/five-appreneur-books-that-guarantee-results/4.jpg';
import img5 from '../../../../assets/img/blogs/messapps/five-appreneur-books-that-guarantee-results/5.jpg';

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

const ElevenOfTheMostFrequentlyAskedAppMarketingQuestions = (props) => {
  const {classes} = props;
  return (
    <div>
        <Typography paragraph>
        Are your marketing techniques up­to­date?
        </Typography>
        <Typography className={classes.blockQuote}>
        "Reliance on what worked in the past is no longer sufficient" ­- Felicity Menzies, Principal at Culture Plus Consulting.
        </Typography>
        <Typography paragraph>
        The information collected below is a gathering of the most recent observations we've made about the app world:
        </Typography>
        <Typography variant="h5">
        Q: What exactly is paid user acquisition, and when should I use it? 
        </Typography>
        <Typography paragraph>
            A: In the past, some would argue that investing in paid user acquisition is only warranted if your app is already successful. Others might consider paid advertisements when user retainment rates hit below a comfortable threshold. Feedback is an invaluable asset when improving app’s ability to meet its users' interests. If hardly anyone hears about your app and you aren't receiving user feedback after a failed launch, then how can you discern whether poor marketing or poor development is to blame? If the app's user­friendliness is to blame, then how will the development team know which aspects of the app to improve? The earlier in development you can net in feedback, the more time you’ll have to work towards meeting user expectations. The function of user acquisition is double­folded: not only to increase monetization in the short­term, but also to provide a direction for your app to follow in the long­run.
        </Typography>
        <Typography variant="h5">
            Q: Which services (Facebook ads, Google ads, twitter etc.) should I use to promote my app?
        </Typography>
        <Typography paragraph>
            A: Exactly where you should advertise depends on your budget, demographic, and overall expectations. Facebook and Twitter allow for shorter campaigns than most, and appds like <a href={'https://play.google.com/store/apps/details?id=com.google.android.apps.adwords&hl=en'} rel="noopener noreferrer" target="_blank">Adwords</a> can help you get the best out of each - so yes, Facebook and Twitter would be a great place to start. Here’s a convenient advertising cheat­sheet that about sums up the different platforms regarding their individual benefits and requirements: 
        </Typography>
        <img src={img1} className={classes.img} alt="App Install Ads Cheat Sheet"/>
        <Typography paragraph>
            No matter how you decide to promote, keep in mind that successful user acquisition isn't about who can shove a brand in people’s faces the most; creativity is what peaks consumer interest the most.
        </Typography>
        <Typography variant="h5">
            Q: What is this and why do I keep seeing it on advertisements?
        </Typography>
        <img src={img2} className={classes.img} alt="QR code example"/>
        <Typography paragraph>
            A: This is a QR (Quick Response) code. Essentially, these are shortcuts that are more convenient than links are due to their ability to direct users straight to online content via an image­reader. Its invention is based off a simple e­marketing ethic: the easier it is for someone to seek your content, the more likely they are to access it. QR coding is especially convenient if you wish to expand your app's advertising onto the streets: if a pedestrian owns a QR reader app and a camera phone with which to take the picture with, then their already­installed QR readers will automatically send them to your website ­ no lengthy URL addresses required. 
        </Typography>
        <Typography variant="h5">
            Q: How big should my budget be?
        </Typography>
        <Typography paragraph>
        A: Costs will obviously vary, but the complexity of the app in question is the main determinant. <a href="https://savvyapps.com/blog/how-much-does-app-cost-massive-review-pricing-budget-considerations" rel="noopener noreferrer" target="_blank" >According to the founder and CEO of Savvy Apps Ken Yarmosh,</a> integrating back­end servers into your app will typically push the budget into a six­figure range, whereas simpler apps coded for a singular platform tend to cost below $35,000. Note that development costs are likely to increase rather than decrease over the course of an app’s lifetime, so expect your prospective budget­ceiling to rise. For more information about pricing, contact us 1-646-741-4814.
        </Typography>
        <Typography variant="h5">
        Q: How does Google/Apple determine which apps reach the Top 10 list?
        </Typography>
        <Typography paragraph>
        A: As of now, neither Apple nor Google have disclosed any information regarding the algorithms they use to determine how an app ranks.  Observations from case studies, however, have limited the biggest factors to:
        </Typography>
        <ul>
            <li><Typography paragraph>Average ratings</Typography></li>
            <li><Typography paragraph>Rating and review volume and velocity</Typography></li>
            <li><Typography paragraph>Download and install counts</Typography></li>
            <li><Typography paragraph>Uninstalls</Typography></li>
            <li><Typography paragraph>App usage</Typography></li>
            <li><Typography paragraph>Growth trends weighed toward recency</Typography></li>
            <li><Typography paragraph>Keyword density of the app's landing page</Typography></li>
        </ul>
        <Typography className={classes.blockQuote}>
        “No factor appears to matter as much as the sheer number of downloads combined with how quickly you acquire them. In other words, if you want to rise in rank, get more downloads and do it quickly” ­- Tom Cummings of Fiksu.
        </Typography>
        <Typography paragraph>
        Marketing Manager at Apptentive Alex Walz left his findings from an insightful case study of his own “to put some longstanding hypotheses through the gauntlet.” <a href="https://moz.com/blog/app-store-rankings-formula-deconstructed-in-5-mad-science-experiments" rel="noopener noreferrer" target="_blank"> For more on his findings, read his article here</a>.
        </Typography>
        <Typography variant="h5">
        Q: Does my app need a preview video?
        </Typography>
        <Typography paragraph>
        A: Yes, and here’s why: it’s one thing to read or hear about something, but it’s entirely different to see it function in real time. Why explain your app to someone when they can experience it for themselves? An app should be visually appealing, and a video gives the consumer a taste of your app's unique spectacle ­ essentially, why not let the app do all the talking?
        </Typography>
        <Typography variant="h5">
        Q: What is App Store Optimization? 
        </Typography>
        <Typography paragraph>
        A: The goal of APO is to increase the likelihood that users will stumble across your app while browsing the store ­ it's all about directing the flow of the store's traffic towards your app:
        </Typography>
        <img src={img3} className={classes.img} alt="New App Discovery Methods - Apptentive.com"/>
        <Typography paragraph>
        The secret of improving an app's searchability is behind the careful selection of its title and keywords:
        </Typography>
        <Typography className={classes.blockQuote}>
        “An app’s title is the most important piece of metadata. A title should be short and clear as well as unique and creative” -­ Ankit Jain, head of search and discovery for Google Play.
        </Typography>
        <Typography paragraph>
        The simpler your app’s title is, the more likely it is to be searched. <a href='https://www.tune.com/' rel="noopener noreferrer" target="_blank">Analytic services like MobileDevHQ</a> can both track the effectiveness of your selected keywords and suggest more effective alternatives.
        </Typography>
        <Typography variant="h5">
        Q: When should I market my app?
        </Typography>
        <Typography paragraph>
        A: The earlier the better. Marketing is an investment in both time and resources: with trends leaning favorably towards those whom invest more in paid user acquisition strategies, it'd be wise to start performing marketing research early­on to distinguish the advertising that you can and cannot afford.
        </Typography>
        <Typography variant="h5">
        Q: App Indexing seems too complicated to implement; why should I care?
        </Typography>
        <Typography paragraph>
        A: Say that you have both an app and a dedicated website for it, yet your app has lower daily user acquisition rates than your website has daily visitors. With the development of deep linking for apps in 2015, Google can finally help solve this problem: now, when someone searches your website through google, a clickable thumbnail will appear right beside your website’s URL on the results page — <strong>your app will then have the same exposure as your website does.</strong> App Indexing is beneficial because it both re-engages inactive users with a simple Google search and can redirect potential users straight to your app’s installation page, eliminating the hurdles that would otherwise stand between website visitors and your app’s installation page.
        </Typography>
        <Typography paragraph>
        If your app is indexed through Google, every time a user clicks on your app's thumbnail, they'll be directed to your app’s installation page in the Play Store/App Store; if they have already have the app installed, then they'll be redirected to a predesignated screen on the app itself. In that way, App Indexing allows apps to receive the same exposure that websites get through ordinary search queries.
        </Typography>
        <Typography variant="h5">
        Q: Do I really need a landing page?
        </Typography>
        <Typography paragraph>
        A: Simply put: if you do not delegate resources for a website, then your app will be at a marketing deficit. <a href='https://www.apptamin.com/blog/create-your-apps-website-before-your-first-line-of-code/' rel="noopener noreferrer" target="_blank">Some have even argued that creating one should precede an app’s coding altogether.</a>
        </Typography>
        <Typography paragraph>
        Without a website, your app won’t have access to the most recent and greatest breakthrough in app marketing – Google’s App Indexing. Search engine optimization both inside and outside the app store should be your primary focus for marketing, and losing the benefits of App Indexing will severely harm your chances for success. Additionally, dedicated websites act as a central hub for communication between potential users and app development teams; without one, users would have one less place to turn to for important information about your app – most notably its launch date. Developing a website for the sake of having a landing page is reason enough to do so: increasing promotions both before and after an app’s release will help shape your app’s identity online. Some useful tools and resources for all of your launch page’s needs are:
        </Typography>
        <ul>
            <li>
                <Typography paragraph><a href='https://unbounce.com/' rel="noopener noreferrer" target="_blank">Unbounce Mobile App Template</a></Typography>   
            </li>
            <li>
                <Typography paragraph><a href='https://www.wishpond.com/' rel="noopener noreferrer" target="_blank">Wishpond</a></Typography>   
            </li>
            <li>
                <Typography paragraph><a href='https://www.blogger.com/about/?r=1-null_user' rel="noopener noreferrer" target="_blank">Blogger</a></Typography>   
            </li>
            <li>
                <Typography paragraph><a href='https://wordpress.org/' rel="noopener noreferrer" target="_blank">WordPress</a></Typography>   
            </li>
            <li>
                <Typography paragraph><a href='https://www.leadpages.net/' rel="noopener noreferrer" target="_blank">Leadpages</a></Typography>   
            </li>
            <li>
                <Typography paragraph><a href='https://www.smore.com/' rel="noopener noreferrer" target="_blank">Smore</a></Typography>   
            </li>
            <li>
                <Typography paragraph><a href='http://dopresskit.com/' rel="noopener noreferrer" target="_blank">Presskit</a></Typography>   
            </li>
        </ul>
        <Typography variant='h5'>
        Q: How could app analytics help my app?
        </Typography>
        <Typography paragraph>
        A: Out of the 1.5 million apps on the iOS App Store, only about a third have at least one review — the hard truth is, an app is either successful or it’s not. Yes, an app needs positive reviews to climb in the rankings; however, an app’s success doesn’t necessarily depend on positive feedback alone. Let’s say that your app does well at launch with just shy of one thousand downloads, yet it falls under the 66.6% of apps which have yet to receive a single review. Weeks pass by, and you’re left without any user input and nothing with which to help guide improvements to your app.
        </Typography>
        <Typography paragraph>
        How can you avoid this situation? <strong>By not relying wholly on reviews to guide your app’s success.</strong> Analytics provides a continuous flow of reliable, nonpartisan information. With the feedback gathered from app analytics, you’ll gain more insight on your app’s retainment rate, the different cohorts that comprise its user base, and the elements of your app which elicit the highest rate of conversion of potential consumers to actual users.
        </Typography>
    </div>
  )
}

export default withStyles(jssStyle, {withTheme: true})(ElevenOfTheMostFrequentlyAskedAppMarketingQuestions)