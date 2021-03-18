import React, { useEffect } from 'react';
// import { makeStyles } from '@material-ui/core'
import {Switch, Route, Redirect, useHistory} from 'react-router-dom'
// import './App.css';

import { useApplicationData } from './hooks/useApplicationData'; 

import ProtectedRoute from './components/ProtectedRoute'
import Resume from './components/Resume'
import Sidebar from './components/Sidebar'
import SignUp from './components/SignUp';
import Login from './components/Login';
import Home from "./components/Home"
import SkillCheck from './components/SkillCheck';
import WorkExperience from './components/WorkExperience';
import Github from './components/Github';
import Footer from './components/Footer';
import BasicInfo from './components/BasicInfo';


// const useStyles = makeStyles((theme) => ({
//   root: {
//     minHeight: '50vh',
//     backgroundColor: '#f8f8ff',
//     padding: '10%'
//   },
//   content: {
//     // Container,
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'flex-start',
//     alignContent: 'center'
//   },
//   controlpanel: {
    
//   },
//   resume: {
//     justify: 'center'
//   }
// }));

// const ProtectedRoute = (props) => {
//   if (props.isLoggingIn) {
//     return null 
//   } 
//   if (props.user) {
//     return <Route {...props}>{props.children}</Route> 
//   }
//   return <Redirect to="/login" /> 
// }


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
    deleteProject
  } = useApplicationData(); 
  const history = useHistory()

  useEffect(() => {
    // checkUser()
    // .then((success) => {
    //   // history.push("/")
    // })
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

  

  return(
    <>
      <Sidebar user={state.user} logout={handleLogout} />
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
        component={(props) => <Login loginUser={loginUser} isLoggingIn={state.isLoggingIn} user={state.user} {...props} />} 
        />

        <ProtectedRoute 
          isLoggingIn={state.isLoggingIn}
          user={state.user}
          path="/resume" 
        >
          <Resume />
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
          path="/basicInfo"
        > 
          <BasicInfo 
            user={state.user}
            updateUser={updateUser}
          />
        </ProtectedRoute>

      </Switch>
      <Footer />
    </>
  );
}

// example for getting api routes:

// fetchData = () => {
//   axios.get('/api/data') // You can simply make your requests to "/api/whatever you want"
//   .then((response) => {
//     // handle success
//     console.log(response.data) // The entire response from the Rails API

//     console.log(response.data.message) // Just the message
//     this.setState({
//       message: response.data.message
//     });
//   }) 
// }