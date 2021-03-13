import React from 'react'; 
import { CssBaseline, Grid, Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'; 
import LeftSection from "./Left-Section"
import RightSection from "./Right-Section"

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    backgroundColor: 'white',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  }
}))  

 
export default function Home(props) {
  const classes = useStyles(); 
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Grid 
        container
        direction="row"
        justify="space-around"
        alignItems="center"
        >
        <LeftSection/>
        <Divider orientation="vertical" flexItem />
        <RightSection/>
      </Grid>
    </div>
  )
}