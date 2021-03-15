import React from 'react'; 

import { makeStyles } from '@material-ui/core/styles'; 
import TemplateButtons from './TemplateButtons';
import FontButtons from './FontButtons';
import ColorButtons from './ColorButtons';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justify: "space-evenly",
    height: "100%",
    background: 'linear-gradient(225deg, #3f51b5 30%, #FF8E53 90%)'
  },
  ResumeButtons: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    justify: "space-between",
    width: "80%",
    marginTop: "5em",
    margin: "auto"
  }
}))

export default function LeftResume() {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <div className={classes.ResumeButtons}>
        <h1>choose your template:</h1>
        <TemplateButtons />
        <h1>choose your font:</h1>
        <FontButtons />
        <h1>COLORRRRS</h1>
        <ColorButtons />
      </div>
      <div>
      </div>
    </div>
  )
}
