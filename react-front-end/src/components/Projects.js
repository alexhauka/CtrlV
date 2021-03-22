import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MuiAlert from '@material-ui/lab/Alert';
import { TextField, Button, Divider, Snackbar } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: "white",
    minHeight: "100vh",
    textAlign:"center"
  },

  project: {
    textAlign: "center",
    border:'1px #3f51b5 solid',
    width: '70%',
    borderRadius: 10,
    margin:'auto'
    //  height: 250
  },
  form:{
    paddingBottom:'2.5%'
  },
  fields: {
    display:"flex",
    justifyContent: "space-evenly",
    margin: "auto",
    paddingTop: 20, 
    marginBottom: 20,
    width: "90%",
    height: "auto"
  },
  description: {
    marginTop: 20,
    width: '90%',
    margin: "auto",
    // paddingBottom: 30
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
  },
  dividerLeft:{
    margin: '10px',
    height: 5,
    width: '30%',
    background: '#3f51b5'
  },
  dividerRight:{
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
  divider3:{
    margin: '10px',
    height: 10,
    width:10,
    borderRadius: 100,
    background: '#3f51b5'
  },
  dividers:{
    display:'flex',
    justifyContent:'center',
    alignItems: 'center'
  },
  submit:{
    margin:10
  },
  save:{
    fontFamily: 'Ubuntu',
    margin:10,
    color:'white',
    background:'#6ccc6c',
    '&:hover':{
      background:'#228b22'
    }
  },
  delete:{
    fontFamily: 'Ubuntu',
    margin:10,
    color:'white',
    background:'#ce6767',
    '&:hover':{
      background:'#dd3636'
    }
  }
}))

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props}/>;
}

export default function Projects(props) {
  const DESCRIPTION_LIMIT = 225;
  const {title, primary_language, primary_language_percent, secondary_language,secondary_language_percent, description, last_updated, id, url } = props

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
  const [openError, setOpenError] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState({
    title: false,
    url: false,
    primary_language: false,
    primary_language_percent: false,
    secondary_language: false,
    secondary_language_percent: false,
    description: false,
    last_updated: false
  })

  function handleSave(event){
    event.preventDefault();
    if (validate()) {
      setMessage("Please fill out the missing forms")
      setOpenError(true);
      return
    } else if (isNaN(Number(projectInfo.primary_language_percent))) {
      setError(prev => ({...prev, primary_language_percent: true}));
      setMessage("Please fill in the percentages with a number");
      setOpenError(true);
      return
    } else if (isNaN(Number(projectInfo.secondary_language_percent))) {
      setError(prev => ({...prev, secondary_language_percent: true}));
      setMessage("Please fill in the percentages with a number");
      setOpenError(true);
      return
    } 
      // console.log(projectInfo);
    return props.updateProject(projectInfo)
  }

  function validate() {
    let bool = false
    if (projectInfo.title === "") {
      setError(prev => ({...prev, title: true}));
      bool = true; 
    } 
    if (projectInfo.url === undefined) {
      setError(prev => ({...prev, url: true}));
      bool = true; 
    } 
    if (projectInfo.description === "") {
      setError(prev => ({...prev, description: true}));
      bool = true; 
    } 
    if (projectInfo.last_updated === undefined) {
      setError(prev => ({...prev, last_updated: true}));
      bool = true; 
    } 
    if (projectInfo.primary_language === "") {
      setError(prev => ({...prev, primary_language: true}));
      bool = true; 
    } 
    if (projectInfo.primary_language_percent === "") {
      setError(prev => ({...prev, primary_language_percent: true}));
      bool = true; 
    } 
    if (projectInfo.secondary_language === "") {
      setError(prev => ({...prev, secondary_language: true}));
      bool = true; 
    } 
    if (projectInfo.secondary_language_percent === "") {
      setError(prev => ({...prev, secondary_language_percent: true}));
      bool = true; 
    } 
    return bool;
  }

  function handleDelete(event) {
    event.preventDefault();
    // console.log("handleDelete", projectInfo);
    props.deleteProject(projectInfo)
  }

  function handleChange(event) {  
    setProjectInfo({...projectInfo, [event.target.name]: event.target.value});
  }


  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenError(false); 
  };
  
  const classes = useStyles(); 
  return (
    <form className={classes.form} onSubmit={handleSave} noValidate autoComplete="off">
    <div className={classes.project}>
    {/* <div className={classes.dividers}>
      <Divider className={classes.dividerRight}/>
      <Divider className={classes.divider3}/>
      <Divider className={classes.divider2}/>
      <Divider className={classes.divider1}/>
      <Divider className={classes.dividerLeft}/>
      </div> */}
      <div className={classes.fields}>
        <TextField  
          name="title" 
          required={true}
          error={error.title}
          required={true}
          label="Project Title" 
          defaultValue={title} 
          onChange={handleChange}
          onFocus={() => setError(prev => ({...prev, title: false }))} 
          />
          
        <div>
        <TextField
          name='last_updated'
          required={true}
          error={error.last_updated}
          label="Last Modified"
          type="date"
          defaultValue={last_updated}
          onChange={handleChange}
          onFocus={() => setError(prev => ({...prev, last_updated: false }))} 
        // className={classes.textField}
          InputLabelProps={{
          shrink: true,
          }}
        />
        <br/>
        <TextField 
          name="url" 
          required={true}
          error={error.url}
          label="Project URL" 
          defaultValue={url} 
          onChange={handleChange}
          onFocus={() => setError(prev => ({...prev, url: false }))}  
          />
        </div>
        < div className={classes.lang}>
          <TextField 
            name="primary_language"
            required={true} 
            error={error.primary_language}
            label="Primary" 
            defaultValue={primary_language} 
            onChange={handleChange} 
            onFocus={() => setError(prev => ({...prev, primary_language: false }))} 
            />
          <TextField  
            className={classes.percent} 
            name="primary_language_percent"
            required={true}
            error={error.primary_language_percent} 
            label="%" 
            defaultValue={primary_language_percent} 
            onChange={handleChange} 
            onFocus={() => setError(prev => ({...prev, primary_language_percent: false }))} 
            />
        </div>
        < div className={classes.lang}>
          <TextField
            error={error.secondary_language} 
            label="Secondary" 
            name="secondary_language"
            required={true} 
            defaultValue={secondary_language} 
            onChange={handleChange} 
            onFocus={() => setError(prev => ({...prev, secondary_language: false }))} 
            />
          <TextField 
            className={classes.percent} 
            name="secondary_language_percent" 
            required={true}
            error={error.secondary_language_percent}
            label="%" 
            defaultValue={secondary_language_percent} 
            onChange={handleChange}
            onFocus={() => setError(prev => ({...prev, secondary_language_percent: false }))} 
            />
        </div>
      </div>
      <div className={classes.description}>
        <TextField
          name="description"
          required={true}
          error={error.description}
          label="Project description"
          multiline
          rows={6}
          defaultValue={description}
          onChange={handleChange}
          onFocus={() => setError(prev => ({...prev, description: false }))} 
          placeholder="Tell us about this position..."
          fullWidth="true"
          variant="outlined"
          inputProps={{
            maxlength: DESCRIPTION_LIMIT,
          }}
        />
      </div>
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
      type='submit'
      color='primary'
      variant='contained'
      className={classes.save}
      >
        Save
      </Button>
      {props.title && <Button
      variant='contained'
      color='primary'
      className={classes.delete}
      onClick={handleDelete}>
        Delete
      </Button>}
    </div>          
  </form>
  )
}

 