import React from 'react'; 
import { Grid, TextField, Checkbox, FormGroup, FormControlLabel, FormControl, FormLabel, Divider, Typography } from '@material-ui/core';
import ListIcon from '@material-ui/icons/List';
import { makeStyles, responsiveFontSizes } from '@material-ui/core/styles'; 

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '75%',
    // maxHeight: '900px',
    textAlign: "center",
    padding: 10,
    marginLeft: "10%",
    flexShrink: 1,
  },
  info: {
    height: 200,
    border: "solid grey 1px",
    borderRadius: 20,
    marginBottom: 10,
    backgroundColor: '#e8e8e8'
  },

  projects: {
    height: 400,
    border: "solid grey 1px",
    borderRadius: 20,
    marginBottom: 10,
    backgroundColor: '#e8e8e8'
  },
  singleProject: {
    border: "solid grey 1px",
    borderRadius: 20,
    padding: 25,
    backgroundColor: 'white'
  },

  singleWork : {
    border: "solid grey 1px",
    borderRadius: 20,
    padding: 25,
    backgroundColor: 'white'
  },

  work: {
    height: 500,
    border: "solid grey 1px",
    borderRadius: 20,
    marginBottom: 10,
    backgroundColor: '#e8e8e8'
  },
  skills: {
    height: 400,
    border: "solid grey 1px",
    borderRadius: 20,
    marginBottom: 10,
    backgroundColor: '#e8e8e8',
    position: "relative"
  },

  skillSet: {
    maxWidth: "40%",
    maxHeight: 300,
    border: "solid grey 1px",
    borderRadius: 20,
    padding: 25,
    backgroundColor: 'white',
    position: "relative",
  },

  skillRow: {
    marginRight: 10,
  },

  skill: {
    fontSize: "24px"
  } 

}))

export default function RightSection() {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <div>
        <section className={classes.info}>
        <h1>Basic Info</h1>
          <Grid
            container
            direction="row"
            justify="space-around"
          >
          <TextField required id="standard-required" label="Name" defaultValue="Jake Hein" />
          <TextField required id="standard-required" label="Github" defaultValue="jhein1892" />
          <TextField required id="standard-required" label="Email" defaultValue="jacobhein1892@gmail.com" />
          </Grid>
          <br/>
          <Grid
            container
            direction="row"
            justify="space-around"
          >
          <TextField required id="standard-required" label="Linkedin" defaultValue="jhein1892" />
          <TextField required id="standard-required" label="Phone" defaultValue="604-996-2767" />
          <TextField required id="standard-required" label="Address" defaultValue="Salmon Arm, BC" />
          </Grid>
        </section>
      </div>
      <div>
        <section className={classes.projects}>
        <h1>Projects</h1>
        <Grid container
        direction="row"
        justify="space-around">
        <div className={classes.singleProject}>
        <Grid 
        container
        direction="column"
        justify="space-around"
        >
          <TextField
            id="outlined-read-only-input"
            label="Title"
            defaultValue="Scheduler"
            InputProps={{
              readOnly: true,
            }}
            variant="outlined"
          />
          <br/>
          <TextField
            id="outlined-read-only-input"
            label="Language"
            defaultValue="Javascript"
            InputProps={{
              readOnly: true,
            }}
            variant="outlined"
          />
          <br/>
          <TextField
            id="outlined-multiline-static"
            label="Description"
            multiline
            rows={4}
            defaultValue="Description of Scheduler..."
            variant="outlined"
          />
        </Grid>
        </div>
        
        <div className={classes.singleProject}>
        <Grid 
        container
        direction="column"
        justify="space-around"
        >
          <TextField
            id="outlined-read-only-input"
            label="Title"
            defaultValue="Jungle"
            InputProps={{
              readOnly: true,
            }}
            variant="outlined"
          />
          <br/>
          <TextField
            id="outlined-read-only-input"
            label="Language"
            defaultValue="Ruby"
            InputProps={{
              readOnly: true,
            }}
            variant="outlined"
          />
          <br/>
          <TextField
            id="outlined-multiline-static"
            label="Description"
            multiline
            rows={4}
            defaultValue="Description of Jungle"
            variant="outlined"
          />
        </Grid>
        </div>
        
        <div className={classes.singleProject}>
        <Grid 
        container
        direction="column"
        justify="space-around"
        >
          <TextField
            id="outlined-read-only-input"
            label="Title"
            defaultValue="ToDos"
            InputProps={{
              readOnly: true,
            }}
            variant="outlined"
          />
          <br/>
          <TextField
            id="outlined-read-only-input"
            label="Language"
            defaultValue="Javascript"
            InputProps={{
              readOnly: true,
            }}
            variant="outlined"
          />
          <br/>
          <TextField
            id="outlined-multiline-static"
            label="Description"
            multiline
            rows={4}
            defaultValue="Description of Midterm Project"
            variant="outlined"
          />  
        </Grid>
        </div>
        </Grid>
        </section>
      </div>
      <div>
        <section className={classes.work}>
        <h1>Work Experience</h1>
        <Grid container
        direction="row"
        justify="space-around">
        <div className={classes.singleWork}>
        <Grid 
        container
        direction="column"
        justify="space-around"
        >
          <TextField
            id="outlined-read-only-input"
            label="Title"
            defaultValue="Stripper"
            InputProps={{
              readOnly: false,
            }}
            variant="outlined"
          />
          <br/>
          <TextField
            id="date"
            label="Start Date"
            type="date"
            defaultValue="2010-06-13"
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <br/>
          <TextField
            id="date"
            label="End Date"
            type="date"
            defaultValue="2013-05-24"
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <br/>
          <TextField
            id="outlined-multiline-static"
            label="Description"
            multiline
            rows={4}
            defaultValue="Took my Clothes off for money"
            variant="outlined"
          />
        </Grid>
        </div>
        
        <div className={classes.singleWork}>
        <Grid 
        container
        direction="column"
        justify="space-around"
        >
          <TextField
            id="outlined-read-only-input"
            label="Title"
            defaultValue="Hooker"
            InputProps={{
              readOnly: false,
            }}
            variant="outlined"
          />
          <br/>
          <TextField
            id="date"
            label="Start Date"
            type="date"
            defaultValue="2012-03-14"
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <br/>
          <TextField
            id="date"
            label="End Date"
            type="date"
            defaultValue="2019-12-24"
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <br/>
          <TextField
            id="outlined-multiline-static"
            label="Description"
            multiline
            rows={4}
            defaultValue="Had sex for money"
            variant="outlined"
          />
        </Grid>
        </div>
        
        <div className={classes.singleWork}>
        <Grid 
        container
        direction="column"
        justify="space-around"
        >
          <TextField
            id="outlined-read-only-input"
            label="Title"
            defaultValue="Office Administrator"
            InputProps={{
              readOnly: false,
            }}
            variant="outlined"
          />
          <br/>
          <TextField
            id="date"
            label="Start Date"
            type="date"
            defaultValue="2020-01-03"
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <br/>
          <TextField
            id="date"
            label="End Date"
            type="date"
            defaultValue=""
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <br/>
          <TextField
            id="outlined-multiline-static"
            label="Description"
            multiline
            rows={4}
            defaultValue="Administered office stuff"
            variant="outlined"
          />  
        </Grid>
        </div>
        </Grid>
        </section>
      </div>
      <div>
        <section className={classes.skills}>
        <h1>Skills</h1>
        <Grid
          container
          justify="space-around"
        >
          <Typography>Populate users Skills</Typography>
        </Grid>
        </section>
      </div>
      
    </div>
  );
}