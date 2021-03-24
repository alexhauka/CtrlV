import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import MuiAlert from '@material-ui/lab/Alert';
import { Typography, TextField, Button, Snackbar, Divider} from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    paddingTop: "5em",
    backgroundColor: "white",
    minHeight: "100vh",
    textAlign:"center"
  },
  title:{
    marginBottom:'.9em',
    fontFamily: 'Ubuntu',
  },
  info:{
    textAlign: "center",
    border:'1px #3f51b5 solid',
    width: '70%',
    borderRadius: 10,
    margin:'auto'
  },
  fields: {
    display:'flex',
    justifyContent: "space-around",
    margin: "auto",
    paddingTop: 20, 
    marginBottom: 20,
    width: "90%",
    height: "auto"
  },
  submit: {
    marginBottom:'1.2em',
    width:'8.5in',
    color: "white",
    size: "large",
    background: 'linear-gradient(45deg, transparent 20%,#FE6B8B 40%, #FF8E53 60%, transparent 80%)',
    '&:hover':{
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    }
  },
  add:{
    textAlign: "center",
    padding:'2.5%'
  },
  divider:{
    margin: '10px',
    height: 5,
    width: '30%',
    background: '#3f51b5'
  },
  divider1:{
    margin: '10px',
    height: 10,
    width:10,
    borderRadius: 100,
    background: '#3f51b5'
  },  
  divider2:{
    margin: '10px',
    height: 15,
    width:15,
    borderRadius: 100,
    background: '#3f51b5'
  },
  dividers:{
    display:'flex',
    justifyContent:'center',
    alignItems: 'center',
    paddingBottom:'2.5%'
  },
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
      <div className={classes.dividers}>
        <Divider className={classes.divider}/>
        <Divider className={classes.divider1}/>
        <Divider className={classes.divider2}/>
        <Divider className={classes.divider1}/>
        <Divider className={classes.divider}/>
      </div>
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
      <div className={classes.info}>
        <form noValidate autoComplete="off">
          <div >
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
            </div>
            <div className={classes.fields}>
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
          </div>
        </form>
      </div>
      <div className={classes.add}>
      <Button 
      className={classes.submit}
      onClick={save}
      >
        Save
      </Button>
      </div>
    </div>
  )
}
