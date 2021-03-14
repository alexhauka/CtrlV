import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';
import { Typography, TextField, Button } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
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


export default function WorkExperience() {

const [count, setCount] = React.useState(1)
  
  const classes = useStyles(); 
  const numOfJobs = function(input){
    for(let i = 0; i < input; i++){
      return (
        <form noValidate autoComplete="off">
        <div className={classes.job}>
          <div className={classes.fields}>
          <TextField id="standard-basic" label="Job Title" />
          <TextField id="standard-basic" label="Company Name" />
          <TextField
            id="date"
            label="Start Date"
            type="date"
            defaultValue=""
            // className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            id="date"
            label="End Date"
            type="date"
            defaultValue=""
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
              multiline
              rows={6}
              placeholder="Tell us about this position..."
              fullWidth="true"
              variant="outlined"
            />
          </div>
        </div>
      </form>
      )
    }
  }
  
  const myJobs = numOfJobs(count)

  return (
    <div className={classes.root}>
       {Array(count).fill(myJobs)}
    <div className={classes.add}>
    <Button variant="contained" color="primary" onClick={() => setCount(count + 1)}>
        Add Another Job
    </Button>
      </div>
    </div>
  )
}
