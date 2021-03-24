import React, { useState } from 'react';
import { Redirect } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import MuiAlert from '@material-ui/lab/Alert';
import { Typography, Button, Snackbar, Checkbox, FormControlLabel, FormLabel, Divider } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "white",
    paddingTop: "5em",
    minHeight:'100vh'
  },
  skills: {
    display: 'flex',
    justifyContent: 'center',
  },
  formControl: {
    margin: theme.spacing(3),
  },
  skillSet: {
    textAlign: "left",
    margin: "2%",
    padding: "2%",
    border: "solid #3f51b5 1px",
    borderRadius: 20
  },
  heading: {
    fontFamily: 'Ubuntu',
    marginBottom:'.9em',
  },
  header:{
    textAlign: 'center',
  },
  submit: {
    color: "white",
    size: "large",
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'
  },
  button: {
    textAlign: "center"
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
  submit: {
    marginBottom:'1.2em',
    width:'8.5in',
    color: "white",
    size: "large",
    background: 'linear-gradient(45deg, transparent 20%,#FE6B8B 40%, #FF8E53 60%, transparent 80%)',
    '&:hover':{
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    }
  },
}));

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props}/>;
}


export default function SkillCheck(props) {
  const data = props.hardskills;
  const userData = props.userHardSkills
  
  const defaultSkills = {} 
  for (const skill of data) {
    defaultSkills[skill.name] = false; 
  }
  const markedUserSkills = {}
  for (const marked of userData) {
    markedUserSkills[marked.name] = true; 
  }
  const currentUserSkills = {
    ...defaultSkills,
    ...markedUserSkills
  };
  
  const classes = useStyles();
  const [checkedSkills, setCheckedState] = useState(currentUserSkills);
  const [complete, setComplete] = useState(false); 
  const [message, setMessage] = useState("");
  const [open, setOpen] = useState(false); 
  

  const handleChange = (event) => {
    setCheckedState({...checkedSkills, [event.target.value] : event.target.checked })
    if (event.target.checked) {
      addSkill(event.target.id, event.target.name, event.target.dataset.type);
    } else {
      removeSkill(event.target.id, event.target.name, event.target.dataset.type); 
    }
  }

  function addSkill(id, name, type) {
    props.addUserHardSkill({ id: Number(id), name: name, type: type })
    .then(() => {
      setMessage("Added Successfully!");
      setOpen(true); 
    }); 
  }

  function removeSkill(id, name, type) {
    props.removeUserHardSkill({ id: Number(id), name: name, type: type })
    .then(() => {
      setMessage("Deleted Successfully!");
      setOpen(true);
    });
  }
  
  const languagesList = data.map(s => {
    if (s.type === 'language') {
      
      return(
        <React.Fragment key={s.id}>
        <FormControlLabel
          control={<Checkbox 
            checked={checkedSkills[s.name]}
            onChange={handleChange}
            name={s.name}
            value={s.name} 
            id={s.id.toString()}
            inputProps={{
              'data-type': s.type
            }}
            />}
          label={s.name}      
        />
        <br/>
        </React.Fragment>
      )
    }
    return null;
  })
    
  const frameworksList = data.map(s => {
    if (s.type ==='framework') {
      return (
        <React.Fragment key={s.id}>
        <FormControlLabel
          control={<Checkbox
            checked={checkedSkills[s.name]}
            onChange={handleChange} 
            name={s.name} 
            value={s.name}
            id={s.id.toString()}
            inputProps={{
              'data-type': s.type
            }}
            />}
          label={s.name}
        />
        <br/>
        </React.Fragment>
      )
    }
    return null;
  })

  const testingList = data.map(s => {
    if (s.type === 'testing' || s.type === 'database'){
      return (
        <React.Fragment key={s.id}>
        <FormControlLabel
        control={<Checkbox 
          checked={checkedSkills[s.name]}
          onChange={handleChange}
          name={s.name} 
          value={s.name}
          id={s.id.toString()}
          inputProps={{
            'data-type': s.type
          }}
          />}
        label={s.name}
        />
        <br/>
        </React.Fragment>
      )
    }
    return null;
  })

  function save() {
    setComplete(true); 
  }

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false); 
  };

  if (complete) {
    return <Redirect to="/" />
  }
  

  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <Typography className={classes.heading} variant="h3">My Skills</Typography>
      </div>
      <div className={classes.dividers}>
        <Divider className={classes.divider}/>
        <Divider className={classes.divider1}/>
        <Divider className={classes.divider2}/>
        <Divider className={classes.divider1}/>
        <Divider className={classes.divider}/>
      </div>
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
      <section className={classes.skills}>
          <div className={classes.skillSet}>
            <FormLabel component="legend">Languages</FormLabel>
            {languagesList}
          </div>
          <div className={classes.skillSet}>
            <FormLabel component="legend">Databases and testing</FormLabel>
            {testingList}
          </div>
          <div className={classes.skillSet}>
            <FormLabel component="legend">Frameworks</FormLabel>
            {frameworksList}
          </div>
      </section>
      <div className={classes.button}>
      <Button 
      className={classes.submit}
      onClick={save}
      >
        Save
      </Button>
      </div>
    </div>
  );
}