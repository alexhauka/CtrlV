import React, { useEffect } from 'react';
import { Grid, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles(() => ({
  projects: {
    height: 450,
    border: "solid #3f51b5 1px",
    borderRadius: 20,
    marginBottom: 10,
  },
  projectButton: {
    marginBottom: 10
  }
}))



export default function ProjectMenu(props) {
  const DESCRIPTION_LIMIT = 225;
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = React.useState(null);

  const { userProjects, liftProjects } = props;
  const [project1, setProject1] = React.useState(userProjects[0])
  const [project2, setProject2] = React.useState(userProjects[1])
  const [project3, setProject3] = React.useState(userProjects[2])

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (project) => {
        if (anchorEl.id === 'btn1'){
      setProject1(project)
    } 
    else if (anchorEl.id === 'btn2'){
      setProject2(project)
    }
    else if (anchorEl.id === 'btn3'){
      setProject3(project)
    }
    setAnchorEl(null);
  };


  useEffect(() => {

    liftProjects([project1, project2, project3])

  }, [project1, project2, project3])


    const projectsMenu = userProjects.map(i => {
    return (
      <MenuItem
      contained={true}
      onClick={() =>{
        handleClose(i)
      }}
      >
        {i.title}
      </MenuItem>
    )
  })


  return (

    <div>
      <section className={classes.projects}>
        <h1>Projects</h1>
        <Grid container
        direction="row"
        justify="space-around">
        <div className={classes.singleProject}>
        <Grid 
        container
        // id='1'
        direction="column"
        justify="space-around"
        > 
        <Button
        id="btn1"
        className={classes.projectButton}
        variant="contained"
        color="primary"
        aria-controls="fade-menu1"
        aria-haspopup="true"
        onClick={handleClick}
        >
          Change Project
        </Button>
        <Menu
          id="project-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
          TransitionComponent={Fade}
        >
          {projectsMenu}
        </Menu>
          <TextField
            id="p1T"
            label="Title"
            value={project1 ? project1.title: ''}
            InputProps={{
              readOnly: true,
            }}
            variant="outlined"
          />
          <br/>
          <TextField
            id="p1PL"
            label="Primary Language"
            value={project1 ? project1.primary_language: ''}
            InputProps={{
              readOnly: true,
            }}
            variant="outlined"
          />
          <br/>
          <TextField
            id="P1D"
            label="Description"
            multiline
            rows={4}
            value={project1 ? project1.description: ''}
            variant="outlined"
            inputProps={{
              maxlength: DESCRIPTION_LIMIT,
            }}
          />
        </Grid>
        </div>
        
        <div className={classes.singleProject}>
        <Grid 
        container
        direction="column"
        justify="space-around"
        >
        <Button
          id="btn2"
          className={classes.projectButton}
          variant="contained"
          color="primary"
          aria-controls="fade-menu2"
          aria-haspopup="true"
          onClick={handleClick}
          >
          Change Project
          </Button>
          <Menu
            id="project-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
            TransitionComponent={Fade}
          >
            {projectsMenu}
          </Menu>
          <TextField
            id="p2T"
            label="Title"
            value={project2 ? project2.title: ''}
            InputProps={{
              readOnly: true,
            }}
            variant="outlined"
          />
          <br/>
          <TextField
            id="P2PL"
            label="Primary Language"
            value={project2 ? project2.primary_language: ''}
            InputProps={{
              readOnly: true,
            }}
            variant="outlined"
          />
          <br/>
          <TextField
            id="p2D"
            label="Description"
            multiline
            rows={4}
            value={project2 ? project2.description: ''}
            variant="outlined"
            inputProps={{
              maxlength: DESCRIPTION_LIMIT,
            }}
          />
        </Grid>
        </div>
        
        <div className={classes.singleProject}>
        <Grid 
        container
        direction="column"
        justify="space-around"
        >
        <Button
          id="btn3"
          className={classes.projectButton}
          variant="contained"
          color="primary"
          aria-controls="fade-menu3"
          aria-haspopup="true"
          onClick={handleClick}
        >
          Change Project
        </Button>
        <Menu
          id="project-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
          TransitionComponent={Fade}
        >
          {projectsMenu}
        </Menu>
          <TextField
            id="p3T"
            label="Title"
            value={project3 ? project3.title: ''}
            InputProps={{
              readOnly: true,
            }}
            variant="outlined"
          />
          <br/>
          <TextField
            id="P3PL"
            label="Primary Language"
            value={project3 ? project3.primary_language: ''}
            InputProps={{
              readOnly: true,
            }}
            variant="outlined"
          />
          <br/>
          <TextField
            id="P3D"
            label="Description"
            multiline
            rows={4}
            value={project3 ? project3.description: ''}
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

