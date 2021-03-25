import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import MuiAlert from '@material-ui/lab/Alert';
import { Snackbar } from '@material-ui/core';


const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      <h5 color="inherit" >
      {'Copyright © '}
        J.I.A. Productions
      {' '}
      {new Date().getFullYear()}
      {'.'}
      </h5>
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  root:{
    height:'100vh'
  }
}));

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props}/>;
}

export default function SignUp(props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const history = useHistory();

  const classes = useStyles();

  function reset() {
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword(""); 
    setPasswordConfirmation("");
  }

  function save(event) {
    event.preventDefault();

    const hash1 = bcrypt.hashSync(password, salt)

    const registerInfo = {
      firstName,
      lastName,
      email,
      password: hash1,
      passwordConfirmation: hash1
    }
    if (validate()) {
      setMessage("Please fill out the missing information"); 
      setOpen(true);
    } else if (password !== passwordConfirmation) {
      setMessage("Passwords do not match, please try again"); 
      setError(prev => ({...prev, password: true}));
      setError(prev => ({...prev, passwordConfirmation: true}));
      setOpen(true);

    } else {
      props.registerUser(registerInfo)
      .then(() => {
        reset();
        history.push("/");
      });
    }
  }

  const [error, setError] = useState({
    firstName: false,
    lastName: false,
    email: false,
    password: false,
    passwordConfirmation: false
  })

  const [message, setMessage] = useState("");
  const [open, setOpen] = useState(false); 

  

  function validate() {
    let bool = false
    if (firstName === "") {
      setError(prev => ({...prev, firstName: true}));
      bool = true; 
    } 
    if (lastName === "") {
      setError(prev => ({...prev, lastName: true}));
      bool = true;
    } 
    if (email === "") {
      setError(prev => ({...prev, email: true}));
      bool = true;
    } 
    if (password === "") {
      setError(prev => ({...prev, password: true}));
      bool = true;
    } 
    if (passwordConfirmation === "") {
      setError(prev => ({...prev, passwordConfirmation: true}));
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

  return (
    <div className={classes.root}>
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
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
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required={true}
                error={error.firstName}
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                onFocus={() => setError(prev => ({...prev, firstName: false }))}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required={true}
                error={error.lastName}
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                onFocus={() => setError(prev => ({...prev, lastName: false }))}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required={true}
                error={error.email}
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onFocus={() => setError(prev => ({...prev, email: false }))}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required={true}
                error={error.password}
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onFocus={() => setError(prev => ({...prev, password: false }))}
              />
            </Grid>
            <Grid item xs={12}>
            <TextField
                variant="outlined"
                required={true}
                error={error.passwordConfirmation}
                fullWidth
                name="password_confirmation"
                label="Confirm Password"
                type="password"
                id="password_confirmation"
                autoComplete="current-password"
                value={passwordConfirmation}
                onChange={(e) => setPasswordConfirmation(e.target.value)}
                onFocus={() => setError(prev => ({...prev, passwordConfirmation: false }))}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={save}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="#" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  </div>
  );
}