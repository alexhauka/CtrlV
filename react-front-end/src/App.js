import React from 'react';
import { makeStyles } from '@material-ui/core'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
// import axios from 'axios';
// import './App.css';

import Resume from './components/Resume'
import Sidebar from './components/Sidebar'
import SignUp from './components/Signup';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '50vh',
    backgroundColor: '#f8f8ff',
    padding: '10%'
  },
  content: {
    // Container,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
    alignContent: 'center'
  },
  controlpanel: {
    
  },
  resume: {
    justify: 'center'
  }
}));

export default function App() {
  const classes = useStyles();
  return(
    <Router>
      <Sidebar />
      <Switch> 
        <Route path="/" exact />
        <Route path="/signup" component={SignUp} /> 
        <Route path="/resume" component={Resume} /> 
      </Switch>
    </Router>
  );
}


{/* <div className={classes.root}>
  <Sidebar />
  <SignUp />
  <div className={classes.resume}>
    {/* <Resume /> */}
  {/* </div>
</div> */} 


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