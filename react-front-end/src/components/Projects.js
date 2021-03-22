import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button, Divider } from '@material-ui/core';

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

  function handleSave(event){
    event.preventDefault();
    // console.log(projectInfo);
    props.updateProject(projectInfo)
  }

  function handleDelete(event) {
    event.preventDefault();
    // console.log("handleDelete", projectInfo);
    props.deleteProject(projectInfo)
  }

  function handleChange(event) {  
    setProjectInfo({...projectInfo, [event.target.name]: event.target.value});
  }
  
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
        <TextField  name="title" label="Project Title" defaultValue={title} onChange={handleChange} />
        <div>
        <TextField
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
        <TextField name="url" label="Project URL" defaultValue={url} onChange={handleChange} />
        </div>
        < div className={classes.lang}>
          <TextField name="primary_language" label="Primary" defaultValue={primary_language} onChange={handleChange} />
          <TextField  className={classes.percent} name="primary_language_percent" label="%" defaultValue={primary_language_percent} onChange={handleChange} />
        </div>
        < div className={classes.lang}>
          <TextField label="Secondary" name="secondary_language" defaultValue={secondary_language} onChange={handleChange} />
          <TextField className={classes.percent} name="secondary_language_percent" label="%" defaultValue={secondary_language_percent} onChange={handleChange}/>
        </div>
      </div>
      <div className={classes.description}>
        <TextField
          name="description"
          label="Project description"
          multiline
          rows={6}
          defaultValue={description}
          onChange={handleChange}
          placeholder="Tell us about this position..."
          fullWidth="true"
          variant="outlined"
          inputProps={{
            maxlength: DESCRIPTION_LIMIT,
          }}
        />
      </div>
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

 