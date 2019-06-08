import React, {Component, Fragment} from 'react'
import {Drawer, CardContent, Grid, Tooltip, CardActionArea, Card} from '@material-ui/core'
import { withStyles } from '@material-ui/styles'
import { red, pink, purple, deepPurple, indigo, blue, lightBlue, cyan, teal, green, lightGreen, lime, amber, orange, deepOrange, brown } from '@material-ui/core/colors'

import { MdColorLens } from "react-icons/md"

const jssStyle = theme => ({
  buttonContainer: {
    position: 'fixed',
    right: '-3px',
    top: '30%',
    height: 'auto',
    zIndex: '1101'
  },
  drawerPaper: {
    height: '184px !important',
    textAlign: 'center',
    width: '150px',
    top: '30% !important',
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
  'Amber': amber,
  'Orange': orange,
  'Deep Orange': deepOrange,
  'Brown': brown
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
            onClick={() => {this.toggleDrawer('right', false); this.props.changeColorCallback(color);}}
            onKeyDown={() => {this.toggleDrawer('right', false); this.props.changeColorCallback(color);}}
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
        <Card className={this.props.classes.buttonContainer}>
          <CardActionArea onClick={() => this.toggleDrawer('right', true)}>
            <CardContent>
              <MdColorLens className={this.props.classes.paletteIcon}></MdColorLens>
            </CardContent>
          </CardActionArea>
        </Card>
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