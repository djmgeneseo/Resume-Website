import React, { Component } from 'react'

import {Route} from "react-router-dom";
import { withStyles } from '@material-ui/styles'; // jss library
import {Typography, Grid, Card, CardContent, CardMedia, CardActions, Button} from '@material-ui/core'

import BlogArticlePage from '../../Components/BlogArticlePage' 
import me from '../../assets/img/me.png';
import TimePeriodCaption from '../../Components/TimePeriodCaption';
import BlogCard from '../../Components/Blogs/BlogCard';
import MessAppsArticle from '../../Components/Blogs/MessApps/MessAppsArticle'

import {
  ThreeEasyWaysToImproveYourRestaurantsApp,
  FiveAppreneurBooksThatGuaranteeResults,
  ElevenOfTheMostFrequentlyAskedAppMarketingQuestions,
  ACompleteOverviewOfTheAppDevelopmentCycle,
  AnIntroIntoTestflightExternalTesting,
  AnIntroIntoTestflightInternalTesting,
  AppAnalyticsWhatYouCanFindOutAboutYourUsers,
  AppIndexingTheLatestAndGreatestInMarketing,
  BoostYourAppsGrowthSocialImplementations,
  CreatingYourFirstiOSDeveloperAccount,
  FindingYouriOSDevicesUdidViaItunes
} from '../../Components/Blogs/MessApps/BodyOfArticles/index';

const jssStyle = theme => ({  
    heading: {
      textAlign: 'center',
      width: '100%',
      marginBottom: '25px',
      marginTop: '25px'
    },
    blogPageContainer: {
      maxWidth: '1280px', 
      margin: '0 auto',
      marginTop: '75px'
    },
    articlePaper: {
      padding: '40px' 
    },
    siteContainer: {
      margin: '75px auto',
      maxWidth: '1280px',
      padding: '10px'
    }
})

const articles = [
  {
    title: `3 Easy Ways To Improve Your Restaurant’s App`,
    id: 'three-easy-ways-to-improve-your-restaurants-app',
    component: <ThreeEasyWaysToImproveYourRestaurantsApp/>,
    intro: `Restaurant apps are notorious for frozen payment transactions and horrific user accessibility. It's a shame, because a recent survey shows that 46% of users report that apps/websites with easier navigation would make them feel more comfortable with finishing a payment transaction.`,
    img: require('../../assets/img/blogs/messapps/three-easy-ways-to-improve-your-restaurants-app/1.jpg'),
    date: 'Jan 25th, 2016',
    messappsURL: 'https://messapps.com/allcategories/strategy/3-easy-ways-improve-restaurants-app-2/'
  },
  {
    title: `5 Appreneur Books That Guarantee Results`,
    id: `five-appreneur-books-that-guarantee-results`,
    component: <FiveAppreneurBooksThatGuaranteeResults/>,
    intro: `As competition flares across the App Store, techniques in advertising are becoming progressively more sophisticated. It’s the appreneur’s job to stay afloat in the market by acquainting themselves with the latest and greatest strategies in e­marketing.`,
    img: require('../../assets/img/blogs/messapps/five-appreneur-books-that-guarantee-results/1.jpg'),
    date: 'June 14th, 2016',
    messappsURL: 'https://messapps.com/allcategories/strategy/5-appreneur-books-will-guarantee-results-2/'
  },
  {
    title: `11 of The Most Frequently Asked App Marketing Questions`,
    id: `eleven-of-the-most-frequently-asked-app-marketing-questions`,
    component: <ElevenOfTheMostFrequentlyAskedAppMarketingQuestions/>,
    intro: `An app's performance on the market is contingent on both its reputation and its discoverability.`,
    img: require('../../assets/img/blogs/messapps/eleven-of-the-most-frequently-asked-app-marketing-questions/1.jpg'),
    date: 'June 2nd, 2016',
    messappsURL: 'https://messapps.com/allcategories/marketing/11-frequently-asked-app-marketing-questions/'
  },
  {
    title: `A Complete Overview Of The App Development Cycle`,
    id: `a-complete-overview-of-the-app-development-cycle`,
    component: <ACompleteOverviewOfTheAppDevelopmentCycle/>,
    intro: `An app’s development cycle can be broken down into these five distinct steps.`,
    img: require('../../assets/img/blogs/messapps/a-complete-overview-of-the-app-development-cycle/1.jpg'),
    date: 'June 5th, 2016',
    messappsURL: 'https://messapps.com/allcategories/development/complete-overview-app-development-cycle-2/'
  },
  {
    title: `An Intro Into TestFlight: External Testing`,
    id: 'an-intro-into-testflight-external-testing',
    component: <AnIntroIntoTestflightExternalTesting/>,
    intro: `All data is invaluable for getting your app ahead of the game, so aggregating information pre­release can only be beneficial to your app’s success. That being said, TestFlight is both completely optional and completely free to use for all iOS developers.`,
    img: require('../../assets/img/blogs/messapps/an-intro-into-testflight-external-testing/1.jpg'),
    date: 'August 11, 2016',
    messappsURL: 'https://messapps.com/allcategories/development/intro-testflight-external-testing/'
  },
  {
    title: `An Intro Into TestFlight: Internal Testing`,
    id: 'an-intro-into-testflight-internal-testing',
    component: <AnIntroIntoTestflightInternalTesting/>,
    intro: `TestFlight is completely optional, yet completely free for all iOS developers.`,
    img: require('../../assets/img/blogs/messapps/an-intro-into-testflight-internal-testing/1.jpg'),
    date: 'August 11, 2016',
    messappsURL: 'https://messapps.com/allcategories/development/an-intro-into-testflight-internal-testing-2/'
  },
  {
    title: `App Analytics – What can you find out about your users?`,
    id: 'app-analytics-what-you-can-find-out-about-your-users',
    component: <AppAnalyticsWhatYouCanFindOutAboutYourUsers/>,
    intro: `Successful app optimization is why app analytics is such a profitable investment.`,
    img: require('../../assets/img/blogs/messapps/app-analytics-what-you-can-find-out-about-your-users/1.jpg'),
    date: 'June 02, 2016',
    messappsURL: 'https://messapps.com/allcategories/strategy/app-analytics-can-find-users-2/'
  },
  {
    title: `App Indexing: The Latest & Greatest in Marketing`,
    id: 'app-indexing-the-latest-and-greatest-in-marketing',
    component: <AppIndexingTheLatestAndGreatestInMarketing/>,
    intro: `App Indexing is Google's answer to the conundrums that face all appreneurs: declining user retention, engagement, and overall loyalty rates.`,
    img: require('../../assets/img/blogs/messapps/app-indexing-the-latest-and-greatest-in-marketing/1.jpg'),
    date: 'June 05, 2016',
    messappsURL: 'https://messapps.com/allcategories/marketing/app-indexing-latest-greatest-marketing-2/'
  },
  {
    title:`Boost Your App’s Growth: Social Implementations`,
    id:`boost-your-apps-growth-social-implementations`,
    component: <BoostYourAppsGrowthSocialImplementations/>,
    intro: `Both Apple and Google trust that the amount of time users spend inside an app is indicative of its overall quality, and rank them accordingly.`,
    img: require('../../assets/img/blogs/messapps/boost-your-apps-growth-social-implementations/1.jpg'),
    date: 'June 25, 2016',
    messappsURL: 'https://messapps.com/allcategories/marketing/boost-apps-growth-social-implementations-2/'
  },
  {
    title:`Creating Your First iOS Developer Account`,
    id:`creating-your-first-ios-developer-account`,
    component: <CreatingYourFirstiOSDeveloperAccount/>,
    intro: `Creating an Apple Developer account is simple!`,
    img: require('../../assets/img/blogs/messapps/creating-your-first-ios-developer-account/1.jpg'),
    date: 'August 01, 2016',
    messappsURL: 'https://messapps.com/allcategories/development/creating-first-ios-developer-account/'
  },
  {
    title:`Finding your iOS Device’s UDID Via iTunes`,
    id:`finding-your-ios-devices-udid-via-itunes`,
    component: <FindingYouriOSDevicesUdidViaItunes/>,
    intro: `Each iOS device has a UDID, or a Unique Device Identifier ­ a sequence of 40 characters that's unique to each individual device.`,
    img: require('../../assets/img/blogs/messapps/finding-your-ios-devices-udid-via-itunes/1.jpg'),
    date: 'August 04, 2016',
    messappsURL: 'https://messapps.com/allcategories/development/finding-ios-devices-udid-via-itunes-2/'
  }
]

class MessAppsBlog extends Component {
  state = {
    currentPageIndex: 0
  }

    // TODO - callback? or setup router properly...
  disableLandingPage = () => {
    this.setState({
      isLandingPage: false
    })
  }

  // generateArticles = () => {
  //   return Object.keys(articles).map((articleName, index) => {
  //       return <Route path={`${this.props.match.path}/${articleName}`} component={(routeProps) => <ArticleHOC {...routeProps}>{articles[articleName]}</ArticleHOC>}/>
  //   })
  // }

  generateListOfArticles = () => {
    return articles.map((article, idx) => {
      return ( 
        <BlogCard key={article.id} theme={this.props.theme} blogLink={`messapps/${article.id}`} blogImg={article.img} blogDate={article.date} blogTitle={article.title} blogIntro={article.intro} />
      ) 
    })
  }

  render() {
    const {classes} = this.props;
    
    return (
      <div className={classes.blogPageContainer}>
        <Grid container spacing={16}>
          <Grid item xs={12} sm={12} md={12}>
                      <div className={classes.heading}>
                          <Typography variant="h4">MESSAPPS</Typography>
                      </div>
                  </Grid>
          <Route 
              exact 
              path={this.props.match.path}
              render={() => 
                <Grid container>
                  {this.generateListOfArticles()}
                </Grid>
              }/>
          <Route
              path={`${this.props.match.path}/:articleId`}
              component={(reactProps) => 
                <BlogArticlePage>
                  <MessAppsArticle
                    theme={this.props.theme}
                    title={articles.find(({id}) => id===reactProps.match.params.articleId).title}
                    messappsURL={articles.find(({id}) => id===reactProps.match.params.articleId).messappsURL}
                    date={articles.find(({id}) => id===reactProps.match.params.articleId).date}
                    intro={articles.find(({id}) => id===reactProps.match.params.articleId).intro}
                    body={React.cloneElement(
                      articles.find(({id}) => id === reactProps.match.params.articleId).component,
                      {theme: this.props.theme}
                    )}
                  >
                </MessAppsArticle>
                </BlogArticlePage>
              }
          />
        </Grid>
      </div>
    )
  }
}

export default withStyles(jssStyle, {withTheme: true})(MessAppsBlog)