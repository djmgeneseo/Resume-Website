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
  FindingYouriOSDevicesUdidViaItunes,
  HowToInstallXcodeAndStartYourFirstProject,
  ImprovingYourAppTodaysTopEarningAppCharacteristics,
  IosAppDevelopmentSubmittingAnUpdate,
  LaunchDayCanBeDifficultToPrepareFor,
  MakeAnyAppSuccessfulWithTheseFourFeatures,
  MakingTheMostOutOfIosAppAnalytics,
  MobileAppBetaTestingBreakingDownTheBasics,
  RestaurantAppsACloserLookAtTheNumbers,
  SettingUpYourFirstProjectWithAndroidStudio,
  ShouldIDevelopMyAppAloneOrWithATeam,
  SimpleAndEffectiveWaysToGainAppPublicity,
  SpeakingCodeAReviewOfTheBasics,
  TheAppStoreAComprehensiveAnalysis,
  TheMobileAppBusinessModelMadeSimple,
  TheSecretBehindAllSuccessfulAppsIsInUserLoyalty,
  TheTopFiveGreatestPitfallsInAppMarketing
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
    messappsURL: 'https://messapps.com/allcategories/strategy/3-easy-ways-improve-restaurants-app-2/',
    tags: ['improve']
  },
  {
    title: `5 Appreneur Books That Guarantee Results`,
    id: `five-appreneur-books-that-guarantee-results`,
    component: <FiveAppreneurBooksThatGuaranteeResults/>,
    intro: `As competition flares across the App Store, techniques in advertising are becoming progressively more sophisticated. It’s the appreneur’s job to stay afloat in the market by acquainting themselves with the latest and greatest strategies in e­marketing.`,
    img: require('../../assets/img/blogs/messapps/five-appreneur-books-that-guarantee-results/1.jpg'),
    date: 'June 14th, 2016',
    messappsURL: 'https://messapps.com/allcategories/strategy/5-appreneur-books-will-guarantee-results-2/',
    tags: ['improve', 'research']
  },
  {
    title: `11 of The Most Frequently Asked App Marketing Questions`,
    id: `eleven-of-the-most-frequently-asked-app-marketing-questions`,
    component: <ElevenOfTheMostFrequentlyAskedAppMarketingQuestions/>,
    intro: `An app's performance on the market is contingent on both its reputation and its discoverability.`,
    img: require('../../assets/img/blogs/messapps/eleven-of-the-most-frequently-asked-app-marketing-questions/1.jpg'),
    date: 'June 2nd, 2016',
    messappsURL: 'https://messapps.com/allcategories/marketing/11-frequently-asked-app-marketing-questions/',
    tags: ['marketing', 'research']
  },
  {
    title: `A Complete Overview Of The App Development Cycle`,
    id: `a-complete-overview-of-the-app-development-cycle`,
    component: <ACompleteOverviewOfTheAppDevelopmentCycle/>,
    intro: `An app’s development cycle can be broken down into these five distinct steps.`,
    img: require('../../assets/img/blogs/messapps/a-complete-overview-of-the-app-development-cycle/1.jpg'),
    date: 'June 5th, 2016',
    messappsURL: 'https://messapps.com/allcategories/development/complete-overview-app-development-cycle-2/',
    tags: ['research','business']
  },
  {
    title: `An Intro Into TestFlight: External Testing`,
    id: 'an-intro-into-testflight-external-testing',
    component: <AnIntroIntoTestflightExternalTesting/>,
    intro: `All data is invaluable for getting your app ahead of the game, so aggregating information pre­release can only be beneficial to your app’s success. That being said, TestFlight is both completely optional and completely free to use for all iOS developers.`,
    img: require('../../assets/img/blogs/messapps/an-intro-into-testflight-external-testing/1.jpg'),
    date: 'August 11th, 2016',
    messappsURL: 'https://messapps.com/allcategories/development/intro-testflight-external-testing/',
    tags: ['tutorial']
  },
  {
    title: `An Intro Into TestFlight: Internal Testing`,
    id: 'an-intro-into-testflight-internal-testing',
    component: <AnIntroIntoTestflightInternalTesting/>,
    intro: `TestFlight is completely optional, yet completely free for all iOS developers.`,
    img: require('../../assets/img/blogs/messapps/an-intro-into-testflight-internal-testing/1.jpg'),
    date: 'August 11th, 2016',
    messappsURL: 'https://messapps.com/allcategories/development/an-intro-into-testflight-internal-testing-2/',
    tags: ['tutorial']
  },
  {
    title: `App Analytics – What can you find out about your users?`,
    id: 'app-analytics-what-you-can-find-out-about-your-users',
    component: <AppAnalyticsWhatYouCanFindOutAboutYourUsers/>,
    intro: `Successful app optimization is why app analytics is such a profitable investment.`,
    img: require('../../assets/img/blogs/messapps/app-analytics-what-you-can-find-out-about-your-users/1.jpg'),
    date: 'June 2nd, 2016',
    messappsURL: 'https://messapps.com/allcategories/strategy/app-analytics-can-find-users-2/',
    tags: ['overview', 'research','statistics']
  },
  {
    title: `App Indexing: The Latest & Greatest in Marketing`,
    id: 'app-indexing-the-latest-and-greatest-in-marketing',
    component: <AppIndexingTheLatestAndGreatestInMarketing/>,
    intro: `App Indexing is Google's answer to the conundrums that face all appreneurs: declining user retention, engagement, and overall loyalty rates.`,
    img: require('../../assets/img/blogs/messapps/app-indexing-the-latest-and-greatest-in-marketing/1.jpg'),
    date: 'June 5th, 2016',
    messappsURL: 'https://messapps.com/allcategories/marketing/app-indexing-latest-greatest-marketing-2/',
    tags: ['improve','marketing', 'research']
  },
  {
    title:`Boost Your App’s Growth: Social Implementations`,
    id:`boost-your-apps-growth-social-implementations`,
    component: <BoostYourAppsGrowthSocialImplementations/>,
    intro: `Both Apple and Google trust that the amount of time users spend inside an app is indicative of its overall quality, and rank them accordingly.`,
    img: require('../../assets/img/blogs/messapps/boost-your-apps-growth-social-implementations/1.jpg'),
    date: 'June 25th, 2016',
    messappsURL: 'https://messapps.com/allcategories/marketing/boost-apps-growth-social-implementations-2/',
    tags: ['improve','research', 'social']
  },
  {
    title:`Creating Your First iOS Developer Account`,
    id:`creating-your-first-ios-developer-account`,
    component: <CreatingYourFirstiOSDeveloperAccount/>,
    intro: `Creating an Apple Developer account is simple!`,
    img: require('../../assets/img/blogs/messapps/creating-your-first-ios-developer-account/1.jpg'),
    date: 'August 1st, 2016',
    messappsURL: 'https://messapps.com/allcategories/development/creating-first-ios-developer-account/',
    tags: ['tutorial']
  },
  {
    title:`Finding your iOS Device’s UDID Via iTunes`,
    id:`finding-your-ios-devices-udid-via-itunes`,
    component: <FindingYouriOSDevicesUdidViaItunes/>,
    intro: `Each iOS device has a UDID, or a Unique Device Identifier ­ a sequence of 40 characters that's unique to each individual device.`,
    img: require('../../assets/img/blogs/messapps/finding-your-ios-devices-udid-via-itunes/1.jpg'),
    date: 'August 4th, 2016',
    messappsURL: 'https://messapps.com/allcategories/development/finding-ios-devices-udid-via-itunes-2/',
    tags: ['tutorial']
  },
  {
    title:`How To Install Xcode & Start Your First Project`,
    id: `how-to-install-xcode-and-start-your-first-project`,
    component: <HowToInstallXcodeAndStartYourFirstProject/>,
    intro: `It's easy!`,
    img: require('../../assets/img/blogs/messapps/how-to-install-xcode-and-start-your-first-project/1.jpg'),
    date: 'August 1st, 2016',
    messappsURL: `https://messapps.com/allcategories/development/install-xcode-start-first-project-2/`,
    tags: ['tutorial']
  },
  {
    title: `Improving Your App: Today’s Top-­Earning App Characteristics`,
    id: `improving-your-app-todays-top-earning-app-characteristics`,
    component: <ImprovingYourAppTodaysTopEarningAppCharacteristics/>,
    intro: `With only one exception, every top­grossing Google Play app is a gaming app. Unsurprisingly, each one of those gaming apps are also occupying the top­grossing list on Apple's App Store.`,
    img: require('../../assets/img/blogs/messapps/how-to-install-xcode-and-start-your-first-project/1.jpg'),
    date: `July 11th, 2016`,
    messappsURL: `https://messapps.com/allcategories/strategy/top-earning-characteristics/`,
    tags: ['improve','research']
  },
  {
    title: `iOS App Development: Submitting an Update`,
    id: `ios-app-development-submitting-an-update`,
    component: <IosAppDevelopmentSubmittingAnUpdate/>,
    intro: `Learn how to submit your app's latest version for review!`,
    img: require('../../assets/img/blogs/messapps/ios-app-development-submitting-an-update/1.jpg'),
    date: `August 9th, 2016`,
    messappsURL: `https://messapps.com/allcategories/marketing/ios-app-development-submitting-update-2/`,
    tags: ['tutorial']
  },
  {
    title: `Launch Day Can Be Difficult To Prepare For`,
    id: `launch-day-can-be-difficult-to-prepare-for`,
    component: <LaunchDayCanBeDifficultToPrepareFor/>,
    intro: `An app's most critical time of growth starts on its launch date and continues up until the next three days that proceed it.`,
    img: require(`../../assets/img/blogs/messapps/launch-day-can-be-difficult-to-prepare-for/1.jpg`),
    date: `June 4th, 2016`,
    messappsURL: `https://messapps.com/allcategories/marketing/launch-day-can-difficult-prepare-2/`,
    tags: ['research','business']
  },
  {
    title: `Make Any App Successful With These 4 Features`,
    id: `make-any-app-successful-with-these-four-features`,
    component: <MakeAnyAppSuccessfulWithTheseFourFeatures/>,
    intro: `Need help brainstorming new features for your app? Regardless of its category, statistics support that your app should grow faster if you implement one or more of these features listed in this article.`,
    img: require(`../../assets/img/blogs/messapps/make-any-app-successful-with-these-four-features/1.jpg`),
    date: `June 24th, 2016`,
    messappsURL: `https://messapps.com/allcategories/strategy/make-app-successful/`,
    tags: ['improve','research']
  },
  {
    title: `Making the Most Out of iOS App Analytics`,
    id: `making-the-most-out-of-iOS-app-analytics`,
    component: <MakingTheMostOutOfIosAppAnalytics/>,
    intro: `Despite how essential analytics is to tracking an app's success, the App Analytics service being offered for free by Apple is too often neglected by the majority of aspiring apprenuers.`,
    img: require(`../../assets/img/blogs/messapps/making-the-most-out-of-iOS-app-analytics/1.jpg`),
    date: `August 16th, 2016`,
    messappsURL: `https://messapps.com/allcategories/strategy/making-ios-app-analytics-2/`,
    tags: ['tutorial','research', 'statistics']
  },
  {
    title: `Mobile App Beta Testing: Breaking Down the Basics`,
    id: `mobile-app-beta-testing-breaking-down-the-basics`,
    component: <MobileAppBetaTestingBreakingDownTheBasics/>,
    intro: `Wise developers seldom neglect to test their app's quality both before and after launch day. Here's what you'll need to know.`,
    img: require(`../../assets/img/blogs/messapps/mobile-app-beta-testing-breaking-down-the-basics/1.jpg`),
    date: `June 5th, 2016`,
    messappsURL: `https://messapps.com/allcategories/development/mobile-app-beta-testing-breaking-basics-2/`,
    tags: ['tutorial']
  },
  {
    title: `Restaurant Apps – A Closer Look At The Numbers`,
    id: `restaurant-apps-a-closer-look-at-the-numbers`,
    component: <RestaurantAppsACloserLookAtTheNumbers/>,
    intro: `As more and more customers plug into the grid, your restaurant's internet presence will be that much more crucial.`,
    img: require(`../../assets/img/blogs/messapps/restaurant-apps-a-closer-look-at-the-numbers/1.jpg`),
    date: `June 25th, 2016`,
    messappsURL: `https://messapps.com/allcategories/strategy/restaurant-apps-closer-look-numbers-2/`,
    tags: ['research', 'statistics']
  },
  {
    title: `Setting Up Your First Project with Android Studio`,
    id: `setting-up-your-first-project-with-android-studio`,
    component: <SettingUpYourFirstProjectWithAndroidStudio/>,
    intro: `Setup Android’s IDE and creating your first sample project`,
    img: require(`../../assets/img/blogs/messapps/setting-up-your-first-project-with-android-studio/1.jpg`),
    date: `July 26th, 2016`,
    messappsURL: `https://messapps.com/allcategories/development/setting-first-project-android-studio-2/`,
    tags: ['tutorial']
  },
  {
    title: `Should I Develop My App Alone Or With A Team?`,
    id: `should-i-develop-my-app-alone-or-with-a-team`,
    component: <ShouldIDevelopMyAppAloneOrWithATeam/>,
    intro: `Adopting a "me against the world" attitude is a trap that many appreneurs fall into. If you’re serious about your app’s growth, then you need to switch from a mindset of a coding hobbyist into that of a business owner.`,
    img: require(`../../assets/img/blogs/messapps/should-i-develop-my-app-alone-or-with-a-team/1.jpg`),
    date: `June 4th, 2016`,
    messappsURL: `https://messapps.com/allcategories/strategy/develop-app-alone-team-2/`,
    tags: ['research','business']
  },
  {
    title: `Simple & Effective Ways to Gain App Publicity`,
    id: `simple-and-effective-ways-to-gain-app-publicity`,
    component: <SimpleAndEffectiveWaysToGainAppPublicity/>,
    intro: `There are hundreds of thousands of apps out there. Having an amazing app is no longer enough. Only those that can evoke the most attention will have a chance at scaling the charts.`,
    img: require(`../../assets/img/blogs/messapps/simple-and-effective-ways-to-gain-app-publicity/1.jpg`),
    date: `July 5th, 2016`,
    messappsURL: `https://messapps.com/allcategories/marketing/simple-effective-ways-gain-app-publicity-2/`,
    tags: ['research', 'social']
  },
  {
    title: `Speaking Code - A Review of The Basics`,
    id: `speaking-code-a-review-of-the-basics`,
    component: <SpeakingCodeAReviewOfTheBasics/>,
    intro: `The learning process for speaking code is no different from the learning process of any other skill or language.
    Remember that the best way to expedite a learning process is by either re­acquainting or first
    familiarizing yourself with the basics. Below you'll find a collection of the most frequently asked questions we hear from beginners.`,
    img: require(`../../assets/img/blogs/messapps/speaking-code-a-review-of-the-basics/1.png`),
    date: `June 4th, 2016`,
    messappsURL: `https://messapps.com/allcategories/strategy/speaking-code-complete-review-basics/`,
    tags: ['tutorial']
  },
  {
    title: `The App Store: A Comprehensive Analysis`,
    id: `the-app-store-a-comprehensive-analysis`,
    component: <TheAppStoreAComprehensiveAnalysis/>,
    intro: `Despite their impressive pace, for the past two decades, the expansion rate of both the Google Play Store and the Apple App Store has yet to show any indications of slowing down.`,
    img: require(`../../assets/img/blogs/messapps/the-app-store-a-comprehensive-analysis/1.jpg`),
    date: `June 2nd, 2016`,
    messappsURL: `https://messapps.com/allcategories/strategy/app-store-comprehensive-analysis-2/`,
    tags: ['research','statistics']
  },
  {
    title: `The Mobile App Business Model Made Simple`,
    id: `the-mobile-app-business-model-made-simple`,
    component: <TheMobileAppBusinessModelMadeSimple/>,
    intro: `The obscurity behind the term “business model” oftentimes causes uncertainty and confusion. For our purposes, lets think of it as a birds eye view of how your business will operate.`,
    img: require(`../../assets/img/blogs/messapps/the-mobile-app-business-model-made-simple/1.jpg`),
    date: `June 20th, 2016`,
    messappsURL: `https://messapps.com/allcategories/strategy/mobile-app-business-model-made-simple/`,
    tags: ['research', 'business']
  },
  {
    title: `The Secret Behind All Successful Apps Is In User Loyalty`,
    id: `the-secret-behind-all-successful-apps-is-in-user-loyalty`,
    component: <TheSecretBehindAllSuccessfulAppsIsInUserLoyalty/>,
    intro: `Two­-thirds of iOS apps have yet to be reviewed: if the majority of developers cannot compel a single user to write a comment, then perhaps developers don’t know their audience as well as they think they do.`,
    img: require(`../../assets/img/blogs/messapps/the-secret-behind-all-successful-apps-is-in-user-loyalty/1.jpg`),
    date: `July 6th, 2016`,
    messappsURL: `https://messapps.com/allcategories/strategy/secret-behind-successful-apps-user-loyalty-2/`,
    tags: ['research','business']
  },
  {
    title: `The Top 5 Greatest Pitfalls in App Marketing`,
    id: `the-top-five-greatest-pitfalls-in-app-marketing`,
    component: <TheTopFiveGreatestPitfallsInAppMarketing/>,
    intro: `An app's marketing will dictate the extent of its success.`,
    img: require(`../../assets/img/blogs/messapps/the-top-five-greatest-pitfalls-in-app-marketing/1.jpg`),
    date: `June 4th, 2016`,
    messappsURL: `https://messapps.com/allcategories/strategy/top-5-greatest-pitfalls-app-marketing-2/`,
    tags: ['research','marketing']
  }
]

class MessAppsBlog extends Component {
  state = {
    currentPageIndex: 0
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

  generateArticle = (requestedArticleId) => {
    let requestedArticle = articles.find(({id}) => id===requestedArticleId);
    return <MessAppsArticle
                    theme={this.props.theme}
                    title={requestedArticle.title}
                    messappsURL={requestedArticle.messappsURL}
                    date={requestedArticle.date}
                    intro={requestedArticle.intro}
                    body={React.cloneElement(
                      requestedArticle.component,
                      {theme: this.props.theme}
                    )}
                  >
                </MessAppsArticle>
  }

  generateRelatedArticleCards = (requestedArticleId) => {
    let requestedArticleTags = articles.find(({id}) => id===requestedArticleId).tags;

    // find and store related articles into an array
    let relatedArticleArr = articles.filter((relatedArticle) => {
      if(requestedArticleId !== relatedArticle.id) { // check that this potential related article is not the same article currently on display
        relatedArticle['relatedTags'] = [] // reset relatedTags property
        relatedArticle['relatedTags'] = relatedArticle.tags.filter( articleTag => {
          if (requestedArticleTags.includes(articleTag)) {
            return articleTag
          }
        })

        if(relatedArticle['relatedTags'].length !== 0) {
          return relatedArticle
        }
      }
    })

    console.log(relatedArticleArr);

    // TODO: finish algorithm 
    // arrange related articles based on amount of related tags in descending order
    let relatednessDict = {};
    relatedArticleArr.forEach((article) => {
      if(relatednessDict.hasOwnProperty(article.relatedTags.length)) {
        console.log('sup')
        relatednessDict[article.relatedTags.length] = [article];
      } else {
        relatednessDict[article.relatedTags.length].push(article)
      }
    })
    let arrOfDictKeys = Object.keys(relatednessDict)
    // sort keys in descending order
    arrOfDictKeys.sort((a,b) => b-a);
    console.log(arrOfDictKeys);
    console.log(relatednessDict);
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
                <BlogArticlePage arrayOfRelatedBlogCards = {this.generateRelatedArticleCards(reactProps.match.params.articleId)}>
                  {this.generateArticle(reactProps.match.params.articleId)}
                </BlogArticlePage>
              }
          />
        </Grid>
      </div>
    )
  }
}

export default withStyles(jssStyle, {withTheme: true})(MessAppsBlog)