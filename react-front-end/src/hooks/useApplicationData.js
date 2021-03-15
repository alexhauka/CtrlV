import { useEffect, useReducer } from 'react'; 

import { 
  reducer,
  SET_SKILLS,
  SET_APPLICATION_DATA
} from '../reducers/application'; 

const axios = require('axios').default

export function useApplicationData() {

  const [state, dispatch] = useReducer(reducer, {
    isLoggedin: false,
    hardskills: [],
    user: {}
  }); 

  useEffect(() => {
    Promise.all([
      axios.get('/api/hardSkills'),
      axios.get(`/api/users/1`)
    ])
    .then((all) => {
      dispatch({
        type: SET_APPLICATION_DATA,
        hardskills: all[0].data,
        user: all[1].data
      })
      
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
  }



  return {
    state,
    registerUser,
    loginUser
  }

}