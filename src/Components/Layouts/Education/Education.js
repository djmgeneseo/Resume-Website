import React from 'react'

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Timeline from '../../Timeline/Timeline'

import styles from './Education.module.css'

const Education = () => {

  const educationJSON = {
    "Molloy College": {
      degree: "Bachelor's Degree",
      major: 'Computer Science',
      start: 2012,
      end: 2018,
      gpa: 3.49
    },
    "SUNY Geneseo": {
      degree: "Bachelor's Degree",
      major: 'English Literature',
      minor: 'Biology',
      start: 2014,
      end: 2017,
      gpa: 3.46
    }
  }

  const generateEducationListItems = () => {
    
  }

  return (
    <Timeline headerTitle={'Education'} listGenerator={() => generateEducationListItems()}></Timeline>
  )
}

export default Education