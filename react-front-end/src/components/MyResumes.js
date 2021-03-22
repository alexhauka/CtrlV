import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Snackbar } from '@material-ui/core';
import TemplateOne from './TemplateOne';
import TemplateTwo from './TemplateTwo';
import MuiAlert from '@material-ui/lab/Alert';
const useStyles = makeStyles((theme) => ({
  root: { 
    marginTop: 30,
    textAlign: 'center'
  },
  resumes: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent:'space-evenly'
  },
  resume: {
    height: "5.75in",
    width: "4in",
    boxShadow: '0px 0px 20px 10px #00000059',
    margin: '5%',
    '&:hover': {
      boxShadow: '0px 0px 20px 10px #823fb5'
    }
  },
  button: {
    marginTop: '1.2em',
    color: "white",
    size: "large",
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'
  }
}))

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props}/>;
}

export default function MyResumes(props) {
  console.log("search for about me: ", props.state)
  const [message, setMessage] = useState("");
  const [open, setOpen] = useState(false); 
  const classes = useStyles();
  
  const { userProjects, userWorkExperience, userHardSkills } = props.state

  
  const user = props.state.user

  const basicInfo = {
    userName: `${user.first_name} ${user.last_name}`,
    userEmail: user.email,
    github: user.github,
    userPhone: user.phone_number
  }

  // console.log(basicInfo);

  const resumeInfo = props.state.userResumes
  

  // console.log("resumeInfo[0] id", resumeInfo[0].id);

  function onDelete(resumeObject) {
    console.log("onDelete", resumeObject);
    props.deleteResume(resumeObject)
    .then(() => {
      setMessage("Deleted Successfully!");
      setOpen(true);
    });
  }

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false); 
  };



  
  const resumes = resumeInfo.map(i => {

    const resume_project_1_index = userProjects.findIndex(p => p.id === i.project_1);
    const resume_project_2_index = userProjects.findIndex(p => p.id === i.project_2);
    const resume_project_3_index = userProjects.findIndex(p => p.id === i.project_3);

    const resume_work_1_index = userWorkExperience.findIndex(w => w.id === i.work_1);
    const resume_work_2_index = userWorkExperience.findIndex(w => w.id === i.work_2);
    const resume_work_3_index = userWorkExperience.findIndex(w => w.id === i.work_3);

    const data = {
      basicInfo: basicInfo,
      aboutMe: i.about_me,
      profession: i.profession,
      skills: userHardSkills, 

      projects: [userProjects[resume_project_1_index], userProjects [resume_project_2_index], userProjects[resume_project_3_index]],

      work_experience: [userWorkExperience[resume_work_1_index], userWorkExperience[resume_work_2_index], userWorkExperience[resume_work_3_index]]
    }

    if (i.template_id === 1) {
      return (

        // <div name='showcase' className={classes.resume} key={resumeInfo.id} >
        //   <TemplateOne active={false} data={data} font={i.head_font} color={i.background_color} borderColor={i.border_color} bodyFont={i.body_font} /> 
        //   <Button>Share</Button>
        //   <Button>Edit</Button>
        // </div>

        <div name='showcase' className={classes.resume} key={i.id} >
          {/* <Link to={{
            pathname: `/resumes/${i.id}`,
            state: {
              id: i.id,
              template_id: i.template_id,
              active: true,
              data: data,
              font: i.head_font,
              color: i.background_color,
              borderColor: i.border_color,
              bodyFont: i.body_font
            }
          }}> */}
            <TemplateOne active={false} data={data} font={i.head_font} color={i.background_color} borderColor={i.border_color} bodyFont={i.body_font} value={i.id} /> 
            <Button className={classes.button} href={`/resumes/${i.id}`}>Show</Button>
            <Button onClick={() => onDelete(i)} className={classes.button}>Delete</Button>
          {/* </Link> */}
        </div>
      )

    } else if (i.template_id === 2) {
      return (
        <div name='showcase' className={classes.resume} key={i.id}>
          <TemplateTwo active={false} data={data} font={i.head_font} color={i.background_color} borderColor={i.border_color} bodyFont={i.body_font} /> 
          <Button className={classes.button} href={`/resumes/${i.id}`}>Show</Button>
          <Button onClick={() => onDelete(i)} className={classes.button}>Delete</Button>

        </div>
      )

    }
  })
    return (
      <div className={classes.root}>
        {/* <h1> My Resumes :)) </h1> */}
          <Snackbar 
          open={open}
          autoHideDuration={1000}
          onClose={handleClose}
          anchorOrigin={{vertical: 'top', horizontal: 'center'}}
        >
          <Alert onClose={handleClose} severity="success">
            <h1>{message}</h1>
          </Alert>
        </Snackbar>
        <div className={classes.resumes}>
          {resumes}
          
        </div>
      </div>
    )
}