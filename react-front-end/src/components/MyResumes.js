import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import TemplateOne from './TemplateOne';
import TemplateTwo from './TemplateTwo';
const useStyles = makeStyles((theme) => ({
  root: {
    
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap'

  },
  resume: {
    height: "5.75in",
    width: "4in",
    border: "solid black 1px",
    margin: '5%'
  }
}))

export default function MyResumes(props) {
  console.log("My Resumes: ", props.state)
  const classes = useStyles();
  
  const { userProjects, userWorkExperience, userHardSkills } = props.state

  
  const user = props.state.user

  const resumeInfo = props.state.userResumes.rows

  const resume_project_1_index = Object.keys(userProjects).findIndex(p => p.id === resumeInfo.project_1);
  const resume_project_2_index = Object.keys(userProjects).findIndex(p => p.id === resumeInfo.project_2);
  const resume_project_3_index = Object.keys(userProjects).findIndex(p => p.id === resumeInfo.project_3);

  const resume_work_1_index = Object.keys(userWorkExperience).findIndex(w => w.id === resumeInfo.work_1);
  const resume_work_2_index = Object.keys(userWorkExperience).findIndex(w => w.id === resumeInfo.work_2);
  const resume_work_3_index = Object.keys(userWorkExperience).findIndex(w => w.id === resumeInfo.work_3);

  const data = {
    basicInfo: user,
    
    skills: userHardSkills, 
    
    projects: [userProjects[resume_project_1_index], userProjects [resume_project_2_index], userProjects[resume_project_3_index]],
    
    work_experience: [userWorkExperience[resume_work_1_index], userWorkExperience[resume_work_2_index], userWorkExperience[resume_work_3_index]]
  }

   


  
  // console.log("data.projects: ", data.projects);
  // console.log("data.work_experince: ", data.work_experience); 

  
  
  const resumes = resumeInfo.map(i => {

    
    if (i.template_id === 1) {
      return (
        <div name='showcase' className={classes.resume}>
          <TemplateOne data={data} font={i.head_font} color={i.background_color} borderColor={i.border_color} bodyFont={i.body_font} /> 
        </div>
      )

    } else if (i.template_id === 2) {
      return (
        <div name='showcase' className={classes.resume}>
          <h1>Resume</h1>
        </div>
      )

    }
  })
    return (
      <div className={classes.root}>
      <h1> My Resumes :)) </h1>
      {resumes}
      </div>
    )
}