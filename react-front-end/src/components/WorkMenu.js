import React, { useEffect } from 'react';
import { Grid, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles(() => ({
  work: {
    height: 450,
    border: "solid #3f51b5 1px",
    borderRadius: 20,
    marginBottom: 10,
    // backgroundColor: '#e8e8e8'
  },
  workButton: {
    marginBottom: 10
  }
}))



export default function WorkMenu(props) {
  const DESCRIPTION_LIMIT = 235;
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = React.useState(null);

  const { userWorkExperience, liftJobs } = props;
  const [work1, setwork1] = React.useState(userWorkExperience[0])
  const [work2, setwork2] = React.useState(userWorkExperience[1])
  const [work3, setwork3] = React.useState(userWorkExperience[2])
  
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (work) => {
    if (anchorEl.id === 'btn1'){
      // console.log("in 1")
      setwork1(work)
    } 
    else if (anchorEl.id === 'btn2'){
      // console.log("in 2")
      setwork2(work)
    }
    else if (anchorEl.id === 'btn3'){
      // console.log("in 3")
      setwork3(work)
    }
    setAnchorEl(null);
  };


  useEffect(() => {

    liftJobs([work1, work2, work3])

  }, [work1, work2, work3])

    const workMenu = userWorkExperience.map(i => {
    return (
      <MenuItem
      contained={true}
      onClick={() =>{handleClose(i)}}
      >
        {i.job_title}
      </MenuItem>
    )
  })


  return (
    <div>
      <section className={classes.work}>
        <h1 style={{fontFamily: 'Ubuntu'}}>Work Experience</h1>
        <Grid container
        direction="row"
        justify="space-around">
        <div className={classes.singleWork}>
        <Grid 
        container
        direction="column"
        justify="space-around"
        >
      <Button
      id='btn1'
      className={classes.workButton}
      style={{fontFamily: 'Ubuntu'}}
      variant="contained"
      color="primary"
      aria-controls="fade-menu1"
      aria-haspopup="true"
      onClick={handleClick}
      >
        Change Work
      </Button>
      <Menu
        id="work-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        {workMenu}
      </Menu>
          <TextField
            id="w1T"
            label="Title"
            name="job_title"
            value={work1 ? work1.job_title : ''}
            InputProps={{
              readOnly: true,
            }}
            variant="outlined"
          />
          <br/>
          <TextField
            id="w1SD"
            label="Start Date"
            name="job_start_date"
            type="date"
            // onChange={handleChangeWork1}
            value={work1 ? work1.job_start_date.slice(0,10) : ''}
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <br/>
          <TextField
            id="w1ED"
            label="End Date"
            name="job_end_date"
            type="date"
            // onChange={handleChangeWork1}
            value={work1 ? work1.job_end_date.slice(0,10) : ''}
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <br/>
          <TextField
            id="w1D"
            label="Description"
            name="job_description"
            // onChange={handleChangeWork1}
            multiline
            rows={4}
            value={work1 ? work1.job_description : ''}
            variant="outlined"
            inputProps={{
              maxlength: DESCRIPTION_LIMIT,
            }}
          />
        </Grid>
        </div>
        
        <div className={classes.singleWork}>
        <Grid 
        container
        direction="column"
        justify="space-around"
        >
        <Button
          id='btn2'
          className={classes.workButton}
          style={{fontFamily: 'Ubuntu'}}
          variant="contained"
          color="primary"
          aria-controls="fade-menu2"
          aria-haspopup="true"
          onClick={handleClick}
        >
        Change Work
      </Button>
      <Menu
        id="work-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        {workMenu}
      </Menu>
          <TextField
            id="w2T"
            label="Title"
            name="job_title"
            // onChange={handleChangeWork2}
            value={work2 ? work2.job_title : ''}
            InputProps={{
              readOnly: true,
            }}
            variant="outlined"
          />
          <br/>
          <TextField
            id="w2SD"
            label="Start Date"
            name="job_start_date"
            type="date"
            // onChange={handleChangeWork2}
            value={work2 ? work2.job_start_date.slice(0,10) : ''}
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <br/>
          <TextField
            id="w2ED"
            label="End Date"
            name='job_end_date'
            type="date"
            // onChange={handleChangeWork2}
            value={work2 ? work2.job_end_date.slice(0,10) : ''}
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <br/>
          <TextField
            id="w2D"
            label="Description"
            name='job_description'
            // onChange={handleChangeWork2}
            multiline
            rows={4}
            value={work2 ? work2.job_description : ''}
            variant="outlined"
            inputProps={{
              maxlength: DESCRIPTION_LIMIT,
            }}
          />
        </Grid>
        </div>
        
        <div className={classes.singleWork}>
        <Grid 
        container
        direction="column"
        justify="space-around"
        >
        <Button
          id='btn3'
          className={classes.workButton}
          style={{fontFamily: 'Ubuntu'}}
          variant="contained"
          color="primary"
          aria-controls="fade-menu3"
          aria-haspopup="true"
          onClick={handleClick}
        >
          Change Work
        </Button>
        <Menu
          id="work-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
          TransitionComponent={Fade}
        >
          {workMenu}
        </Menu>
          <TextField
            id="w3T"
            label="Title"
            name='job_title'
            // onChange={handleChangeWork3}
            value={work3 ? work3.job_title : ''}
            InputProps={{
              readOnly: true,
            }}
            variant="outlined"
          />
          <br/>
          <TextField
            id="w3SD"
            label="Start Date"
            name="job_start_date"
            type="date"
            // onChange={handleChangeWork3}
            value={work3 ? work3.job_start_date.slice(0,10) : ''}
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <br/>
          <TextField
            id="w3ED"
            label="End Date"
            name="job_end_date"
            type="date"
            // onChange={handleChangeWork3}
            value={work3 ? work3.job_end_date.slice(0,10) : ''}
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <br/>
          <TextField
            id="w3D"
            label="Description"
            name="job_description"
            // onChange={handleChangeWork3}
            multiline
            rows={4}
            value={work3 ? work3.job_description : ''}
            variant="outlined"
            inputProps={{
              maxlength: DESCRIPTION_LIMIT,
            }}
          />  
        </Grid>
        </div>
        </Grid>
        </section>
      </div>
  );
}





      // <Button
      // id='btn1'
      // className={classes.workButton}
      // variant="contained"
      // color="primary"
      // aria-controls="fade-menu1"
      // aria-haspopup="true"
      // onClick={handleClick}
      // >
      //   Change Work
      // </Button>
      // <Menu
      //   id="work-menu"
      //   anchorEl={anchorEl}
      //   keepMounted
      //   open={Boolean(anchorEl)}
      //   onClose={handleClose}
      //   TransitionComponent={Fade}
      // >
      //   {workMenu}
      // </Menu>
