import { useEffect, useReducer, useCallback } from 'react'; 

import { 
  reducer,
  SET_APPLICATION_DATA,
  SET_UPDATED_USER,
  SET_WORK,
  DELETE_WORK,
  SET_UPDATED_WORK,
  SET_USER,
  RESET_APPLICATION_DATA,
  SET_PROJECTS,
  DELETE_PROJECT, 
  SET_UPDATED_PROJECT,
  SET_SKILL,
  DELETE_SKILL,
  SET_RESUME,
  DELETE_RESUME
} from '../reducers/application'; 

const axios = require('axios').default

export function useApplicationData() {

  const [state, dispatch] = useReducer(reducer, {
    isLoggingIn: true,
    hardskills: [],
    userHardSkills: [],
    user: null,
    userWorkExperience: [],
    userProjects: [],
    userResumes: []
  }); 

  const user_id = state.user && state.user.id

  useEffect(() => {
     if (user_id === null) {
       return 
     } 
    Promise.all([
      axios.get(`/api/hardSkills`),
      axios.get(`/api/users/${user_id}`),
      axios.get(`/api/users/${user_id}/hard_skills`),
      axios.get(`/api/users/${user_id}/work_experience`),
      axios.get(`/api/users/${user_id}/projects`),
      axios.get(`api/users/${user_id}/resumes`)
    ])
    .then((all) => {
      dispatch({
        type: SET_APPLICATION_DATA,
        hardskills: all[0].data,
        user: all[1].data,
        userHardSkills: all[2].data,
        userWorkExperience: all[3].data,
        userProjects: all[4].data,
        userResumes: all[5].data
      })
    })
  }, [user_id])
    
  function registerUser(registerInfo) {
    console.log("here")
    console.log(registerInfo);
    return axios.put(`/api/users`, { registerInfo })
    .then((response) => {
      console.log("registered successfully"); 
      dispatch({
        type: SET_USER,
        user: response.data,
        isLoggingIn: false
      })
    })
  };

  function loginUser(userInfo) {
    return axios.post(`/api/login`, { userInfo })
    .then((response) => {
      dispatch({
        type: SET_USER,
        user: response.data,
        isLoggingIn: false
      })
    })
    .catch((error) => {
      console.log("application data", error);
      dispatch({
        type: SET_USER,
        isLoggingIn: true,
        user: null
      })
      throw error;
    })
  };

  function checkUser() {
    return axios.get('/api/authcheck')
    .then((response) => {
      console.log("confirmed user");
      dispatch({
        type: SET_USER,
        user: response.data,
        isLoggingIn: false
      })
    })
    .catch((error) => {
      console.log("cookies deleted");
      dispatch({
        type: SET_USER,
        isLoggingIn: false,
        user: null
      })
    })
  };


  function logoutUser() {
    return axios.post('/api/logout')
    .then((response) => {
      dispatch({
        type: RESET_APPLICATION_DATA,
        isLoggingIn: false,
        hardskills: [],
        userHardSkills: [],
        user: null,
        userWorkExperience: [],
        userProjects: [],
        userResumes: []
      })
    })
  }

  function updateUser(userInfo) {
    // console.log("update user here", userInfo);
    return axios.put(`/api/users/${user_id}`, {userInfo})
    .then(() => {
      // console.log('updated successful');
      dispatch({
        type: SET_UPDATED_USER,
        userInfo
      })
    })
  }

  function updateUserGithub(github) {
    return axios.put(`/api/users/${user_id}`, {github})
    .then(() => {
      dispatch({
        type: SET_UPDATED_USER,
        userInfo: { github }
      })
    })
  }

  function addGithubProjects(project, id) {
    return axios.post(`/api/projects`, { project, id })
    .then((response) => {
      console.log("response", response.data)
      dispatch({
        type: SET_PROJECTS,
        projectInfo: response.data
      })
    })
  }

  function updateProject(projectInfo){
    return axios.post(`/api/users/${user_id}/projects`, {projectInfo})
    .then((response) => {
      console.log("response", response.data)
      if (projectInfo.id) {
        dispatch ({
          type: SET_UPDATED_PROJECT,
          projectInfo
        })
      } else {
        dispatch ({
          type: SET_PROJECTS,
          projectInfo: response.data
        })
      }
    })
    .catch((error) => error)
  }

  function deleteProject(projectInfo) {
    console.log("useApplicationData", projectInfo); 
    return axios.delete(`/api/users/${user_id}/projects`, 
    { data: {
      projectInfo
    }})
    .then((response) => {
      console.log("response", response.data)
      dispatch({
        type: DELETE_PROJECT,
        projectInfo: response.data
      })
    });
  }

  function updateWork(workInfo) {
    console.log("In UAD:", workInfo)
    return axios.post(`/api/users/${user_id}/work_experience`, { workInfo })
    .then((response) => {
      // console.log('response', response.data)
      if (workInfo.id) {
        dispatch({
          type: SET_UPDATED_WORK,
          workInfo
        })
      } else {
        dispatch({
          type: SET_WORK,
          workInfo: response.data
        })
      }
    })
    .catch((error) => error)
  }

  function deleteWork(workInfo) {
    console.log("useApplicationData", workInfo);
    return axios.delete(`/api/users/${user_id}/work_experience`, 
    { data: {
      workInfo
    }})
    .then((response) => {
      dispatch({
        type: DELETE_WORK,
        workInfo: response.data
      })
    }); 
  }

  function addUserHardSkill(skill) {
    return axios.put(`/api/users/${user_id}/hard_skills`, { skill })
    .then(() => {
      console.log("add successful"); 
      dispatch({
        type: SET_SKILL, 
        skill 
      })
    })
  }


  function removeUserHardSkill(skill) {
    return axios.delete(`/api/users/${user_id}/hard_skills`, 
    { data: {
      skill
    }})
    .then(() => {
      console.log("delete successful");
      dispatch({
        type: DELETE_SKILL,
        skill 
      })
    })
  }

  function addResume(resumeObject) {
    return axios.post(`/api/resumes`, { resumeObject })
    .then((response) => {
      console.log("add successful"); 
      dispatch({
        type: SET_RESUME,
        resume: response.data
      })
    })
  }

  function deleteResume(resumeObject) {
    return axios.delete(`api/users/${user_id}/resumes`, 
    { data: {
      resumeObject
    }})
    .then((response) => {
      console.log("delete successful");
      dispatch({
        type: DELETE_RESUME,
        resume: response.data
      })
    })
  }

  return {
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
    checkUser: useCallback(checkUser,[dispatch]),
    addGithubProjects,
    updateProject,
    deleteProject,
    addResume,
    deleteResume
  }

}