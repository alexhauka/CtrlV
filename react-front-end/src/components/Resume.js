import React, { useState } from 'react';
import { makeStyles, Grid } from '@material-ui/core'

import RightResume from './RightResume';
import LeftResume from './LeftResume';


const useStyles = makeStyles((theme) => ({
  root: {
    // marginTop: '5em'
  },
  
  left: {
    width: "35%"
  },
  right: {
   width: "65%",
   boxShadow:'19px 20px 20px 0px #00000059 inset'
  }


}));

export default function Resume() {

  const [color, setColor] = useState()

  const classes = useStyles();
  return (
    <div className={classes.root}>
    <Grid 
      container
      direction='row'
      justify='space-between'
    >
      <div className={classes.left}>
      <LeftResume />
      </div>

      <div className={classes.right}>
      <RightResume />
      </div>
    </Grid>
    </div>
  );
}