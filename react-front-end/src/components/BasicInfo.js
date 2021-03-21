import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, TextField, Button} from '@material-ui/core';

// import { SelectionState } from '@devexpress/dx-react-chart';

const useStyles = makeStyles(() => ({
  root: {
    paddingTop: "5em",
    backgroundColor: "white",
    minHeight: "100vh",
    textAlign:"center"
  },
  title:{
    marginBottom:'revert'
  },
  fields: {
    display:"flex",
    justifyContent: "space-between",
    margin: "auto",
    marginBottom: 20,
    width: "90%",
    height: "auto"
  },
  submit: {
    marginBottom:'1.2em',
    width:'8.5in',
    color: "white",
    size: "large",
    background: 'linear-gradient(45deg, transparent 20%,#FF8E53 40%, #FE6B8B 60%, transparent 80%)',
    // marginLeft: '8%',
    '&:hover':{
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    }
  }
}))

export default function BasicInfo(props) {  
  const { first_name, last_name, email, linkedin, address, phone_number } = props.user
  const [userInfo, setUserInfo] = useState({
    first_name,
    last_name,
    email,
    linkedin,
    address,
    phone_number
  })
  const [complete, setComplete] = useState(false);

  const classes = useStyles(); 

  function save(){
    props.updateUser(userInfo)
    setComplete(true);
  }

  function handleChange(event) {
    setUserInfo({...userInfo, [event.target.name]: event.target.value})
  }

  if (complete) {
    return <Redirect to="/"/>
  }

  return (
    <div className={classes.root}>
      <Typography className={classes.title} variant="h3">My Basic Info</Typography>
      <div>
        <form noValidate autoComplete="off">
          <div className={classes.fields}>
            <TextField 
              id="first_name" 
              label="First Name" 
              name="first_name"
              variant='outlined'
              value={userInfo.first_name}
              onChange={handleChange}
               />
            <TextField 
              id="last_name" 
              label="Last Name" 
              name="last_name"
              variant='outlined'
              value={userInfo.last_name} 
              onChange={handleChange}
              />
            <TextField 
              id="email" 
              label="Email" 
              name="email"
              variant='outlined'
              value={userInfo.email}
              onChange={handleChange}
              />
            <TextField 
              id="linkedin" 
              label="Linkedin" 
              name="linkedin"
              variant='outlined'
              value={userInfo.linkedin}
              onChange={handleChange}
              />
            <TextField 
              id="address" 
              label="Address" 
              name="address"
              variant='outlined'
              value={userInfo.address}
              onChange={handleChange}
              />
            <TextField 
              id="phone_number" 
              label="Phone" 
              name="phone_number"
              variant='outlined'
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
