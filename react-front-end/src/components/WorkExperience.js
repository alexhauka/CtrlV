import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MuiAlert from '@material-ui/lab/Alert';
import { Button, Snackbar, Typography } from '@material-ui/core';
import Jobs from "./Jobs"

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
  heading:{
    fontFamily: 'Ubuntu',
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

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props}/>;
}


export default function WorkExperience(props) {
  const data = props.workExperience;
  console.log("In work experience", data)
  const [count, setCount] = useState(0); 
  const [message, setMessage] = useState("");
  const [open, setOpen] = useState(false);


  function saveWork(jobInfo) {
    props.updateWork(jobInfo)
    .then(() => {
      console.log("added successfully"); 
      setMessage("Saved Successfully"); 
      setCount(0);
      setOpen(true);
    });
  }

  function deleteWork(jobInfo) {
    props.deleteWork(jobInfo)
    .then(() => {
      console.log("deleted successfully");
      setMessage("Deleted Sucessfully");
      setOpen(true);
    });
  }

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false); 
  };


  const numOfJobs = Object.keys(data).map(key => {
      // this line will fail if the input date is null 
      const start_date = data[key].job_start_date.slice(0,10);
      const end_date = data[key].job_end_date.slice(0,10);
      console.log("Start Date", start_date)
      return (
        <Jobs
        key={data[key].id}
        id={data[key].id}
        title={data[key].job_title}
        company_name={data[key].company_name}
        start_date={start_date}
        end_date={end_date}
        updateWork={saveWork}
        deleteWork={deleteWork}
        description={data[key].job_description}
        />
        )
    });
  

    const addJobs = function(input){
      for (let i = 0; i < input; i++){
        return(
          <Jobs 
          key={''}
          title=''
          company_name={""}
          start_date={""}
          end_date={""}
          updateWork={saveWork}
          description=''/>
        )
      }
    }
    const moreJobs = addJobs(count)
  // const [count, setCount] = React.useState('')
  const classes = useStyles(); 
  return (
    <div className={classes.root}>
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
      <Typography className={classes.heading} variant="h3">
        Add Work Experience
      </Typography>
      {numOfJobs}
      {/* This line is going to need to be looked at when we start uploading to the DB */}
      {Array(count).fill(moreJobs)} 
    <div className={classes.add}>
    <Button variant="contained" color="primary" onClick={() => {
      setCount(count + 1)
      }}>
        Add Another Job
    </Button>
      </div>
    </div>
  )
}
