import React from 'react';

import { withStyles } from '@material-ui/styles'; // jss library
import {Typography} from '@material-ui/core';
import {Link} from 'react-router-dom';
import ExternalLink from '../../../ExternalLink';

import img1 from '../../../../assets/img/articles/messapps/finding-your-ios-devices-udid-via-itunes/1.jpg';
import img2 from '../../../../assets/img/articles/messapps/finding-your-ios-devices-udid-via-itunes/2.jpg';
import img3 from '../../../../assets/img/articles/messapps/finding-your-ios-devices-udid-via-itunes/3.jpg';

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
        Think of a UDID as your phone’s social security number: It's used by developers to connect particular devices to a specific iOS Developer Account, allowing particular individuals to access and test exclusive content.
        </Typography>
        <Typography paragraph>Developers typically perform a closed beta before a major release to test the functionality iOS apps on different devices. UDID's allow devs to assess how their apps perform on particular devices in a way that’s fast, painless and secure. Before starting a beta of your own, you’ll first need to create an <strong>Apple Developer's Account:</strong> <Link to="/articles/messapps/creating-your-first-ios-developer-account" underline="always">Click here for a quick how-­to!</Link></Typography>
        <Typography paragraph>
        To find your UDID, open up the latest version of <ExternalLink url="https://www.apple.com/itunes/">iTunes</ExternalLink> and <strong>connect your iOS device to your computer.</strong>
        </Typography>
        <Typography paragraph>
        <strong>Select your iOS device</strong> by clicking the device's image located at the upper-left-hand corner of iTunes's UI:
        </Typography>
        <img src={img1} className={classes.img} alt='location of UDID located in iTunes'/>
        <Typography paragraph>
            On the next screen, a window should appear listing your phone's <strong>Capacity, Phone Number, and Serial Number</strong>
        </Typography>
        <img src={img2} className={classes.img} alt='Serial number location in iTunes'/>
        <Typography paragraph>
            By clicking on <strong>Serial Number</strong> once, the prompt should change to display your <strong>UDID</strong>
        </Typography>
        <img src={img3} className={classes.img} alt='UDID location in iTunes'/>
        <Typography paragraph>
        Since your UDID will never change (on its own), copy and paste it elsewhere for quick and easy access later in the future!
        </Typography>
    </div>
  )
}

export default withStyles(jssStyle, {withTheme: true})(BoostYourAppsGrowthSocialImplementations)
