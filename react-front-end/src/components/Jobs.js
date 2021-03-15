import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button } from '@material-ui/core';


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


export default function Jobs(props) {
  const classes = useStyles(); 

    return (
      <form key={props.key} noValidate autoComplete="off">
        <div className={classes.job}>
        <div className={classes.fields}>
        <TextField id="standard-basic" label="Job Title" value={props.title} />
        <TextField id="standard-basic" label="Company Name" />
        <TextField
          id="date"
          label="Start Date"
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
            multiline
            rows={6}
            value={props.description}
            placeholder="Tell us about this position..."
            fullWidth={true}
            variant="outlined"
          />
        </div>
      </div>
    </form>
    )
}
