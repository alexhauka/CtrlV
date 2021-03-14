import React from 'react'; 
import { Button, AppBar, Toolbar, IconButton, Typography, Grid, TextField } from '@material-ui/core';
import ListIcon from '@material-ui/icons/List';
import { makeStyles } from '@material-ui/core/styles'; 
import PieChart from './PieChart';
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justify: "center",
    textAlign: "center",
    backgroundColor: "#3f51b5",
    height: "100%",
    boxShadowLeft: ""
    
  },
  submit: {
    marginTop: 10,
    color: "white",
    size: "large",
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'
  },
  myList: {
    listStyle: "none",
    textAlign:"Center"
  },
  form: {
    width: "80%",
    marginRight: "auto",
    marginLeft: "auto",
    marginTop: "20%",
    marginBottom: "10%",
  },
  title: {
    backgroundColor:'white',
    borderRadius: 10,
    marginTop: 10
  },

  chart: {
    backgroundColor: "blue",
    opactiy: 0.2,
    marginTop: "10%",
  }
}))

export default function LeftSection(){
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <form className={classes.form} noValidate autoComplete="off">
        <TextField className={classes.title} variant="filled" id="standard-basic" label="URL" fullWidth= 'true' color="none"/>
        <br/>
        <Button className={classes.submit} variant="outlined" color="default" size="large">Submit</Button>
      </form>
      <div>
        <Typography variant="h3">Keywords</Typography>
        <br/>
        <Typography variant="h5" >Javascript</Typography>
        <Typography variant="h5">CSS</Typography>
        <Typography variant="h5">React</Typography>
        <Typography variant="h5">Storybook</Typography>
        <Typography variant="h5">Python</Typography>
        
      </div >
      <div className={classes.chart}>
      <PieChart></PieChart>
      </div>
    </div>
  )
}