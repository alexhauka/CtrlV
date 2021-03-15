import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, TextField} from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    marginTop: "5em",
    backgroundColor: "white",
    minHeight: "100vh",
    textAlign:"center"
  },
  fields: {
    display:"flex",
    justifyContent: "space-evenly",
    margin: "auto",
    marginBottom: 20,
    width: "60%",
    height: "auto"
  }
}))

export default function BasicInfo() {  
  const classes = useStyles(); 
  return (
    <div className={classes.root}>
      <Typography variant="h3">My Basic Info</Typography>
      <div>
        <form noValidate autoComplete="off">
          <div className={classes.fields}>
            <TextField id="standard-basic" label="First Name" />
            <TextField id="standard-basic" label="Last Name" />
            <TextField id="standard-basic" label="email" />
            <TextField id="standard-basic" label="address" />
            <TextField id="standard-basic" label="Phone" /> 
          </div>
      </form>
      </div>
    </div>
  )
}
