import React, {Fragment} from 'react'
import { withStyles } from '@material-ui/styles'; // jss library
import styles from './Abilities.module.css'

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {MdStar, MdStarBorder} from 'react-icons/md';

const jssStyle = (theme) => ({
  testTheme: theme,
  columnLeftFormat: {
    boxSizing: 'border-box', 
    paddingRight: '15px'
  },
  columnRightFormat: {
    boxSizing: 'border-box',
    paddingLeft: '15px'
  },
  starsSpan: {
    color: theme.palette.primary['500']
  }
})

// TODO: reverse key/value pairing
const skillsJSON = {
  5: ['JavaScript (ES5, 6, & 7)','HTML(5)','CSS(3)','JSON','Git','Bootstrap Framework','Material-UI Framework','Object Oriented Programming'],
  4: ['React','React-Bootstrap Framework','Swift','JQuery','MVC Pattern','CRUD Paradigm','REST Architecture','NoSQL','SQL'],
  3: ['MySQL','Node.js','Java','PHP'],
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
      jsx.push(<MdStar key={randomString(10)}/>);
      filledStarsAmt--;
    }
    while(emptyStarsAmt > 0) {
      jsx.push(<MdStarBorder key={randomString(10)}/>);
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
            return (<Typography key={randomString(10)} variant="body1">{abilityName} <span className={classes.starsSpan} style={{float: 'right'}}>{
              generateStars(amtOfStars, 5-amtOfStars)
            }</span></Typography>)
          })
        }</Grid>
        <Grid item xs={12} sm={12} md={6} className={classes.columnRightFormat}>{
          rightColArr.map(function(abilityObject) {
            let amtOfStars = Object.keys(abilityObject);
            let abilityName = abilityObject[Object.keys(abilityObject)];
            return (<Typography key={randomString(10)} variant="body1">{abilityName} <span className={classes.starsSpan} style={{float: 'right'}}>{
              generateStars(amtOfStars, 5-amtOfStars)
            }</span></Typography>)
          })
        }</Grid>
      </Fragment>
    )
  }

  return (
    <section className={styles.sectionBackground}>
      <Grid container className={styles.siteContainer}>
        <div className={styles.heading}><Typography variant="h4">ABILITIES</Typography></div>
        <div className={styles.headerShadow}><img alt='section header shadow' src={require('../../../assets/img/section_header_shadow.png')}/></div>
        <div className={styles.subHeading}><Typography variant="h5">Skills</Typography></div>
        { generateAbilityCategoryRow(skillsJSON) }
        <div className={styles.subHeading}><Typography variant="h5">Tools</Typography></div>
        { generateAbilityCategoryRow(toolsJSON) }
      </Grid>
    </section>
  )
}

export default withStyles(jssStyle, {withTheme: true})(Abilities)