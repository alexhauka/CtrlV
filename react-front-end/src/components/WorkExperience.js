import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MuiAlert from '@material-ui/lab/Alert';
import { Button, Snackbar, Typography, Divider } from '@material-ui/core';
import Jobs from "./Jobs"

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "white",
    paddingTop: "5em",
    minHeight: "100vh"
  },

  job: {
    textAlign: "center",
    height: 250
  },
  submit: {
    fontFamily: 'Ubuntu',
    marginTop: 10,
    color: "white",
    size: "large",
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'
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
    marginBottom:'.9em',
  },
  top: {
    margin: "auto",
    textAlign:'center',
    paddingBottom: 20
  },
  description: {
    marginTop: 20,
    width: '60%',
    margin: "auto"
  },
  add: {
    textAlign: "center",
    padding:'2.5%'
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
}))

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props}/>;
}


export default function WorkExperience(props) {
  const data = props.workExperience;
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
      const start_date = data[key].job_start_date.slice(0,10);
      const end_date = data[key].job_end_date.slice(0,10);
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
      <div className={classes.top}>
        <Typography className={classes.heading} variant="h3">
          Add Work Experience
        </Typography>
        <div className={classes.dividers}>
          <Divider className={classes.divider}/>
          <Divider className={classes.divider1}/>
          <Divider className={classes.divider2}/>
          <Divider className={classes.divider1}/>
          <Divider className={classes.divider}/>
        </div>
      </div >
      {numOfJobs}
      {Array(count).fill(moreJobs)} 
    <div className={classes.add}>
    <Button className={classes.submit} variant="contained" color="primary" onClick={() => {
      setCount(count + 1)
      }}>
        Add Another Job
    </Button>
      </div>
    </div>
  )
}
