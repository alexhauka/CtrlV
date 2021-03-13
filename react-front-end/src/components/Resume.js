import React from 'react';
import { makeStyles, Container } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    fontFamily: 'Ubuntu, sans-serif;',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    height: '50vh'
  },
  body: {
   backgroundColor: '#fff',
   height: '900px',
   width: '670px',
   paddingTop: '10%',
   borderColor: 'black',
   borderStyle: 'dotted'
  },
  mainTitle: {
    fontSize: '3rem'
  },
  secondTitle: {
    color: '#a9a9a9'
  }
}));

export default function Resume() {
  const classes = useStyles();
  return (
    <div >
      <Container fixed className={classes.body}>
      <div className={classes.root}>
        <h1 className={classes.mainTitle}>
          Welcome to C<span className={classes.secondTitle}>(trl)</span>V
        </h1>
      </div>
      </Container>
    </div>
  );
}