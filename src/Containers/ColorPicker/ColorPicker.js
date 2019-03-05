import React, {Component, Fragment} from 'react'
import styles from './ColorPicker.module.css'
import Drawer from '@material-ui/core/Drawer'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/styles'

import { red, pink, purple, deepPurple, indigo, blue, lightBlue, cyan, teal, green, lightGreen, lime, yellow, amber, orange, deepOrange } from '@material-ui/core/colors'

import { MdColorLens } from "react-icons/md"

const jssStyle = theme => ({
  drawerPaper: {
    height: '75px !important',
    display: 'fixed',
    top: '10% !important',
    textAlign: 'center',
    width: '150px',
    alignItems: 'center',
    padding: '10px'
  }, 
  paletteIcon: {
    width: '20px',
    height: 'auto',
    fontSize: '23px',
    color: theme.palette.primary['500']
  }
})

const palette = [red, pink, purple, deepPurple, indigo, blue, lightBlue, cyan, teal, green, lightGreen, lime, yellow, amber, orange, deepOrange];

class ColorPicker extends Component {

  state = {
    right: false,
    classes: this.props.classes
  };

  toggleDrawer = (side, open) => {
    this.setState({
      [side]: open
    })
  }

  generateInnerDrawerColors = () => {
    return palette.map(function(color) {
      return (
        <div
          tabIndex={0}
          role="button"
          onClick={() =>  {this.toggleDrawer('right', false); this.props.changeColor(color)}}
          onKeyDown={() => {this.toggleDrawer('right', false); this.props.changeColor(color)}}>
          
        </div>
      )
    })
  }

  render() {
    return (
      <Fragment>
        <div className={styles.buttonContainer}>
            {/* <button onClick={() => props.changeColor(red)}>test</button> */}
            <Button style={{backgroundColor: 'white', border: 'solid 1.2px #e0e0e0'}} onClick={() => this.toggleDrawer('right', true)}>
              <MdColorLens className={this.state.classes.paletteIcon} style={{fontSize: '23px'}}></MdColorLens>
            </Button>
        </div>
        <Drawer 
          anchor="right" 
          open={this.state.right} 
          onClose={() => this.toggleDrawer('right', false)}
          classes={{
            paper: this.state.classes.drawerPaper
          }}>
          <MdColorLens className={this.state.classes.paletteIcon}></MdColorLens>
          {
            this.generateInnerDrawerColors()
          }
      </Drawer>
    </Fragment>
    )
  }
}

export default withStyles(jssStyle)(ColorPicker)