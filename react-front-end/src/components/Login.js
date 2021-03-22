import React, { useState } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import MuiAlert from '@material-ui/lab/Alert';
import { Snackbar } from '@material-ui/core';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © J.I.A. Productions '}
      {' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    // backgroundColor:'red'
  },
  root:{
    height:'100vh',
    // padding:'3%',
    // backgroundColor:'yellow'
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    textDecoration: 'none',
    // fontSize: '30px'
  },
}));

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props}/>;
}

export default function SignIn(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({
    email: false,
    password: false
  })

  const [message, setMessage] = useState("");
  const [open, setOpen] = useState(false); 
  const history = useHistory();

  const classes = useStyles();

  function reset() {
    setEmail("");
    setPassword(""); 
  }

  function save(event) {
    event.preventDefault();
    const userInfo = {
      email,
      password
    }
    if (validate()) {
      setMessage("Please fill out the missing information"); 
      setOpen(true);
    } else {
      props.loginUser(userInfo)
      .then(() => {
        reset();
        history.push("/"); 
      })
      .catch(() => {
        setMessage("Invalid email or password"); 
        setError(prev => ({...prev, email: true }))
        setError(prev => ({...prev, password: true }))
        setOpen(true);
      });
    }
  }

  function validate() {
    let bool = false
    if (email === "") {
      setError(prev => ({...prev, email: true}));
      bool = true;
    } 
    if (password === "") {
      setError(prev => ({...prev, password: true}));
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

  if (props.isLoggingIn === false && props.user) {
    return <Redirect to="/"/>
  }

  return (
    <div className={classes.root}>
    <Container  maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required={true}
            error={error.email}
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onFocus={() => setError(prev => ({...prev, email: false }))}
          />
          <TextField
            variant="outlined"
            margin="normal"
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
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />

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

          <Button
            // component={Link}
            // to="/github"
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={save}
          >
            Sign In
          </Button>
          
          <Grid container>
            <Grid item xs>
            </Grid>
            <Grid item>
              <Link href="/signup" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  </div>
  );
}