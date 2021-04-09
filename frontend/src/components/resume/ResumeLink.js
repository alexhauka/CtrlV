import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; 
import { makeStyles } from '@material-ui/core/styles';
import TemplateOne from '../templates/TemplateOne';
import TemplateTwo from '../templates/TemplateTwo';
import TemplateThree from '../templates/TemplateThree';
import { Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import ReactToPdf from 'react-to-pdf';

const useStyles = makeStyles(() => ({
  root:{
    display: 'flex',
    direction:'column',
    minHeight: '100vh',
    justifyContent: 'center',
  },
  page: {
    padding: '5em'
  },
  resume: {
    margin:'auto',
    width: '8.27in',
    height: '11.7in',
    boxShadow: '0px 0px 20px 10px #00000059',
  },
  buttonTop: {
    display:'flex',
    justifyContent:'center'
  },
  button: {
    marginTop: '1.2em',
    color: "white",
    size: "large",
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'
  }
}));

export default function ResumeLink(props) {
  console.log("resume link props state: ", props.state)
  const classes = useStyles();
  let { id } = useParams();
  const [resume, setResume] = useState({});
  const [user, setUser] = useState({})
  const [skills, setSkills] = useState([])
  const [workExperience, setWorkExperience] = useState([])
  const [projects, setProjects] = useState([]);
  const [education, setEducation] = useState([]); 
  const [loaded, setLoaded] = useState(false); 
  const [clicked, setClicked] = useState(false); 
  const [open, setOpen] = React.useState(false);
  const [body, setBody] = React.useState('');
  const [subject, setSubject] = React.useState('')
  const handleClickOpen = (input) => {
    console.log("Input", input)
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
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
    const sixthFetch = await fetch(`/api/users/${resumeData.user_id}/education`)
    const educationData = await sixthFetch.json(); 
    return {
     user: userData,
     skills: skillsData, 
     workExperience: workData, 
     projects: projectsData,
     education: educationData, 
     data: resumeData
    }
  }
 
  useEffect(() => {
    const loadData = async () => {
      const Resumedata = await getInfo().then((response) => {
        console.log("response: ",response)
        setProjects(response.projects)
        setWorkExperience(response.workExperience)
        setEducation(response.education)
        setSkills(response.skills)
        setUser(response.user)
        setResume(response.data)
        setLoaded(true)
      })
    };
    loadData()
  }, []);
  if(loaded){
    console.log('resume', resume)
  }

  const resume_project_1_index = projects.findIndex(p => p.id === resume.project_1);
  const resume_project_2_index = projects.findIndex(p => p.id === resume.project_2);
  const resume_project_3_index = projects.findIndex(p => p.id === resume.project_3);

  const resume_education_1_index = education.findIndex(w => w.id === resume.education_1);
  const resume_education_2_index = education.findIndex(w => w.id === resume.education_2);
  const resume_education_3_index = education.findIndex(w => w.id === resume.education_3);

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
    aboutMe: resume.about_me,
    profession: resume.profession,
    projects: [projects[resume_project_1_index], projects[resume_project_2_index], projects[resume_project_3_index]],
    skills: skills, 
    work_experience: [workExperience[resume_work_1_index], workExperience[resume_work_2_index], workExperience[resume_work_3_index]],
    education: [education[resume_education_1_index], education[resume_education_2_index], education[resume_education_3_index]]
  }
  
  const ref = React.createRef(); 
  const options ={
    orientation: 'portrait',
    
  };
  const myResume = function() {  
    console.log("template Id:", resume.template_id)
    if (resume.template_id === 1){
      return (
        <div>
         <div className={classes.resume}>    
           <TemplateOne 
            building={false}
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
      else if (resume.template_id === 2) {
        return(
        <div>
        <div className={classes.resume}>    
          <TemplateTwo 
           building={false}
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
      else if (resume.template_id === 3){
        console.log('data', data)
        console.log('resume', resume)
        return(
          <div>
          <ReactToPdf targetRef={ref} options={options}>
            {({toPdf}) => (
              <button onClick={toPdf}>Generate pdf</button>
            )}
          </ReactToPdf>
          
          <div className={classes.resume} ref={ref}>    
            <TemplateThree 
             building={false}
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
    }
    const renderResume = myResume()
    return (
      
        <div className={classes.root} >
          {loaded &&
          <div className={classes.page}>
            <div>
            {renderResume}
            </div>
            { !clicked &&
              <div className={classes.buttonTop}>
                <Button className={classes.button} onClick={handleClickOpen}>
                  Contact Me
                </Button>
                <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                  <DialogTitle id="form-dialog-title">Send Email</DialogTitle>
                  <DialogContent>
                    <DialogContentText>
                      I am very interested in all opportunities. If you could send me any additional information that you have on the opportunity, I would love to hear from you!
                    </DialogContentText>
                    <TextField
                      // autoFocus
                      margin="dense"
                      id="name"
                      variant='outlined'
                      label="Subject"
                      value={subject}
                      defaultValue={`${basicInfo.userName}: Employment Opportunity`}
                      onChange={(event) => {setSubject(event.target.value)}}
                      type="text"
                      fullWidth
                    />
                    <TextField
                      style={{marginTop: 15}}
                      autoFocus
                      id="outlined-multiline-static"
                      label="Info"
                      multiline
                      rows={4}
                      value={body}
                      onChange={(event) => {setBody(event.target.value)}}
                      placeholder="Boy oh boy would we like you to work for us..."
                      variant="outlined"
                      fullWidth
                    />
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={handleClose} color="primary">
                      Cancel
                    </Button>
                    <Button onClick={handleClose} href={`mailto:${basicInfo.userEmail}?subject=${subject} &body=${body}`} color="primary">
                      Send
                    </Button>
                  </DialogActions>
                </Dialog>
              </div>
              
            }
            {clicked &&
              <div className={classes.buttonTop}>
                <div >
                  Subject
                  body
                  sendbutton
                </div>
              </div>
            }

          </div>
          }
        </div>
      
    )
}
