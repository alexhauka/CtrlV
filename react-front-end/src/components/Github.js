import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, TextField, Button } from '@material-ui/core';
import Projects from "./Projects"; 

import GetGithub from './GetGithub';


const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: "white",
    minHeight: "100vh",
    textAlign:"center"
  },

  project: {
    textAlign: "center",
    //  height: 250
  },
  fields: {
    display:"flex",
    justifyContent: "space-evenly",
    margin: "auto",
    marginBottom: 20,
    width: "60%",
    height: "auto"
  },
  description: {
    marginTop: 20,
    width: '60%',
    margin: "auto",
    paddingBottom: 30
  },
  add: {
    textAlign: "center",
    paddingTop: 50
  },
  top: {
    bottomBorder: "10px",
    margin: "auto",
    paddingTop: 80,
    paddingBottom: 20
  },
  divide:{
    marginBottom: 20,
  },
  percent: {
    width: "30%"
  },
  lang: {
    width: "15%"
  }
}))


export default function Github(props) {

const [count, setCount] = React.useState(0)
console.log("IN GITHUB", props)
// // default state is my github for testing:
const [username, setUsername] = React.useState('alexhauka');
  
  const classes = useStyles(); 


    const data = props.projects
    const numOfProjects = data.map(i => {
      console.log("IN FOR LOOP:", i)
      const last_updated = i.last_updated.slice(0,10);
      return (
        <Projects 
          
          id={i.id}
          title={i.title}
          primary_language={i.primary_language}
          primary_language_percent={i.primary_language_percent}
          secondary_language={i.secondary_language}
          secondary_language_percent={i.secondary_language_percent}
          last_updated={last_updated}
          description={i.description}
          url={i.url}
          updateProject={props.updateProject}
        />
      )
    })
    
    const addProjects = function(input){
      for (let i = 0; i < input; i++){
        return (
          <Projects 
          key={''}
          title={''}
          primary_language={''}
          primary_language_percent={''}
          secondary_language={''}
          secondary_language_percent={''}
          description={''}
          updateProject={props.updateProject}
        />
        )
      }
    }
     
    const moreProjects = addProjects(count)

  return (
    <div className={classes.root}>
      <div className={classes.top}>
        <Typography variant="h3">Enter your Github username</Typography>
        <br />
        <TextField
        className={classes.divide}
        variant="filled"
        id="standard-basic"
        label="Github Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <GetGithub username={username}/>

        {numOfProjects}
        {Array(count).fill(moreProjects)}
      </div>
      <div className={classes.root}>
      <div className={classes.add}>
      <div>
      {/* <Typography className={classes.divide} variant="h4">OR</Typography>  */}
      <Button variant="contained" color="primary" onClick={() => setCount(count + 1)}>
          Add Projects Manually
      </Button>
      </div>
        </div>
      </div>
    </div>
  )
}

