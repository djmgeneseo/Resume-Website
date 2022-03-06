import React from 'react';

import { withStyles } from '@material-ui/styles'; // jss library
import {Typography} from '@material-ui/core';
import {Link} from 'react-router-dom';
import ExternalLink from '../../../ExternalLink';

import img1 from '../../../../assets/img/articles/messapps/the-secret-behind-all-successful-apps-is-in-user-loyalty/1.jpg';

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

const TheSecretBehindAllSuccessfulAppsIsInUserLoyalty = (props) => {
  const {classes} = props;
  return (
    <div>
        <img src={img1} className={classes.img} alt='A cartoon illustration of a handshake'/>
        <Typography paragraph>
            <ExternalLink url={`http://applift.com/article/quality-app-reviews-ratings`}>(Two-thirds of iOS apps have yet to be reviewed)</ExternalLink> Success tends to follow appreneurs who develop very niche apps: <strong>It’s wiser to earn the collective loyalty of a smaller, more identifiable audience than to invest extra resources into targeting a more diverse conglomerate.</strong>
        </Typography>
        <Typography paragraph>
            Setting your target audience as “everyone who likes dogs” is obviously not specific enough. Before investing in an app, ask yourself:
        </Typography>
        <Typography variant='h4' gutterbottom>
            1. Am I trapping myself into a losing battle?
        </Typography>
        <Typography paragraph>
        Within the past year, 10 out of the 28 apps that Messapps was involved with were based on Social Networking. Social networking apps tend to target larger crowds and highly saturated areas on the market. The potential for a large profit in Social Networking is what appeals to so many start ups ­ everyone wants to build the next Tinder. As profitable as targeting larger audiences may seem, <strong>an app that ventures to satisfy the needs of everyone in the room will never meet its goal ­- you simply cannot make everyone happy.</strong>
        </Typography>
        <Typography paragraph>
            To compete in highly saturated fields, you’ll need to allocate more resources into advertisements, which could turn your project into a much less profitable cause.
        </Typography>
        <Typography variant='h4' gutterBottom>
            2. Can I identify the app's age group?
        </Typography>
        <Typography paragraph>
            <strong>Your ability to target your app's age group will decide your app's success.</strong> If you’re struggling to visualize your app’s audience, then your app's design is less likely to be user friendly ­ if it’s not user friendly, then users will be less inclined to remain loyal to your app. Co­founder and CEO of Appy Ventures Patrice Archer attributes his app PlantSnapp’s success to how it appeals to a very specific niche audience:
        </Typography>
        <Typography paragraph className={classes.blockQuote}>
            “A 35 to 55­year­old mom that likes to shop at a high end shop, who has a house fully paid for, a dog, her kids are teenagers. They use this on a daily basis; they expect this kind of design feature and this level of complexity.” <strong>- Quoted from <ExternalLink url={`https://www.amazon.com/Appreneur-Playbook-Game-Changing-Mobile-Marketing-ebook/dp/B014361LOK/ref%3Dsr_1_1?ie=UTF8&amp;qid=1465414970&amp;sr=8-1&amp;keywords=the%2Bappreneur%2Bplaybook`}>The Appreneur Playbook</ExternalLink></strong>
        </Typography>
        <Typography paragraph>
            <strong>If your app’s audience is indistinguishable, then you’ll have a harder time both targeting and retaining your users' interest.</strong>
        </Typography>
        <Typography variant='h4' gutterBottom>
            3.	Does my app appeal to a specific audience?
        </Typography>
        <Typography paragraph>
            Imagine dividing a room of people into cohorts based on their expectations for your app. Targeting one or two of these cohorts with overlapping desires can serve as a more favorable vantage point from which to approach an app's design. Focusing all efforts on a smaller audience will ensure that your app’s niche aligns with the majority of your audience’s interests; every user is valuable, and user loyalty is something that you need to work hard on in order to earn.
        </Typography>
        <Typography paragraph className={classes.blockQuote}>
            “You have an app and you launched it only for a hundred people. But those hundred people are absolutely passionate about the product that you put out. They can't imagine a day without the app. If you can get it and drive that kind of passion from those users then rest assured those hundred people can get you the next thousand, the next ten thousand, or the next one million customers” <strong>­- The co-­founder of <ExternalLink url={`https://arkenea.com/`}>Arkenea</ExternalLink>, developer and author Rahul Varshneya</strong>
        </Typography>
        <Typography paragraph>
            In the words of successful author and entrepreneur Tim Ferriss, do not underestimate the value of a true fan: work hard to build a fan­base of one or two thousand, and your app will grow from there. <strong>Your app’s ability to sell is contingent on meeting user expectations: if you cannot identify and meet the majority of your audience’s expectations, than your chances of making a profit are slim.</strong>
        </Typography>
        <Typography variant='h4' gutterBottom>
            4.	Would I be competing against non­profit hobbyists?
        </Typography>
        <Typography paragraph>
            At the other extreme of niche­hunting, you’ll know if your app’s niche is too small if the competition is led by app developers who aren’t in it to make a profit. Although the niche may be too small to spark the interests of bigger start ups, <strong>niches that are dominated by developers with non­profit intentions are a lost cause.</strong> Even if your app has more to offer than the leading app does, users are more likely to download a free app that gets the job done.
        </Typography>
        <Typography variant='h4' gutterBottom>
            5.	Can my app’s niche be scaled down?
        </Typography>
        <Typography paragraph>
            The most successful apps are intuitive, user friendly, and most of all innovative. <strong>Successful apps tend to compel and retain user interest by infusing a sense of nuance into an otherwise mundane task.</strong> Don’t over­pile your app’s UI with a half­-dozen extra functions that don’t serve its main purpose, especially for the sake of attracting a larger audience: chances are, several separate apps offer a more innovative approach to each one. <strong>Explore a singular niche on the appstore and figure out whether your idea puts a new and innovative spin on it that others do not.</strong> Avoid developing the swiss­army knife of applications ­- break its functionality down.
        </Typography>
        <Typography paragraph>
            If something about your app’s development triggers a new idea, set it aside for a future app­venture. The app industry is attracting a lot of start ups, so it’s wise to avoid pitting your app against hundreds of others in a highly competitive field. <Link underline='always' to={`/articles/messapps/the-top-five-greatest-pitfalls-in-app-marketing`}>Read more about common marketing pitfalls.</Link>
        </Typography>
    </div>
  )
}

export default withStyles(jssStyle, {withTheme: true})(TheSecretBehindAllSuccessfulAppsIsInUserLoyalty)