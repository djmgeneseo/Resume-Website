import React from 'react'

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import styles from './Timeline.module.css'

/**
 * 
 * @param {*} props = {string} headerTitle, {function} listGenerator
 */

const Timeline = (props) => {
  return (
    <section className={styles.section}>
        <Grid md={12}>
        <ul className={styles.timeline}>
            {props.listGenerator()}
        </ul>
        </Grid>
    </section>
  )
}

export default Timeline
