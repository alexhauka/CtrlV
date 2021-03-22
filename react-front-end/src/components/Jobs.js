import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MuiAlert from '@material-ui/lab/Alert';
import { TextField, Button, Snackbar} from '@material-ui/core';


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

export default function Jobs(props) {
  const {title, description, id, start_date, end_date, company_name} = props
  const [jobInfo, setJobInfo] = useState({
    job_title: title,
    company_name: company_name,
    job_description: description,
    id: id,
    job_start_date: start_date,
    job_end_date: end_date
  })
  const [openError, setOpenError] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState({
    job_tite: false,
    company_name: false,
    job_description: false,
    job_start_date: false,
    job_end_date: false
  })


  function save(event){
    event.preventDefault();
    if (validate()) {
      setMessage("Please fill out the missing forms")
      setOpenError(true);
    }
    console.log(jobInfo);
    // props.updateWork(jobInfo);
  }

  function onDelete(event) {
    event.preventDefault();
    props.deleteWork(jobInfo);
  }

  function validate() {
    let bool = false
    if (jobInfo.job_title === "") {
      setError(prev => ({...prev, job_title: true}));
      bool = true; 
    } 
    if (jobInfo.company_name === "") {
      setError(prev => ({...prev, company_name: true}));
      bool = true; 
    } 
    if (jobInfo.job_description === "") {
      setError(prev => ({...prev, job_description: true}));
      bool = true; 
    } 
    if (jobInfo.job_start_date === "") {
      setError(prev => ({...prev, job_start_date: true}));
      bool = true; 
    } 
    if (jobInfo.job_end_date === "") {
      setError(prev => ({...prev, job_end_date: true}));
      bool = true; 
    } 
    return bool;
  }
  
  function handleChange(event) {
    setJobInfo({...jobInfo, [event.target.name]: event.target.value})
  }

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenError(false); 
  };

  
  const classes = useStyles(); 
    return (
      <form key={jobInfo.id} className={classes.form} noValidate autoComplete="off">
        
        <div className={classes.job}>
        <div className={classes.fields}>
        <TextField  
          error={error.job_title}
          required={true}
          name='job_title' 
          label="Job Title"
          onChange={handleChange}
          onFocus={() => setError(prev => ({...prev, job_title: false }))}
          value={jobInfo.job_title} 
        />
        <TextField 
          error={error.company_name}
          required={true}
          name='company_name' 
          label="Company Name" 
          onChange={handleChange}
          onFocus={() => setError(prev => ({...prev, company_name: false }))}
          value={jobInfo.company_name}
        />
        <TextField
          error={error.job_start_date}
          required={true}
          label="Start Date"
          name="job_start_date"
          type="date"
          value={jobInfo.job_start_date}
          onFocus={() => setError(prev => ({...prev, job_start_date: false }))}
          onChange={handleChange}
          // className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          required={true}
          error={error.job_end_date}
          label="End Date"
          name="job_end_date"
          type="date"
          value={jobInfo.job_end_date}
          onFocus={() => setError(prev => ({...prev, job_end_date: false }))}
          onChange={handleChange}
          // className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
        />
        </div>
        <div className={classes.description}>
          <TextField
            required={true}
            error={error.job_description}
            label="Job Description"
            name='job_description'
            multiline
            rows={6}
            value={jobInfo.job_description}
            onFocus={() => setError(prev => ({...prev, job_description: false }))}
            onChange={handleChange}
            placeholder="Tell us about this position..."
            fullWidth={true}
            variant="outlined"
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
      {!Object.values(jobInfo).includes(null) && <Button 
      className={classes.save}
      variant='contained'
      
      onClick={save}
      >
        Save
      </Button>}
      {props.title && props.description && <Button
      className={classes.delete}
      variant='contained'
      
      onClick={onDelete}>
        Delete
      </Button>}
      </div>
    </form>
    )
}
