import React from 'react'
// import styles from './Jumbotron.module.css';
import { withStyles } from '@material-ui/styles';

const jssStyle = theme => ({
  jumbotron: {
    width: '100%',
    height: '50vh',
    background: `linear-gradient(to bottom right,#002f4b70,${theme.palette.primary['200']}), url(${require('../../../assets/img/jumbo.jpg')}) no-repeat center`,
    backgroundSize: 'cover'
  }
})

const Jumbotron = (props) => {
  const {classes} = props;
  return (
    <div className={classes.jumbotron}></div>
  )
}

export default withStyles(jssStyle)(Jumbotron)
