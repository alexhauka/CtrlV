import React from 'react'; 
import { Grid, TextField, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles'; 
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';
import { data } from 'retext';

import ProjectMenu from './ProjectMenu';
import WorkMenu from './WorkMenu'


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
  // console.log("In right", props)
  const { user, userHardSkills, userProjects, userWorkExperience } = props.props
  const classes = useStyles()
  //For edit menu
  // const [anchorEl, setAnchorEl] = React.useState(null);
  
  // const open = Boolean(anchorEl);
  
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
  // console.log("user basic info: ", basicInfo)

  

  function handleBasicInfoChange(event) {
    setBasicInfo({
      ...basicInfo,
      [event.target.name]: event.target.value
    })
  }


  // const [project1, setProject1] = React.useState(userProjects[0])
  // const [project2, setProject2] = React.useState(userProjects[1])
  // const [project3, setProject3] = React.useState(userProjects[2])
  // const [work1, setwork1] = React.useState(userWorkExperience[0])
  // const [work2, setwork2] = React.useState(userWorkExperience[1])
  // const [work3, setwork3] = React.useState(userWorkExperience[2])

  const [ projects, setProjects ] = React.useState([userProjects[0], userProjects[1], userProjects[2]])

  const [work_experience, setWork_Experience] = React.useState([userWorkExperience[0], userWorkExperience[1], userWorkExperience[2]])


  const liftProjects = (projectArray) => {
    setProjects(projectArray)
  }

  const liftJobs = (jobArray) => {
    setWork_Experience(jobArray)
  }
  



  let output = {
    basicInfo: basicInfo,
    projects: projects,
    work_experience: work_experience,
    skills: userHardSkills
  }



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
      <ProjectMenu userProjects={userProjects} liftProjects={liftProjects}/>
      <WorkMenu userWorkExperience={userWorkExperience} liftJobs={liftJobs}/>
      <Button onClick={() => {
        console.log(output)
      }} />
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
