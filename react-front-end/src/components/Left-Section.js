import React from 'react'; 
import { Button, AppBar, Toolbar, IconButton, Typography, Grid, TextField } from '@material-ui/core';
import ListIcon from '@material-ui/icons/List';
import { makeStyles } from '@material-ui/core/styles'; 
import BarChart from './BarChart';
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justify: "space-evenly",
    textAlign: "center",
    backgroundColor: "#3f51b5"
    
  },
  submit: {
    marginTop: 10
  },
  myList: {
    listStyle: "none",
    textAlign:"Center"
  },
  form: {
    width: "80%",
    margin: "auto",
    marginTop: "20%"
    
  },
  title: {
    marginTop: "20%"
  },

  chart: {
    marginTop: "20%"
  }
}))

export default function LeftSection(){
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <form className={classes.form} noValidate autoComplete="off">
        <TextField variant="outlined" id="standard-basic" label="URL" fullWidth= 'true'/>
        <br/>
        <Button className={classes.submit} variant="contained" color="primary">Submit</Button>
      </form>
      <div className={classes.title}>
        <Typography variant="h3">Keywords</Typography>
        <br/>
        <Typography variant="h5" >Javascript</Typography>
        <Typography variant="h5">CSS</Typography>
        <Typography variant="h5">React</Typography>
        <Typography variant="h5">Storybook</Typography>
        <Typography variant="h5">Python</Typography>
        
      </div >
      <div className={classes.chart}>
      <BarChart></BarChart>
      </div>
    </div>
  )
}