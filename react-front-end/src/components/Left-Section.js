import React from 'react'; 
import { Button, AppBar, Toolbar, IconButton, Typography, Grid, TextField } from '@material-ui/core';
import ListIcon from '@material-ui/icons/List';
import { makeStyles } from '@material-ui/core/styles'; 
import BarChart from './BarChart';
const useStyles = makeStyles((theme) => ({
  root: {
    // backgroundColor: "Grey",
    flexGrow: 1,
    textAlign: "center"
  },
  title: {
    textAlign: "center"
  },
  submit: {
    marginTop: 10
  }
}))

export default function LeftSection(){
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <h1 className={classes.title}>Left Section</h1>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField id="standard-basic" label="Standard" />
        <br/>
        <Button className={classes.submit} variant="contained" color="primary">Submit</Button>
      </form>
      <div className={classes.title}>
        <Typography>
          Keywords
        </Typography>
        <ol>
        <li><Typography>Javascript</Typography></li>
        <li><Typography>CSS</Typography></li>
        <li><Typography>React</Typography></li>
        <li><Typography>Storybook</Typography></li> 
        <li><Typography>Python</Typography></li>
        </ol>
      </div>
      <BarChart></BarChart>
    </div>
  )
}