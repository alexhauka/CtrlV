import React from 'react'; 
import { Grid, TextField, Checkbox, FormGroup, FormControlLabel, FormControl, FormLabel, Divider, Typography } from '@material-ui/core';
import ListIcon from '@material-ui/icons/List';
import { makeStyles, responsiveFontSizes } from '@material-ui/core/styles'; 


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '75%',
    minHeight: "100vw",
    textAlign: "center",
    //For text 
    padding: 10,
    paddingTop: "5%",
    // for div
    marginLeft: "10%",
    marginTop: 50,
    flexShrink: 1,
    border: "solid 1px black"
    
  }

}))

export default function RightSection() {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <h1>Right Side</h1>
    </div>
  );
}