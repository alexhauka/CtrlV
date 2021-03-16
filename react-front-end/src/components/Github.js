import React from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, TextField, Button } from '@material-ui/core';


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


export default function Github() {

const [manual, setManual] = React.useState(false)
const [count, setCount] = React.useState(1)

// default state is my github for testing:
const [username, setUsername] = React.useState('alexhauka');
  
  const classes = useStyles(); 
  const numOfProjects = function(input){
    if (manual) {
      return (
        <form noValidate autoComplete="off">
        <div className={classes.project}>
          <div className={classes.fields}>
            <TextField id="standard-basic" label="Project Title" />
            <TextField
            id="date"
            label="Last Modified"
            type="date"
            defaultValue=""
            // className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
          />
            < div className={classes.lang}>
              <TextField id="standard-basic" label="Primary Language" />
              <TextField  className={classes.percent} id="standard-basic" label="%" />
            </div>
            < div className={classes.lang}>
              <TextField id="standard-basic" label="Secondary Language" />
              <TextField className={classes.percent} id="standard-basic" label="%" />
            </div>
          </div>
          <div className={classes.description}>
            <TextField
              id="outlined-multiline-static"
              label="Project description"
              multiline
              rows={6}
              placeholder="Tell us about this position..."
              fullWidth="true"
              variant="outlined"
            />
          </div>
        </div>          
      </form>
      )
      
    }
  }
  
  const myJobs = numOfProjects(count)


  // fetches github api data from username
  const getProjects = async () => {
    const macroURL = `https://api.github.com/search/repositories?q=user:${username}`
    
    // macro being the top level info for projects
    const macroResponse = await fetch(macroURL)
    const macroResults = await macroResponse.json()

    

    let projectData = {};
          
    // loops through repos (ordered by star count desc.)
    for (const project in macroResults.items) {
      
      // grabs the individual repo's top level info via deconstruction
      let { name, updated_at, description, stargazers_count } = macroResults.items[project]

      // filters by stars
      if (stargazers_count > 0) {
        // console.log(macroResults.items[project])
        
        
        // fetch the languages for a given repo
        const languages = await fetch(`https://api.github.com/repos/${username}/${name}/languages`)
  
        const languageResults = await languages.json()

        let sum = 0;

        for (const language in languageResults) {
          sum += languageResults[language]
        }
        // console.log(sum)
        const firstLang = Object.keys(languageResults)[0]
        const secondLang = Object.keys(languageResults)[1]

        // to generate language percentages:
        // console.log(languageResults[firstLang], languageResults[secondLang])

        // for entry into database
        // STILL NEED TO HOOK UP USER_ID DYNAMICALLY,
        // CURRENTLY HARD SET TO '2' IN QUERY
        projectData = {
          title: name,
          url: `https://github.com/${username}/${name}`,
          primary_language: firstLang,
          primary_language_percent: Math.round((languageResults[firstLang] / sum) * 100),
          secondary_language: secondLang,
          secondary_language_percent: Math.round((languageResults[secondLang] / sum) * 100),
          description,
          last_updated: updated_at
        }
        console.log(projectData)

        // UNCOMMENT TO ALLOW DATABASE ENTRY OF PROJECTS:
        // axios.post('/api/projects', { projectData })
        
      }
      
    }
    // console.log(projectData);

    // puts each project into database (under user_id 2 for now!!)

      

    // return projectData;
  }

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
        <Button
        variant="contained"
        color="primary"
        onClick={getProjects}
        >
        Autogenerate Projects
        </ Button >
        <br/>
      </div>
      <div className={classes.root}>
      <div className={classes.add}>
      {!manual &&
      <div>
      <Typography className={classes.divide} variant="h4">OR</Typography>
      <br />
      <Button variant="contained" color="primary" onClick={() => {setManual(true)}}>
          Add Projects Manually
      </Button>
      </div>
      }
      {manual && 
      <div>
        {Array(count).fill(myJobs)}
        <Button variant="contained" color="primary" onClick={() => setCount(count + 1)}>
          Add Another Project
        </Button>
        </div>
      }
        </div>
      </div>
    </div>
  )
}
