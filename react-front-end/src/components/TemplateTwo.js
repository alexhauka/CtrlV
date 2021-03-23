import React, { useEffect } from 'react';
import { makeStyles, TextField, Typography, Container, Divider}
 from '@material-ui/core'
//  import { Link } from 'react-router-dom';


const useStyles = makeStyles(() => ({
  root_true: {
    maxHeight: '11in',
    minHeight:'11in',
    padding: 0,
    lineHeight: .4,
    marginTop:"5%",
    overflow:'hidden',
    // paddingTop: "5%",
    fontSize: "100%",
  },
  root_false:{
    overflow:'hidden',
    // maxHeight: '11in',
    // padding: 10,
    height: '100%',
    padding: "0%",
    // marginTop: "10px",
    fontSize: "100%",
    lineHeight: .4,
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
    flexDirection: 'column',
    lineHeight:'normal',
    textAlign:'right',
    marginRight: '4%',
    marginTop: '30px',
    marginBottom: '30px',
    justifyContent:'space-between',
  },
  contactLink: {
    textDecoration: 'none',
    color: 'black',
    fontWeight: 'bold'
  },
  contactLink_false:{
    display:'flex',
    textAlign:'right',
    marginRight: '10px',
    marginTop: '15px',
    justifyContent:'space-between',
    fontSize: ".1rem",
    lineHeight:'1'
  },
  contact_false: {
    display:'flex',
    textAlign:'right',
    marginRight: '10px',
    marginTop: '15px',
    justifyContent:'space-between',
    fontSize: ".1rem",
    lineHeight:'1'
  },
  name_true: {
    flexGrow: 2,
    textAlign: 'left',
    marginLeft: '20px',
    marginBottom: "5px",
    marginTop: '15px',
    textDecorationLine: 'underline',
  },
  name_false: {
    flexGrow: 2,
    textAlign: 'left',
    marginLeft: '15px',
    marginBottom: "5px",
    marginTop: '5px',
    textDecorationLine: 'underline',
    fontSize: ".2rem",
  },
  userName_true: {
    flexGrow: 2,
    textAlign:'start',
    margin: '10px'
  },
  userName_false: {
    flexGrow: 2,
    textAlign:'start',
    // marginBottom: "5px",
    // marginLeft: '5px',
    margin:5, 
    fontSize: "1.5rem",
  },
  profession_true: {
    fontSize: '2em',
    width: "70%",
    marginLeft: '10px'
  },
  profession_false: {
    fontSize: ".4rem",
    width: "-webkit-fill-available",
    marginLeft: '5px'
  },
  title_true: {
    
  },
  myName: {
    // backgroundColor:'blue',
    fontSize: "1.5rem"
  },
  title_false: {
    // backgroundColor:'red',
    width:'max-content',
    fontSize: ".2rem"
  },
  skills: {
    display:'flex',
    // direction: 'row',
    justifyContent:'flex-start',
    // alignItems:'baseline',
    // marginLeft: '20px',
    marginRight: '50px',
    marginBottom: '20px'
  },
  skills_false:{
    display:'flex',
    // direction: 'row',
    justifyContent:'flex-start',
    // alignItems:'baseline',
    // marginLeft: '20px',
    // marginRight: '50px',
    marginBottom: '20px'
  },

  skillSet: {
    width: '30%',
    marginRight: '20px',
    marginLeft: '20px',
    overflowWrap: 'break-word',
    textAlign: 'left'
  },
  skillSet_false:{
    width: '30%',
    marginRight: '20px',
    marginLeft: '15px',
    overflowWrap: 'break-word',
    textAlign: 'left'
  },

  liveURL_true: {
    display: 'flex',
    // marginLeft: '30px',
    marginBottom:5,
    textDecoration: 'none',
    textAlign: 'center',
    color: "black",
    fontWeight: 'bold',
    fontSize: '1.2em',
  },
  liveURL_false: {
    display: 'flex',
    // marginLeft: '30px',
    textDecoration: 'none',
    textAlign: 'center',
    color: "black",
    fontWeight: 'bold',
    fontSize: ".2rem"
  },
  subtitle_true: {

  },
  subtitle_false:{
    fontSize: ".2rem"
  },
  skillsBody_true:{
    // display: 'list-item',
    // listStylePosition: 'inside',
    // marginLeft: '25px'
  },
  skillsBody_false: {
    // display: 'list-item',
    // listStylePosition: 'inside',
    marginLeft: '15px',
    fontSize: "5%",
    lineHeight: 0.95
  },

  projects: {
    display:'flex',
    alignItems:'baseline',
    minWidth: 'fit-content',
    marginTop: '10px',
    marginBottom: '5px'
  },
  
  project: {
    textAlign:'left',
    justifyContent:'flex-start',
    marginLeft: '20px',
    paddingBottom: '20px',
    marginBottom: '5px',
    marginTop: '5px',
    width: '30%'
  },
  project_false:{
    textAlign:'left',
    justifyContent:'flex-start',
    marginLeft: '15px',
    // paddingBottom: '20px',
    // marginBottom: '5px',
    marginTop: '5px',
    width: '30%'
  },
  projectsBody_true:{
    // fontSize: '1rem',
    width: "90%",
    textAlign:'left',
  },
  projectsBody_false: {
    fontSize: ".4rem",
    width: "-webkit-fill-available",
    // textAlign:'left',
    // fontSize: "5%",
    // lineHeight: 0.95
  },
  jobs: {
    display:'flex',
    flexDirection: 'row',
    justifyContent:'flex-start',
    maxHeight: "33%",
    minWidth: 'fit-content'
  },

  job: {
    maxWidth:"30%",
    minWidth:'30%',
    // marginRight: '20px',
    marginLeft: '20px',
    overflowWrap: 'break-word',
    textAlign: 'left'
  },
  job_false:{
    maxWidth:"29%",
    minWidth:'29%',
    // marginRight: '20px',
    marginLeft: '15px',
    overflowWrap: 'break-word',
    textAlign: 'left'
  },
  jobTitle: {
    fontSize: '1.2em',
  },
  body_true:{

  },
  body_false: {
    // width: "70%",
    fontSize: "5%",
    lineHeight: 0.95
  },

  divider: {
    color: 'grey',
    // marginTop: 5,
    margin: 10,
    // marginBottom: 5
  },
  border_true: {

    // padding: 5
  },
  border_false: {

    // padding: 5
  },
  about_true: {
    width:'97%',
    // margin:'auto',
    marginLeft:10,
    lineHeight:'normal',
    paddingBottom: '5px'
  },
  about_false:{
    width:'95%',
    textAlign:'left',
    marginLeft:5,
    lineHeight:'.9',
    fontSize: ".2rem",
  },
  TextField: {
    disableUnderline: true,
  }

}));



export default function TemplateTwo(props) {
  const ABOUT_ME_LIMIT = 505;
  const PROFESSION_LIMIT = 25;
  const [values, setValues] = React.useState({
    about: props.aboutMe,
    profession: props.profession
  })

  const { liftAboutMe, liftProfession } = props;

  const { basicInfo, projects, skills, work_experience } = props.data
  // console.log(basicInfo)
  const classes = useStyles();
  const [active, setActive] = React.useState(props.active)
  const [building, setBuilding] = React.useState(props.building)
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


  let langArray = []
  let frameArray = []
  let dbTestingArray = []


  hardSkills.map(s => {
    if (s.type === 'language') {
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




//   const languagesList = hardSkills.map(s => {
//     if (s.type === 'language') {
//       return(
      //  <Typography 
      //  className={ active ? classes.skillsBody_true : classes.skillsBody_false}
      //  variant="body2" 
      //  style={{fontFamily: props.bodyFont}}>
      //  {s.name}
      //  </Typography>
//       )
//     }
//     return null;
//   })
//   const frameworksList = hardSkills.map(s => {
//   if (s.type ==='framework') {
//     return (
      // <Typography
      // className={ active ? classes.skillsBody_true : classes.skillsBody_false} 
      // variant="body2" 
      // style={{fontFamily: props.bodyFont}}>
      // {s.name}
      // </Typography>
//     )
//   }
//   return null;
// })
//   const testingList = hardSkills.map(s => {
//     if (s.type === 'testing' || s.type === 'database'){
//       return ( 
        // <Typography
        // className={ active ? classes.skillsBody_true : classes.skillsBody_false} 
        // variant="body2" 
        // style={{fontFamily: props.bodyFont}}>
        // {s.name}
        // </Typography>
//       )
//     }
//     return null;
//   })

  const testProject = projects[0]
  // console.log("This is test", work_experience)
  const myProjects = projects.map(i => {
    return (
      <div className={ active ? classes.project : classes.project_false }>
        <div>
        <a className={ active ? classes.liveURL_true : classes.liveURL_false }
         style={{fontFamily: props.font}} 
         href={`${i.url}`} 
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
        className={ active ? classes.projectsBody_true : classes.projectsBody_false} 
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
      <div className={ active? classes.job : classes.job_false } >
        <Typography variant="subtitle1"
          className={ active? classes.title_true : classes.title_false }
          style={{fontFamily: props.font, fontWeight: 'bold'}}>
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
      style={{background: props.color}} 
      className={ active? classes.root_true : classes.root_false }>

      <div style={{backgroundColor: 'white'}} >

        <div className={ active? classes.head_true : classes.head_false }>
          <div className={ active? classes.userName_true : classes.userName_false }> 
            <Typography
              className={ active? classes.userName_true : classes.userName_false }
              style={{fontFamily: props.font}}
                variant="h2"
            >
              {props.data.basicInfo.userName}
            </Typography>
            {building &&
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
            }
            {!building && active &&
            <p style={{fontFamily: props.bodyFont}} className={classes.profession_true}>{props.data.profession}</p>
            }
            {!building && !active &&
            <p style={{fontFamily: props.bodyFont}} className={classes.profession_false}>{props.data.profession}</p>
            }
          </div>
          <div className={ active? classes.contact_true : classes.contact_false }
            style={{fontFamily: props.bodyFont}}>
              <div className={ active? classes.contactLink : classes.contactLink_false }>
                <a  href={`mailto:${basicInfo.userEmail}`} target="__blank">
                  {basicInfo.userEmail}
                </a>
                <br />
              </div>
              <div className={ active? classes.contactLink : classes.contactLink_false }>
                <a  href={`${basicInfo.userGithub}`} target="__blank">
                  Github
                </a>
                <br />
              </div>
              <div>
                {basicInfo.userAddress}
                <br />
              </div>
              <div>
                {basicInfo.userPhone}
              </div>
          </div>
        </div>
        {/* <br /> */}
        <div className={ active? classes.about_true : classes.about_false }>
          {building &&
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
          }
          {!building && active &&
          <Typography
            style={{fontFamily: props.bodyFont}}
            className={classes.about_true}
            variant='subtitle1'
            >
            {props.data.aboutMe}
          </Typography>
            // <p  className={classes.about_true}></p>
          }
          {!building && !active &&
            <p style={{fontFamily: props.bodyFont}} className={classes.about_false}>{props.data.aboutMe}</p>
          }
      </div>
        
      </div>

      <div style={{background: props.color}}>


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
          <div className={ active? classes.skills : classes.skills_false }>
            <div className={ active? classes.skillSet : classes.skillSet_false }>
              <Typography
              className={ active? classes.title_true : classes.title_false }
                variant="subtitle1"
                style={{fontFamily: props.font, fontWeight: 'bold'}}
              >
                Languages
              </Typography>
              <Typography 
              className={ active ? classes.skillsBody_true : classes.skillsBody_false}
              variant="body2" 
              style={{fontFamily: props.bodyFont}}>
              {languagesList}
              </Typography>
              
            </div>
            <div className={ active? classes.skillSet : classes.skillSet_false }>
              <Typography
                className={ active? classes.title_true : classes.title_false }
                variant="subtitle1"
                style={{fontFamily: props.font, fontWeight: 'bold'}}
              >
                Testing & Databases
              </Typography>
              <Typography
              className={ active ? classes.skillsBody_true : classes.skillsBody_false} 
              variant="body2" 
              style={{fontFamily: props.bodyFont}}>
              {testingList}
              </Typography>
              
            </div>
            <div className={ active? classes.skillSet : classes.skillSet_false }>
              <Typography
                className={ active? classes.title_true : classes.title_false }
                variant="subtitle1"
                style={{fontFamily: props.font, fontWeight: 'bold'}}
              >
                Frameworks
              </Typography>
              <Typography
              className={ active ? classes.skillsBody_true : classes.skillsBody_false} 
              variant="body2" 
              style={{fontFamily: props.bodyFont}}>
              {frameworksList}
              </Typography>
              
            </div>
          </div>
        </section>
        <Divider className={classes.divider} style={{background: props.borderColor}}/>
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
        <Divider className={classes.divider} style={{background: props.borderColor}}/>
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

      </div>


    </Container> 

  )
}