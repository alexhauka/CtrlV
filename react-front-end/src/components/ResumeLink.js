import React, { useEffect, useState, Suspense } from 'react';
import { useParams } from 'react-router-dom'; 
import axios from 'axios';

import TemplateOne from './TemplateOne';
import TemplateTwo from './TemplateTwo';



export default function ResumeLink(props) {
  // let resumeData = props.location.state 
  // const {id, template_id, active, data, font, color, borderColor, bodyFont} = resumeData;
  let { id } = useParams();
  const [resume, setResume] = useState({});
  const [user, setUser] = useState({})
  const [skills, setSkills] = useState([])
  const [workExperience, setWorkExperience] = useState([])
  const [projects, setProjects] = useState([]);
  // const [data, setData] = useState({});
  const [loaded, setLoaded] = useState(false)
  
  const getInfo = async () => {
    const firstFetch = await fetch(`/api/resumes/${id}`)
    const resumeData = await firstFetch.json();
    const secondFetch = await fetch(`/api/users/${resumeData.user_id}`)
    const userData = await secondFetch.json();
    const thirdFetch = await fetch(`/api/users/${resumeData.user_id}/hard_skills`)
    const skillsData = await thirdFetch.json();
    const fourthFetch = await fetch(`/api/users/${resumeData.user_id}/work_experience`)
    const workData = await fourthFetch.json(); 
    const fifthFetch = await fetch(`/api/users/${resumeData.user_id}/projects`)
    const projectsData = await fifthFetch.json(); 
    return {
     user: userData,
     skills: skillsData, 
     workExperience: workData, 
     projects: projectsData, 
     data: resumeData
    }
  }
 

  useEffect(() => {
    const loadData = async () => {
      const Resumedata = await getInfo().then((response) => {
        console.log(response)
        setProjects(response.projects)
        setWorkExperience(response.workExperience)
        setSkills(response.skills)
        setUser(response.user)
        setResume(response.data)
        setLoaded(true)
      })
    };
    loadData()
  }, []);
  if(loaded){
    console.log(resume)
  }

  const resume_project_1_index = projects.findIndex(p => p.id === resume.project_1);
  const resume_project_2_index = projects.findIndex(p => p.id === resume.project_2);
  const resume_project_3_index = projects.findIndex(p => p.id === resume.project_3);

  const resume_work_1_index = workExperience.findIndex(w => w.id === resume.work_1);
  const resume_work_2_index = workExperience.findIndex(w => w.id === resume.work_2);
  const resume_work_3_index = workExperience.findIndex(w => w.id === resume.work_3);

  const basicInfo = {
      userName: `${user.first_name} ${user.last_name}`,
      userAddress: user.address,
      userEmail: user.email,
      userGithub: user.github,
      userPhone: user.phone_number
      }

  const data = {
    basicInfo: basicInfo,
    projects: [projects[resume_project_1_index], projects[resume_project_2_index], projects[resume_project_3_index]],
    skills: skills, 
    work_experience: [workExperience[resume_work_1_index], workExperience[resume_work_2_index], workExperience[resume_work_3_index]]
  }


  // console.log(resume);
  // console.log("User ID", resume.user_id);
  // console.log("user", user);
  // console.log("skills", skills);
  // console.log("work experience", workExperience); 
  // console.log("projects", projects);

  // const tempID = resume.template_id;
  
  const myResume = function() {  
    return (
      <div>
       <h1>My Resume</h1>
       <div>    
         <TemplateOne 
          active={true}
          data={data}
          font={resume.head_font}
          color={resume.background_color}
          borderColor={resume.border_color}
          bodyFont={resume.body_font}
          />
     </div>
     </div>
    )}
    const renderResume = myResume()
    return (
      
        <div>
          <h1>Hello</h1>

          {loaded &&
          <div>
          {renderResume}
          </div>
          }
        </div>
      
    )
}
