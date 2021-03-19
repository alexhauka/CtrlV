import React from 'react'; 
import { Grid, TextField, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles'; 
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';
import { data } from 'retext';


// function SubmitButton(props) {
//   return 
// }

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: '85%',
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
    height: 450,
    border: "solid grey 1px",
    borderRadius: 20,
    marginBottom: 10,
    backgroundColor: '#e8e8e8',

  },
  singleProject: {
    border: "solid grey 1px",
    borderRadius: 20,
    padding: 25,
    backgroundColor: 'white',
    maxWidth: '33%'
  },

  singleWork : {
    border: "solid grey 1px",
    borderRadius: 20,
    padding: 25,
    backgroundColor: 'white'
  },

  work: {
    height: 450,
    border: "solid grey 1px",
    borderRadius: 20,
    marginBottom: 10,
    backgroundColor: '#e8e8e8'
  },
  skills: {
    height: 250,
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
  },

  projectButton: {
    marginBottom: 10
  }


}))

export default function RightSection(props) {
  console.log("In right", props)
  const { user, userHardSkills, userProjects, userWorkExperience } = props.props
  const classes = useStyles()
  //For edit menu
  const [anchorEl, setAnchorEl] = React.useState(null);
  
  const open = Boolean(anchorEl);
  
  let userName = `${user.first_name} ${user.last_name}`;
  let userAddress = user.address;
  let userEmail = user.email;
  let userGithub = user.github;
  let userPhone = user.phone_number;
  let userLinkedin = user.linkedin;
  const [basicInfo, setBasicInfo] = React.useState({
    userName,
    userAddress,
    userEmail,
    userGithub,
    userPhone,
    userLinkedin
  })
  console.log("user basic info: ", basicInfo)

  

  function handleBasicInfoChange(event) {
    setBasicInfo({
      ...basicInfo,
      [event.target.name]: event.target.value
    })
  }


  const [project1, setProject1] = React.useState(userProjects[0])
  const [project2, setProject2] = React.useState(userProjects[1])
  const [project3, setProject3] = React.useState(userProjects[2])
  const [work1, setwork1] = React.useState(userWorkExperience[0])
  const [work2, setwork2] = React.useState(userWorkExperience[1])
  const [work3, setwork3] = React.useState(userWorkExperience[2])

  
  function handleChangeWork1(event){
    setwork1({...work1, [event.target.name]: event.target.value})
  }
  function handleChangeWork2(event){
    setwork2({...work2, [event.target.name]: event.target.value})
  }
  function handleChangeWork3(event){
    setwork3({...work3, [event.target.name]: event.target.value})
  }
  console.log("Work1: ", work1)
  console.log("Work3: ", work3)

  const handleClick = (event, index) => {
    console.log("Event:", event.currentTarget.id)
    setAnchorEl(event.currentTarget);
  };

  const save = function(){


    console.log("This is my output", output)
  }
  let output = {
    basicInfo: basicInfo,
    projects: [project1, project2, project3],
    work_experience: [work1, work2, work3],
    skills: userHardSkills
  }

  const handleClose = (project) => {
    
    console.log(anchorEl)
    
    console.log("Props", project) // can get the name of the project to change to
    if (anchorEl.id === 'btn1'){
      console.log("in 1")
      setProject1(project)
    } 
    else if (anchorEl.id === 'btn2'){
      console.log("in 2")
      setProject2(project)
    }
    else if (anchorEl.id === 'btn3'){
      console.log("in 3")
      setProject3(project)
    }
    setAnchorEl();
  };
  // const projects = props.props.userProjects
  const projectsMenu = userProjects.map(i => {
    return (
      <MenuItem  onClick={() => {handleClose(i)}} >{i.title}</MenuItem>
    )
  })
  // const projectsMenu2 = userProjects.map(i => {
  //   return (
  //     <MenuItem  onClick={() => {handleClose(i)}}>{i.title}</MenuItem>
  //   )
  // })
  // const projectsMenu3 = userProjects.map(i => {
  //   return (
  //     <MenuItem  onClick={() => {handleClose(i)}}>{i.title}</MenuItem>
  //   )
  // })


  // end of Edit menu










  console.log('IN right side:', props)
  // const user = props.props.user
  
  
  // This is where we are generating projects. Currently hardcoded

  const hardSkills = userHardSkills
  

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
          <TextField required id="standard-required" label="Name" name='userName'  defaultValue={basicInfo.userName}  onChange={handleBasicInfoChange}/>
          <TextField required id="standard-required" label="Github" name='userGithub' defaultValue={basicInfo.userGithub} onChange={handleBasicInfoChange}/>
          <TextField required id="standard-required" label="Email" name="email" defaultValue={basicInfo.userEmail} onChange={handleBasicInfoChange} name="userEmail"/>
          </Grid>
          <br/>
          <Grid
            container
            direction="row"
            justify="space-around"
          >
          <TextField required id="standard-required" label="Linkedin"  name='userLinkedin' defaultValue={basicInfo.userLinkedin}  onChange={handleBasicInfoChange} />
          <TextField required id="standard-required" label="Phone" name='userPhone' defaultValue={basicInfo.userPhone}  onChange={handleBasicInfoChange} />
          <TextField required id="standard-required" label="Address" name='userAddress' defaultValue={basicInfo.userAddress} onChange={handleBasicInfoChange}/>
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
        <Button id='btn1' variant="contained" color="primary" aria-controls="fade-menu1" aria-haspopup="true" className={classes.projectButton} onClick={handleClick}>
          Projects
        </Button>
        <Menu
          // id={row.id}
          anchorEl={anchorEl}
          keepMounted
          open={open}
          onClose={() => handleClose()}
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
            label="Language"
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
          />
        </Grid>
        </div>
        
        <div className={classes.singleProject}>
        <Grid 
        container
        direction="column"
        justify="space-around"
        >
        <Button id='btn2' variant="contained" color="primary" aria-controls="fade-menu2" aria-haspopup="true" className={classes.projectButton} onClick={handleClick}>
          Projects
        </Button>
        <Menu
          // id={row.id}
          anchorEl={anchorEl}
          keepMounted
          open={open}
          onClose={() => handleClose()}
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
            label="Language"
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
          />
        </Grid>
        </div>
        
        <div className={classes.singleProject}>
        <Grid 
        container
        direction="column"
        justify="space-around"
        >
        <Button id='btn3' variant="contained" color="primary" aria-haspopup="true" aria-controls="fade-menu3" className={classes.projectButton} onClick={handleClick}>
          Projects
        </Button>
        <Menu
          // id={row.id}
          anchorEl={anchorEl}
          keepMounted
          open={open}
          onClose={() => handleClose()}
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
            label="Language"
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
            name="job_title"
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
            name="job_start_date"
            type="date"
            onChange={handleChangeWork1}
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
            name="job_end_date"
            type="date"
            onChange={handleChangeWork1}
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
            name="job_description"
            onChange={handleChangeWork1}
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
            name="job_title"
            onChange={handleChangeWork2}
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
            name="job_start_date"
            type="date"
            onChange={handleChangeWork2}
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
            name='job_end_date'
            type="date"
            onChange={handleChangeWork2}
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
            name='job_description'
            onChange={handleChangeWork2}
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
            name='job_title'
            onChange={handleChangeWork3}
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
            name="job_start_date"
            type="date"
            onChange={handleChangeWork3}
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
            name="job_end_date"
            type="date"
            onChange={handleChangeWork3}
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
            name="job_description"
            onChange={handleChangeWork3}
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
      <Link to={{
        pathname: '/resume',
        state: {
          output
        },
      }}>Save and Confirm</Link>
      {/* <Button component={() => <Link  />}>How about this one?</Button> */}
    </div>
  );
}
