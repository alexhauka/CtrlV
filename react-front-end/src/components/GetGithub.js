import React, { useState } from 'react';
import MuiAlert from '@material-ui/lab/Alert';
import { Button, Divider, Snackbar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  button: {
    // marginTop: '1.2em',
    marginBottom:'1.2em',
    width:'50%',
    color: "white",
    size: "large",
    background: 'linear-gradient(45deg, transparent 20%,#FE6B8B 40%, #FF8E53 60%, transparent 80%)',
    // marginLeft: '8%',
    '&:hover':{
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    }
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
}));

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props}/>;
}

export default function GetGithub(props){  
  const [message, setMessage] = useState("");
  const [openError, setOpenError] = useState(false);

  const classes = useStyles();
  
  const uploadProjects = async (username) => {
    
    if (username === "") {
      setMessage("Please enter a valid Github name");
      setOpenError(true);
      return;
    }

    const macroURL = `https://api.github.com/search/repositories?q=user:${username}`
    
    // macro being the top level info for projects
    const macroResponse = await fetch(macroURL)
    const macroResults = await macroResponse.json()
  
    let projectData = {};

    // update users github 
    props.updateGithub(`https://github.com/${username}`);

          
    // loops through repos (ordered by star count desc.)
    for (const project in macroResults.items) {
      
      // grabs the individual repo's top level info via deconstruction
      let { name, updated_at, description, stargazers_count } = macroResults.items[project]
  
      // filters by stars
      if (stargazers_count > 0) {
        // console.log(macroResults.items[project])
        
        // fetch the languages for a given repo
        const languages = await fetch(`https://api.github.com/repos/${username}/${name}/languages`)
  
        const languageResults = await languages.json()
  
        let sum = 0;
  
        for (const language in languageResults) {
          sum += languageResults[language]
        }
  
        const firstLang = Object.keys(languageResults)[0]
        const secondLang = Object.keys(languageResults)[1]

        
        // to generate language percentages:
        // console.log(languageResults[firstLang], languageResults[secondLang])
  
        // for entry into database:
  
        // STILL NEED TO HOOK UP USER_ID DYNAMICALLY,
        // CURRENTLY HARD SET TO '2' IN QUERY
        projectData = {
          title: name,
          url: `https://github.com/${username}/${name}`,
          primary_language: firstLang,
          primary_language_percent: Math.round((languageResults[firstLang] / sum) * 100),
          secondary_language: secondLang,
          secondary_language_percent: Math.round((languageResults[secondLang] / sum) * 100),
          description,
          last_updated: updated_at
        }
        // console.log(projectData)
  
        // UNCOMMENT TO ALLOW DATABASE ENTRY OF PROJECTS:
        props.addProject(projectData, props.user.id)
        // axios.post('/api/projects', { projectData, id: props.user.id })
        
      }
      
    }
  
  }

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenError(false); 
  };

  return (
    <div>
      <Snackbar 
          open={openError}
          autoHideDuration={1000}
          onClose={handleClose}
          anchorOrigin={{vertical: 'top', horizontal: 'center'}}
        >
        <Alert onClose={handleClose} severity="error">
          <h1>{message}</h1>
        </Alert>
      </Snackbar>
    <Button
    className={classes.button}
    // variant="contained"
    color="primary"
    onClick={() => uploadProjects(props.username)}
    >
      Autogenerate Projects
    </Button>
    <div className={classes.dividers}>
    <Divider className={classes.divider}/>
    <Divider className={classes.divider1}/>
    <Divider className={classes.divider2}/>
    <Divider className={classes.divider1}/>
    <Divider className={classes.divider}/>
    </div>
    </div>
  )
}

