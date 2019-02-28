import React, {Fragment} from 'react'
import { withStyles } from '@material-ui/styles'; // jss library
import styles from './Abilities.module.css'

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {MdStar, MdStarHalf, MdStarBorder} from 'react-icons/md';

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
  'JavaScript (ES5, 6, & 7)': {
    stars: 5
  },
  'HTML(5)': {
    stars: 5
  },
  'CSS(3)': {
    stars: 5
  },
  'JSON': {
    stars: 5
  },
  'Git': {
    stars: 5
  },
  'Bootstrap Framework': {
    stars: 5
  },
  'Material-UI Framework':  {
    stars: 5
  },
  'Object Oriented Programming': {
    stars: 5
  },
  'React': {
    stars:4
  },
  'React-Bootstrap Framework': {
    stars: 4
  },
  'Swift': {
    stars: 4
  },
  'JQuery': {
    stars: 4
  },
  'MVC Pattern': {
    stars: 4
  },
  'CRUD Paradigm': {
    stars: 4
  },
  'REST Architecture': {
    stars: 4
  },
  'NoSQL': {
    stars: 4
  },
  'SQL': {
    stars: 4
  },
  'MySQL': {
    stars: 3
  },
  'Node.js': {
    stars: 3
  },
  'PHP': {
    stars: 3
  },
  'Java': {
    stars: 3
  },
  'R': {
    stars: 3
  },
  'Laravel Framework': {
    stars: 1
  }
}

const toolsJSON = {
  'Android Studio': {
    stars: 5
  },
  'Xcode': {
    stars: 5
  },
  'Visual Studio Code': {
    stars: 5
  },
  'Brackets': {
    stars: 5
  },
  'Firestore': {
    stars: 4
  },
  'Firebase': {
    stars: 4
  },
  'Microsoft IIS': {
    stars: 4
  },
  'NPM': {
    stars: 4
  },
  'CocoaPods (MacOS Package Manager)': {
    stars: 4
  },
  'Eclipse': {
    stars: 3
  },
  'MongoDB': {
    stars: 3
  },
  'Ingenuix CMS': {
    stars: 3
  },
  'Google Analytics': {
    stars: 3
  },
  'R Studios': {
    stars: 3
  },
  'ODBC': {
    stars: 3
  },
  'LDAP': {
    stars: 2
  },
  'Visual Studio 2017': {
    stars: 2
  },
  'DynamoDB': {
    stars: 2
  },
}

function randomString(length) {
  return Math.round((Math.pow(36, length + 1) - Math.random() * Math.pow(36, length))).toString(36).slice(1);
}

  const Abilities = (props) => {
    const {classes} = props;

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

    const generateNewAbilitiesRow = (abilityJSON) => {
      const halfwayMark = Math.ceil(Object.keys(abilityJSON).length/2);
      let leftColArr = Object.keys(abilityJSON).splice(0, halfwayMark);
      let rightColArr = Object.keys(abilityJSON).splice(halfwayMark, Object.keys(abilityJSON).length)
      return (
        <Fragment>
          <Grid item xs={12} sm={12} md={6} className={classes.columnLeftFormat}>{
            leftColArr.map(function(abilityName) {
              return (<Typography key={randomString(10)} variant="body1">{abilityName} <span className={classes.starsSpan} style={{float: 'right'}}>{generateStars(abilityJSON[abilityName].stars, 5-abilityJSON[abilityName].stars)}</span></Typography>)
            })
          }</Grid>
          <Grid item xs={12} sm={12} md={6} className={classes.columnRightFormat}>{
            rightColArr.map(function(abilityName) {
              return (<Typography key={randomString(10)} variant="body1">{abilityName} <span className={classes.starsSpan} style={{float: 'right'}}>{generateStars(abilityJSON[abilityName].stars, 5-abilityJSON[abilityName].stars)}</span></Typography>)
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
          { generateNewAbilitiesRow(skillsJSON) }
          <div className={styles.subHeading}><Typography variant="h5">Tools</Typography></div>
          { generateNewAbilitiesRow(toolsJSON) }
        </Grid>
      </section>
    )
}

export default withStyles(jssStyle, {withTheme: true})(Abilities)