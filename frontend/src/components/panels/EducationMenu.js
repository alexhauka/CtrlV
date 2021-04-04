import React, { useEffect } from 'react';
import { Grid, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles(() => ({
  work: {
    height: 550,
    border: "solid #3f51b5 1px",
    borderRadius: 20,
    marginBottom: 10,
  },
  workButton: {
    marginBottom: 10
  }
}))



export default function EducationMenu(props) {
  const DESCRIPTION_LIMIT = 235;
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = React.useState(null);

  const { userEducation, liftEducation } = props;
  const [education1, setEducation1] = React.useState(userEducation[0])
  const [education2, setEducation2] = React.useState(userEducation[1])
  const [education3, setEducation3] = React.useState(userEducation[2])
  
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (education) => {
    if (education.id && anchorEl.id === 'btn1'){
      setEducation1(education)
    } 
    else if (education.id && anchorEl.id === 'btn2'){
      setEducation2(education)
    }
    else if (education.id && anchorEl.id === 'btn3'){
      setEducation3(education)
    } 
    setAnchorEl(null);
  };


  useEffect(() => {

    liftEducation([education1, education2, education3])

  }, [education1, education2, education3])

    const educationMenu = userEducation.map(i => {
    return (
      <MenuItem
      contained={true}
      onClick={() =>{handleClose(i)}}
      >
        {i.school_name}: {i.program_title}
      </MenuItem>
    )
  })


  return (
    <div>
      <section className={classes.work}>
        <h1 style={{fontFamily: 'Ubuntu'}}>Education</h1>
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
        Change Education
      </Button>
      <Menu
        id="work-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        {educationMenu}
      </Menu>
          <TextField
            id="e1S"
            label="School"
            name="school_name"
            value={education1 ? education1.school_name : ''}
            InputProps={{
              readOnly: true,
            }}
            variant="outlined"
          />
          <br/>
          <TextField
            id="e1PT"
            label="Program"
            name="program_title"
            value={education1 ? education1.program_title : ''}
            InputProps={{
              readOnly: true,
            }}
            variant="outlined"
          />
          <br/>
          <TextField
            id="e1SD"
            label="Start Date"
            name="start_date"
            type="date"
            value={education1 ? education1.start_date.slice(0,10) : ''}
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <br/>
          <TextField
            id="e1ED"
            label="End Date"
            name="end_date"
            type="date"
            value={education1 ? education1.end_date.slice(0,10) : ''}
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <br/>
          <TextField
            id="e1D"
            label="Description"
            name="program_description"
            multiline
            rows={4}
            value={education1 ? education1.program_description : ''}
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
        Change Education
      </Button>
      <Menu
        id="work-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        {educationMenu}
      </Menu>
          <TextField
            id="e2S"
            label="School"
            name="school_name"
            value={education2 ? education2.school_name : ''}
            InputProps={{
              readOnly: true,
            }}
            variant="outlined"
          />
          <br/>
          <TextField
            id="e2PT"
            label="Program"
            name="program_title"
            value={education2 ? education2.program_title : ''}
            InputProps={{
              readOnly: true,
            }}
            variant="outlined"
          />
          <br/>
          <TextField
            id="e2SD"
            label="Start Date"
            name="start_date"
            type="date"
            value={education2 ? education2.start_date.slice(0,10) : ''}
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <br/>
          <TextField
            id="e2ED"
            label="End Date"
            name='end_date'
            type="date"
            value={education2 ? education2.end_date.slice(0,10) : ''}
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <br/>
          <TextField
            id="e2D"
            label="Description"
            name='program_description'
            multiline
            rows={4}
            value={education2 ? education2.program_description : ''}
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
          Change Education
        </Button>
        <Menu
          id="work-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
          TransitionComponent={Fade}
        >
          {educationMenu}
        </Menu>
          <TextField
            id="e3T"
            label="School"
            name='school_name'
            value={education3 ? education3.school_name : ''}
            InputProps={{
              readOnly: true,
            }}
            variant="outlined"
          />
          <br/>
          <TextField
            id="e3PT"
            label="Program"
            name="program_title"
            value={education3 ? education3.program_title : ''}
            InputProps={{
              readOnly: true,
            }}
            variant="outlined"
          />
          <br/>
          <TextField
            id="e3SD"
            label="Start Date"
            name="start_date"
            type="date"
            value={education3 ? education3.start_date.slice(0,10) : ''}
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <br/>
          <TextField
            id="e3ED"
            label="End Date"
            name="end_date"
            type="date"
            value={education3 ? education3.end_date.slice(0,10) : ''}
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <br/>
          <TextField
            id="e3D"
            label="Description"
            name="program_description"
            multiline
            rows={4}
            value={education3 ? education3.program_description : ''}
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




