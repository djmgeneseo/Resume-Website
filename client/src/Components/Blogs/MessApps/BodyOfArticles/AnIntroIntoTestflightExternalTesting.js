import React from 'react';

import { withStyles } from '@material-ui/styles'; // jss library
import {Typography} from '@material-ui/core';

import img1 from '../../../../assets/img/blogs/messapps/an-intro-into-testflight-external-testing/1.jpg';
import img2 from '../../../../assets/img/blogs/messapps/an-intro-into-testflight-external-testing/2.jpg';
import img3 from '../../../../assets/img/blogs/messapps/an-intro-into-testflight-external-testing/3.jpg';
import img4 from '../../../../assets/img/blogs/messapps/an-intro-into-testflight-external-testing/4.jpg';
import img5 from '../../../../assets/img/blogs/messapps/an-intro-into-testflight-external-testing/5.jpg';
import img6 from '../../../../assets/img/blogs/messapps/an-intro-into-testflight-external-testing/6.jpg';
import img7 from '../../../../assets/img/blogs/messapps/an-intro-into-testflight-external-testing/7.jpg';

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

const AnIntroIntoTestflightExternalTesting = (props) => {
  const {classes} = props;
  return (
    <div>
        <Typography paragraph>
        There are two types of testing to review; internal (closed) and external (open).
        </Typography>
        <Typography paragraph>
        Last time, we reviewed the process of initiating Internal Testing; now, let’s focus on opening up your beta to <strong>External Users.</strong>
        </Typography>
        <Typography variant='h5' gutterBottom>
            Prerequisites:
        </Typography>
        <ul>
            <li>
                <Typography paragraph>
                    An iTunes Connect Record
                </Typography>
            </li>
            <li>
                <Typography paragraph>
                    A pre-uploaded build of your app
                </Typography>
            </li>
        </ul>
        <Typography variant='h4' gutterBottom>
            Let's get into it!
        </Typography>
        <Typography paragraph>
            Login to your <strong>iTunes Connect</strong> page and select <strong>My Apps:</strong>
        </Typography>
        <img src={img1} className={classes.img} alt="Step 1"/>
        <Typography paragraph>
            Open the <strong>Activity</strong> tab on the upper-most pane and scroll down to select the build to be tested; select the proper <strong>Version</strong> and <strong>Build:</strong>
        </Typography>
        <img src={img2} className={classes.img} alt="Step 2a"/>
        <img src={img3} className={classes.img} alt="Step 2b"/>
        <Typography paragraph>
            Click Test Information and leave instructions for testers to follow in <strong>What to Test</strong>. Provide other information for testers such as <strong>Beta App Description, Feedback Email,</strong> and any other <strong>URLs:</strong>
        </Typography>
        <img src={img4} className={classes.img} alt="Step 3"/>
        <Typography paragraph>
        To invite External testers, navigate back to your app in My Apps, select the TestFlight tab and click External Testing on the left-hand side. Then, click the (+) beside the header that readsExternal Testersand start adding users:
        </Typography>
        <img src={img5} className={classes.img} alt="Step 4"/>
        <Typography paragraph>
        Check the box next to any eligible users who have not already been invited and click <strong>Add</strong>.</Typography>
        <Typography paragraph>
        NOTE 2000 invites is the current maximum capacity for External testing
        </Typography>
        <Typography paragraph>
        All Apple ID users are eligible to be an external tester; but first, you’ll need to submit information for and receive approval from a Beta App Review. 
        </Typography>
        <Typography variant="h4" gutterBottom>
        To submit a Beta App Review:
        </Typography>
        <ol>
            <li>
                <Typography paragraph>Click <strong>Add Build to Test</strong> from underneath the External Testing pane and select the build to be tested:</Typography>
            </li>
            <img src={img6} className={classes.img} alt="Step 1"/>
            <li>
                <Typography paragraph>Select the build and click <strong>Add</strong></Typography>
            </li>
            <li>
                <Typography paragraph>Enter in your Test information</Typography>
            </li>
            <li>
                <Typography paragraph>Click <strong>Next</strong></Typography>
            </li>
            <li>
                <Typography paragraph>Answer Export Compliance questionnaire and click <strong>Submit</strong></Typography>
            </li>
        </ol>
        <Typography paragraph>Upon approval, your build will be ready for testing; just click <strong>Start Testing</strong> under the main <strong>TestFlight</strong> pane:</Typography>
        <img src={img7} className={classes.img} alt="Final step"/>
        <Typography paragraph>Emails will automatically be sent to those users you’ve added with both an attached invitation and a set of instructions for downloading the TestFlight App. 
        And now, it’s up to the recipients to either accept or decline your invitation.
        </Typography>
    </div>
  )
}

export default withStyles(jssStyle, {withTheme: true})(AnIntroIntoTestflightExternalTesting)
