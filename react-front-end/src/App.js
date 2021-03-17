import React, { useEffect } from 'react';
// import { makeStyles } from '@material-ui/core'
import {BrowserRouter as Router, Switch, Route, Redirect, useHistory} from 'react-router-dom'
import axios from 'axios';
// import './App.css';

import { useApplicationData } from './hooks/useApplicationData'; 

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
import Axios from 'axios';

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



export default function App() {
  const {
    state,
    registerUser,
    loginUser,
    logoutUser,
    updateUser,
    addUserHardSkill,
    removeUserHardSkill,
    updateWork,
    checkUser,
    updateProject
  } = useApplicationData(); 
  const history = useHistory()

  useEffect(() => {
    checkUser()
    .then((success) => {
      history.push("/")
    })
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

  const ProtectedRoute = (props) => {
    if (state.isLoggingIn) {
      return null 
    } 
    if (state.user) {
      return <Route {...props} /> 
    }
    return <Redirect to="/login" /> 
  }

  return(
    <>
      <Sidebar user={state.user} logout={handleLogout} />
      <Switch> 
        <ProtectedRoute path="/" exact component={Home} />
        <Route 
        path="/signup" 
        component={() => <SignUp registerUser={registerUser} />} 
        /> 
        <Route 
        path="/login"
        component={(props) => <Login loginUser={loginUser} isLoggingIn={state.isLoggingIn} user={state.user} {...props} />} 
        />

        <ProtectedRoute path="/resume" component={Resume} /> 
        <ProtectedRoute 
        path="/skills" 
        component={() => <SkillCheck 
          hardskills={state.hardskills} 
          userHardSkills={state.userHardSkills} 
          addUserHardSkill={addUserHardSkill}
          removeUserHardSkill={removeUserHardSkill}
          />} 
        />
        <ProtectedRoute path="/work" component={() => <WorkExperience workExperience={state.userWorkExperience} updateWork={updateWork} />} />
        <ProtectedRoute  path="/github" component={() => <Github
        projects={state.userProjects} updateProject={updateProject}/>}/>
        <ProtectedRoute path="/basicInfo" component={() => <BasicInfo user={state.user} updateUser={updateUser} />} />
        <ProtectedRoute path="/work" component={() => <WorkExperience workExperience={state.userWorkExperience} updateWork={updateWork} />}/>
        <ProtectedRoute path="/basicInfo" component={() => <BasicInfo user={state.user} updateUser={updateUser} />} />
        {/* <Route path="/basicInfo" component={() => <BasicInfo user={state.user} updateUser={updateUser} />} /> */}
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