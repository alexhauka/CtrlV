import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, TextField, Button} from '@material-ui/core';
import { SelectionState } from '@devexpress/dx-react-chart';

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
  },
  submit: {
    color: "white",
    size: "large",
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'
  }
}))

export default function BasicInfo(props) {  
  const { first_name, last_name, email, address, phone_number } = props.user
  const [userInfo, setUserInfo] = useState({
    first_name,
    last_name,
    email,
    address,
    phone_number
  })
  const classes = useStyles(); 

  function save(){
    props.updateUser(userInfo);
  }

  function handleChange(event) {
    setUserInfo({...userInfo, [event.target.name]: event.target.value})
  }

  return (
    <div className={classes.root}>
      <Typography variant="h3">My Basic Info</Typography>
      <div>
        <form noValidate autoComplete="off">
          <div className={classes.fields}>
            <TextField 
              id="first_name" 
              label="First Name" 
              name="first_name"
              value={userInfo.first_name}
              onChange={handleChange}
               />
            <TextField 
              id="last_name" 
              label="Last Name" 
              name="last_name"
              value={userInfo.last_name} 
              onChange={handleChange}
              />
            <TextField 
              id="email" 
              label="Email" 
              name="email"
              value={userInfo.email}
              onChange={handleChange}
              />
            <TextField 
              id="address" 
              label="Address" 
              name="address"
              value={userInfo.address}
              onChange={handleChange}
              />
            <TextField 
              id="phone_number" 
              label="Phone" 
              name="phone_number"
              value={userInfo.phone_number}
              onChange={handleChange}
              /> 
          </div>
      </form>
      </div>
      <Button 
      className={classes.submit}
      onClick={save}
      >
        Save
      </Button>
    </div>
  )
}
