import React from 'react';

import { withStyles } from '@material-ui/styles'; // jss library
import {Typography} from '@material-ui/core';
import {Link} from 'react-router-dom';
import ExternalLink from '../../../ExternalLink';

import img1 from '../../../../assets/img/articles/messapps/make-any-app-successful-with-these-four-features/1.jpg';

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

const MakeAnyAppSuccessfulWithTheseFourFeatures = (props) => {
  const {classes} = props;
  return (
    <div>
        <img src={img1} className={classes.img} alt='LAUNCH'/>
        <Typography paragraph>Regardless of the category, your app will grow faster if it has implemented one or more of the features listed below:</Typography>
        <Typography variant="h5" gutterBottom>1. Get Social</Typography>
        <Typography paragraph>A chat function give users another reason to re­engage with your app on a daily basis. <strong>In-­app channels of communication allows communities to establish themselves around your app, turning it into a means for everyday conversation.</strong></Typography>
        <Typography paragraph>Opening channels of communication between users is one thing. If you can open communication between you – the developer – and the user in a seamless fashion, you’d be putting yourself into an extremely advantageous position. <strong>Direct feedback is invaluable for making improvements to your app: consider offering expert analysis to requesting users, or some other form of advice that gives users an incentive to communicate with you.</strong> If you’re creative enough or the value of your communication warrants it, you can even charge users for this feature later in the app’s lifetime – advice can only be accessed by premium users, for instance.</Typography>
        <Typography paragraph><strong>Leave users with an incentive to share your app.</strong> Offer rewards and services for users that share you app; services they'd otherwise need to pay for. Perhaps some features are overall better if they’re used with friends. Above all, make it natural for users to invite their friends to download your app. For more on social­oriented functions, <Link underline='always' to='/articles/messapps/creating-your-first-ios-developer-account'>click here</Link> for an in­depth study on successful implementations.</Typography>
        <Typography variant="h5" gutterBottom>2. Update video/text content</Typography>
        <Typography paragraph><strong>As users engage with time­passing features such as videos or lengthy guides, your app’s user session quantity and length will increase, aiding in how well your app is ranked on the app store ­- both app store ranking algorithms take these two metrics into careful consideration.</strong> Of course, the effectiveness of this strategy will depend on your content’s quality. Cycling through quality content will give users a reason to re­engage with your app every so­often. If you cycle your content regularly, you’re assured to notice an increase in both user session length and user retention rates.</Typography>
        <Typography variant='h5' gutterBottom>3. Habit Support</Typography>
        <Typography paragraph>Think of features that users will want to use on an everyday basis. An easy­to­use function that proposes a nuance to an otherwise mundane ritual will make your app highly regarded by potential users; however, do not let your app stray from its intended function.</Typography>
        <Typography paragraph><strong>The more time a person spends on your app, the more inclined they’ll feel to spend money for an enhanced experience. If your app can target a problem and fulfill its niche flawlessly, then it’ll naturally elicit daily user engagement, and those loyal users would feel as though they’d benefit from paying extra for that enhanced experience.</strong></Typography>
        <Typography variant='h5' gutterBottom>4. Gamification</Typography>
        <Typography paragraph>It may require more time to develop, but consider adapting your app’s design with elements of competition. Have users compete against each other for bragging rights or award high­scorers with exclusive bonus content. <strong>As users try to earn higher scores, they’ll engage with your app more frequently than they would have otherwise.</strong></Typography>
    </div>
  )
}

export default withStyles(jssStyle, {withTheme: true})(MakeAnyAppSuccessfulWithTheseFourFeatures)