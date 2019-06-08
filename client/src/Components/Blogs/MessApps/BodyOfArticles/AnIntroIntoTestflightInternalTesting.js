import React from 'react';

import { withStyles } from '@material-ui/styles'; // jss library
import {Typography} from '@material-ui/core';
import {Link} from 'react-router-dom';

import img1 from '../../../../assets/img/blogs/messapps/an-intro-into-testflight-internal-testing/1.jpg';
import img2 from '../../../../assets/img/blogs/messapps/an-intro-into-testflight-internal-testing/2.jpg';
import img3 from '../../../../assets/img/blogs/messapps/an-intro-into-testflight-internal-testing/3.jpg';
import img4 from '../../../../assets/img/blogs/messapps/an-intro-into-testflight-internal-testing/4.jpg';
import img5 from '../../../../assets/img/blogs/messapps/an-intro-into-testflight-internal-testing/5.jpg';
import img6 from '../../../../assets/img/blogs/messapps/an-intro-into-testflight-internal-testing/6.jpg';
import img7 from '../../../../assets/img/blogs/messapps/an-intro-into-testflight-internal-testing/7.jpg';
import img8 from '../../../../assets/img/blogs/messapps/an-intro-into-testflight-internal-testing/8.jpg';
import img9 from '../../../../assets/img/blogs/messapps/an-intro-into-testflight-internal-testing/9.jpg';
import img10 from '../../../../assets/img/blogs/messapps/an-intro-into-testflight-internal-testing/10.jpg';
import img11 from '../../../../assets/img/blogs/messapps/an-intro-into-testflight-internal-testing/11.jpg';

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

const AnIntroIntoTestflightInternalTesting = (props) => {
  const {classes} = props;
  return (
    <div>
        <Typography paragraph>
        All data is invaluable to your app's success; hence, aggregating information about apps pre-release has become part of the norm. Two types of beta testing exists internal (closed) and internal (open). Last time, we reviewed how to setup <Link to={"/blogs/messapps/an-intro-into-testflight-external-testing"} underline="always">External Testing</Link>; now, let's focus on the <strong>Internal</strong> alternative. If you need any help deciding which method of testing to use, <Link to="/blogs/messapps/mobile-app-beta-testing-breaking-down-the-basics" underline="always">click here and decide first before proceeding.</Link>
        </Typography>
        <Typography variant='h5' gutterBottom>
            Prerequisites to Internal Testing:
        </Typography>
        <ul>
            <li>
                <Typography paragraph>
                    An iTunes Connect Record
                </Typography>
            </li>
            <li>
                <Typography paragraph>
                Potential testers that are assigned with the Admin, Technical, App Manager, Developer, or Marketer role
                </Typography>
            </li>
            <li>
                <Typography paragraph>
                A pre-uploaded build of your app
                </Typography>
            </li>
        </ul>
        <Typography variant='h4' gutterBottom>
            Getting Started
        </Typography>
        <Typography paragraph>
            Login to your <strong>iTunes Connect</strong> page and select <strong>My Apps:</strong>
        </Typography>
        <img src={img2} className={classes.img} alt="Step 1"/>
        <Typography paragraph>
            Open the <strong>Activity</strong> tab on the upper-most pane and scroll down to select the build to be tested; select the proper <strong>Version</strong> and <strong>Build:</strong>
        </Typography>
        <img src={img1} className={classes.img} alt="Step 2a"/>
        <img src={img3} className={classes.img} alt="Step 2b"/>
        <Typography paragraph>
            Click <strong>Test Information</strong> and leave instructions for testers to follow in <strong>What to Test</strong>. Provide other information for testers such as <strong>Beta App Description, Feedback Email,</strong> and any other <strong>URLs:</strong>
        </Typography>
        <img src={img4} className={classes.img} alt="Step 3a"/>
        <img src={img5} className={classes.img} alt="Step 3b"/>
        <Typography paragraph className={classes.center}><strong>NOTE:</strong> You don’t need to provide Beta App Review Information for internal testing
        </Typography>
        <Typography paragraph>
        An iTunes Connect user that’s eligible to be an internal tester must be part of your iTunes Connect team with either the Admin, Technical, App Manager, Developer, or Marketer role. To assess what users have which roles, open the drop­down by clicking the drop­down illustrated below:
        </Typography>
        <img src={img6} className={classes.img} alt="Step 4"/>
        <Typography paragraph>
        You can review each user's role underneath the Role column:
        </Typography>
        <img src={img7} className={classes.img} alt="Step 5"/>
        <Typography paragraph>
        To add Internal testers, navigate back to your app in My Apps, select the TestFlight tab and click Internal Testing on the left­-hand side:
        </Typography>
        <img src={img8} className={classes.img} alt="Step 6"/>
        <Typography paragraph>
        Now click the (+) sign next to the header Internal Testers:
        </Typography>
        <img src={img9} className={classes.img} alt="Step 7"/>
        <Typography paragraph>Check the box next to any eligible users who have not already been invited and click Add: </Typography>
        <img src={img10} className={classes.img} alt="Step 8"/>
        <Typography paragraph className={classes.center}><strong>NOTE:</strong> The current maximum capacity for testers is 25</Typography>
        <img src={img11} className={classes.img} alt="Step 9"/>
        <Typography paragraph>Select the <strong>Build</strong> to be tested and click <strong>Start Testing.</strong> Users you’ve previously selected for internal testing will automatically be iailed with both an attached invitation and a set of instructions for downloading the <strong>TestFlight app.</strong> And now, it’s all up to the recipients to either accept or decline your invite! <Link to="/blogs/messapps/an-intro-into-testflight-external-testing" underline="always">Next, learn how to open up your app’s beta to users outside of your development team.</Link></Typography>
    </div>
  )
}

export default withStyles(jssStyle, {withTheme: true})(AnIntroIntoTestflightInternalTesting)
