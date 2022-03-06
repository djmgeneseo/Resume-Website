import React from 'react';

import { withStyles } from '@material-ui/styles'; // jss library
import {Typography} from '@material-ui/core';
import {Link} from 'react-router-dom';
import ExternalLink from '../../../ExternalLink';

import img1 from '../../../../assets/img/articles/messapps/simple-and-effective-ways-to-gain-app-publicity/1.jpg';

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

const SimpleAndEffectiveWaysToGainAppPublicity = (props) => {
  const {classes} = props;
  return (
    <div>
        <img src={img1} alt={'Gaining app popularity'} className={classes.img}/>
        <Typography paragraph>
            The best way to get coverage for your app is by hiring a PR professional or a PR agency. A worthwhile PR Agencies charge around $10,000 per month and typically require businesses to keep them around for longer than one. That kind of expenditure is usually out­of­reach for the majority of both small and mid­sized businesses. If you can afford them, then you’ll be ahead of 99% of apps in the race for user acquisition:
        </Typography>
        <Typography className={classes.blockQuote} paragraph>
            “Working with a PR agency is extremely beneficial because they already have fantastic connections with journalists based on a mutually beneficial relationship and will know how best to publicize your company. If you are keen to hire a PR agency to help gain valuable coverage (and links) for your business, it is worth holding a PR pitch in order to get a flavor of the agencies available. Writing a robust PR brief (our guide) should help you to decide who to invite to the pitch, and it will save a lot of time and effort during the pitching process”­<strong>- <ExternalLink url={`https://www.apadmi.com/successful-apps-guide/#martinb`}>Account Director at PR Agency One Gemma Eccleston</ExternalLink></strong>
        </Typography>
        <Typography paragraph>
            PR services like <ExternalLink url={`http://www.prweb.com/`}>PRWeb</ExternalLink> and <ExternalLink url={`https://www.prlog.org/`}>PRLog</ExternalLink> act as a great alternative to a PR firm. They offer templates for clients to create press releases with, and send out finished products to publications themselves. Their services are free, but they offer more resources and connections to reputable news outlets for clients that are both interested and willing to pay the small fee. Reaching out to online journalists and article writers is a much more affordable and therefore pursuable route. The objective here is to increase your launch page’s SEO rating by increasing the amount of times that other sites link back to it. Of course, whether a writer chooses to cover your app depends on the quality and hype surrounding both your app and its story:
        </Typography>
        <Typography className={classes.blockQuote} paragraph>  
            “Good press coverage has to be earned. Journalists aren’t just paid to give you free editorial/advertising. A journalist covering tech or startups can get hundreds of emails per day so if the first time you contact one is with a request for ‘a favor’, don’t be surprised if you get knocked back. Pitches to journalists needs to be memorable, newsworthy and of interest to their readers”<strong> - <ExternalLink url={`https://www.apadmi.com/successful-apps-guide/#martinb`}>Account Director at PR Agency One Gemma Eccleston</ExternalLink></strong>
        </Typography>
        <Typography paragraph>
            A good first step would be to simply ask around. Use whatever connections you’ve accumulated in the app industry; you’ll be surprised to learn how many people know a journalist or a articleger who is in need of a new and exciting story. If your search comes up dry, do a little poking around on the internet:
        </Typography>
        <Typography paragraph className={classes.blockQuote}>
            “If your app is aimed at the public, press coverage can be key for getting early traction. Make sure you get in touch with journalists who write about apps similar to yours, or who you think may be interested. Ideally, contact them ahead of launch and invite them into late­stage beta testing. That way, you may get coverage on day one of availability”<strong> - <ExternalLink url={`https://www.apadmi.com/successful-apps-guide/#martinb`}>Editor­-in­-Chief at The Next Web Martin Bryant</ExternalLink></strong>
        </Typography>
        <Typography paragraph>
            If you have contacts that would be willing to cover your app story, then you should obviously give them a call; but it’s usually the case that independent developers seldom have numerous and reliable connections in the PR world. Journalists and articlegers are typically more approachable than larger publications. Just about all serious articlegers and journalists use Twitter, making it a great place to start interacting and making connections with them.
        </Typography>
        <Typography paragraph>
            <ExternalLink url={`https://www.helpareporter.com/`}>Another great source to turn to for free coverage is HARO, or “Help A Reporter Out.”</ExternalLink> By answering a journalist’s questions in a way that somehow relates to your app ­ perhaps by providing gathered research and an informed opinion as an entrepreneur ­ you’ll be credited as a reliable source. They’ll in­turn embed a link to your app’s launch page into the article in question.
        </Typography>
        <Typography paragraph>
            Charlie at <ExternalLink url={`https://www.apadmi.com/successful-apps-guide/getting-reviews-coverage/#CPR-0`}>apadmi</ExternalLink> suggests why getting exposure through less tech­oriented sites is important:
        </Typography>
        <Typography paragraph className={classes.blockQuote}>
            “You’ll often want coverage on publications/sites that don’t review apps because their readers are predominantly your target user base. One way of getting exposure on these sites is by creating content for your site’s article that is syndicated or linked to by your “target site”. It’s a nice fallback tactic and can enable you to create awareness of your app for people who aren’t aware that they need an app.”
        </Typography>
        <Typography paragraph>
            You can also turn to Radio shows and podcasts. <ExternalLink url={`https://www.radioguestlist.com/`}>RadioGuestList</ExternalLink> functions similarly to HARO, acting as a hub where podcasts and radio stations can match with prospective interviewees and offer them some time on the air in exchange for free advertising.
        </Typography>
        <Typography paragraph>
            <ExternalLink url={`https://www.udemy.com/how-i-got-50-podcast-appearances-using-radioguestlist/`}>Author and Appreneur Alex Genadinik found this method so successful that he developed a course on how to get over 50 podcast appearances using RadioGuestList.com.</ExternalLink>
        </Typography>
    </div>
  )
}

export default withStyles(jssStyle, {withTheme: true})(SimpleAndEffectiveWaysToGainAppPublicity)