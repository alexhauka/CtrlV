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

export default function BasicInfo(props) {  
  const data = props.user
  const classes = useStyles(); 
  console.log(data)
  return (
    <div className={classes.root}>
      <Typography variant="h3">My Basic Info</Typography>
      <div>
        <form noValidate autoComplete="off">
          <div className={classes.fields}>
            <TextField id="first_name" label="First Name" value={data.first_name} />
            <TextField id="last_name" label="Last Name" value={data.last_name} />
            <TextField id="email" label="email" value={data.email}/>
            <TextField id="address" label="address" value={data.address}/>
            <TextField id="phone_number" label="Phone" value={data.phone_number}/> 
          </div>
      </form>
      </div>
    </div>
  )
}
