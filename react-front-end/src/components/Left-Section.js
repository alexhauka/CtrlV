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
    background: 'linear-gradient(190deg, #3f51b5 30%, #7bc8f6 90%)'
  }
}))

export default function LeftSection(props){
  const [mode, setMode] = useState(KEYWORDS);
  const classes = useStyles()

  return (
    <div className={classes.root}>
      {mode === KEYWORDS && <Keywords state={props.state}/>}
      {mode === FONTSTYLES && <FontStyles />}
    </div>
  )
}