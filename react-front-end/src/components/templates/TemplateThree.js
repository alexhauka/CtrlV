import React, { useEffect } from 'react';
import { makeStyles, TextField, Typography, Container, Divider, InputAdornment}
 from '@material-ui/core'
 import { Link } from 'react-router-dom';


const useStyles = makeStyles(() => ({
  profession_true: {
    display: 'flex',
    alignItems: 'center',
    fontSize: '2em',
    width: "-webkit-fill-available",
    textAlign: 'center',
    marginLeft: '65px'
  },
  root:{
    maxHeight: '11in',
    minHeight:'11in',
  },
  root_false:{
    overflow:'hidden',
    height: '100%',
    marginTop: "5px",
    marginBottom: "5px",
    fontSize: "100%",
    lineHeight: .4,
  },
  topThird:{
    minHeight:'25%',
  },
  topThird_false:{

  },
  topInfo:{
    paddingTop:'1%',
    minHeight:'3%',
    display:'flex',
    justifyContent:'space-around',
    margin:5
  },
  topInfo_false:{ 
    display:'flex',
    justifyContent:'space-around',
  },
  bodyFont:{

  },
  bodyFont_false:{
    fontSize:'.5em',
    lineHeight:'.8'
  },

  title:{
    minHeight:'10%',
    paddingTop:"2%",
    textAlign:'center'
  },
  title_false:{
    fontSize:'.8em',
    marginTop: 10
  },
  heading_false:{
    fontSize:'1em'
  },
  name:{

  },
  name_false:{
    fontSize:'2em'
  },
  input:{

  },
  about_true:{
    textAlign:'center',
    marginBottom:10
  },
  midThird:{
    display:'flex',
    flexDirection:'column',
    minHeight:'15%',
    filter: 'hue-rotate(180deg)',
    border:'1px solid',
  },
  projects:{
    display:'flex',
    justifyContent:'space-around',
    minWidth:'95%',
    padding:'1%',
    margin:5
  },
  project:{
    maxWidth:'30%'
  },
  subtitle_false:{
    fontSize:'.6em'
  },
  liveURL_false:{
    fontSize:'.8em'
  },
  liveURL_true: {
    textDecoration: 'none',
    color: "black",
    fontWeight: 'bold',
    fontSize: '1.2em',
  }, 
  bottomThird:{
    display:'flex',
  },
  skills:{
    minWidth:"20%",
    border:'1px solid black',
    padding:'2%',
    paddingTop: 0,
    marginTop:5,
    textAlign:'left'
  },
  work:{
    minHeight:'20%',
    minWidth:'60%',
    textAlign:'left',
    border: '1px solid black',
    paddingLeft: 10,
    marginTop:5,
    marginLeft:5
  },
  skillSet:{
    padding:'2%',
    marginBottom:'10%'
  },
  job:{
    padding:'1%'
  },
  body_true:{

  }


}));



export default function TemplateThree(props) {
  const ABOUT_ME_LIMIT = 505;
  const PROFESSION_LIMIT = 25;
  const [values, setValues] = React.useState({
    about: props.aboutMe,
    profession: props.profession
  })

  

  const { liftAboutMe, liftProfession } = props;

  console.log("Template one props: ", props.data)

  const { basicInfo, projects, skills, work_experience } = props.data
  
  const classes = useStyles();
  const [active, setActive] = React.useState(props.active)
  const [building, setBuilding] = React.useState(props.building)

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
    } else if (s.type ==='framework') {
      frameArray.push(s.name)
    } else {
      dbTestingArray.push(s.name)
    }
  })

  const languagesList = langArray.join(', ')
  const frameworksList = frameArray.join(', ')
  const testingList = dbTestingArray.join(', ')

  const myProjects = projects.map(i => {
    return (
      <div className={classes.project}>
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
        className={ active ? classes.body_true : classes.bodyFont_false} 
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
    const endYear = i.job_end_date.slice(0,4)
    const endMonth = i.job_end_date.slice(5,7)  
    
    return (
      <div className={classes.job} >
        <Typography variant="subtitle1"
          className={ active? classes.title_true : classes.title_false }
          style={{fontFamily: props.font}}>
        <strong>{i.job_title}</strong>
        </Typography>
        <Typography 
        className={ active ? classes.subtitle_true : classes.subtitle_false }
        variant="body2" 
        style={{fontFamily: props.bodyFont}}>
        {startMonth}/{startYear} - {endMonth}/{endYear}
        </Typography>
        
        <Typography
        className={ active ? classes.body_true : classes.bodyFont_false}
        variant="body2" 
        style={{fontFamily: props.bodyFont}}>
        {i.job_description}
        </Typography>
      </div>
    )
  })

  return (
    <Container className={active? classes.root: classes.root_false} style={{background: props.color}}>
      <div className={active? classes.topThird: classes.topThird_false}  name="top third"> 
        <div className={active? classes.topInfo: classes.topInfo_false} name='top info'>
          <Typography
           className={active? classes.bodyFont: classes.bodyFont_false}
           style={{fontFamily: props.bodyFont}}>
          <strong>Email: </strong>{basicInfo.userEmail}
          </Typography>
          <Typography
           className={active? classes.bodyFont: classes.bodyFont_false}
           style={{fontFamily: props.bodyFont}}>
           <strong>Phone: </strong> {basicInfo.userPhone}
          </Typography>
          < Typography
            className={active? classes.bodyFont: classes.bodyFont_false}
            style={{fontFamily: props.bodyFont}}>
            <strong>Github: </strong>{basicInfo.userGithub}
          </Typography>
        </div>
        <div className={active? classes.title: classes.title_false} name='username/github'>
          <Typography 
          className={active? classes.name: classes.name_false}
          variant="h2" 
          style={{fontFamily: props.font}}>
            {basicInfo.userName}
          </Typography>
          <Typography  
          className={active? classes.bodyFont: classes.bodyFont_false}
          >
            {basicInfo.userAddress}
          </Typography>
        </div>
          {building &&
            <div className={classes.input} name='title/about me'>
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
                multiline
                rows={4}
                rowsMax={4}
                value={values.about}
                placeholder="Tell them about yourself..."
                onChange={handleAboutMeChange("about")}
                fullWidth
              />
          </div>
          }
          {!building && !active &&
            <div>
              <p style={{fontFamily: props.bodyFont}} className={classes.bodyFont_false}>{props.data.profession}</p>
              <p style={{fontFamily: props.bodyFont}} className={classes.bodyFont_false}>{props.data.aboutMe}</p>
            </div>
          }
          {!building && active &&
          <div className={classes.about}>
            <Typography
              variant="h6"
              style={{fontFamily: props.bodyFont}}
              className={classes.about_true}>
                {props.data.profession}
            </Typography> 
            <Typography
            variant='body2'
            style={{fontFamily: props.bodyFont}} 
            className={classes.about_true}
            >
              {props.data.aboutMe}
            </Typography>
          </div>
          }
      
      </div>
      <div className={classes.midThird} style={{borderColor: props.borderColor, background: props.color}}>
        <div  name='projects' >
        <Typography
          className={ active? classes.name : classes.heading_false }
          variant="h6"
          style={{fontFamily: props.font}}
        >
          <em>My Projects</em>
        </Typography>
          <div className={classes.projects}>
        {myProjects}
          </div>
        </div>
      </div>
      <div className={classes.bottomThird} name = 'bottom third'>
        <div className={classes.skills} style={{borderColor: props.borderColor}} name='skills'>
          <Typography
            className={ active? classes.name_true : classes.heading_false }
            variant="h6"
            style={{fontFamily: props.font}}
          >
            <em>My Skills</em>
          </Typography>
          <div className={classes.skillSet} >
            <Typography
                className={ active? classes.title_true : classes.title_false }
                  variant="subtitle1"
                  style={{fontFamily: props.font}}
                >
                  <strong>Languages</strong>
                </Typography>
                <Typography 
                className={ active ? classes.body_true : classes.bodyFont_false}
                variant="body2" 
                style={{fontFamily: props.bodyFont}}>
                {languagesList}
            </Typography>
          </div>
          <div className={classes.skillSet}>
            <Typography
              className={ active? classes.title_true : classes.title_false }
              variant="subtitle1"
              style={{fontFamily: props.font}}
            >
              <strong>Testing & Databases</strong>
            </Typography>
            <Typography
            className={ active ? classes.body_true : classes.bodyFont_false} 
            variant="body2" 
            style={{fontFamily: props.bodyFont}}>
              {testingList}
            </Typography>
          </div>
          <div className={classes.skillSet}>
            <Typography
              className={ active? classes.title_true : classes.title_false }
              variant="subtitle1"
              style={{fontFamily: props.font}}
            >
              <strong>Frameworks</strong>
            </Typography>
            <Typography
              className={ active ? classes.body_true : classes.bodyFont_false} 
              variant="body2" 
              style={{fontFamily: props.bodyFont}}>
                {frameworksList}
            </Typography>
          </div>
        </div>
        <Divider orientation='vertical'/>
        <div className={classes.work} style={{borderColor: props.borderColor}} name='work'>
        <Typography
          className={ active? classes.name_true : classes.heading_false }
          variant="h6"
          style={{fontFamily: props.font}}
        >
          <em>My Jobs</em>
        </Typography>
          {myJobs}
        </div>
      </div>
    </Container>
  ); 
}