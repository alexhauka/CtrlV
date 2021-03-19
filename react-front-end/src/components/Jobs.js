import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button} from '@material-ui/core';


const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: "white",
    paddingTop: 30,
    minHeight: "100vh"
  },

  job: {
    textAlign: "center",
    height: 250
  },
  fields: {
    display:"flex",
    justifyContent: "space-evenly",
    margin: "auto",
    marginBottom: 20,
    width: "60%"
  },
  description: {
    marginTop: 20,
    width: '60%',
    margin: "auto"
  },
  add: {
    textAlign: "center",
    paddingTop: 50
  }
}))



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


  function save(event){
    event.preventDefault();
    props.updateWork(jobInfo);
  }

  function onDelete(event) {
    event.preventDefault();
    props.deleteWork(jobInfo);
  }
  
  function handleChange(event) {
    setJobInfo({...jobInfo, [event.target.name]: event.target.value})
  }

  
  const classes = useStyles(); 
    return (
      <form key={jobInfo.id} noValidate autoComplete="off">
        
        <div className={classes.job}>
        <div className={classes.fields}>
        <TextField  
          name='job_title' 
          label="Job Title"
          onChange={handleChange}
          value={jobInfo.job_title} 
        />
        <TextField 
          name='company_name' 
          label="Company Name" 
          onChange={handleChange}
          value={jobInfo.company_name}
        />
        <TextField
          label="Start Date"
          name="job_start_date"
          type="date"
          value={jobInfo.job_start_date}
          onChange={handleChange}
          // className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          label="End Date"
          name="job_end_date"
          type="date"
          value={jobInfo.job_end_date}
          onChange={handleChange}
          // className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
        />
        </div>
        <div className={classes.description}>
          <TextField
            label="Job Description"
            name='job_description'
            multiline
            rows={6}
            value={jobInfo.job_description}
            onChange={handleChange}
            placeholder="Tell us about this position..."
            fullWidth={true}
            variant="outlined"
          />
        </div>
      {!Object.values(jobInfo).includes(null) && <Button 
      className={classes.submit}
      onClick={save}
      >
        Save
      </Button>}
      {props.title && props.description && <Button
      className={classes.submit}
      onClick={onDelete}>
        Delete
      </Button>}
      </div>
    </form>
    )
}
