import React from 'react';

import { withStyles } from '@material-ui/styles'; // jss library
import {Typography} from '@material-ui/core';
import {Link} from 'react-router-dom';
import ExternalLink from '../../../ExternalLink';

import img1 from '../../../../assets/img/articles/messapps/creating-your-first-ios-developer-account/1.jpg';
import img2 from '../../../../assets/img/articles/messapps/creating-your-first-ios-developer-account/2.jpg';
import img3 from '../../../../assets/img/articles/messapps/creating-your-first-ios-developer-account/3.jpg';
import img4 from '../../../../assets/img/articles/messapps/creating-your-first-ios-developer-account/4.jpg';
import img5 from '../../../../assets/img/articles/messapps/creating-your-first-ios-developer-account/5.jpg';
import img6 from '../../../../assets/img/articles/messapps/creating-your-first-ios-developer-account/6.jpg';
import img7 from '../../../../assets/img/articles/messapps/creating-your-first-ios-developer-account/7.jpg';
import img8 from '../../../../assets/img/articles/messapps/creating-your-first-ios-developer-account/8.jpg';
import img9 from '../../../../assets/img/articles/messapps/creating-your-first-ios-developer-account/9.jpg';
import img10 from '../../../../assets/img/articles/messapps/creating-your-first-ios-developer-account/10.jpg';

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
        <Typography className={classes.center} paragraph><strong>NOTE:</strong> Creating an iOS Developer Account costs approximately $99.00 USD</Typography>
        <Typography variant='h5'>Creating an Apple Developer account is really simple</Typography>
        <Typography paragraph>What’s not, however, is creating an entire app from scratch. Typically, one's curiosity about the mystery of coding will linger, even if they plan to delegate a team to develop the app. This guide will walk you through all the steps of creating an Apple ID and Development account so that you can gain access to your very own programming control­room (Xcode).</Typography>

        <img src={img1} className={classes.img} alt='Apple Developer Agreement'/>
        
        <Typography paragraph>
        Begin by visiting apple’s website <ExternalLink url="https://developer.apple.com/enroll/">here.</ExternalLink> If you haven’t already, Create an Apple ID
or Sign­in with an existing one; you may need to re­click the URL provided above after the account creation process if you're not already reverted back to the installation page upon account creation. Next, you’ll need to choose between registering your account as an Individual Business or as a Company/Organization ­ and yes, it matters which one you select:
        </Typography>
        <ul>
            <li>
                <Typography paragraph><strong>Individual/Sole Proprietor/ Single Person Business:</strong> For individuals or companies that are not an officially recognized business; your account can only be accessed through a single login. This is most useful for freelance developers who are barely starting out or won’t need to include other users on their account.</Typography>
                <img src={img2} className={classes.img} alt='Apple Developer Program Enrollment'/>        
            </li>
            <li>
                <Typography paragraph><strong>Company/Organization:</strong> This will allow more than one user login to be linked together, authorizing the primary owner with the power to regulate the extent of each team member's permissions. A D­U­N­S Number and confirmation for having the legal authority as or granted by the organization’s owner/founder to register the organization’s Apple ID must be given in order to proceed as a Company/Organization. Check <ExternalLink url="https://developer.apple.com/programs/enroll/">Here</ExternalLink> to confirm whether or not your company is recognized by Apple as being a legal entity
                </Typography>
                <img src={img3} className={classes.img} alt='Apple ID Information'/>
                <Typography paragraph>
                The requirements page will appear as it's show in the image below:
                </Typography>
                <img src={img4} className={classes.img} alt='Authority to Sign Legal Agreements'/>        
            </li>
        </ul>

        <Typography paragraph>
                After making a selection between Individual Business and Company/Organization, fill in the best or most reliable method of contact for Apple to record for possible use in the future.
        </Typography>
        <img src={img5} className={classes.img} alt="Contact Information"/>

        <Typography paragraph>
            Scrolling down, read over the second terms and agreements document and click the check-box to show your approval
        </Typography>
        <img src={img6} className={classes.img} alt="Apple Developer Program License Agreement"/>

        <Typography paragraph>
        Scan through all the information on the following page to confirm that it accurately reflects your Contact Information
        </Typography>
        <img src={img7} className={classes.img} alt="Apple ID Information confirmation" />

        <Typography paragraph>
        Decide whether or not you would prefer it if Apple automatically renews your membership on an annual basis. If this is your first go at app development or you’re not sure if you’ll be an app developer a year from now, then it might be best to uncheck the Auto­ Renew option
        </Typography>
        <img src={img8} className={classes.img} alt="Auto renew option for apple developer subscription"/>

        <Typography paragraph>
            Sign in to your Apple ID again to proceed to the Payment Options page
        </Typography>
        <img src={img9} className={classes.img} alt="sign in to apple developer"/>    
        <img src={img10} className={classes.img} alt="payment option"/>               
        
        <Typography paragraph>
        Upon completion, an email will be delivered within 24 hours with an attachment containing your activation code; using this, follow the instructions listed on the email to confirm your purchase. <strong>Congrats! Your iOS Developer Account has been created! </strong>
        </Typography>
    </div>
  )
}

export default withStyles(jssStyle, {withTheme: true})(BoostYourAppsGrowthSocialImplementations)
