import React from 'react';

import { withStyles } from '@material-ui/styles'; // jss library
import {Typography} from '@material-ui/core';
import {Link} from 'react-router-dom';
import ExternalLink from '../../../ExternalLink';

import img1 from '../../../../assets/img/blogs/messapps/setting-up-your-first-project-with-android-studio/1.jpg';
import img2 from '../../../../assets/img/blogs/messapps/setting-up-your-first-project-with-android-studio/2.jpg';
import img3 from '../../../../assets/img/blogs/messapps/setting-up-your-first-project-with-android-studio/3.jpg';
import img4 from '../../../../assets/img/blogs/messapps/setting-up-your-first-project-with-android-studio/4.jpg';
import img5 from '../../../../assets/img/blogs/messapps/setting-up-your-first-project-with-android-studio/5.jpg';
import img6 from '../../../../assets/img/blogs/messapps/setting-up-your-first-project-with-android-studio/6.jpg';
import img7 from '../../../../assets/img/blogs/messapps/setting-up-your-first-project-with-android-studio/7.jpg';
import img8 from '../../../../assets/img/blogs/messapps/setting-up-your-first-project-with-android-studio/8.jpg';
import img9 from '../../../../assets/img/blogs/messapps/setting-up-your-first-project-with-android-studio/9.jpg';
import img10 from '../../../../assets/img/blogs/messapps/setting-up-your-first-project-with-android-studio/10.jpg';
import img11 from '../../../../assets/img/blogs/messapps/setting-up-your-first-project-with-android-studio/11.jpg';
import img12 from '../../../../assets/img/blogs/messapps/setting-up-your-first-project-with-android-studio/12.jpg';
import img13 from '../../../../assets/img/blogs/messapps/setting-up-your-first-project-with-android-studio/13.jpg';

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

const SettingUpYourFirstProjectWithAndroidStudio = (props) => {
  const {classes} = props;
  return (
    <div>
        <Typography paragraph className={classes.center}><strong>NOTE:</strong> Before moving on to the guide, keep in mind that 2GB is the minimum disk space required to download and install Android Studio ­ 4GB is what we recommend. Android Studio requires a compatible version of the JDK (Java Development Kit). Unless you’ve recently been coding through Java, chances are you don’t have JDK pre­installed.</Typography>
        <Typography paragraph><ExternalLink to={'https://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html'}>Click here and visit Oracle’s website to download the version that matches the platform you’re device currently running off of.</ExternalLink></Typography>
        <img src={img1} className={classes.img} alt='Java SE Development Kit Accept License Agreement'/>
        <Typography paragraph className={classes.center}><strong>Note:</strong> Make sure you’ve filled in the bubble highlighted above</Typography>
        <Typography paragraph>Once downloaded, proceed through the setup until you see the following</Typography>
        <img src={img2} className={classes.img} alt='Change button; Next button'/>
        <Typography paragraph>Either remember the predetermined path or change it to a more prefered location: you’ll need to know where to access these files later on</Typography>
        <Typography paragraph><ExternalLink url={'https://developer.android.com/studio/?gclid=CjwKCAjw27jnBRBuEiwAdjQXDBwpet4CXDdNHzh7fP1TFhbucidzlSqpQ4eGqLXjYg7eBA1RkIcathoCMpoQAvD_BwE'}>After successfully installing the newest version of JDK, cilck here and visit Android’s development website to begin downloading Android Studio</ExternalLink></Typography>
        <img src={img3} className={classes.img} alt='Download Android Studio 2.1'/>
        <Typography paragraph className={classes.center}><strong>Note:</strong> This method of installation is compatible with both iOS and Windows devices</Typography>
        <img src={img4} className={classes.img} alt='I have read and agree with the above terms and conditions; Download button'/>
        <Typography paragraph>The download will begin shortly. If done correctly, a prompt should appear at the bottom­-left corner of your browser.</Typography>
        <img src={img5} className={classes.img} alt='Android Studio downloading'/>
        <Typography paragraph>Once downloaded, click the prompt indicated above. Then, click <strong>YES</strong> on the following window that asks for permission/access to your files. Proceed with the download, making amendments wherever you see fit. After thumbing through several optimization screens, your final installation should be complete</Typography>
        <img src={img6} className={classes.img} alt='Start Android Studio checkbox; Finish button'/>
        <Typography paragraph className={classes.center}><strong>Note:</strong> You may be required to manually locate and set the path to the JDK files that you downloaded at the beginning of this guide</Typography>
        <img src={img7} className={classes.img} alt='Android Studio logo'/>
        <Typography variant='h5' gutterBottom>Navigating the Setup Wizard</Typography>
        <img src={img8} className={classes.img} alt='Standard radio button; Next button'/>
        <Typography paragraph>Make sure <strong>Standard</strong> is selected and hit <strong>Next</strong>. On the next screen, click <strong>Finish</strong> and wait for the Wizard to complete</Typography>
        <Typography variant='h5' gutterBottom>Setting up your first project</Typography>
        <Typography paragraph>If it isn’t already, open up Android Studio and click on the first prompt to <strong>Start a new Android Studio project</strong></Typography>
        <img src={img9} className={classes.img} alt='Start a new Android Studio project'/>
        <Typography paragraph>The next upcoming window will ask you to input three of the following specifications:</Typography> ­ 
        <Typography paragraph>
            <ul>
                <li><strong>Application Name</strong> is the name that users will see. For now, label it "Sample Project"</li>
                <li><strong>Company Domain</strong> affects not only the Package Name of this project but also the following projects to come. Android Studio remembers the Company Domain and appends each package name with whatever you submit. <strong>Leave the Company Domain blank or on default for now</strong></li>
                <li><strong>Project Location</strong> is the where this and every other subsequent project will be stored</li>
                <li>The <strong>Package Name</strong> is the way your project will be identified, and the name is a combination of both your Application Name, Company Domain, and Project Location. However, it can be <strong>Edited</strong> independently from the Application Name and Company Domain</li>
            </ul>
        </Typography>
        <Typography paragraph>Your screen should look similar to this:</Typography>
        <img src={img10} className={classes.img} alt='Sample Project; Next button'/>
        <Typography paragraph>We’ll be focusing on <strong>Phone and Tablets</strong>, so scan the image below and make sure to exclude all other platforms. <strong>Selecting API 8: Android 2.2 (Froyo)</strong> beside <strong>“Minimum SDK”</strong> will ensure that your app is compatible with 100% of devices that are currently active across the Google Play Store</Typography>
        <img src={img11} className={classes.img} alt='Phone and Tablet checkbox; Next button'/>
        <Typography paragraph>After clicking <strong>Next</strong>, select the <strong>Basic Activity</strong> template and click <strong>Next again</strong></Typography>
        <img src={img12} className={classes.img} alt='Basic Activity; Next button'/>
        <Typography paragraph>Change the <strong>Activity Name</strong> to My Activity. Both the <strong>Layout Name</strong>, <strong>Title</strong> and <strong>Menu Resource Name</strong> should change automatically</Typography>
        <img src={img13} className={classes.img} alt='Type "MyActivity" into Activity Name input; Finish button'/>
        <Typography paragraph>After clicking <strong>Finish</strong>, Java will request access to your files yet again; click <strong>Allow</strong>. Upon initial installation, Android Studio needs to unpack a sizeable amount of data; the UI might need some time before fully deploying. If this is the case, don’t exit App Studio. Find the loading bar located at the bottom/bottom right-­hand corner and wait until its completion before continuing any further.</Typography>
        <Typography paragraph>Otherwise, this concludes our guide on getting started with Android Studio!</Typography>
    </div>
  )
}

export default withStyles(jssStyle, {withTheme: true})(SettingUpYourFirstProjectWithAndroidStudio)