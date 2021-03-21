import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        J. I. A. Productions
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    zIndex: 1,
    // bottom: 0,
    // boxShadow: '1px 20px 10px 20px #00000059',
    
    width: '100%',
    opacity: '1'
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  footer: {
    display: 'flex',
    alignItems: 'flex-start',
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    // backgroundColor: "#476bec"
    background: 'linear-gradient(45deg, #476bec 15%, #3f51b5 65%, #476bec 85%)',
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <footer className={classes.footer}>
        <Container maxWidth="sm">
          <Typography variant="body1">C(trl)V</Typography>
          <Copyright />
        </Container>
      </footer>
    </div>
  );
}