import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';
import { Typography } from '@material-ui/core';

const hardSkills = ['javascript', 'ruby', 'c++', 'c#', 'html', 'css', 'java', 'python', 'typescript', 'express', 'express.js', 'node.js', 'django', 'rails', 'axios', 'react', 'angular', 'vue', 'jquery', 'wordpress', 'jest', 'cypress', 'storybook', 'rspec', 'mocha', 'chai', 'capybara', 'poltergeist', 'mysql', 'postgresql', 'microsql', 'sqlite', 'mongodb']

const data = [
  {name: 'javascript' ,type: 'language'},
  {name: 'ruby' ,type: 'language'},
  {name: 'c++' ,type: 'language'},
  {name: 'c#' ,type: 'language'},
  {name: 'html' ,type: 'language'},
  {name: 'css' ,type: 'language'},
  {name: 'java' ,type: 'language'},
  {name: 'python' ,type: 'language'},
  {name: 'typescript' ,type: 'language'},
  {name: 'express' ,type: 'framework'},
  {name: 'express.js' ,type: 'framework'},
  {name: 'node.js' ,type: 'framework'},
  {name: 'django' ,type: 'framework'},
  {name: 'rails' ,type: 'framework'},
  {name: 'axios' ,type: 'framework'},
  {name: 'react' ,type: 'framework'},
  {name: 'vue' ,type: 'framework'},
  {name: 'jquery' ,type: 'framework'},
  {name: 'wordpress' ,type: 'framework'},
  {name: 'jest' ,type: 'testing'},
  {name: 'cypress' ,type: 'testing'},
  {name: 'storybook' ,type: 'testing'},
  {name: 'rspec' ,type: 'testing'},
  {name: 'mocha' ,type: 'testing'},
  {name: 'chai' ,type: 'testing'},
  {name: 'capybara' ,type: 'testing'},
  {name: 'poltergeist' ,type: 'testing'},
  {name: 'mysql' ,type: 'database'},
  {name: 'postgresql' ,type: 'database'},
  {name: 'microsql' ,type: 'database'},
  {name: 'sqlite' ,type: 'database'},
  {name: 'mongodb' ,type: 'database'}
]



const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "white",
    // justify: 'space-around'
  },
  skills: {
    display: 'flex',
    direction:"row",
    justifyContent: 'center',

    // width: '80%',
    
  },
  formControl: {
    margin: theme.spacing(3),
  },
  skillSet: {
    textAlign: "left",
    margin: "2%",
    padding: "2%",
    border: "solid green 1px",
    borderRadius: 20
  },

  heading: {
    textAlign: 'center',
    textDecoration: 'underline'
  }
}));

export default function SkillCheck() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    gilad: false,
    jason: false,
    antoine: false,
  });
  
  
  const languagesList = data.map(s => {
    if (s.type === 'language') {
      return(
        <>
        <FormControlLabel
          control={<Checkbox name={s.name} />}
          label={s.name}
        />
        <br/>
        </>
      )
    }
  })
    
    const frameworksList = data.map(s => {
      if (s.type ==='framework') {
        return (
          <>
          <FormControlLabel
            control={<Checkbox name={s.name} />}
          label={s.name}
          />
          <br/>
          </>
        )
      }
    })

    const testingList = data.map(s => {
      if (s.type === 'testing' || s.type === 'database'){
        return (
          <>
          <FormControlLabel
          control={<Checkbox name={s.name} />}
          label={s.name}
          />
          <br/>
          </>
        )
      }
    })
  
  
  
    const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const { gilad, jason, antoine } = state;
  // const error = [gilad, jason, antoine].filter((v) => v).length !== 2;

  return (
    <div className={classes.root}>
      <div className={classes.heading}>
        <Typography variant="h3">My Skills</Typography>
      </div>
      <section className={classes.skills}>
          <div className={classes.skillSet}>
            <FormLabel component="legend">Languages</FormLabel>
            {languagesList}
          </div>
          <div className={classes.skillSet}>
            <FormLabel component="legend">Databases and testing</FormLabel>
            {testingList}
          </div>
          <div className={classes.skillSet}>
            <FormLabel component="legend">Frameworks</FormLabel>
            {frameworksList}
          </div>
      </section>
    </div>
  );
}





{/* <FormControl component="fieldset" className={classes.formControl}>
<FormLabel component="legend">Databases and testing</FormLabel>
<FormGroup>
  <FormControlLabel
    control={<Checkbox checked={gilad} onChange={handleChange} name="gilad" />}
    label="Gilad Gray"
  />
  <FormControlLabel
    control={<Checkbox checked={jason} onChange={handleChange} name="jason" />}
    label="Jason Killian"
  />
  <FormControlLabel
    control={<Checkbox checked={antoine} onChange={handleChange} name="antoine" />}
    label="Antoine Llorca"
  />
</FormGroup>
<FormHelperText>-Hank Hill</FormHelperText>
</FormControl> */}