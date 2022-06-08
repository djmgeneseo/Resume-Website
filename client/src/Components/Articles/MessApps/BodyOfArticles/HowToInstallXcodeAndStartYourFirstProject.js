import React from 'react';

import { withStyles } from '@material-ui/styles'; // jss library
import {Typography} from '@material-ui/core';
import {Link} from 'react-router-dom';
import ExternalLink from '../../../ExternalLink';

import img1 from '../../../../assets/img/articles/messapps/how-to-install-xcode-and-start-your-first-project/1.jpg';
import img2 from '../../../../assets/img/articles/messapps/how-to-install-xcode-and-start-your-first-project/2.jpg';
import img3 from '../../../../assets/img/articles/messapps/how-to-install-xcode-and-start-your-first-project/3.jpg';
import img4 from '../../../../assets/img/articles/messapps/how-to-install-xcode-and-start-your-first-project/4.jpg';
import img5 from '../../../../assets/img/articles/messapps/how-to-install-xcode-and-start-your-first-project/5.jpg';
import img6 from '../../../../assets/img/articles/messapps/how-to-install-xcode-and-start-your-first-project/6.jpg';
import img7 from '../../../../assets/img/articles/messapps/how-to-install-xcode-and-start-your-first-project/7.jpg';
import img8 from '../../../../assets/img/articles/messapps/how-to-install-xcode-and-start-your-first-project/8.jpg';
import img9 from '../../../../assets/img/articles/messapps/how-to-install-xcode-and-start-your-first-project/9.jpg';
import img10 from '../../../../assets/img/articles/messapps/how-to-install-xcode-and-start-your-first-project/10.jpg';
import img11 from '../../../../assets/img/articles/messapps/how-to-install-xcode-and-start-your-first-project/11.jpg';
import img12 from '../../../../assets/img/articles/messapps/how-to-install-xcode-and-start-your-first-project/12.jpg';
import img13 from '../../../../assets/img/articles/messapps/how-to-install-xcode-and-start-your-first-project/13.jpg';
import img14 from '../../../../assets/img/articles/messapps/how-to-install-xcode-and-start-your-first-project/14.jpg';
import img15 from '../../../../assets/img/articles/messapps/how-to-install-xcode-and-start-your-first-project/15.jpg';
import img16 from '../../../../assets/img/articles/messapps/how-to-install-xcode-and-start-your-first-project/16.jpg';

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

const HowToInstallXcodeAndStartYourFirstProject = (props) => {
  const {classes} = props;
  return (
    <div>
        <Typography className={classes.center} paragraph>
        <strong>NOTE:</strong> You must have access to an Apple ID account: to register, <ExternalLink url={'https://appleid.apple.com/account#!&page=create'}>click here.</ExternalLink> For this method, Xcode and Command Line Tools are only accessible via Mac and other iOS Devices.
        </Typography>
        <Typography paragraph>
        Apple provides Mac devs with both Xcode and Command Line Unix Tools, but you'll need to access Apple's servers first in order to reach them:
        </Typography>
        <Typography variant="h5" gutterBottom>Installing Xcode</Typography>
        <Typography paragraph>Access your Mac’s Terminal Application or what’s otherwise referred to as the Console; anything typed into this terminal is sent straight to your device’s Operating System:</Typography>
        <Typography paragraph>Press “Command + Spacebar” to access Spotlight Search</Typography>
        <Typography paragraph>Type in the word "Terminal" into the Spotlight search field and hit Enter; this should execute your mac's Terminal app</Typography>
        <img src={img1} className={classes.img} alt='macOS terminal'/>
        <Typography paragraph>Type “gcc” into the terminal and hitEnter (gcc is a compiler that turns source code into executable applications). Alternatively, typing “xcode­select ­­install” into the terminal works just as well.</Typography>
        <img src={img2} className={classes.img} alt='type gcc inside terminal'/>
        <Typography paragraph>Before installing Xcode Command Line Tools, click Get Xcode</Typography>
        <img src={img3} className={classes.img} alt='on modal, select Get Xcode'/>
        <Typography paragraph>In order to install Xcode from the App Store, you’ll need to first log­in through your Apple Id. If you haven’t already created one, <ExternalLink url={'https://appleid.apple.com/#!&page=signin'}>you can do so by clicking here.</ExternalLink></Typography>
        <img src={img4} className={classes.img} alt='select "get" on Xcode in iTunes store'/>
        <Typography className={classes.center}>NOTE: the installation may not initiate until you’ve completed particular software updates. To check, click the Updates tab and select Update All</Typography>
        <img src={img5} className={classes.img} alt='update all in iTunes store'/>
        <Typography paragraph>To monitor the installation’s progress, open Spotlight Search by pressing Command + Spacebar and type in/open up Launchpad</Typography>
        <img src={img6} className={classes.img} alt='downloading symbol for Xcode'/>
        <img src={img7} className={classes.img} alt='Xcode download complete'/>
        <Typography variant="h6">Creating your first project</Typography>
        <Typography paragraph>Upon opening Xcode, you’ll see this screen. Click on “Create a new Xcode Project”</Typography>
        <img src={img8} className={classes.img} alt='Create new Xcode project'/>
        <Typography paragraph>On the right hand side, you’ll notice a selection of different app templates. Select “Single­View Application” and click Next</Typography>
        <img src={img9} className={classes.img} alt='Select single view application, then select next'/>
        <Typography paragraph><strong>Product Name:</strong> This is the name that will appear for users in the store and should be similar to the app name you’d later enter into iTunes. Let's name this “MyFirstProject.”</Typography>
        <Typography paragraph><strong>Organization Name:</strong> Affects not only the Bundle Identifier, but the Bundle Identifier of every other application. Leave it as it is for now. The top of all your files will likely say your name, but we can edit that out later if need be.</Typography>
        <Typography paragraph><strong>Organization Identifier:</strong> Set this to “com.example.[Your Name]” where ­ like in the picture above ­ [Your Name] represents your Organization Name after being shortened down: the Organization name David Murphy is changed to dmurphy.</Typography>
        <Typography paragraph>The Devices tab lists the different devices that you'd like your app to run off of. For now, leave Universal as the selected option and click Next. On the next window hit Create after choosing your desired location ­ Desktop is assigned as default.</Typography>
        <img src={img10} className={classes.img} alt='Fill firs tthree fields: product name, organization name, and organization identifier, then select next'/>
        <Typography variant="h6">Congratulations! You’ve created your first Xcode Project!</Typography>
        <img src={img11} className={classes.img} alt='Xcode interface'/>
        <Typography variant="h5">Installing Xcode Command Line Tools</Typography>
        <Typography paragraph>Xcode has almost everything you’ll need to program apps in a tightly packed 3.8 GB download; however, most developers will be coding more than just iOS applications, and most Macs come unequipped with the Unix tools that would otherwise let developers branch off into other territories of programming. The decision to exclude them was made to conserve space and avoid unnecessary storage usage, as Unix Tools were deemed necessary for iOS app developers.</Typography>
        <Typography paragraph>To install Xcode Command Line Tools, navigate to your device's Terminal app again through Spotlight Search. Then, type “xcode­select ­­install” into your terminal and hit Enter</Typography>
        <Typography paragraph>Instead of clicking “Get Xcode” like before, find and click Install at the bottom­right­hand corner of the new window</Typography>
        <img src={img12} className={classes.img} alt='type xcode-select --install in bash terminal and select install on modal'/>
        <Typography className={classes.center}><strong>Note:</strong> If Xcode Command Line Tools was previously downloaded onto your device, you’ll likely get an error that resembles the one I received on my screen below:</Typography>
        <img src={img13} className={classes.img} alt='error: Software update required'/>
        <Typography paragraph>A <strong>Terms and Agreement</strong> screen will: Read it (or don’t); if you accept Apple’s Terms, then hit Agree to proceed with the installation</Typography>
        <img src={img14} className={classes.img} alt='select agree to license agreement'/>
        <Typography paragraph>Once the installation is complete, click Done</Typography>
        <img src={img15} className={classes.img} alt='select done'/>
        <Typography paragraph>Just to verify that you’ve downloaded the correct version, type “gcc ­­version” and the terminal will spit back the version that’s currently installed. Your version should either match or be more updated than the one highlighted below.</Typography>
        <img src={img16} className={classes.img} alt='Apple LLVM version 7.3.0 (clang-703.0.31)'/>
        <Typography paragraph>The entire command line toolkit package is located by default at/Library/Developer/CommandLineTools/.</Typography>
        <Typography variant="h6">Congratulations! You’ve successfully downloaded Xcode Command Line Tools!</Typography>
    </div>
  )
}

export default withStyles(jssStyle, {withTheme: true})(HowToInstallXcodeAndStartYourFirstProject)
