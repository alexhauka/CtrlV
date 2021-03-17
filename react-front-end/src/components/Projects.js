import React, { useState } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, TextField, Button } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: "white",
    minHeight: "100vh",
    textAlign:"center"
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
    paddingTop: 50
  },
  top: {
    bottomBorder: "10px",
    margin: "auto",
    paddingTop: 80,
    paddingBottom: 20
  },
  divide:{
    marginBottom: 20,
  },
  percent: {
    width: "30%"
  },
  lang: {
    width: "15%"
  }
}))


export default function Projects(props) {
  const {title, primary_language, primary_language_percent, secondary_language,secondary_language_percent, description, last_updated, updateProject, id, url  } = props

  const [projectInfo, setProjectInfo] = useState({
    title,
    id,
    url,
    primary_language,
    primary_language_percent,
    secondary_language,
    secondary_language_percent,
    description,
    last_updated
  })
  function handleSave(event){
    event.preventDefault();
    updateProject(projectInfo);
  }

  function handleChange(event) {
    
    setProjectInfo({...projectInfo, [event.target.name]: event.target.value});
    
  }
  
  const classes = useStyles(); 
  return (
    <form onSubmit={handleSave} noValidate autoComplete="off">
    <div className={classes.project}>
      <div className={classes.fields}>
        <TextField  name="title" id="projectTitle" label="Project Title" defaultValue={title} onChange={handleChange} />
        <div>
        <TextField
        id="lastUpdated"
        name='last_updated'
        label="Last Modified"
        type="date"
        defaultValue={last_updated}
        onChange={handleChange}
        // className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
        />
        <br/>
        <TextField name="url" id="standard-basic" label="Project URL" defaultValue={url} onChange={handleChange} />
        </div>
        < div className={classes.lang}>
          <TextField name="primary_language" id="standard-basic" label="Primary" defaultValue={primary_language} onChange={handleChange} />
          <TextField  className={classes.percent} name="primary_language_percent" id="standard-basic" label="%" defaultValue={primary_language_percent} onChange={handleChange} />
        </div>
        < div className={classes.lang}>
          <TextField id="standard-basic" label="Secondary" name="secondary_language" defaultValue={secondary_language} onChange={handleChange} />
          <TextField className={classes.percent} name="secondary_language_percent" id="standard-basic" label="%" defaultValue={secondary_language_percent} onChange={handleChange}/>
        </div>
      </div>
      <div className={classes.description}>
        <TextField
          id="outlined-multiline-static"
          name="description"
          label="Project description"
          multiline
          rows={6}
          defaultValue={description}
          onChange={handleChange}
          placeholder="Tell us about this position..."
          fullWidth="true"
          variant="outlined"
        />
      </div>
      <Button 
      type='submit'
      className={classes.submit}
      >
        Save
      </Button>
    </div>          
  </form>
  )
}

 