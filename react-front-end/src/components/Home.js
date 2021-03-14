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
  },
  left: {
    flexGrow: 2,
  },
  right: {
   flexGrow: 3,
   maxWidth:"75%"
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
        justify="space-between"
        // alignItems="center"
        >
        <div className={classes.left}>
        <LeftSection/>
        </div>  
        <Divider orientation="vertical" flexItem />
        <div className={classes.right}>
        <RightSection />
        </div>
      </Grid>
    </div>
  )
}