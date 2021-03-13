import { useReducer } from 'react'; 

import { 
  reducer,
  SET_USER
} from '../reducers/application'; 

const axios = require('axios').default

export function useApplicationData() {

  const [state, dispatch] = useReducer(reducer, {
    isLoggedin: false
  }); 


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