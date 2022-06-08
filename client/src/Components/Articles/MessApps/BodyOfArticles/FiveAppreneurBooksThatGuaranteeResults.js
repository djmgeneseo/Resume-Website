import React from 'react';

import { withStyles } from '@material-ui/styles'; // jss library
import {Typography} from '@material-ui/core';

import img1 from '../../../../assets/img/articles/messapps/five-appreneur-books-that-guarantee-results/1.jpg';
import img2 from '../../../../assets/img/articles/messapps/five-appreneur-books-that-guarantee-results/2.jpg';
import img3 from '../../../../assets/img/articles/messapps/five-appreneur-books-that-guarantee-results/3.jpg';
import img4 from '../../../../assets/img/articles/messapps/five-appreneur-books-that-guarantee-results/4.jpg';
import img5 from '../../../../assets/img/articles/messapps/five-appreneur-books-that-guarantee-results/5.jpg';

const jssStyle = theme => ({
    img: {
      display: 'block',
      marginLeft: 'auto',
      marginRight: 'auto',
      marginBottom: '15px',
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
    }
})

const FiveAppreneurBooksThatGuaranteeResults = (props) => {
  const {classes} = props;
  return (
    <div>
      <Typography paragraph>
        There’s an app for everything nowadays ­ those that are easy to discover, however, are more likely to generate the most downloads. These 5 books offer the essentials in marketing: from successful practices and techniques for both on and off the internet to successful trends in design that'll help you stand out above the rest.
      </Typography>
      <ol>
        <li>
          <Typography paragraph>
            Permission Marketing: Turning Strangers into Friends and Friends into Customers
          </Typography>
          <img src={img1} className={classes.img} alt="Permission Marketing, written by Seth Godin"/>
          <Typography paragraph>
            Marketing might seem like a dry subject to approach ­ if any book could change that perspective for the better, it’d be this one. One of the pioneers of modern marketing, Godin breaks down the older foundations ­ or what he calls “Interruption Marketing” ­ and rebuilds them with the more modernized conventions of marketing in mind. With his new approach, you’ll learn how to develop trust and long­term relationships with both existing and potential consumers. In fact, entrepreneurs of all industries seeking advice on internet marketing ought to acquaint themselves with his new­age approach to user acquisition.
          </Typography>
        </li>
        <li>
          <Typography paragraph>
            SEO 2016: Learn search engine optimization with smart internet marketing strategies</Typography>
          <img src={img2} className={classes.img} alt="SET 2016, written by Adam Clarke"/>
          <Typography paragraph>
            Search Engine Optimization is a process which aids all developers in maximizing the flow of traffic towards their website. Optimizing your app’s launch page to attract more visitors is an easy and effective way to shape your app’s identity. Clarke is a Google­certified SEO guru whose years of experience as an internet marketing consultant has afforded his prose to be a smooth and effortless read.
          </Typography>
        </li>
        <li>
          <Typography paragraph>The Appreneur Playbook: Game­Changing Mobile App Marketing Advice from the Pros</Typography>
          <img src={img3} className={classes.img} alt="The Appreneur Playbook, written by Charlyn Keating"/>
          <Typography paragraph>
            Starting in 2012, from the moment Apple approved her first­ever app for publication, Keating knew she’d be addicted app development. By Nov 2014, she’d have published a total of seven apps on the store ­ most of which she coded herself. Yet she struggled to live comfortably with the small profit she made:
          </Typography>
          <Typography className={classes.blockQuote}>
            “Two years into it, I had learned a lot. But real success still eluded me. I was making just a few hundred dollars a month— not enough to pay the rent. What was I missing?”
          </Typography>
          <Typography paragraph>
            She set out to find the answers herself, and she sought them through the expertise of successful developers and appreneurs. She collected all the invaluable information she uncovered from millionaire developers in this 150 page book for the convenience of any other appreneurs that found themselves in a situation similar to her own.
          </Typography>
        </li>
        <li>
            <Typography paragraph>Tapworthy: Designing Great iPhone Apps</Typography>
            <img src={img4} className={classes.img} alt="Tapworthy Designing Great iPhone Apps, written by Josh Clark"/>
            <Typography paragraph>
              This is a must­read for anyone interested in iOS development. Clark filled every page corner­to­corner with insight on various navigation paradigms and the advantages and disadvantages of each, app icon design, alerts and notifications, app launching and so much more.   You'll also find transcribed interviews between great successors in the app world like Gowalla CEO Josh Williams and both the Firefox browser and Facebook App creator Joe Hewitt.
            </Typography>
            <Typography paragraph>
              Note: This book will not teach you how to code in Objective C. 
            </Typography>
        </li>
        <li>
          <Typography paragraph>
            Hooked: How to Build Habit-Forming Products
          </Typography>
          <img src={img5} className={classes.img} alt="Hooked: How to Build Habit-Forming Products, written by Nir Eyal"/>
          <Typography paragraph>
            Nir Eyal answers the question of “Why do some products capture widespread attention while others flop?” and “What makes us engage with certain products out of sheer habit?” in this research­intensive book. His model about viral loops ­ the steps users take from installing your app to sharing it with others ­ is broken down into four major questions:
          </Typography>
          <ol>
            <li><Typography paragraph>How does the loop initiate?</Typography></li>
            <li><Typography paragraph>Once the user becomes aware of their need for your product, what is the quickest performable action they can do that in turn rewards them?</Typography></li>
            <li><Typography paragraph>How are they rewarded?</Typography></li>
            <li><Typography paragraph>What can the user invest into your product to increase the chance of the loop repeating?</Typography></li>
          </ol>
          <Typography paragraph>This book has as much to do with behavioral psychology as it does with design, and justifiably so. By virtue of what the book’s title promises, Eyal seems to understand how to fight decaying user retention rates and “hook” users onto your app.</Typography>
        </li>
      </ol>
    </div>
  )
}

export default withStyles(jssStyle, {withTheme: true})(FiveAppreneurBooksThatGuaranteeResults)
