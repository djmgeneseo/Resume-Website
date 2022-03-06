import React from 'react';

import { withStyles } from '@material-ui/styles'; // jss library
import {Typography} from '@material-ui/core';
import {Link} from 'react-router-dom';
import ExternalLink from '../../../ExternalLink';

import img1 from '../../../../assets/img/articles/messapps/the-mobile-app-business-model-made-simple/1.jpg';

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

const TheAppStoreAComprehensiveAnalysis = (props) => {
  const {classes} = props;
  return (
    <div>
        <img src={img1} className={classes.img} alt='Business Model illustration'/>
        <Typography paragraph>
            The complexities which constitute the modern business model typically won't apply to the relatively simpler institution of appreneurship. In the app world, everything is done electronically and over the internet. So business spaces are even optional, although they’re highly advised. Which begs the question...why even bother deploying a business model?
        </Typography>
        <Typography paragraph><strong>The simplicity of the mobile app business model is what makes it so effective and easy to execute.</strong></Typography>
        <Typography paragraph>
            Since those complexities are irrelevant to appreneurs, app developers can focus primarily on the three core elements which constitute a business models: product, marketing, and finances.
        </Typography>
        <Typography className={classes.center} variant='h5' gutterBottom>Product</Typography>
        <Typography paragraph>
            Consider the resources it’ll take to create, maintain, and improve the app. What would your app need to compete on the market? Do you have the resources to mold your app accordingly?</Typography>
        <Typography variant='h5' className={classes.center} gutterBottom>Marketing</Typography>
        <Typography paragraph>
            Your business’s success depends on how well you can discern and engage your target audience. To maximize your marketing potential, you’ll need to find and maintain a solid grasp of the app’s <Link to={`/articles/messapps/top-five-greatest-pitfalls-in-app-marketing`}>Unique Selling Point.</Link> Before moving on, you should realize the extent of paid exposure you can afford and adjust your numbers accordingly.
        </Typography>
        <Typography variant='h5' className={classes.center} gutterBottom>Finances</Typography>
        <Typography paragraph>
            Now that the necessary facilities for creating a quality app have been measured, ask yourself: Is my plan affordable and profitable? Start off by estimating a final budget and weigh it against both your available expenditures and the revenue that you expect your app to accumulate. The toughest part is accurately gauging your potential daily and monthly download rates in away that’s realistic.
        </Typography>
        <br/>
        <hr/>
        <br/>
        <Typography paragraph>
            If you can devise a plan that’ll satisfy all three of the above components components, then what you'll have is an immaculate business model.
        </Typography>
        <Typography paragraph>
            <strong>Because hiring or outsourcing for development will be the most expensive commitment, having the capacity to develop an app on your own will drastically change the financial dynamics of your business model.</strong> The more developers you hire, the less affordable your app will be to both develop and to market. If you’re working within the confines of a strict budget, your business model will suffer. <strong>Your marketing resources will likely need to be siphoned away to compensate for development costs.</strong>
        </Typography>
        <Typography paragraph>
            Since monetization rates for apps are typically low, the payment for user acquisition is often valued high across all app categories ­ it’s tough to grab the attention of potential users, and users seldom pay enough on in­game app purchases to match the costs of advertising. The high cost of users is what puts so many apps below the market’s “poverty line”: <strong>reaching tens of thousands of downloads monthly is usually required to make out with a profit. This is why it’s essential that you focus efforts on devising an avenue of marketing that’ll result in the highest conversion rates from potential users into actual users.</strong>
        </Typography>
        <Typography paragraph>
            The goal should be to generate the most downloads as you can monthly, and to focus on achieving a successful monetization strategy -­ every strong business model is built around one.
        </Typography>
    </div>
  )
}

export default withStyles(jssStyle, {withTheme: true})(TheAppStoreAComprehensiveAnalysis)