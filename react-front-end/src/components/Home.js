import React from 'react'; 
import { CssBaseline, Grid } from '@material-ui/core';
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
    width: "35%"
  },
  right: {
   width: "65%",
   boxShadow:'19px 20px 20px 0px #00000059 inset'
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
        >
        <div className={classes.left}>
        <LeftSection state={props.props}/>
        </div>  
        <div className={classes.right}>
        <RightSection props={props.props} />
        </div>
      </Grid>
    </div>
  )
}