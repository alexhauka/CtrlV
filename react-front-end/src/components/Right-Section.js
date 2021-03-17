import React from 'react'; 
import { Grid, TextField, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'; 

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: '75%',
    textAlign: "center",
    padding: 10,
    paddingTop: "5%",
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
    marginBottom: "15px",
    textDecoration: 'underline'
  },

  skill: {
    fontSize: "24px"
  } 


}))

export default function RightSection(props) {
  const classes = useStyles()

  console.log('IN right side:', props)
  const user = props.props.user
  const userName = `${user.first_name} ${user.last_name}`
  const projects = props.props.userProjects
  // This is where we are generating projects. Currently hardcoded
  const project1 = projects[0]
  const project2 = projects[3]
  const project3 = projects[5]
  
  const work = props.props.userWorkExperience

  const work1 = work[0]
  const work2 = work[1]
  const work3 = work[2]

  const hardSkills = props.props.userHardSkills
  

  const languagesList = hardSkills.map(s => {
    if (s.type === 'language') {
      return(
       <Typography>{s.name}</Typography>
      )
    }
    return null;
  })

  const frameworksList = hardSkills.map(s => {
  if (s.type ==='framework') {
    return (
      <Typography>{s.name}</Typography>
    )
  }
  return null;
})
 const testingList = hardSkills.map(s => {
    if (s.type === 'testing' || s.type === 'database'){
      return ( 
        <Typography>{s.name}</Typography>
      )
    }
    return null;
  })


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
          <TextField required id="standard-required" label="Name" defaultValue={userName} />
          <TextField required id="standard-required" label="Github" defaultValue={user.github} />
          <TextField required id="standard-required" label="Email" defaultValue={user.email} />
          </Grid>
          <br/>
          <Grid
            container
            direction="row"
            justify="space-around"
          >
          <TextField required id="standard-required" label="Linkedin" defaultValue={user.linkedin} />
          <TextField required id="standard-required" label="Phone" defaultValue={user.phone_number} />
          <TextField required id="standard-required" label="Address" defaultValue={user.address} />
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
            defaultValue={project1 ? project1.title: ''}
            InputProps={{
              readOnly: true,
            }}
            variant="outlined"
          />
          <br/>
          <TextField
            id="outlined-read-only-input"
            label="Language"
            defaultValue={project1 ? project1.primary_language: ''}
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
            defaultValue={project1 ? project1.description: ''}
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
            defaultValue={project2 ? project2.title: ''}
            InputProps={{
              readOnly: true,
            }}
            variant="outlined"
          />
          <br/>
          <TextField
            id="outlined-read-only-input"
            label="Language"
            defaultValue={project2 ? project2.primary_language: ''}
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
            defaultValue={project2 ? project2.description: ''}
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
            defaultValue={project3 ? project3.title: ''}
            InputProps={{
              readOnly: true,
            }}
            variant="outlined"
          />
          <br/>
          <TextField
            id="outlined-read-only-input"
            label="Language"
            defaultValue={project3 ? project3.primary_language: ''}
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
            defaultValue={project3 ? project3.description: ''}
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
            defaultValue={work1 ? work1.job_title : ''}
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
            defaultValue={work1 ? work1.job_start_date.slice(0,10) : ''}
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
            defaultValue={work1 ? work1.job_end_date.slice(0,10) : ''}
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
            defaultValue={work1 ? work1.job_description : ''}
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
            defaultValue={work2 ? work2.job_title : ''}
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
            defaultValue={work2 ? work2.job_start_date.slice(0,10) : ''}
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
            defaultValue={work2 ? work2.job_end_date.slice(0,10) : ''}
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
            defaultValue={work2 ? work2.job_description : ''}
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
            defaultValue={work3 ? work3.job_title : ''}
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
            defaultValue={work3 ? work3.job_start_date.slice(0,10) : ''}
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
            defaultValue={work3 ? work3.job_end_date.slice(0,10) : ''}
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
            defaultValue={work3 ? work3.job_description : ''}
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
          justify="space-evenly"
          direction="row"
        >
          <div >
          <Typography className={classes.skillRow} variant="h5">Languages</Typography>
           {languagesList} 
          </div>
          <div>
          <Typography className={classes.skillRow} variant="h5">Testing and Databases</Typography>
           {testingList} 
          </div>
          <div>
          <Typography className={classes.skillRow} variant="h5">Frameworks</Typography>
           {frameworksList} 
          </div>
        </Grid>
        </section>
      </div>
      
    </div>
  );
}
