import React, { useEffect } from 'react';
import {Switch, Route, useHistory} from 'react-router-dom'
import { useApplicationData } from './hooks/useApplicationData'; 
import ProtectedRoute from './components/ProtectedRoute'
import Resume from './components/resume/Resume';
import ResumeLink from './components/resume/ResumeLink';
import SignUp from './components/pages/SignUp';
import Login from './components/pages/Login';
import Home from "./components/home/Home"
import SkillCheck from './components/pages/SkillCheck';
import WorkExperience from './components/pages/work/WorkExperience';
import Github from './components/pages/github/Github';
import Footer from './components/Footer';
import Education from './components/pages/education/Education'; 
import BasicInfo from './components/pages/BasicInfo';
import MyResumes from './components/resume/MyResumes';
import NavBar from './components/NavBar'


export default function App() {
  const {
    state,
    registerUser,
    loginUser,
    logoutUser,
    updateUser,
    updateUserGithub, 
    addUserHardSkill,
    removeUserHardSkill,
    updateWork,
    deleteWork,
    checkUser,
    addGithubProjects,
    updateProject,
    deleteProject,
    addResume,
    deleteResume,
    updateEducation,
    deleteEducation
  } = useApplicationData(); 
  const history = useHistory()

  useEffect(() => {
    checkUser()
    .catch((error) => {
      history.push("/login")
    })
  },[checkUser]);


  const handleLogout = () => {
    logoutUser()
    .then(() => {
      history.push("/login")
    })
  }

  const data = state;
  

  return(
    <>
      <NavBar user={state.user} logout={handleLogout} />
      <Switch> 
        <ProtectedRoute 
        isLoggingIn={state.isLoggingIn}
        user={state.user}
        path="/" 
        exact 
        component={() => <Home props={state}/>} />

        <Route 
        path="/signup" 
        component={() => <SignUp registerUser={registerUser} />} 
        /> 
        <Route
          path="/login"
        >
          <Login loginUser={loginUser} isLoggingIn={state.isLoggingIn} user={state.user} />
        </Route>

        <Route path='/resumes/:id' component={(props) => <ResumeLink state={state}  {...props} />}
          isLoggingIn={state.isLoggingIn}
          user={state.user} />

        <ProtectedRoute 
          path="/resume" component={(props) => <Resume addResume={addResume} {...props} />}
          isLoggingIn={state.isLoggingIn}
          user={state.user}
        >
        </ProtectedRoute> 
        <ProtectedRoute 
          path="/skills" 
          isLoggingIn={state.isLoggingIn}
          user={state.user}
        >
          <SkillCheck 
            hardskills={state.hardskills} 
            userHardSkills={state.userHardSkills} 
            addUserHardSkill={addUserHardSkill}
            removeUserHardSkill={removeUserHardSkill}
          />
        </ProtectedRoute>

        <ProtectedRoute
          isLoggingIn={state.isLoggingIn}
          user={state.user}
          path="/work"
        >
          <WorkExperience
            workExperience={state.userWorkExperience}
            updateWork={updateWork}
            deleteWork={deleteWork}
          />
        </ProtectedRoute>

        <ProtectedRoute
          isLoggingIn={state.isLoggingIn}
          user={state.user}
          path="/github"
        >
          <Github 
            user={state.user}
            projects={state.userProjects}
            updateGithub={updateUserGithub}
            addProject={addGithubProjects}
            updateProject={updateProject}
            deleteProject={deleteProject}
          /> 
        </ProtectedRoute>
        <ProtectedRoute
          isLoggingIn={state.isLoggingIn}
          user={state.user}
          path="/education"
        >
          <Education
            user={state.user}
            education={state.userEducation}
            updateEducation={updateEducation}
            deleteEducation={deleteEducation}
          />
        </ProtectedRoute>
        <ProtectedRoute 
          isLoggingIn={state.isLoggingIn}
          user={state.user}
          path="/basicInfo"
        > 
          <BasicInfo 
            user={state.user}
            updateUser={updateUser}
          />
        </ProtectedRoute>

        <ProtectedRoute
          isLoggingIn={state.isLoggingIn}
          user={state.user}
          path="/myresumes"
        >
          <MyResumes state={data} deleteResume={deleteResume} />
        </ProtectedRoute>

      </Switch>
      <Footer />
    </>
  );
}
