import React, { useEffect, useState } from 'react';
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
  const [data, setData] = useState({});
  
 

  const resumeLink = useEffect(() => {
    axios.get(`/api/resumes/${id}`)
    .then((response) => {
      console.log(response.data);
      setResume(response.data)
      // console.log(resume);
       Promise.all([
        axios.get(`/api/users/${response.data.user_id}`),
        axios.get(`/api/users/${response.data.user_id}/hard_skills`),
        axios.get(`/api/users/${response.data.user_id}/work_experience`),
        axios.get(`/api/users/${response.data.user_id}/projects`) 
      ])
      .then((all) => {
        console.log(all);
        console.log(all[0].data);
        setUser(all[0].data);
        setSkills(all[1].data);
        setWorkExperience(all[2].data);
        setProjects(all[3].data);
      })
    })
    .then(() => {
      const basicInfo = {
        userName: `${user.first_name} ${user.last_name}`,
        userEmail: user.email,
        github: user.github,
        userPhone: user.phone_number
      }
    
      const resume_project_1_index = projects.findIndex(p => p.id === resume.project_1);
      const resume_project_2_index = projects.findIndex(p => p.id === resume.project_2);
      const resume_project_3_index = projects.findIndex(p => p.id === resume.project_3);
    
      const resume_work_1_index = workExperience.findIndex(w => w.id === resume.work_1);
      const resume_work_2_index = workExperience.findIndex(w => w.id === resume.work_2);
      const resume_work_3_index = workExperience.findIndex(w => w.id === resume.work_3);
    
      const tempData = {
        basicInfo: basicInfo,
        skills: skills, 
        projects: [projects[resume_project_1_index], projects[resume_project_2_index], projects[resume_project_3_index]],
        work_experience: [workExperience[resume_work_1_index], workExperience[resume_work_2_index], workExperience[resume_work_3_index]]
      }
      setData(tempData); 
      
    })
  }, []);
          // return (
            // <div>
            //   {resume.template_id === 1 && 
            //   <TemplateOne 
            //     active={true}
            //     data={data}
            //     font={resume.head_font}
            //     color={resume.background_color}
            //     borderColor={resume.border_color}
            //     bodyFont={resume.body_font}
            //   />}
            // </div>
          // )


  console.log(resume);
  console.log(resume.user_id);
  console.log("user", user);
  console.log("skills", skills);
  console.log("work experience", workExperience); 
  console.log("projects", projects);
  console.log(data);

  // const tempID = resume.template_id;

  if (resume.template_id === 1) {
    return (
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
    )
  }

  return (
    <div>
      {resumeLink}
    </div>
  )
}