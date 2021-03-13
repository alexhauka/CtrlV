import React from 'react'; 
import { Grid, TextField, Checkbox, FormGroup, FormControlLabel, FormControl, FormLabel, Divider } from '@material-ui/core';
import ListIcon from '@material-ui/icons/List';
import { makeStyles } from '@material-ui/core/styles'; 

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 2,
    textAlign: "center",
    padding: 10
    
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
    backgroundColor: '#e8e8e8'
  },

  skillSet: {
    border: "solid grey 1px",
    borderRadius: 20,
    padding: 25,
    backgroundColor: 'white'
  },

  skillRow: {
    marginRight: 10
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
          direction="row"
          justify="space-around"
        >
          <div className={classes.skillSet}>
              <FormControl component="fieldset">
                <FormLabel component="legend">Languages</FormLabel>
                  <FormGroup aria-label="position" row>
            <Grid container direction="row">
              <div className={classes.skillRow}>
              <Grid container direction="column">
                  <FormControlLabel
                      value="start"
                      control={<Checkbox color="primary" />}
                      label="JavaScript"
                      labelPlacement="start"
                    />
                    <FormControlLabel
                      value="start"
                      control={<Checkbox color="primary" />}
                      label="Ruby"
                      labelPlacement="start"
                    />
                    <FormControlLabel
                      value="start"
                      control={<Checkbox color="primary" />}
                      label="C++"
                      labelPlacement="start"
                    />
                    <FormControlLabel
                      value="start"
                      control={<Checkbox color="primary" />}
                      label="C#"
                      labelPlacement="start"
                    />
                    <FormControlLabel
                      value="start"
                      control={<Checkbox color="primary" />}
                      label="HTML"
                      labelPlacement="start"
                    />
                </Grid>
                </div>
                <Divider dark orientation="vertical" flexItem />
                <div>
                <Grid container direction="column">
                    <FormControlLabel
                      value="start"
                      control={<Checkbox color="primary" />}
                      label="CSS"
                      labelPlacement="start"
                    />
                    <FormControlLabel
                      value="start"
                      control={<Checkbox color="primary" />}
                      label="Java"
                      labelPlacement="start"
                    />
                    <FormControlLabel
                      value="start"
                      control={<Checkbox color="primary" />}
                      label="Python"
                      labelPlacement="start"
                    />
                    <FormControlLabel
                      value="start"
                      control={<Checkbox color="primary" />}
                      label="TypeScript"
                      labelPlacement="start"
                    />
                </Grid>
                </div>
              </Grid>
            
                  </FormGroup>
              </FormControl>
          </div>
          <div className={classes.skillSet}>
              <FormControl component="fieldset">
                <FormLabel component="legend">Testing & Databases</FormLabel>
                  <FormGroup aria-label="position" row>
            <Grid container direction="row">
              <div className={classes.skillRow}>
              <Grid container direction="column">
                  <FormControlLabel
                      value="start"
                      control={<Checkbox color="primary" />}
                      label="Jest"
                      labelPlacement="start"
                    />
                    <FormControlLabel
                      value="start"
                      control={<Checkbox color="primary" />}
                      label="Cypress"
                      labelPlacement="start"
                    />
                    <FormControlLabel
                      value="start"
                      control={<Checkbox color="primary" />}
                      label="Storybook"
                      labelPlacement="start"
                    />
                    <FormControlLabel
                      value="start"
                      control={<Checkbox color="primary" />}
                      label="Rspec"
                      labelPlacement="start"
                    />
                    <FormControlLabel
                      value="start"
                      control={<Checkbox color="primary" />}
                      label="Mocha/Chai"
                      labelPlacement="start"
                    />
                </Grid>
                </div>
                <Divider orientation="vertical" flexItem />
                <div className={classes.skillRow}>
                <Grid container direction="column">
                    <FormControlLabel
                      value="start"
                      control={<Checkbox color="primary" />}
                      label="Capybara"
                      labelPlacement="start"
                    />
                    <FormControlLabel
                      value="start"
                      control={<Checkbox color="primary" />}
                      label="Poltergeist"
                      labelPlacement="start"
                    />
                    <FormControlLabel
                      value="start"
                      control={<Checkbox color="primary" />}
                      label="MySQL"
                      labelPlacement="start"
                    />
                    <FormControlLabel
                      value="start"
                      control={<Checkbox color="primary" />}
                      label="PostGresSQL"
                      labelPlacement="start"
                    />
                </Grid>
                </div>
                <Divider orientation="vertical" flexItem />
                <div>
                <Grid container direction="column">
                    <FormControlLabel
                      value="start"
                      control={<Checkbox color="primary" />}
                      label="MicroSoft SQL"
                      labelPlacement="start"
                    />
                    <FormControlLabel
                      value="start"
                      control={<Checkbox color="primary" />}
                      label="SQ Lite"
                      labelPlacement="start"
                    />
                    <FormControlLabel
                      value="start"
                      control={<Checkbox color="primary" />}
                      label="MongoDB"
                      labelPlacement="start"
                    />
                </Grid>
                </div>
              </Grid>
            
                  </FormGroup>
              </FormControl>
          </div>
          <div className={classes.skillSet}>
              <FormControl component="fieldset">
                <FormLabel component="legend">FrameWorks</FormLabel>
                  <FormGroup aria-label="position" row>
            <Grid container direction="row">
              <div className={classes.skillRow}>
              <Grid container direction="column">
                  <FormControlLabel
                      value="start"
                      control={<Checkbox color="primary" />}
                      label="Express"
                      labelPlacement="start"
                    />
                    <FormControlLabel
                      value="start"
                      control={<Checkbox color="primary" />}
                      label="Node.js"
                      labelPlacement="start"
                    />
                    <FormControlLabel
                      value="start"
                      control={<Checkbox color="primary" />}
                      label="Django"
                      labelPlacement="start"
                    />
                    <FormControlLabel
                      value="start"
                      control={<Checkbox color="primary" />}
                      label="Rails"
                      labelPlacement="start"
                    />
                    <FormControlLabel
                      value="start"
                      control={<Checkbox color="primary" />}
                      label="Axios"
                      labelPlacement="start"
                    />
                </Grid>
                </div>
                <Divider orientation="vertical" flexItem />
                <div>
                <Grid container direction="column">
                    <FormControlLabel
                      value="start"
                      control={<Checkbox color="primary" />}
                      label="React"
                      labelPlacement="start"
                    />
                    <FormControlLabel
                      value="start"
                      control={<Checkbox color="primary" />}
                      label="Angular"
                      labelPlacement="start"
                    />
                    <FormControlLabel
                      value="start"
                      control={<Checkbox color="primary" />}
                      label="Vue"
                      labelPlacement="start"
                    />
                </Grid>
                </div>
              </Grid>
            
                  </FormGroup>
              </FormControl>
          </div>
          
        </Grid>
        </section>
      </div>
      
    </div>
  );
}