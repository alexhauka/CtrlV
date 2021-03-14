import React from 'react';
import { Button, AppBar, Toolbar, IconButton, Typography, Grid, TextField, Grow } from '@material-ui/core';


import { makeStyles } from '@material-ui/core/styles'; 
import PieChart from './PieChart';

const useStyles = makeStyles((theme) => ({
  chart: {
    backgroundColor: "blue",
    opactiy: 0.2,
    marginTop: "10%",
  }
}));

export default function KeywordResults() {
  const classes = useStyles()

  return (
    <div>
      <Typography variant="h3">Keywords</Typography>
      <br/>
      <Typography variant="h5" >Javascript</Typography>
      <Typography variant="h5">CSS</Typography>
      <Typography variant="h5">React</Typography>
      <Typography variant="h5">Storybook</Typography>
      <Typography variant="h5">Python</Typography>
      <div className={classes.chart}>
        <PieChart></PieChart>
      </div>
    </div>
  )
}