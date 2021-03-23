import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MuiAlert from '@material-ui/lab/Alert';
import { Typography, TextField, Button, Snackbar, Divider } from '@material-ui/core';
import Projects from "./Projects"; 

import GetGithub from './GetGithub';


const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: "white",
    paddingTop: "5em",
    textAlign:"center",
    minHeight: '100vh'
  },

  project: {
    textAlign: "center",
    //  height: 250
  },
  fields: {
    display:"flex",
    justifyContent: "space-evenly",
    margin: "auto",
    marginBottom: 20,
    width: "60%",
    height: "auto"
  },
  description: {
    marginTop: 20,
    width: '60%',
    margin: "auto",
    paddingBottom: 30
  },
  add: {
    textAlign: "center",
    padding:'2.5%'
  },
  submit: {
    fontFamily: 'Ubuntu',
    marginTop: 10,
    color: "white",
    size: "large",
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'
  },
  heading:{
    fontFamily: 'Ubuntu',
  },
  top: {
    bottomBorder: "10px",
    margin: "auto",
    
    paddingBottom: 20
  },
  divide:{
    marginBottom: 20,
  },
  divider:{
    margin: '50px auto',
    height: 8,
    width:"80%",
    background: 'linear-gradient(6deg, #3f51b5 30%, #FF8E53 90%)'
  },
  percent: {
    width: "30%"
  },
  lang: {
    width: "15%"
  },
  button:{
    margin: 10
  },
  manual:{
    padding:10
  }
}))

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props}/>;
}

export default function Github(props) {
  const DESCRIPTION_LIMIT = 225;
  const [count, setCount] = useState(0);
  const [username, setUsername] = useState('');
  const [message, setMessage] = useState("");
  const [open, setOpen] = useState(false);
  
  const classes = useStyles(); 

  function saveProject(projectInfo) {
    props.updateProject(projectInfo)
    .then(() => {
      setMessage("Saved Successfully"); 
      setCount(0);
      setOpen(true);
    });
  }

  function deleteProject(projectInfo) {
    props.deleteProject(projectInfo)
    .then(() => {
      setMessage("Deleted Sucessfully");
      setOpen(true);
    });
  }

  function generateProject(projectData, userID) {
    props.addProject(projectData, userID)
    .then(() => {
      setCount(0);
      setMessage("Added Successfully");
      setOpen(true);
    })
  }

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false); 
  };


  const data = props.projects
  const numOfProjects = data.map(i => {
    const last_updated = i.last_updated.slice(0,10);
    return (
      <Projects 
        key={i.id}
        id={i.id}
        title={i.title}
        primary_language={i.primary_language}
        primary_language_percent={i.primary_language_percent}
        secondary_language={i.secondary_language}
        secondary_language_percent={i.secondary_language_percent}
        last_updated={last_updated}
        description={i.description}
        url={i.url}
        updateProject={saveProject}
        deleteProject={deleteProject}
      />
    )
  })
    
    const addProjects = function(input){
      for (let i = 0; i < input; i++){
        return (
          <Projects 
          key={''}
          title={''}
          primary_language={''}
          primary_language_percent={''}
          secondary_language={''}
          secondary_language_percent={''}
          description={''}
          updateProject={saveProject}
        />
        )
      }
    }
     
    const moreProjects = addProjects(count)

  return (
    <div className={classes.root}>
     <Snackbar 
          open={open}
          autoHideDuration={1000}
          onClose={handleClose}
          anchorOrigin={{vertical: 'top', horizontal: 'center'}}
        >
        <Alert onClose={handleClose} severity="success">
          <h1>{message}</h1>
        </Alert>
      </Snackbar>
      <div className={classes.top}>
        <Typography className={classes.heading} variant="h3">Enter your Github username</Typography>
        <br />
        <TextField
          className={classes.divide}
          variant="filled"
          id="standard-basic"
          label="Github Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <GetGithub 
          username={username} 
          user={props.user} 
          updateGithub={props.updateGithub}
          addProject={generateProject}
        />
        {/* <Divider className={classes.divider}/> */}
        {numOfProjects}
        {Array(count).fill(moreProjects)}
      </div>
      
      <div className={classes.add}>
      
      {/* <Typography className={classes.divide} variant="h4">OR</Typography>  */}
      <Button className={classes.submit} variant="contained" color="primary" onClick={() => setCount(count + 1)}>
          Add Projects Manually
      </Button>
      
        </div>

    </div>
  )
}

