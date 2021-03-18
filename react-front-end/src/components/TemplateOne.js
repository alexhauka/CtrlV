import React from 'react';
import { makeStyles, Grid, Typography, Container, Divider}
 from '@material-ui/core'
 import { Link } from 'react-router-dom';


const useStyles = makeStyles(() => ({
  root: {
    minHeight: '11in',
    padding: 10,
    paddingTop: "5%",
  },
  head: {
    display:'flex',
    direction: 'row',
  },
  contact: {
    display:'flex',
    direction:'column',
    justifyContent:'space-between',
    // backgroundColor:'red'
  },
  name: {
    flexGrow: 2,
    // backgroundColor:'blue',
    textAlign:'center',
    marginBottom: "5px"
  },
  skills: {
    display:'flex',
    direction: 'row',
    justifyContent:'space-around'
  },

  skillSet: {
    textAlign:'center'
  },

  liveURL: {
    // textDecoration: 'none',
    color: "blue",
    fontSize: '1.2em',

  },

  projects: {
    display:'flex',
    direction: 'row',
    justifyContent:'space-evenly'
  },

  project: {
    maxWidth:"30%",
    minWidth:'30%',
    overflowWrap: 'break-word',
    textAlign: 'center'
  },
  jobs: {
    display:'flex',
    direction: 'row',
    justifyContent:'space-evenly',
  },

  job: {
    maxWidth:"30%",
    minWidth:'30%',
    overflowWrap: 'break-word',
    textAlign: 'center'
  },
  jobTitle: {
    fontSize: '1.2em',
  },

  divider: {
    marginTop: 5,
    marginBottom: 5
  },
  border: {
    border: "solid 2px",
    borderRadius: 20,
    padding: 5
  }

}));



export default function TemplateOne(props) {
  const { basicInfo, projects, skills, work_experience } = props.data
  const classes = useStyles();

  // style={{backgroundColor: props.color}}
  // style={{borderColor: props.borderColor}}

  const hardSkills = skills
  const languagesList = hardSkills.map(s => {
    if (s.type === 'language') {
      return(
       <Typography variant="body2" style={{fontFamily: props.bodyFont}}>{s.name}</Typography>
      )
    }
    return null;
  })
  const frameworksList = hardSkills.map(s => {
  if (s.type ==='framework') {
    return (
      <Typography variant="body2" style={{fontFamily: props.bodyFont}}>{s.name}</Typography>
    )
  }
  return null;
})
  const testingList = hardSkills.map(s => {
    if (s.type === 'testing' || s.type === 'database'){
      return ( 
        <Typography variant="body2" style={{fontFamily: props.bodyFont}}>{s.name}</Typography>
      )
    }
    return null;
  })

  const testProject = projects[0]
  console.log("This is test", work_experience)
  const myProjects = projects.map(i => {
    return (
      <div className={classes.project} >
        <div>
        <a className={classes.liveURL} style={{fontFamily: props.font}} href={`https://${i.url}`} target="__blank">{i.title}
        </a>
        </div>
        <br />
        <Typography variant="body2" style={{fontFamily: props.bodyFont}}>
        {i.primary_language}/{i.secondary_language}
        </Typography>
        <br />
        <Typography variant="body2" style={{fontFamily: props.bodyFont}}>
        {i.description}
        </Typography>
      </div>
    )
  })

  const myJobs = work_experience.map(i => {
    const startYear = i.job_start_date.slice(0,4)
    const startMonth = i.job_start_date.slice(5,7)
    const endYear = i.job_start_date.slice(0,4)
    const endMonth = i.job_start_date.slice(5,7)  
    
    return (
      <div className={classes.job} >
        <Typography variant="subtitle1"
          style={{fontFamily: props.font}}>
        {i.job_title}
        </Typography>
        <br />
        <Typography variant="body2" style={{fontFamily: props.bodyFont}}>
        {startMonth}/{startYear} - {endMonth}/{endYear}
        </Typography>
        <br/>
        <Typography variant="body2" style={{fontFamily: props.bodyFont}}>
        {i.job_description}
        </Typography>
      </div>
    )
  })


  

  return(

    <Container style={{backgroundColor: props.color}} className={classes.root}>
      <div className={classes.head}>
        <div className={classes.name}>
          <Typography
              variant="h2"
              style={{fontFamily: props.font}}
          >
            {props.data.basicInfo.userName}
          </Typography>
        </div>
        <div className={classes.contact} style={{fontFamily: props.bodyFont}}>
          Address: {basicInfo.userAddress}
          <br />
          Email: {basicInfo.userEmail}
          <br />
          Github: {basicInfo.userGithub}
          <br />
          Phone: {basicInfo.userPhone}
        </div>
      </div>
      <br />
      <Divider className={classes.divider} />

      <section name="skills" className={classes.border} style={{borderColor: props.borderColor}} >
        <Typography
          className={classes.name}
          variant="h6"
          style={{fontFamily: props.font}}
        >
          My Skills
        </Typography>
        <div className={classes.skills}>
          <div className={classes.skillSet}>
            <Typography
              variant="subtitle1"
              style={{fontFamily: props.font}}
            >
              Languages
            </Typography>
            {languagesList}
          </div>
          <div className={classes.skillSet}>
            <Typography
              variant="subtitle1"
              style={{fontFamily: props.font}}
            >
              Testing & Databases
            </Typography>
            {testingList}
          </div>
          <div className={classes.skillSet}>
            <Typography
              variant="subtitle1"
              style={{fontFamily: props.font}}
            >
              Frameworks
            </Typography>
            {frameworksList}
          </div>
        </div>
      </section>
      <br />
      <Divider className={classes.divider} />
      <section name="projects" className={classes.border} style={{borderColor: props.borderColor}} >
        <Typography
          className={classes.name}
          variant="h6"
          style={{fontFamily: props.font}}
        >
          My Projects
        </Typography>
      <div className={classes.projects}>
      {myProjects}
      </div> 
      </section>
      <Divider className={classes.divider} />
      <section name="work_experience" className={classes.border} style={{borderColor: props.borderColor}} >
        <Typography
          className={classes.name}
          variant="h6"
          style={{fontFamily: props.font}}
        >
          My Jobs
        </Typography>
      <div className={classes.jobs}>
      {myJobs}
      </div>
      </section>
      <section name="basic_info">

      </section>
    </Container> 

  )
}