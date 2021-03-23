import React from 'react'; 
import { CssBaseline, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'; 
import LeftSection from "./Left-Section"
import RightSection from "./Right-Section"

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    background: 'linear-gradient(180deg, #3f51b5 30%, #476bec 90%)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  },
  left: {
    width: "35%",
    minHeight: '100vh'
  },
  right: {
   width: "63%",
   minHeight: '100vh',
   boxShadow:'0px 0px 20px 7px #00000059 inset',
   margin:'auto',
  //  marginBottom:15,
  //  marginRight: 10,
   backgroundColor: 'white',
   borderRadius: 10
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