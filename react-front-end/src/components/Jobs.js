import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button } from '@material-ui/core';


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
  const {title, description} = props
  const [jobInfo, setJobInfo] = useState({
    title,
    description
  })

  const classes = useStyles(); 
    return (
      <form key={props.key} noValidate autoComplete="off">
        <div className={classes.job}>
        <div className={classes.fields}>
        <TextField 
          id="title" 
          name='title' 
          label="Job Title"

          value={jobInfo.title} 
        />
        <TextField 
          id="company_name" 
          name='company_name' 
          label="Company Name" 
        />
        <TextField
          id="date"
          label="Start Date"
          name="start_date"
          type="date"
          defaultValue=''
          // className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          id="date"
          label="End Date"
          name="end_date"
          type="date"
          defaultValue=''
          // className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
        />
        </div>
        <div className={classes.description}>
          <TextField
            id="outlined-multiline-static"
            label="Job Description"
            name='description'
            multiline
            rows={6}
            value={jobInfo.description}
            placeholder="Tell us about this position..."
            fullWidth={true}
            variant="outlined"
          />
        </div>
      </div>
    </form>
    )
}
