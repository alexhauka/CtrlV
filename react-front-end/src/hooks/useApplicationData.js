import { useEffect, useReducer, useCallback } from 'react'; 

import { 
  reducer,
  SET_APPLICATION_DATA,
  SET_UPDATED_USER,
  SET_UPDATED_WORK,
  SET_USER,
  RESET_APPLICATION_DATA
} from '../reducers/application'; 

const axios = require('axios').default

export function useApplicationData() {

  const [state, dispatch] = useReducer(reducer, {
    isLoggingIn: true,
    hardskills: [],
    userHardSkills: [],
    user: null,
    userWorkExperience: {}
  }); 

  const user_id = state.user && state.user.id

  useEffect(() => {
     if (user_id === null) {
       return 
     } 
    Promise.all([
      axios.get(`/api/hardSkills`),
      axios.get(`/api/users/${user_id}/hard_skills`),
      axios.get(`/api/users/${user_id}/work_experience`)
    ])
    .then((all) => {
      dispatch({
        type: SET_APPLICATION_DATA,
        hardskills: all[0].data,
        userHardSkills: all[1].data,
        userWorkExperience: all[2].data
      })
    })
  }, [user_id])
    
  function registerUser(registerInfo) {
    console.log("here")
    console.log(registerInfo);
    return axios.put(`/api/users`, { registerInfo })
    .then(() => {
      console.log("registered successfully"); 
    })
  };

  function loginUser(userInfo) {
    // console.log("hey there");
    // console.log(userInfo);
    return axios.post(`/api/login`, { userInfo })
    .then((response) => {
      // console.log(data);
      // console.log(data.data);
      // console.log('logged in successfully!!')
      dispatch({
        type: SET_USER,
        user: response.data,
        isLoggingIn: false
      })
    })
  };

  function checkUser() {
    return axios.get('/api/authcheck')
    .then((response) => {
      dispatch({
        type: SET_USER,
        user: response.data,
        isLoggingIn: false
      })
    })
    .catch((error) => {
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
        isLoggingIn: true,
        hardskills: [],
        userHardSkills: [],
        user: null,
        userWorkExperience: {}
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

  function updateWork(workInfo) {
    console.log("In UAD:", workInfo)
    return axios.post(`/api/users/${user_id}/work_experience`, { workInfo })
    .then(() => {
      dispatch({
        type: SET_UPDATED_WORK,
        workInfo
      })
    })
    .catch((error) => error)
  }

  function addUserHardSkill(skill) {
    return axios.put(`/api/users/${user_id}/hard_skills`, { skill })
    .then(() => {
      console.log("add successful"); 
    })
  }


  function removeUserHardSkill(skill) {
    return axios.delete(`/api/users/${user_id}/hard_skills`, 
    { data: {
      skill: skill
    }})
    .then(() => {
      console.log("delete successful");
    })
  }

  return {
    state,
    registerUser,
    loginUser,
    logoutUser, 
    updateUser,
    addUserHardSkill,
    removeUserHardSkill,
    updateWork,
    checkUser: useCallback(checkUser,[dispatch])
  }

}