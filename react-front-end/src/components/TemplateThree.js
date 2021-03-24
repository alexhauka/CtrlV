import React, { useEffect } from 'react';
import { makeStyles, TextField, Typography, Container, Divider, InputAdornment}
 from '@material-ui/core'
 import { Link } from 'react-router-dom';


const useStyles = makeStyles(() => ({
  // root_true: {
  //   maxHeight: '11in',
  //   minHeight:'11in',
  //   padding: 10,
  //   lineHeight: .3,
  //   overflow:'hidden',
  //   fontSize: "100%",
  // },
  // root_false:{
  //   // maxHeight: '11in',
  //   // padding: 10,
  //   minHeight: '100%',
  //   paddingTop: "2.5%",
  //   fontSize: "100%",
  //   lineHeight: .4,
  // },
  // alignment_true:{
  //   width:'7.5%'
  // },
  // alignment_false:{

  // },
  // head_true: {
  //   display:'flex',
  //   direction: 'row',
  // },
  // head_false: {
  //   display:'flex',
  //   direction: 'row',
  //   // backgroundColor: 'brown',
  // },
  // contact_true: {
  //   display:'flex',
  //   direction:'column',
  //   lineHeight:'normal',
  //   textAlign:'right',
  //   justifyContent:'space-between',
  //   // backgroundColor:'red'
  // },
  // contact_false: {
  //   display:'flex',
  //   direction:'column',
  //   textAlign:'right',
  //   justifyContent:'space-evenly',
  //   marginBottom:'1em',
  //   lineHeight: 1,
  //   // backgroundColor:'orange',
  //   fontSize: ".1rem"
  // },
  // name_true: {
  //   flexGrow: 2,
  //   // backgroundColor:'blue',
  //   textAlign:'center',
  //   marginBottom: "5px"
  // },
  // name_false: {
  //   flexGrow: 2,
  //   fontSize: ".2rem",
  //   // backgroundColor:'blue',
  //   textAlign:'center',
  //   marginBottom: "5px"
  // },
  // writer_name_true:{
  //   flexGrow: 2,
  //   // backgroundColor:'blue',
  //   textAlign:'left',
  //   marginBottom: "5px"
  // },
  // writer_name_false:{
  //   flexGrow: 2,
  //   fontSize: ".2rem",
  //   // backgroundColor:'blue',
  //   textAlign:'left',
  //   marginBottom: "5px"
  // },
  // title_true: {
    
  // },
  // myName: {
  //   // backgroundColor:'blue',
  //   fontSize: "1.5rem"
  // },
  // title_false: {
  //   // backgroundColor:'red',
  //   fontSize: ".2rem"
  // },
  // skills: {
  //   display:'flex',
  //   direction: 'row',
  //   justifyContent:'space-around',
  //   marginBottom: '10px'
  // },

  // skillSet: {
  //   textAlign:'center',
  //   width: '30%'
  // },

  // liveURL_true: {
  //   // textDecoration: 'none',
  //   marginBottom: 15,
  //   color: "blue",
  //   fontSize: '1.2em',
  // },
  // liveURL_false: {
  //   color: "blue",
  //   fontSize: '1.2em',
  //   // backgroundColor: 'green',
  //   fontSize: ".2rem"
  // },
  // subtitle_true: {

  // },
  // subtitle_false:{
  //   // backgroundColor: 'yellow',
  //   fontSize: ".2rem"
  // },
  // body_true:{

  // },
  // body_false: {
  //   // backgroundColor: 'pink',
  //   fontSize: "5%",
  //   lineHeight: 0.95
  // },


  // projects: {
  //   display:'flex',
  //   direction: 'row',
  //   justifyContent:'space-evenly',
  //   marginBottom: '10px'
  // },

  // project: {
  //   maxWidth:"30%",
  //   minWidth:'30%',
  //   overflowWrap: 'break-word',
  //   textAlign: 'center',
  //   // maxHeight:"30%"
  // },
  // jobs: {
  //   display:'flex',
  //   direction: 'row',
  //   justifyContent:'space-evenly',
  //   maxHeight: "33%",
  //   marginBottom: '10px'
  // },

  // job: {
  //   maxWidth:"30%",
  //   minWidth:'30%',
  //   overflowWrap: 'break-word',
  //   textAlign: 'center'
  // },
  // jobTitle: {
  //   fontSize: '1.2em',
  // },

  // divider: {
  //   marginTop: 5,
  //   marginBottom: 5
  // },
  // border_true: {
  //   border: "solid 2px",
  //   borderRadius: 20,
  //   padding: 5
  // },
  // border_false: {
  //   border: "solid 1px",
  //   borderRadius: 20,
  //   padding: 5
  // },
  // profession_true: {
  //   fontSize: '2em',
  //   width: "70%",
  //   // marginLeft: '10px'
  // },
  // profession_false: {
  //   fontSize: ".4rem",
  //   width: "-webkit-fill-available",
  //   // marginLeft: '10px'
  // },
  // about_true: {
  //   width:'92%',
  //   margin:'auto',
  //   lineHeight:'normal',
  //   marginBottom:5
  // },
  // about_false:{
  //   lineHeight:'.9',
  //   fontSize: ".2rem",
  // }
  root:{
    maxHeight: '11in',
    minHeight:'11in',
  },
  root_false:{
    overflow:'hidden',
    // maxHeight: '11in',
    // margin: 10,
    height: '100%',
    // padding: "0%",
    marginTop: "5px",
    marginBottom: "5px",
    fontSize: "100%",
    lineHeight: .4,
  },
  topThird:{
    minHeight:'25vh',
  },
  topThird_false:{

  },
  topInfo:{
    paddingTop:'1vh',
    minHeight:'3vh',
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
    minHeight:'10vh',
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
    // minHeight:'12vh',
    // backgroundColor:'grey',
    // margin:5
  },
  about_true:{
    textAlign:'center',
    marginBottom:10
  },
  midThird:{
    display:'flex',
    flexDirection:'column',
    minHeight:'15vh',
    filter: 'hue-rotate(180deg)',
    border:'1px solid',
  },
  projects:{
    // minHeight:'20vh',
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
    minHeight:'20vh',
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
    // textAlign:'justify'
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
  // console.log("This is templateONe props", props)
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

  const testProject = projects[0]
  // console.log("This is test", work_experience)
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
        {/* <br /> */}
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




// return(
    
//   <Container 
//     style={{backgroundColor: props.color}} 
//     className={ active? classes.root_true : classes.root_false }>
//     <div className={ active? classes.head_true : classes.head_false }>
//       <div className={ active? classes.alignment_true : classes.alignment_false }></div>
//       <div className={ active? classes.writer_name_true : classes.writer_name_false }>
//         <Typography
//           className={ active? classes.writer_name_true : classes.myName }
//             variant="h2"
//             style={{fontFamily: props.font}}
//         >
//           {props.data.basicInfo.userName}
//         </Typography>
//         {building &&
//         <TextField
//             className={active ? classes.profession_true : classes.profession_false}
//             width="auto"
//             InputProps={{
//               disableUnderline: true,
//               style: {fontFamily: props.font}
//             }}
//             inputProps={{
//               maxlength: PROFESSION_LIMIT,
//             }}
//             value={values.profession}
//             placeholder="Enter your job title here"
//             onChange={handleProfessionChange("profession")}
//           />
//         }
//         {!building && active &&
//           <p style={{fontFamily: props.bodyFont}} className={classes.profession_true}>{props.data.profession}</p>
//         }
//         {!building && !active &&
//           <p style={{fontFamily: props.bodyFont}} className={classes.profession_false}>{props.data.profession}</p>
//         }
//       </div>
//       <div className={ active? classes.contact_true : classes.contact_false }
//         style={{fontFamily: props.bodyFont}}>
//         Address: {basicInfo.userAddress}
//         <br />
//         Email: {basicInfo.userEmail}
//         <br />
//         Github: {basicInfo.userGithub}
//         <br />
//         Phone: {basicInfo.userPhone}
//       </div>
//     </div>
//     <br />
//     <div className={ active? classes.about_true : classes.about_false }>
//       {building &&
//       <TextField
//         className={ active? classes.about_true : classes.about_false }
//         InputProps={{ 
//           disableUnderline: true
//         }}
//         // ignore the warning, this is the only way to remove underline and set maxlength.
//         inputProps={{
//           maxlength: ABOUT_ME_LIMIT,
//           style: {fontFamily: props.bodyFont, minHeight: '23%'}
//         }}
//         // autoFocus
//         id="outlined-multiline-static"
//         // label="About me"
//         multiline
//         rows={4}
//         rowsMax={4}
//         value={values.about}
//         placeholder="Tell them about yourself..."
//         onChange={handleAboutMeChange("about")}
//         fullWidth
//       />
//       }
//       {!building && active &&
//         <p style={{fontFamily: props.bodyFont}} className={classes.about_true}>{props.data.aboutMe}</p>
//       }
//       {!building && !active &&
//         <p style={{fontFamily: props.bodyFont}} className={classes.about_false}>{props.data.aboutMe}</p>
//       }
//     </div>
//     <section name="skills"
//      className={ active? classes.border_true : classes.border_false }
//      style={{borderColor: props.borderColor}} >
//       <Typography
//         className={ active? classes.name_true : classes.name_false }
//         variant="h6"
//         style={{fontFamily: props.font}}
//       >
//         My Skills
//       </Typography>
//       <div className={classes.skills}>
//         <div className={classes.skillSet}>
//           <Typography
//           className={ active? classes.title_true : classes.title_false }
//             variant="subtitle1"
//             style={{fontFamily: props.font}}
//           >
//             Languages
//           </Typography>
//           <Typography 
//           className={ active ? classes.body_true : classes.body_false}
//           variant="body2" 
//           style={{fontFamily: props.bodyFont}}>
//           {languagesList}
//           </Typography>
          
//         </div>
//         <div className={classes.skillSet}>
//           <Typography
//             className={ active? classes.title_true : classes.title_false }
//             variant="subtitle1"
//             style={{fontFamily: props.font}}
//           >
//             Testing & Databases
//           </Typography>
//           <Typography
//           className={ active ? classes.body_true : classes.body_false} 
//           variant="body2" 
//           style={{fontFamily: props.bodyFont}}>
//           {testingList}
//           </Typography>
          
//         </div>
//         <div className={classes.skillSet}>
//           <Typography
//             className={ active? classes.title_true : classes.title_false }
//             variant="subtitle1"
//             style={{fontFamily: props.font}}
//           >
//             Frameworks
//           </Typography>
//           <Typography
//           className={ active ? classes.body_true : classes.body_false} 
//           variant="body2" 
//           style={{fontFamily: props.bodyFont}}>
//           {frameworksList}
//           </Typography>
          
//         </div>
//       </div>
//     </section>
//     <Divider className={classes.divider} />
//     <section name="projects" 
//     className={ active? classes.border_true : classes.border_false }
//     style={{borderColor: props.borderColor}} >
//       <Typography
//         className={ active? classes.name_true : classes.name_false }
//         variant="h6"
//         style={{fontFamily: props.font}}
//       >
//         My Projects
//       </Typography>
//     <div className={classes.projects}>
//     {myProjects}
//     </div> 
//     </section>
//     <Divider className={classes.divider} />
//     <section name="work_experience" 
//     className={ active? classes.border_true : classes.border_false }
//     style={{borderColor: props.borderColor}} >
//       <Typography
//         className={ active? classes.name_true : classes.name_false }
//         variant="h6"
//         style={{fontFamily: props.font}}
//       >
//         My Jobs
//       </Typography>
//     <div className={classes.jobs}>
//     {myJobs}
//     </div>
//     </section>
//     <section name="basic_info">

//     </section>
//   </Container> 

// )