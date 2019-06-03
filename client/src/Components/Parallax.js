import React from 'react'
import { withStyles } from '@material-ui/styles';

/*
  Unsure how to pass props into jssStyle to pass the background image to this component via props.
*/
const jssStyle = (theme) => ({
  jumbotron: {
    width: '100%',
    height: 'auto',
    background: `linear-gradient(to bottom right,#002f4b70,${theme.palette.primary['200']}), url(${require('../assets/img/jumbo.jpg')}) no-repeat center`,
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  }
})

/**
 * Props:
 * @param {json} classes
 * @param {*} children 
 */
const Parallax = (props) => {
  const {classes} = props;
  return (
    <div className={classes.jumbotron}>{props.children}</div>
  )
}

export default withStyles(jssStyle)(Parallax)