import React, {Component, Fragment} from 'react'
import Drawer from '@material-ui/core/Drawer'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/styles'
import Grid from '@material-ui/core/Grid'
import Tooltip from '@material-ui/core/Tooltip'

import { red, pink, purple, deepPurple, indigo, blue, lightBlue, cyan, teal, green, lightGreen, lime, yellow, amber, orange, deepOrange } from '@material-ui/core/colors'

import { MdColorLens } from "react-icons/md"

const jssStyle = theme => ({
  drawerPaper: {
    height: '184px !important',
    top: '10% !important',
    textAlign: 'center',
    width: '150px',
    // alignItems: 'center',
    padding: '10px'
  }, 
  paletteIcon: {
    width: '20px',
    height: 'auto',
    fontSize: '30px',
    color: theme.palette.primary['500']
  },
  innerDrawerColor: {
    width: '9px',
    height: '35px',
    content: '" "',
    display: 'inline',
    cursor: 'pointer'
  },
  tooltipPopper: {
    height: '40px !important'
  },
  buttonContainer: {
    position: 'fixed',
    right: '-3px',
    top: '10%',
    height: 'auto',
    zIndex: '1101'
  },
  paletteButton: {
    content: "' '",
    width: '100%',
    backgroundColor: 'white'
  }
})

const palette = {
  'Red': red,
  'Pink': pink,
  'Purple': purple,
  'Deep Purple': deepPurple,
  'Indigo': indigo,
  'Blue': blue,
  'Light Blue': lightBlue,
  'Cyan': cyan,
  'Teal': teal,
  'Green': green,
  'Light Green': lightGreen,
  'Lime': lime,
  'Yellow': yellow,
  'Amber': amber,
  'Orange': orange,
  'Deep Orange': deepOrange
} 

class ColorPicker extends Component {

  state = {
    right: false
  };

  toggleDrawer = (side, open) => {
    this.setState({
      [side]: open
    })
  };
  
  generateInnerDrawerColors = () => {
    return Object.keys(palette).map((colorName, index) => {
      let color500 = palette[colorName][500]
      let color = palette[colorName]
      
      return (
        <Tooltip 
          key={index} 
          leaveDelay={100} 
          title={colorName}
           placement='top'
           classes={{ popper: this.props.classes.tooltipPopper }} >
          <Grid 
            item xs={3}
            role="button"
            onClick={() => {this.toggleDrawer('right', false); this.props.changeColor(color);}}
            onKeyDown={() => {this.toggleDrawer('right', false); this.props.changeColor(color);}}
            style={{backgroundColor: color500}}
            className={this.props.classes.innerDrawerColor}
            >
            {/* <Tooltip leaveDelay={100} title="COLOR" placement='top' color={color}></Tooltip> */}
          </Grid>
        </Tooltip>
      )
    })
  }

  render() {
    return (
      <Fragment>
        <div className={this.props.classes.buttonContainer}>
            {/* <button onClick={() => props.changeColor(red)}>test</button> */}
            <Button style={{backgroundColor: 'white', border: 'solid 1.2px #e0e0e0'}} onClick={() => this.toggleDrawer('right', true)}>
              <MdColorLens className={this.props.classes.paletteIcon} style={{fontSize: '23px'}}></MdColorLens>
            </Button>
        </div>
        <Drawer
          anchor="right" 
          open={this.state.right} 
          onClose={() => this.toggleDrawer('right', false)}
          classes={{
            paper: this.props.classes.drawerPaper
          }}>
          <div>
            <MdColorLens style={{padding: '10px'}} className={this.props.classes.paletteIcon}></MdColorLens>
          </div>
          <Grid container>
          {
            this.generateInnerDrawerColors()
          }
          </Grid>
      </Drawer>
    </Fragment>
    )
  }
}

export default withStyles(jssStyle)(ColorPicker)