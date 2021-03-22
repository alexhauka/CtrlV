import React, { useEffect } from 'react';
import { makeStyles, TextField, Typography, Container, Divider, InputAdornment}
 from '@material-ui/core'
 import { Link } from 'react-router-dom';


const useStyles = makeStyles(() => ({
  root_true: {
    maxHeight: '11in',
    minHeight:'11in',
    padding: 10,
    lineHeight: .3,
    overflow:'hidden',
    fontSize: "100%",
  },
  root_false:{
    // maxHeight: '11in',
    // padding: 10,
    minHeight: '100%',
    paddingTop: "2.5%",
    fontSize: "100%",
    lineHeight: .5,
  },
  head_true: {
    display:'flex',
    direction: 'row',
  },
  head_false: {
    display:'flex',
    direction: 'row',
    // backgroundColor: 'brown',
  },
  contact_true: {
    display:'flex',
    direction:'column',
    lineHeight:'normal',
    textAlign:'right',
    justifyContent:'space-between',
    // backgroundColor:'red'
  },
  contact_false: {
    display:'flex',
    direction:'column',
    justifyContent:'space-evenly',
    marginBottom:'1em',
    lineHeight: 1,
    // backgroundColor:'orange',
    fontSize: ".1rem"
  },
  name_true: {
    flexGrow: 2,
    // backgroundColor:'blue',
    textAlign:'center',
    marginBottom: "5px"
  },
  name_false: {
    flexGrow: 2,
    fontSize: ".2rem",
    // backgroundColor:'blue',
    textAlign:'center',
    marginBottom: "5px"
  },
  title_true: {
    
  },
  myName: {
    // backgroundColor:'blue',
    fontSize: "1.5rem"
  },
  title_false: {
    // backgroundColor:'red',
    fontSize: ".2rem"
  },
  skills: {
    display:'flex',
    direction: 'row',
    justifyContent:'space-around'
  },

  skillSet: {
    textAlign:'center'
  },

  liveURL_true: {
    // textDecoration: 'none',
    marginBottom: 15,
    color: "blue",
    fontSize: '1.2em',
  },
  liveURL_false: {
    color: "blue",
    fontSize: '1.2em',
    // backgroundColor: 'green',
    fontSize: ".2rem"
  },
  subtitle_true: {

  },
  subtitle_false:{
    // backgroundColor: 'yellow',
    fontSize: ".2rem"
  },
  body_true:{

  },
  body_false: {
    // backgroundColor: 'pink',
    fontSize: "5%",
    lineHeight: 0.95
  },


  projects: {
    display:'flex',
    direction: 'row',
    justifyContent:'space-evenly',
  },

  project: {
    maxWidth:"30%",
    minWidth:'30%',
    overflowWrap: 'break-word',
    textAlign: 'center',
    // maxHeight:"30%"
  },
  jobs: {
    display:'flex',
    direction: 'row',
    justifyContent:'space-evenly',
    maxHeight: "33%"
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
  border_true: {
    border: "solid 2px",
    borderRadius: 20,
    padding: 5
  },
  border_false: {
    border: "solid 1px",
    borderRadius: 20,
    padding: 5
  },
  profession_true: {
    fontSize: 25,
    width: "50%",
    marginLeft: '10px'
  },
  profession_false: {
    fontSize: ".2rem",
    width: "-webkit-fill-available",
    marginLeft: '10px'
  },
  about_true: {
    marginBottom:5
  },
  about_false:{

  }

}));



export default function TemplateOne(props) {
  const ABOUT_ME_LIMIT = 505;
  const PROFESSION_LIMIT = 25;
  const [values, setValues] = React.useState({
    about: props.aboutMe,
    profession: props.profession
  })

  const { liftAboutMe, liftProfession } = props;

  console.log("Template one props: ", props)

  const { basicInfo, projects, skills, work_experience } = props.data
  // console.log("This is templateONe props", props)
  const classes = useStyles();
  const [active, setActive] = React.useState(props.active)
  // style={{backgroundColor: props.color}}
  // style={{borderColor: props.borderColor}}

  const handleAboutMeChange = about => event => {
    setValues({ ...values, [about]: event.target.value });
  };

  const handleProfessionChange = profession => event => {
    setValues({ ...values, [profession]: event.target.value })
  }


  if (liftAboutMe) {

    useEffect(() => {
  
      liftAboutMe(values.about)
      liftProfession(values.profession)
    })

  } else {
    values.about = props.data.aboutMe
    values.profession = props.data.profession
  }

  




  const hardSkills = skills
  const languagesList = hardSkills.map(s => {
    if (s.type === 'language') {
      return(
       <Typography 
       className={ active ? classes.body_true : classes.body_false}
       variant="body2" 
       style={{fontFamily: props.bodyFont}}>
       {s.name}
       </Typography>
      )
    }
    return null;
  })
  const frameworksList = hardSkills.map(s => {
  if (s.type ==='framework') {
    return (
      <Typography
      className={ active ? classes.body_true : classes.body_false} 
      variant="body2" 
      style={{fontFamily: props.bodyFont}}>
      {s.name}
      </Typography>
    )
  }
  return null;
})
  const testingList = hardSkills.map(s => {
    if (s.type === 'testing' || s.type === 'database'){
      return ( 
        <Typography
        className={ active ? classes.body_true : classes.body_false} 
        variant="body2" 
        style={{fontFamily: props.bodyFont}}>
        {s.name}
        </Typography>
      )
    }
    return null;
  })

  const testProject = projects[0]
  // console.log("This is test", work_experience)
  const myProjects = projects.map(i => {
    return (
      <div className={classes.project} >
        <div>
        <a className={ active ? classes.liveURL_true : classes.liveURL_false }
         style={{fontFamily: props.font}} 
         href={`https://${i.url}`} 
         target="__blank">
           {i.title}
        </a>
        </div>
        <br />
        <Typography
        className={ active ? classes.subtitle_true : classes.subtitle_false }
         variant="body2" 
         style={{fontFamily: props.bodyFont}}>
        {i.primary_language}/{i.secondary_language}
        </Typography>
        <br />
        <Typography
        className={ active ? classes.body_true : classes.body_false} 
        variant="body2" 
        style={{fontFamily: props.bodyFont}}>
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
          className={ active? classes.title_true : classes.title_false }
          style={{fontFamily: props.font}}>
        {i.job_title}
        </Typography>
        <br />
        <Typography 
        className={ active ? classes.subtitle_true : classes.subtitle_false }
        variant="body2" 
        style={{fontFamily: props.bodyFont}}>
        {startMonth}/{startYear} - {endMonth}/{endYear}
        </Typography>
        <br/>
        <Typography
        className={ active ? classes.body_true : classes.body_false}
        variant="body2" 
        style={{fontFamily: props.bodyFont}}>
        {i.job_description}
        </Typography>
      </div>
    )
  })


  

  return(
    
    <Container 
      style={{backgroundColor: props.color}} 
      className={ active? classes.root_true : classes.root_false }>
      <div className={ active? classes.head_true : classes.head_false }>
        <div className={ active? classes.name_true : classes.name_false }>
          <Typography
            className={ active? classes.name_true : classes.myName }
              variant="h2"
              style={{fontFamily: props.font}}
          >
            {props.data.basicInfo.userName}
          </Typography>
          <TextField
              className={active ? classes.profession_true : classes.profession_false}
              width="auto"
              InputProps={{
                disableUnderline: true,
                style: {fontFamily: props.font}
              }}
              inputProps={{
                maxlength: PROFESSION_LIMIT,
              }}
              value={values.profession}
              placeholder="Enter your job title here"
              onChange={handleProfessionChange("profession")}
            />
        </div>
        <div className={ active? classes.contact_true : classes.contact_false }
          style={{fontFamily: props.bodyFont}}>
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
      <div className={ active? classes.about_true : classes.about_false }>
        <TextField
          InputProps={{ 
            disableUnderline: true
          }}
          // ignore the warning, this is the only way to remove underline and set maxlength.
          inputProps={{
            maxlength: ABOUT_ME_LIMIT,
            style: {fontFamily: props.bodyFont, minHeight: '23%'}
          }}
          // autoFocus
          id="outlined-multiline-static"
          // label="About me"
          multiline
          rows={4}
          rowsMax={4}
          value={values.about}
          placeholder="Tell them about yourself..."
          onChange={handleAboutMeChange("about")}
          fullWidth
        />
      </div>
      <section name="skills"
       className={ active? classes.border_true : classes.border_false }
       style={{borderColor: props.borderColor}} >
        <Typography
          className={ active? classes.name_true : classes.name_false }
          variant="h6"
          style={{fontFamily: props.font}}
        >
          My Skills
        </Typography>
        <div className={classes.skills}>
          <div className={classes.skillSet}>
            <Typography
            className={ active? classes.title_true : classes.title_false }
              variant="subtitle1"
              style={{fontFamily: props.font}}
            >
              Languages
            </Typography>
            {languagesList}
          </div>
          <div className={classes.skillSet}>
            <Typography
              className={ active? classes.title_true : classes.title_false }
              variant="subtitle1"
              style={{fontFamily: props.font}}
            >
              Testing & Databases
            </Typography>
            {testingList}
          </div>
          <div className={classes.skillSet}>
            <Typography
              className={ active? classes.title_true : classes.title_false }
              variant="subtitle1"
              style={{fontFamily: props.font}}
            >
              Frameworks
            </Typography>
            {frameworksList}
          </div>
        </div>
      </section>
      <Divider className={classes.divider} />
      <section name="projects" 
      className={ active? classes.border_true : classes.border_false }
      style={{borderColor: props.borderColor}} >
        <Typography
          className={ active? classes.name_true : classes.name_false }
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
      <section name="work_experience" 
      className={ active? classes.border_true : classes.border_false }
      style={{borderColor: props.borderColor}} >
        <Typography
          className={ active? classes.name_true : classes.name_false }
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