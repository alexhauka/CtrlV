import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import MuiAlert from '@material-ui/lab/Alert';
import { Typography, TextField, Button, Snackbar} from '@material-ui/core';

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

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props}/>;
}

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
  const [error, setError] = useState({
    first_name: false,
    last_name: false,
    email: false,
    linkedin: false,
    address: false,
    phone_number: false
  })
  const [message, setMessage] = useState("");
  const [open, setOpen] = useState(false); 

  const classes = useStyles(); 

  function save() {

    if (validate()) {
      setMessage("Please fill out the missing information"); 
      setOpen(true);
    } else {
      props.updateUser(userInfo)
      setComplete(true);
    }
  }

  function validate() {
    let bool = false
    if (userInfo.first_name === "") {
      setError(prev => ({...prev, first_name: true}));
      bool = true; 
    } 
    if (userInfo.last_name === "") {
      setError(prev => ({...prev, last_name: true}));
      bool = true;
    } 
    if (userInfo.email === "") {
      setError(prev => ({...prev, email: true}));
      bool = true;
    } 
    if (userInfo.linkedin === "") {
      setError(prev => ({...prev, linkedin: true}));
      bool = true;
    } 
    if (userInfo.address === "") {
      setError(prev => ({...prev, address: true}));
      bool = true;
    } 
    if (userInfo.phone_number === "") {
      setError(prev => ({...prev, phone_number: true}));
      bool = true;
    }
    return bool;
  }

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false); 
  };


  function handleChange(event) {
    setUserInfo({...userInfo, [event.target.name]: event.target.value})
  }

  if (complete) {
    return <Redirect to="/"/>
  }

  return (
    <div className={classes.root}>
      <Typography className={classes.title} variant="h3">My Basic Info</Typography>
      <Snackbar 
        open={open}
        autoHideDuration={1000}
        onClose={handleClose}
        anchorOrigin={{vertical: 'top', horizontal: 'center'}}
      >
        <Alert onClose={handleClose} severity="error">
          <h1>{message}</h1>
        </Alert>
      </Snackbar>
      <div>
        <form noValidate autoComplete="off">
          <div className={classes.fields}>
            <TextField 
              required={true}
              error={error.first_name}
              id="first_name" 
              label="First Name" 
              name="first_name"
              variant='outlined'
              value={userInfo.first_name}
              onChange={handleChange}
              onFocus={() => setError(prev => ({...prev, first_name: false }))}
               />
            <TextField 
              required={true}
              error={error.last_name}
              id="last_name" 
              label="Last Name" 
              name="last_name"
              variant='outlined'
              value={userInfo.last_name} 
              onChange={handleChange}
              onFocus={() => setError(prev => ({...prev, last_name: false }))}
              />
            <TextField
              required={true} 
              error={error.email}
              id="email" 
              label="Email" 
              name="email"
              variant='outlined'
              value={userInfo.email}
              onChange={handleChange}
              onFocus={() => setError(prev => ({...prev, email: false }))}
              />
            <TextField 
              required={true}
              error={error.linkedin}
              id="linkedin" 
              label="Linkedin" 
              name="linkedin"
              variant='outlined'
              value={userInfo.linkedin}
              onChange={handleChange}
              onFocus={() => setError(prev => ({...prev, linkedin: false }))}
              />
            <TextField 
              required={true}
              error={error.address}
              id="address" 
              label="Address" 
              name="address"
              variant='outlined'
              value={userInfo.address}
              onChange={handleChange}
              onFocus={() => setError(prev => ({...prev, address: false }))}
              />
            <TextField 
              required={true}
              error={error.phone_number}
              id="phone_number" 
              label="Phone" 
              name="phone_number"
              variant='outlined'
              value={userInfo.phone_number}
              onChange={handleChange}
              onFocus={() => setError(prev => ({...prev, phone_number: false }))}
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
