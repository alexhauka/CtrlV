import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';
import { Typography, Button } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "white",
    paddingTop: 30,
    height: "100%"
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
    textDecoration: 'underline',
  },

  submit: {
    color: "white",
    size: "large",
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'
  },
  button: {
    textAlign: "center"
  }
}));

export default function SkillCheck(props) {
  const data = props.hardskills;
  console.log(data);
  const classes = useStyles();
  const [state, setState] = React.useState({
    gilad: false,
    jason: false,
    antoine: false,
  });

  // function save(event) {
  //   event.preventDefault();
  //   console.log("saving skills");
  //   const userSkills = {
  //     user_id,
  //     hard_skills_id,

  //   }
  //   console.log(userSkills)
  // }
  
  
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
      <div className={classes.button}>
      <Button className={classes.submit} variant="outlined" color="default" size="large" >Submit
      </Button>
      </div>
    </div>
  );
}