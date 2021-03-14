import React, { useState } from 'react';
import KeywordResults from './KeywordResults';

import { Button, AppBar, Toolbar, IconButton, Typography, Grid, TextField, Grow } from '@material-ui/core';
import ListIcon from '@material-ui/icons/List';
import { makeStyles } from '@material-ui/core/styles'; 


const useStyles = makeStyles((theme) => ({
  submit: {
    marginTop: 10,
    color: "white",
    size: "large",
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'
  },
  myList: {
    listStyle: "none",
    textAlign:"Center"
  },
  form: {
    width: "80%",
    marginRight: "auto",
    marginLeft: "auto",
    marginTop: "20%",
    marginBottom: "10%",
  },
  title: {
    backgroundColor:'white',
    borderRadius: 10,
    marginTop: 10
  }
}));

export default function Keywords() {
  const [showKeywords, setShowKeywords] = useState(false)
  const classes = useStyles()
  const onClick = () => {
    if (showKeywords === true){
      setShowKeywords(false)
    } else {
      setShowKeywords(true)
    }
  };

  return (
    <div>
      <form className={classes.form} noValidate autoComplete="off">
      <TextField className={classes.title} variant="filled" id="standard-basic" label="URL" fullWidth= 'true' color="none"/>
      <br/>
      <Button className={classes.submit} variant="outlined" color="default" size="large" onClick={onClick}>Submit</Button>
      </form>
      {showKeywords ? <KeywordResults /> : null }
    </div >
  )
}