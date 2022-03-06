import React from 'react';

import { withStyles } from '@material-ui/styles'; // jss library
import {Typography} from '@material-ui/core';
import {Link} from 'react-router-dom';
import ExternalLink from '../../../ExternalLink';

import img1 from '../../../../assets/img/articles/messapps/boost-your-apps-growth-social-implementations/1.jpg';
import img2 from '../../../../assets/img/articles/messapps/boost-your-apps-growth-social-implementations/2.jpg';
import img3 from '../../../../assets/img/articles/messapps/boost-your-apps-growth-social-implementations/3.jpg';
import img4 from '../../../../assets/img/articles/messapps/boost-your-apps-growth-social-implementations/4.jpg';
import img5 from '../../../../assets/img/articles/messapps/boost-your-apps-growth-social-implementations/5.jpg';
import img6 from '../../../../assets/img/articles/messapps/boost-your-apps-growth-social-implementations/6.jpg';
import img7 from '../../../../assets/img/articles/messapps/boost-your-apps-growth-social-implementations/7.jpg';
import img8 from '../../../../assets/img/articles/messapps/boost-your-apps-growth-social-implementations/8.jpg';
import img9 from '../../../../assets/img/articles/messapps/boost-your-apps-growth-social-implementations/9.jpg';
import img10 from '../../../../assets/img/articles/messapps/boost-your-apps-growth-social-implementations/10.jpg';
import img11 from '../../../../assets/img/articles/messapps/boost-your-apps-growth-social-implementations/11.jpg';
import img12 from '../../../../assets/img/articles/messapps/boost-your-apps-growth-social-implementations/12.jpg';
import img13 from '../../../../assets/img/articles/messapps/boost-your-apps-growth-social-implementations/13.jpg';

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

const BoostYourAppsGrowthSocialImplementations = (props) => {
  const {classes} = props;
  return (
    <div>
        <Typography paragraph>
        To gauge both an app's quality and its overall ability to meet user expectations, both Google and Apple's app stores rely on how frequently and for how long users engage with the app in question. This data being mined is typically referred to as "Engagement Signals."
        </Typography>
        <Typography variant='h4'>Social Implementations</Typography>
        <Typography paragraph>Intra-­app communication give users another reason to frequent your app. A social feature's aim should be to increase interaction with other users and, in effect, with the app. All accessory features such as chat channels and social media compatibility should be easy to locate, yet non­intrusive. For instance, channels of communication between the user and developer are nifty, but only if the implementation seems warranted and users aren’t constantly reminded about the feature every single time they access the app.</Typography>
        <Typography paragraph>
        Notifications are meant to redirect someone’s attention by way of some sort of alert: even if it’s just for a second, your reason for breaking someone’s focus must be justifiable. Although notifications tend to complement chats well, put careful thought into how you implement them – especially push notifications. They can help, but only when they’re solicited; otherwise, they’ll only cause frustration, which will lead to uninstalls and mixed reviews.
        </Typography>
        <Typography paragraph>
        Consider turn-based gaming apps; implementing push notifications that alert players when it’s their turn seems warranted. It might be unwise, however, to notify users about a new quest or challenge on a daily basis – the alerts get old, fast. Instead, consider emailing users, or even updating your app’s social media page on a daily basis for users to overlook. Otherwise, you can leave the choice for daily push notifications up to the user.
        </Typography>
        <Typography className={classes.center} paragraph>Below is a conglomerate of ways that developers have integrated social aspects into their game.</Typography>
        <Typography variant='h5'>Reward users that want to share your app:</Typography>
        <img src={img1} className={classes.img} alt='Miitomo screenshot'/>
        <Typography className={classes.center} paragraph><strong>Miitomo</strong> - developed by Nintendo</Typography>

        <Typography variant='h5'>Reward users for competing/interacting with other users to promote retention through competition:</Typography>
        <img src={img2} className={classes.img} alt='Clash of Clans screenshot'/>
        <Typography className={classes.center}><strong>Clash of Clans</strong> by Supercell</Typography>

        <Typography variant='h5'>Reward users that want to share your app:</Typography>
        <img src={img3} className={classes.img} alt='Castle Clash screenshot'/>
        <Typography className={classes.center} paragraph><strong>Castle Clash</strong> - developed by IGG.COM</Typography>

        <Typography variant='h5'>Implement social networking into your app:</Typography>
        <img src={img4} className={classes.img} alt='Miitomo screenshot'/>
        <Typography className={classes.center} paragraph><strong>Miitomo</strong> - developed by Nintendo</Typography>

        <img src={img5} className={classes.img} alt='Miitomo screenshot'/>
        <Typography className={classes.center} paragraph><strong>Clash Of Lords 2</strong> - developed by IGG.COM</Typography>

        <Typography variant='h5'>Turn multiplayer into a feature that must be unlocked:</Typography>
        <img src={img6} className={classes.img} alt='Clash Royale screenshot 1 of 2'/>
        <img src={img7} className={classes.img} alt='Clash Royale screenshot 2 of 2'/>
        <Typography className={classes.center} paragraph><strong>Clash Royale</strong> - developed by Supercell</Typography>

        <Typography variant='h5'>Incorporate friends list and private messaging functionalities:</Typography>
        <img src={img8} className={classes.img} alt='Boom Beach screenshot'/>
        <Typography className={classes.center} paragraph><strong>Boom Beach</strong> - developed by Supercell</Typography>

        <img src={img9} className={classes.img} alt='Clash of Lords 2 screenshot'/>
        <Typography className={classes.center} paragraph><strong>Clash Of Lords 2</strong> - developed by IGG.COM</Typography>

        <img src={img10} className={classes.img} alt='Castle Clash screenshot'/>
        <Typography className={classes.center} paragraph><strong>Castle Clash</strong> - developed by IGG.COM</Typography>

        <Typography variant='h5'>Provide users with an open yet moderated chat channel that users can communicate through:</Typography>
        <img src={img11} className={classes.img} alt='Castle Clash screenshot'/>
        <Typography className={classes.center} paragraph><strong>Castle Clash</strong> - developed by IGG.com</Typography>
        
        <Typography variant='h5'>Implement a guild-like system to elicit the growth of in-app communities:</Typography>
        <img src={img12} className={classes.img} alt='Clash of Lords 2 screenshot'/>
        <Typography className={classes.center} paragraph><strong>Clash of Lords 2</strong> - developed by IGG.com</Typography>

        <img src={img13} className={classes.img} alt='Boom Beach screenshot'/>
        <Typography className={classes.center} paragraph><strong>Boom Beach</strong> - developed by Supercell</Typography>
    </div>
  )
}

export default withStyles(jssStyle, {withTheme: true})(BoostYourAppsGrowthSocialImplementations)
