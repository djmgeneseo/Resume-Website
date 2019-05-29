import React from 'react';

import { withStyles } from '@material-ui/styles'; // jss library
import {Typography} from '@material-ui/core';
import {Link} from 'react-router-dom';
import ExternalLink from '../../../ExternalLink';

import img1 from '../../../../assets/img/blogs/messapps/ios-app-development-submitting-an-update/1.jpg';
import img2 from '../../../../assets/img/blogs/messapps/ios-app-development-submitting-an-update/2.jpg';
import img3 from '../../../../assets/img/blogs/messapps/ios-app-development-submitting-an-update/3.jpg';
import img4 from '../../../../assets/img/blogs/messapps/ios-app-development-submitting-an-update/4.jpg';
import img5 from '../../../../assets/img/blogs/messapps/ios-app-development-submitting-an-update/5.jpg';
import img6 from '../../../../assets/img/blogs/messapps/ios-app-development-submitting-an-update/6.jpg';
import img7 from '../../../../assets/img/blogs/messapps/ios-app-development-submitting-an-update/7.jpg';

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

const IosAppDevelopmentSubmittingAnUpdate = (props) => {
  const {classes} = props;
  return (
    <div>
        <Typography paragraph>Sign-in to <ExternalLink url={`https://itunesconnect.apple.com/itc/static/login`}>iTunes Connect</ExternalLink> with your <Link underline='always' to='/blogs/messapps/creating-your-first-ios-developer-account'>Developer account</Link> and click My Apps on the main iTunes Connect dashboard; find and select the app to be updated:</Typography>
        <img src={img1} className={classes.img} alt='My Apps icon'/>
        <Typography paragraph className={classes.center}><strong>NOTE:</strong> Only users with an Admin, Technical, or App Manager role can add a new app version. Also, all certifications must be up­to­ date before Apple will apply any changes to your app.</Typography>
        <Typography paragraph>If you see a caution similar to the one in the image below, then you might need to sign-in and address the issue first with a user that has a higher Role in your iTunes Connect dev team must already be deemed Ready for Sale by Apple before a new build can be added:</Typography>
        <img src={img2} className={classes.img} alt='Notification regarding Apple Developer Program License Agreement'/>
        <Typography paragraph>Another prerequisite to the updating process is that the app in question must already be deemed <strong>Ready for Sale</strong> by Apple before a new build can be added:</Typography>
        <img src={img3} className={classes.img} alt='Ready for Sale'/>
        <Typography paragraph>Now select <strong>+ VERSION OR PLATFORM</strong> below Ready for Sale and select iOS:</Typography>
        <img src={img4} className={classes.img} alt='Version or Platform button'/>
        <Typography paragraph>Enter the new version number and hit <strong>Create:</strong></Typography>
        <img src={img5} className={classes.img} alt='Store Version Number - user entry point'/>
        <Typography paragraph>After hitting <strong>Create</strong>, notice how only those properties that may be changed are editable. When updating a build, all information is automatically carried over onto your store's page except for its description and screenshots. This is because Apple wants all amendments made to an app to be reflected whenever changes are made.</Typography>
        <Typography paragraph>If necessary, make sure you’ve made all changes the <strong>Build</strong> of your app by clicking <strong>Ready for Sale</strong> and locating and selecting the new <strong>Build</strong>.</Typography>
        <Typography paragraph>Before submitting your app for review, you're given the option to <strong>Manually</strong> update your new version onto the app store after it passes the review process:</Typography>
        <img src={img6} className={classes.img} alt='Select the Automatically release this version radio button'/>
        <Typography paragraph>The <strong>Automatic</strong> options are self­explanatory; however, if you choose Manually release this version, then your app’s status will change to Pending Developer Release once it receives approval for release from Apple. Choosing this could take up to 24 hours to process</Typography>
        <Typography paragraph>Now locate and click the Save and Submit for Review buttons at the top­right corner of your iTunes Connect page ­ that’s all there is to it!</Typography>
        <img src={img7} className={classes.img} alt='Submit for Review '/>
    </div>
  )
}

export default withStyles(jssStyle, {withTheme: true})(IosAppDevelopmentSubmittingAnUpdate)