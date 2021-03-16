import { useEffect, useReducer } from 'react'; 

import { 
  reducer,
  SET_APPLICATION_DATA
} from '../reducers/application'; 

const axios = require('axios').default

export function useApplicationData() {

  const [state, dispatch] = useReducer(reducer, {
    isLoggedin: false,
    hardskills: [],
    userHardSkills: [],
    user: {},
    userWorkExperience: {}
  }); 

  useEffect(() => {
    Promise.all([
      axios.get(`/api/hardSkills`),
      axios.get(`/api/users/2`),
      axios.get(`/api/users/2/hard_skills`),
      axios.get(`/api/users/2/work_experience`)
    ])
    .then((all) => {
      dispatch({
        type: SET_APPLICATION_DATA,
        hardskills: all[0].data,
        user: all[1].data,
        userHardSkills: all[2].data,
        userWorkExperience: all[3].data
      })
      console.log(all[3].data)
    })
  }, [])
    
  function registerUser(registerInfo) {
    console.log("here")
    console.log(registerInfo);
    return axios.put(`/api/users`, { registerInfo })
    .then(() => {
      console.log("registered successfully"); 
    })
  };

  function loginUser(userInfo) {
    console.log("hey there");
    console.log(userInfo);
    return axios.post(`/api/login`, { userInfo })
    .then(() => {
      console.log('logged in successfully!!')
    })
  };

  function addUserHardSkill(skill) {
    return axios.put(`/api/users/2/hard_skills`, { skill })
    .then(() => {
      console.log("add successful"); 
    })
  }


  function removeUserHardSkill(skill) {
    return axios.delete(`/api/users/2/hard_skills`, 
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
    addUserHardSkill,
    removeUserHardSkill
  }

}