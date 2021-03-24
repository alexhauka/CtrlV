import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Snackbar } from '@material-ui/core';
import TemplateOne from '../templates/TemplateOne';
import TemplateTwo from '../templates/TemplateTwo';
import TemplateThree from '../templates/TemplateThree';
import MuiAlert from '@material-ui/lab/Alert';
const useStyles = makeStyles((theme) => ({
  root: { 
    marginTop: 30,
    textAlign: 'center',
    minHeight:'100vh'
  },
  resumes: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent:'space-evenly'
  },
  resume: {
    height: "6in",
    width: "4in",
    boxShadow: '0px 0px 20px 10px #00000059',
    margin: '5%',
    '&:hover': {
      boxShadow: '0px 0px 20px 10px #3f51b5'
    }
  },
  button: {
    marginTop: '1.2em',
    color: "white",
    margin:'auto',
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'
  },
  buttons:{
    display:'flex'
  },
  submit:{
    color:'white',
    width:'30%'
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
    userGithub: user.github,
    userPhone: user.phone_number,
    userAddress: user.address
  }

  const resumeInfo = props.state.userResumes
  
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
        <div name='showcase' className={classes.resume} key={i.id} >
            <TemplateOne building={false}  active={false} data={data} font={i.head_font} color={i.background_color} borderColor={i.border_color} bodyFont={i.body_font} value={i.id} /> 
            <div className={classes.buttons}>
            <div className={classes.button}>
            <Button className={classes.submit} 
             component={Link}
             to={{
               pathname: `/resumes/${i.id}`
             }}>Show</Button>
            </div>
            <Button onClick={() => onDelete(i)} className={classes.button}>Delete</Button>
            </div>
        </div>
      )
    } else if (i.template_id === 2) {
      return (
        <div name='showcase' className={classes.resume} key={i.id}>
          <TemplateTwo building={false} active={false} data={data} font={i.head_font} color={i.background_color} borderColor={i.border_color} bodyFont={i.body_font} />
          <div className={classes.buttons}>
          <div className={classes.button}>
             <Button className={classes.submit} 
             component={Link}
             to={{
               pathname: `/resumes/${i.id}`
             }}>Show</Button>
          </div>
          <Button  className={classes.button} onClick={() => onDelete(i)}>Delete</Button>
          </div> 
        </div>
      )
    } else if (i.template_id === 3){
      return (
        <div name='showcase' className={classes.resume} key={i.id}>
        <TemplateThree building={false} active={false} data={data} font={i.head_font} color={i.background_color} borderColor={i.border_color} bodyFont={i.body_font} />
        <div className={classes.buttons}>
        <div className={classes.button}>
           <Button className={classes.submit} 
           component={Link}
           to={{
             pathname: `/resumes/${i.id}`
           }}>Show</Button>
        </div>
        <Button  className={classes.button} onClick={() => onDelete(i)}>Delete</Button>
        </div> 
      </div>
      )
    }
  })
    return (
      <div className={classes.root}>
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