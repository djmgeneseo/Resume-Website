import React from 'react';

import { withStyles } from '@material-ui/styles'; // jss library
import {Typography} from '@material-ui/core';
import {Link} from 'react-router-dom';
import ExternalLink from '../../../ExternalLink';

import img1 from '../../../../assets/img/articles/messapps/improving-your-app-todays-top-earning-app-characteristics/1.jpg';
import img2 from '../../../../assets/img/articles/messapps/improving-your-app-todays-top-earning-app-characteristics/2.jpg';
import img3 from '../../../../assets/img/articles/messapps/improving-your-app-todays-top-earning-app-characteristics/3.jpg';
import img4 from '../../../../assets/img/articles/messapps/improving-your-app-todays-top-earning-app-characteristics/4.jpg';
import img5 from '../../../../assets/img/articles/messapps/improving-your-app-todays-top-earning-app-characteristics/5.jpg';
import img6 from '../../../../assets/img/articles/messapps/improving-your-app-todays-top-earning-app-characteristics/6.jpg';
import img7 from '../../../../assets/img/articles/messapps/improving-your-app-todays-top-earning-app-characteristics/7.jpg';
import img8 from '../../../../assets/img/articles/messapps/improving-your-app-todays-top-earning-app-characteristics/8.jpg';
import img9 from '../../../../assets/img/articles/messapps/improving-your-app-todays-top-earning-app-characteristics/9.jpg';
import img10 from '../../../../assets/img/articles/messapps/improving-your-app-todays-top-earning-app-characteristics/10.jpg';
import img11 from '../../../../assets/img/articles/messapps/improving-your-app-todays-top-earning-app-characteristics/11.jpg';
import img12 from '../../../../assets/img/articles/messapps/improving-your-app-todays-top-earning-app-characteristics/12.jpg';
import img13 from '../../../../assets/img/articles/messapps/improving-your-app-todays-top-earning-app-characteristics/13.jpg';
import img14 from '../../../../assets/img/articles/messapps/improving-your-app-todays-top-earning-app-characteristics/14.jpg';
import img15 from '../../../../assets/img/articles/messapps/improving-your-app-todays-top-earning-app-characteristics/15.jpg';
import img16 from '../../../../assets/img/articles/messapps/improving-your-app-todays-top-earning-app-characteristics/16.jpg';

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

const ImprovingYourAppTodaysTopEarningAppCharacteristics = (props) => {
  const {classes} = props;
  return (
    <div>
        <Typography variant="h4" className={classes.center} gutterBottom>Apple App Store</Typography>
        <img src={img1} className={classes.img} alt='Top grossing iPhone apps'/>
        <Typography className={classes.center}><strong>NOTE: </strong>* denotes titles that share a top spot across both the Google Play Store and the Apple App Store</Typography>
        <Typography variant="h6" gutterBottom>Gaming:</Typography>
        <Typography paragraph>Mobile Strike</Typography>
        <Typography paragraph>Clash of Clans</Typography>
        <Typography paragraph>Game of War - Fire Age</Typography>
        <Typography paragraph>Candy Crush Saga Clash Royale *</Typography>
        <Typography variant="h6" gutterBottom>Entertainment:</Typography>
        <Typography paragraph>HBO NOW *</Typography>
        <Typography paragraph>Netflix *</Typography>
        <Typography variant="h6" gutterBottom>Music:</Typography>
        <Typography paragraph>Spotify Music</Typography>
        <Typography paragraph>Tidal</Typography>
        <Typography paragraph>Pandora - Free Music & Radio *</Typography>
        
        <Typography variant="h4" className={classes.center} gutterBottom>Google Play Store</Typography>
        <img src={img2} className={classes.img} alt='Top Grossing Android apps'/>
        <Typography variant="h6" gutterBottom>Gaming:</Typography>
        <Typography paragraph>Game of War- Fire Age</Typography>
        <Typography paragraph>Mobile Strike</Typography>
        <Typography paragraph>Clash of Clans</Typography>
        <Typography paragraph>Clash Royale *</Typography>
        <Typography paragraph>Clash of Kings</Typography>
        <Typography paragraph>Slotomania - Free Casino Slots</Typography>        
        <Typography paragraph>MARVEL Contest of Champions</Typography>
        <Typography variant="h6" gutterBottom>Entertainment:</Typography>
        <Typography paragraph>HBO NOW - Entertainment *</Typography>

        <Typography variant="h4" className={classes.center} gutterBottom>Landing Pages/Websites</Typography>
        <Typography paragraph>13 out of the top 14 apps between the Android and iOS markets have a website that’s either designed for the sole purpose of advertising ­via <Link to={`/articles/messapps/app-indexing-the-latest-and-greatest-in-marketing`}>App Indexing</Link> or are included in the main website via a <Link to={`/articles/messapps/app-indexing-the-latest-and-greatest-in-marketing`}>Deep Link</Link></Typography>
        
        <Typography variant="h6" gutterBottom>Gaming:</Typography>
        <Typography paragraph>Mobile Strike - <ExternalLink to={'http://www.mobilestrikeapp.com/'}>http://www.mobilestrikeapp.com/</ExternalLink></Typography>
        <Typography paragraph>Game of War - <ExternalLink to={'http://www.gameofwarapp.com/'}>http://www.gameofwarapp.com/</ExternalLink></Typography>
        <Typography paragraph>Clash Royale - <ExternalLink to={'https://clashroyale.com/'}>https://clashroyale.com/</ExternalLink></Typography>
        <Typography paragraph>Candy Crush Saga/Soda Saga - <ExternalLink to={'http://candycrushsaga.com/'}>http://candycrushsaga.com/</ExternalLink></Typography>
        <Typography paragraph>MARVEL Contest of Champions - <ExternalLink to={'http://playcontestofchampions.com/'}>http://playcontestofchampions.com/</ExternalLink></Typography>
        <Typography paragraph>Clash of Clans - <ExternalLink to={'https://clashofclans.com/'}>https://clashofclans.com/</ExternalLink> | <ExternalLink to={'http://supercell.com/en/games/clashofclans/'}>http://supercell.com/en/games/clashofclans/</ExternalLink></Typography>
        <Typography paragraph>Slotomania - <ExternalLink to={'https://www.slotomania.com/'}>https://www.slotomania.com/</ExternalLink></Typography>

        <Typography variant="h6" gutterBottom>Music:</Typography>
        <Typography paragraph>Spotify - <ExternalLink to={'https://www.spotify.com/us/'}>https://www.spotify.com/us/</ExternalLink></Typography>
        <Typography paragraph>Tidal - <ExternalLink to={'http://tidal.com/us'}>http://tidal.com/us</ExternalLink></Typography>
        <Typography paragraph>Pandora - <ExternalLink to={'http://www.pandora.com/'}>http://www.pandora.com/</ExternalLink></Typography>

        <Typography variant="h6" gutterBottom>Entertainment:</Typography>
        <Typography paragraph>Netflix - <ExternalLink to={'https://www.netflix.com/'}>https://www.netflix.com/</ExternalLink></Typography>
        <Typography paragraph>HBO NOW - <ExternalLink to={'http://play.hbogo.com/'}>http://play.hbogo.com/</ExternalLink></Typography>

        <Typography variant="h4" className={classes.center} gutterBottom>Design</Typography>
        <Typography paragraph><strong>Progression systems:</strong> gaming apps are designed around a progression­based system. Similar systems are common in all areas of game development and many app developers are finding the approach exceptional for combating declining user retainment rates.</Typography>
        <Typography paragraph><strong>Unlockable content:</strong> each and every top­gaming app has this concept implemented. By requiring additional content to be earned, users are given a natural and rewarding incentive to continue playing each game.</Typography>
        <img src={img3} className={classes.img} alt='Overview menu of app'/>
        <img src={img4} className={classes.img} alt='pass level 50 to unlock new dreamy content!'/>
        <Typography variant="h4" className={classes.center} gutterBottom>Push Notifications</Typography>
        <img src={img5} className={classes.img} alt='notifications from apps'/>
        <Typography variant="h4" className={classes.center} gutterBottom>Social Implementations</Typography>
        <Typography paragraph>Whether it's to indirectly advertise their app by means of helping users share their progress with others or to help them invite their Facebook friends to play directly with or against, social implementations have given every top gaming app a clear­cut marketing advantage above the the rest of the competition.</Typography>
        <Typography paragraph><strong>Creating an app that allows users to post their progress or to invite their friends on social media is essentially like creating an app that can market itself.</strong></Typography>
        <Typography paragraph>The top gaming apps prove that, if you have a great app, then compelling users to share it with their friends will be an easy feat; all that's required is that you provide the tools for them to do so:</Typography>
        <img src={img6} className={classes.img} alt='messages menu: connect to facebook option'/>
        <Typography paragraph>Most of the developers behind these top gaming apps are enabling communities to form around their app. <strong>Two of the major variables that each app stores’s ranking algorithm factors in is how frequently users both log in and remain active. If users are constantly engaging with the app, even if it’s just to message a friend, your ranking will increase in response to increased user activity.</strong></Typography>
        <Typography paragraph>Providing tools for communities to grow both within and around your app gives users the chance to utilize the app itself as a central hub where they can interact and even form alliances with each other.</Typography>
        <Typography paragraph>Even if they don't feel an urge to just play the game itself, incentivizing user interaction within the app gives users a reason to log­in; realizing the potential for growth behind user interactions, some developers have done just that:</Typography>
        <img src={img7} className={classes.img} alt='Join an Alliance! Popup message'/>
        <Typography paragraph className={classes.center}>Game of War (Developed by Machine Zone, Inc.)</Typography>
        <img src={img8} className={classes.img} alt='Join an Alliance! another popup message from different game'/>
        <Typography paragraph className={classes.center}>Mobile Strike (Developed by Epic War)</Typography>
        
        <Typography variant='h4' className={classes.center} gutterBottom>Marketing</Typography>
        <Typography paragraph>Most people nowadays turn to social media to keep themselves in the loop. Most of these outlets have changed into what seems more like a hotbed for new and interesting trends. Realizing this, major app developers have carefully weaved Facebook implementations into their apps in a seemingly non­obtrusive way to make the ease of spreading their apps as seamless as the implementations themselves.</Typography>
        <Typography variant='h6' gutterBottom>Social Media (From Highest to Lowest Facebook Likes):</Typography>
        <Typography paragraph><strong>Candy Crush:</strong> Facebook = 75,000,000+ Likes | Twitter = 154,000+ Followers</Typography>
        <Typography paragraph><strong>Slotmania:</strong> 14,000,000+ | 12,000+</Typography>
        <Typography paragraph><strong>Clash of Kings:</strong> 3,600,000+ | 160,000+</Typography>
        <Typography paragraph><strong>Clash Royale:</strong> 750,000+ | 219,000+</Typography>
        <Typography paragraph><strong>MARVEL Contest of Champions:</strong> 625,000+ | N/A </Typography>
        <Typography paragraph><strong>Mobile Strike:</strong> 500,000+ | 15,000+</Typography>
        <Typography paragraph><strong>Game of War:</strong> 160,000+ | 108,000+ Every gaming app has a Facebook page, yet some are so deeply integrated within Facebook that they’re available to play directly on user Facebook profiles from a computer or laptop device:</Typography>
        <Typography paragraph>Candy Crush: <ExternalLink url={'https://www.facebook.com/candycrushsaga/'}>https://www.facebook.com/candycrushsaga/</ExternalLink></Typography>
        <Typography paragraph>Clash of Kings: <ExternalLink url={'https://www.facebook.com/Clash.Of.Kings.Game'}>https://www.facebook.com/Clash.Of.Kings.Game</ExternalLink></Typography>
        <Typography paragraph>Slotmania: <ExternalLink url={'https://www.facebook.com/slotomania/'}>https://www.facebook.com/slotomania/</ExternalLink></Typography>
        <Typography paragraph>On the other hand, some are not. Instead, clicking the “Play Game” function on their respective Facebook pages redirects browsing users to the app’s landing page.</Typography>
        <Typography paragraph>Game of War: <ExternalLink url={'https://www.facebook.com/GameofWar/?fref=ts'}>https://www.facebook.com/GameofWar/?fref=ts</ExternalLink></Typography>
        <Typography paragraph>Mobile Strike: <ExternalLink url={'https://www.facebook.com/MobileStrike/'}>https://www.facebook.com/MobileStrike/</ExternalLink></Typography>
        <Typography paragraph>Clash Royale: <ExternalLink url={'https://www.facebook.com/ClashRoyale/?fref=nf'}>https://www.facebook.com/ClashRoyale/?fref=nf</ExternalLink></Typography>
        <Typography paragraph>MARVEL Contest of Champions: <ExternalLink url={'https://www.facebook.com/marvelcontestofchampions/?fref=ts'}>https://www.facebook.com/marvelcontestofchampions/?fref=ts</ExternalLink></Typography>
        <Typography paragraph>The outlier, however, is the method engineered by Mobile Strike's developers: by clicking “Send to Mobile” from the app’s Facebook
page, a push notification is sent to the user's mobile device. Once opened, the notification sends users to the Mobile Strike’s app page on either the App Store or the Play Store (device depending).
</Typography>
        <Typography paragraph>Mobile Strike: <ExternalLink url={'https://www.facebook.com/games/fbs=1101&app_id=342076679289388'}>https://www.facebook.com/games/fbs=1101&app_id=342076679289388</ExternalLink></Typography>

        <Typography variant='h4' className={classes.center} gutterBottom>Prices</Typography>
        <Typography paragraph>Every app on the top­grossing list is free of charge. How is that possible? They’re what’s commonly referred to as “freemium apps.” Freemium refers to a model for revenue acquisition in which the most basic rendition of the service is free of charge, and additional services that improves user experience can be paid for.</Typography>

        <Typography variant='h4' className={classes.center} gutterBottom>In-app Purchases</Typography>
        <Typography variant='h6' gutterBottom>Gaming</Typography>
        <Typography paragraph>Each and every top­gaming app offers a variety of purchasable in­game currency that's designed to save users the most invaluable resource of all; <strong>time</strong>. A small purchase or “micro transaction” is enough to speed­up a user's progression, helping them
earn unlockable content and other rewards. Notice the similarities below: </Typography>
        <Typography paragraph gutterBottom className={classes.center}>Candy Crush</Typography>
        <img src={img9} className={classes.img} alt='Top in-app purchases with Extra Moves leading'/>
        <Typography paragraph gutterBottom className={classes.center}>Clash of Clans</Typography>
        <img src={img10} className={classes.img} alt='Top in-app purchases with Pile of GEms leading'/>
        <Typography paragraph gutterBottom className={classes.center}>Clash Royale</Typography>
        <img src={img11} className={classes.img} alt='Top in-app purchases with Fistful of Gems leading'/>
        <Typography paragraph gutterBottom className={classes.center}>Game of War</Typography>
        <img src={img12} className={classes.img} alt='Top in-app purchases with 28000 gold leading'/>
        <Typography paragraph gutterBottom className={classes.center}>Mobile Strike</Typography>
        <img src={img13} className={classes.img} alt='Top in-app purchases with 1200 gold leading'/>
        <Typography variant='h6' gutterBottom>Entertainment & Music</Typography>
        <Typography paragraph>Every non­gaming app is built around a media service that requires high amounts of constantly streaming data ­ a service that’s better fit for a computer or a laptop. Given that services such as Spotify and HBO GO were already popular before becoming mobile apps, the conveniences offered by mobile devices makes these apps seem more like a marketing tool for the desktop­oriented services from which they are derived.</Typography>
        <Typography paragraph gutterBottom className={classes.center}>Spotify</Typography>
        <img src={img14} className={classes.img} alt='Top in-app purchases with Spotify premium leading'/>
        <Typography paragraph gutterBottom className={classes.center}>Pandora</Typography>
        <img src={img15} className={classes.img} alt='Top in-app purchases with pandora Once leading'/>
        <Typography paragraph gutterBottom className={classes.center}>Tidal</Typography>
        <img src={img16} className={classes.img} alt='Top in-app purchases with Tidal Premium leading'/>

        <Typography paragraph>The biggest takeaway is discerning just how effective these freemium gaming strategies are, and how it ­ coupled with social media implementations ­ effectively ushered in the gaming category’s rise to complete app store domination.</Typography>
    </div>
  )
}

export default withStyles(jssStyle, {withTheme: true})(ImprovingYourAppTodaysTopEarningAppCharacteristics)
