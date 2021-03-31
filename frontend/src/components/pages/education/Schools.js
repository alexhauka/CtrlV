import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MuiAlert from '@material-ui/lab/Alert';
import { Typography, TextField, Button, Snackbar } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: "white",
    paddingTop: 30,
    minHeight: "100vh"
  },

  job: {
    textAlign: "center",
    border: '1px solid #3f51b5',
    width: '70%',
    borderRadius: 10,
    margin: 'auto'
  },
  fields: {
    display:"flex",
    justifyContent: "space-evenly",
    margin: "auto",
    marginBottom: 20,
    paddingTop: 20,
    width: "90%"
  },
  form:{
    paddingBottom:'2.5%'
  },
  description: {
    marginTop: 20,
    width: '90%',
    margin: "auto"
  },
  add: {
    textAlign: "center",
    paddingTop: 50
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

export default function Schools(props) {
  
  const DESCRIPTION_LIMIT = 235;
  const {school_name, program_title, start_date, end_date, program_description, id} = props
  const [edInfo, setEdInfo] = useState({
    school_name: school_name,
    program_title: program_title,
    program_description: program_description,
    id: id,
    start_date: start_date,
    end_date: end_date
  })
  const [openError, setOpenError] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState({
    school_name: false,
    program_title: false,
    program_description: false,
    start_date: false,
    end_date: false
  })


  // function save(event){
  //   event.preventDefault();
  //   if (validate()) {
  //     setMessage("Please fill out the missing forms")
  //     setOpenError(true);
  //     return;
  //   } 
  //   return props.updateWork(edInfo);
  // }

  // function onDelete(event) {
  //   event.preventDefault();
  //   props.deleteWork(edInfo);
  // }

  function validate() {
    let bool = false
    if (edInfo.school_name === "") {
      setError(prev => ({...prev, school_name: true}));
      bool = true; 
    } 
    if (edInfo.program_title === "") {
      setError(prev => ({...prev, program_title: true}));
      bool = true; 
    } 
    if (edInfo.program_description === "") {
      setError(prev => ({...prev, program_description: true}));
      bool = true; 
    } 
    if (edInfo.start_date === "") {
      setError(prev => ({...prev, start_date: true}));
      bool = true; 
    } 
    if (edInfo.end_date === "") {
      setError(prev => ({...prev, end_date: true}));
      bool = true; 
    } 
    return bool;
  }
  
  function handleChange(event) {
    setEdInfo({...edInfo, [event.target.name]: event.target.value})
  }

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenError(false); 
  };

  
  const classes = useStyles(); 
    return (
      <form key={edInfo.id} className={classes.form} noValidate autoComplete="off">
        
        <div className={classes.job}>
        <div className={classes.fields}>
        <TextField  
          error={error.school_name}
          required={true}
          name='school_name' 
          label="School Name"
          onChange={handleChange}
          onFocus={() => setError(prev => ({...prev, school_name: false }))}
          value={edInfo.school_name}
          
        />
        <TextField 
          error={error.program_title}
          required={true}
          name='program_title' 
          label="Program Title" 
          onChange={handleChange}
          onFocus={() => setError(prev => ({...prev, program_title: false }))}
          value={edInfo.program_title}
        />
        <TextField
          error={error.start_date}
          required={true}
          label="Start Date"
          name="start_date"
          type="date"
          value={edInfo.start_date}
          onFocus={() => setError(prev => ({...prev, start_date: false }))}
          onChange={handleChange}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          required={true}
          error={error.end_date}
          label="End Date"
          name="end_date"
          type="date"
          value={edInfo.end_date}
          onFocus={() => setError(prev => ({...prev, end_date: false }))}
          onChange={handleChange}
          InputLabelProps={{
            shrink: true,
          }}
        />
        </div>
        <div className={classes.description}>
          <TextField
            required={true}
            error={error.program_description}
            label="Program Description"
            name='program_description'
            multiline
            rows={6}
            value={edInfo.program_description}
            onFocus={() => setError(prev => ({...prev, program_description: false }))}
            onChange={handleChange}
            placeholder="Tell us about this position..."
            fullWidth={true}
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
      {!Object.values(edInfo).includes(null) && <Button 
      className={classes.save}
      variant='contained'
      
      // onClick={save}
      >
        Save
      </Button>}
      {props.title && props.description && <Button
      className={classes.delete}
      variant='contained'
      
      // onClick={onDelete}
      >
        Delete
      </Button>}
      </div>
    </form>
    )
}
