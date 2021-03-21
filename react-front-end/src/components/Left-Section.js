import React, { useState } from 'react'; 

import Keywords from './Keywords';
import FontStyles from './FontStyles';

import { makeStyles } from '@material-ui/core/styles'; 


const KEYWORDS = "KEYWORDS";
const FONTSTYLES = "FONTSTYLES";


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justify: "center",
    textAlign: "center",
    backgroundColor: "#3f51b5",
    height: "100%",
    // borderRadius:10,
    background: 'linear-gradient(239deg, #3f51b5 30%, #476bec 90%)'
  },
  inside:{
    width:'92%',
    background: 'white',
    margin:'auto',
    marginTop:0,
    height:'100%',
    borderRadius:10,
    boxShadow:'0px 0px 20px 7px #00000059 inset'
    }
}))

export default function LeftSection(props){
  const [mode, setMode] = useState(KEYWORDS);
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <div className={classes.inside}>
      {mode === KEYWORDS && <Keywords state={props.state}/>}
      {mode === FONTSTYLES && <FontStyles />}
      </div>
    </div>
  )
}