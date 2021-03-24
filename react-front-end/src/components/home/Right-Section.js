import React from 'react'; 
import { Grid, TextField, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles'; 
import Button from '@material-ui/core/Button';


import ProjectMenu from '../panels/ProjectMenu';
import WorkMenu from '../panels/WorkMenu'

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
    border: "solid #3f51b5 1px",
    borderRadius: 20,
    marginBottom: 10,
    backgroundColor: 'white'
  },

  projects: {
    height: 400,
    border: "solid grey 1px",
    borderRadius: 20,
    marginBottom: 10,
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
    backgroundColor: 'white'
  },
  skills: {
    height: 250,
    border: "solid #3f51b5 1px",
    borderRadius: 20,
    marginBottom: 10,
    position: "relative"
  },
  skillChunk: {
    width: '30%'
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
    fontFamily: 'Ubuntu',
    marginBottom: "15px",
    textDecoration: 'underline'
  },

  skill: {
    fontSize: "24px"
  },

  projectButton: {
    marginBottom: 10
  },

  button: {
    marginBottom:'1.2em',
    width:'80%',
    color: "white",
    size: "large",
    background: 'linear-gradient(45deg, transparent 20%,#FE6B8B 40%, #FF8E53 60%, transparent 80%)',
    '&:hover':{
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    }
  }


}))

export default function RightSection(props) {
  const { user, userHardSkills, userProjects, userWorkExperience } = props.props
  const classes = useStyles()
  
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
  
  function handleBasicInfoChange(event) {
    setBasicInfo({
      ...basicInfo,
      [event.target.name]: event.target.value
    })
  }

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
  
  let langArray = []
  let frameArray = []
  let dbTestingArray = []


  hardSkills.map(s => {
    if (s.type === 'language') {
      // return(
      //  <Typography style={{fontFamily: 'Ubuntu'}}>{s.name}</Typography>
      // )
      langArray.push(s.name)
      // return(
      //  <Typography>{s.name}</Typography>
      // )
    } else if (s.type ==='framework') {
      frameArray.push(s.name)
    } else {
      dbTestingArray.push(s.name)
    }


    // return null;
  })

  const languagesList = langArray.join(', ')
  const frameworksList = frameArray.join(', ')
  const testingList = dbTestingArray.join(', ')

//   const frameworksList = hardSkills.map(s => {
//   if (s.type ==='framework') {
//     return (
//       <Typography>{s.name}</Typography>
//     )
//   }
//   return null;
// })
//  const testingList = hardSkills.map(s => {
//     if (s.type === 'testing' || s.type === 'database'){
//       return ( 
//         <Typography>{s.name}</Typography>
//       )
//     }
//     return null;
//   })


  return (
    <div className={classes.root}>
      <div>
        <section className={classes.info}>
        <h1 style={{fontFamily: 'Ubuntu'}}>Basic Info</h1>
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
        <h1 style={{fontFamily: 'Ubuntu'}}>Skills</h1>
        <Grid
          container
          justify="space-evenly"
          direction="row"
        >
          <div className={classes.skillChunk}>
          <Typography style={{fontFamily: 'Ubuntu'}} className={classes.skillRow} variant="h5">Languages</Typography>
           {languagesList} 
          </div>
          <div className={classes.skillChunk}>
          <Typography style={{fontFamily: 'Ubuntu'}} className={classes.skillRow} variant="h5">Testing and Databases</Typography>
           {testingList} 
          </div>
          <div className={classes.skillChunk}>
          <Typography style={{fontFamily: 'Ubuntu'}} className={classes.skillRow} variant="h5">Frameworks</Typography>
           {frameworksList} 
          </div>
        </Grid>
        </section>
      </div>
      <ProjectMenu userProjects={userProjects} liftProjects={liftProjects}/>
      <WorkMenu userWorkExperience={userWorkExperience} liftJobs={liftJobs}/>
      <Button 
        className={classes.button}
        style={{fontFamily: 'Ubuntu'}}
        component={Link}
        to={{
          pathname: '/resume',
          state: {output}
          }}

        >Save and Confirm</Button>
    </div>
  );
}
