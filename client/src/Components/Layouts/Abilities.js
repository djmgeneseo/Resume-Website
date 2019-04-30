import React, {Fragment} from 'react'
import { withStyles } from '@material-ui/styles'; // jss library

import {Grid, Typography} from '@material-ui/core';
import {MdStar, MdStarBorder} from 'react-icons/md';

const jssStyle = (theme) => ({
  sectionBackground: {
    backgroundColor: 'rgb(252,252,252)',
    width: '100%',
    height: 'auto',
    padding: '10px 0px'
  },
  siteContainer: {
    margin: '75px auto',
    maxWidth: '1280px',
    padding: '10px'
  },
  heading: {
    textAlign: 'center',
    width: '100%',
    marginBottom: '25px'
  },
  headerShadow: {
    '& img': {
      marginBottom: '15px',
      width: '100%'
    }
  },
  subHeading: {
    textAlign: 'left',
    width: '100%',
    paddingBottom: '15px',
    position: 'relative',
    '&:after': {
        position: 'absolute',
        display: 'inline-block',
        content: "''",
        left: '0',
        width: '35px',
        height: '3px',
        borderBottom: '3px solid',
        color: theme.palette.primary['500']
    }
  },
  columnLeftFormat: {
    boxSizing: 'border-box', 
    paddingRight: '15px'
  },
  columnRightFormat: {
    boxSizing: 'border-box',
    paddingLeft: '15px'
  },
  onHover: {
    '&:hover': {
      backgroundColor: '#e4e7e7',
    },
    '&:hover $star': {
      margin: '1px'
    }
  },
  starsSpan: {
    color: theme.palette.primary['500']
  },
  horizontalDivider: {
    margin: '40px 0px',
    borderColor: '#727878',
    opacity: '0.2',
    border: '0',
    borderTop: '.09px solid #eee',
    width: '100%'
  },
  star: {
    display: 'inline',
    transition: 'margin .2s'
  },
  reactDisclaimer: {
    textAlign:"center", 
    marginTop: "40px", 
    width:"100%"
  },
  disclaimerText: {
    color: '#424242ba'
  },
  '@media only screen and (max-width: 959px)': {
    columnRightFormat: {
      paddingLeft: '0px'
    },
    columnLeftFormat: {
      paddingRight: '0px'
    }
  }
})

// TODO: reverse key/value pairing
const skillsJSON = {
  5: ['JavaScript (ES5, 6, & 7)','HTML(5)','CSS(3)','JSON','Git','Bootstrap Framework','Material-UI Framework','Object Oriented Programming'],
  4: ['NoSQL','SQL','PHP','React','React-Bootstrap Framework','Swift','JQuery','MVC Pattern','CRUD Paradigm','REST Architecture'],
  3: ['MySQL','Node.js','Java'],
  2: ['R'],
  1: ['Laravel Framework']
}

const toolsJSON = {
  5: ['Android Studio','Xcode','Visual Studio Code','Brackets','Firestore','Firebase','Microsoft IIS','NPM'],
  4: ['CocoaPods (MacOS Package Manager)', 'Eclipse','Ingenuix CMS'],
  3: ['Eclipse', 'MongoDB','Google Analytics','R Studios','ODBC'],
  2: ['LDAP','Visual Studio 2017'],
  1: ['DynamoDB']
}
const randomString = (length) => {
  return Math.round((Math.pow(36, length + 1) - Math.random() * Math.pow(36, length))).toString(36).slice(1);
}

const Abilities = (props) => {
  const {classes} = props;

  /**
   * 
   * @param {number} filledStarsAmt - amount of stars (propably out of 5)
   * @param {number} emptyStarsAmt - unfilled stars (probably out of 5)
   * @returns {jsx}
   */
  const generateStars = (filledStarsAmt, emptyStarsAmt) => {
    let jsx = [];
    while(filledStarsAmt > 0) {
      jsx.push(
        <div key={randomString(10)} className={classes.star}>
          <MdStar/>
        </div>
      );
      filledStarsAmt--;
    }
    while(emptyStarsAmt > 0) {
      jsx.push(
        <div key={randomString(10)} className={classes.star}>
          <MdStarBorder/>
        </div>
      );
      emptyStarsAmt--;
    }  
    return jsx.map(function(star) {return star});
  }

  /**
   * 
   * @param {object} abilityJSON - Each value is an array
   * @returns {number}
   */
  const findAbilityJsonLength = (abilityJSON) => {
    let length = 0;
    Object.keys(abilityJSON).forEach(function(key) {
      length += abilityJSON[key].length;
    })
    return length;
  }

  /**
   * 
   * @param {object} abilityJSON - An object of number:arrays pairs
   */
  const generateAbilityCategoryRow = (abilityJSON) => {
    const halfwayMark = Math.ceil(findAbilityJsonLength(abilityJSON)/2);
    let combinedArrayOfAllAbilites = []
    // package abilities into individual objects, and then combine those objects into a singular array. The length of abilityJSON = the max rating for each individual ability.
    for(let i=Object.keys(abilityJSON).length; i>0; i--) { // decrement
      combinedArrayOfAllAbilites.push(...(abilityJSON[i]).map((abilityName) => { // map returns an array, but the '...' spread operator returns each element of that array
          let temp = {}
          temp[i]=abilityName
          return temp
        })
      )
    }

    // divide array into left and right columns from the 'halfwayMark' index
    let leftColArr = combinedArrayOfAllAbilites.splice(0, halfwayMark);
    let rightColArr = combinedArrayOfAllAbilites;
    return (
      <Fragment>
        <Grid item xs={12} sm={12} md={6} className={classes.columnLeftFormat}>{
          leftColArr.map(function(abilityObject) {
            let amtOfStars = Object.keys(abilityObject);
            let abilityName = abilityObject[Object.keys(abilityObject)];
            return (
              <div key={randomString(10)} className={classes.onHover}>
                <Typography style={{display: 'inline'}} variant="body1">{abilityName}</Typography>
                <span className={classes.starsSpan} style={{float: 'right'}}>
                  {generateStars(amtOfStars, 5-amtOfStars)}</span>
              </div>
            )
          })}
        </Grid>
        <Grid item xs={12} sm={12} md={6} className={classes.columnRightFormat}>{
          rightColArr.map(function(abilityObject) {
            let amtOfStars = Object.keys(abilityObject);
            let abilityName = abilityObject[Object.keys(abilityObject)];
            return (
              <div key={randomString(10)} className={classes.onHover}>
                <Typography style={{display: 'inline'}} variant="body1">{abilityName}</Typography>
                <span className={classes.starsSpan} style={{float: 'right'}}>
                  {generateStars(amtOfStars, 5-amtOfStars)}</span>
              </div>
            )
          })}
        </Grid>
      </Fragment>
    )
  }

  return (
    <section className={classes.sectionBackground}>
      <Grid container className={classes.siteContainer}>
        <div className={classes.heading}><Typography variant="h4">ABILITIES</Typography></div>
        <div className={classes.headerShadow}><img alt='section header shadow' src={require('../../assets/img/section_header_shadow.png')}/></div>
        <div className={classes.subHeading}><Typography variant="h5">Skills</Typography></div>
        { generateAbilityCategoryRow(skillsJSON) }
        <div className={classes.reactDisclaimer}>
          <Typography><i className={classes.disclaimerText}>This project was built using React & Material-UI.</i></Typography>
        </div>
        <hr className={classes.horizontalDivider}/>
        <div className={classes.subHeading}><Typography variant="h5">Tools</Typography></div>
        { generateAbilityCategoryRow(toolsJSON) }
      </Grid>
    </section>
  )
}

export default withStyles(jssStyle, {withTheme: true})(Abilities)