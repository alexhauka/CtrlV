import { useEffect, useReducer } from 'react'; 

import { 
  reducer,
  SET_SKILLS,
} from '../reducers/application'; 

const axios = require('axios').default

export function useApplicationData() {

  const [state, dispatch] = useReducer(reducer, {
    isLoggedin: false,
    hardskills: []
  }); 

  useEffect(() => {
    Promise.all([
      axios.get('/api/hardSkills')
    ]).then((all) => {
      dispatch({
        type: SET_SKILLS,
        hardskills: all[0].data
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



  return {
    state,
    registerUser
  }
};