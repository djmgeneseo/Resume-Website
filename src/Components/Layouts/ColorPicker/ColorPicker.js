import React from 'react'
import styles from './ColorPicker.module.css'

import red from '@material-ui/core/colors/red';

const ColorPicker = (props) => {
  return (
    <div className={styles.testButton}>
        <button onClick={() => props.changeColor(red)}>test</button>
    </div>
  )
}

export default ColorPicker