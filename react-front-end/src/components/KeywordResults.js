import React from 'react';
import { Typography } from '@material-ui/core';


import { makeStyles } from '@material-ui/core/styles'; 
import PieChart from './PieChart';

import KeywordResultsItem from './KeywordResultsItem'
import KeywordSkillsItem from './KeywordSkillsItem';

const useStyles = makeStyles((theme) => ({
  chart: {
    opactiy: 0.2,
    marginTop: "10%",
    width:'80%',
    margin:'auto'
  },
  stats: {
    fontFamily: 'Ubuntu',
    // marginBottom: '30px'
  },
  missingSkills: {
    fontFamily: 'Ubuntu',
    color: 'red'
  },
  keywords:{
    border:'1px solid #3f51b5',
    width:'80%',
    margin:'auto',
    marginTop:30,
    padding:'2.5%',
    borderRadius:20
  },
  matching:{
    border:'1px solid #3f51b5',
    // width:'80%',
    margin:'auto',
    // marginTop:30,
    padding:'2.5%',
    borderRadius:20
  },
  missing:{
    border:'1px solid #ff00009c',
    // width:'80%',
    margin:'auto',
    marginTop:30,
    marginBottom:20,
    padding:'2.5%',
    borderRadius:20
  }
}));

export default function KeywordResults(props) {
  const classes = useStyles();
  const keywords = props.filterResults;
  const userHardSkills = props.state.userHardSkills;

  let userSkillArray = [];

  // add to array of user skills (used to compare with job post)
  Object.keys(userHardSkills).map(skillObj => {
    userSkillArray.push(userHardSkills[skillObj].name)
  })

  let jobPostSkillArray = [];

  // add to array of job post skills wanted
  Object.keys(keywords).map(keyword => {
    jobPostSkillArray.push([keyword][0])
  })

  let missingSkills = [];
  let presentSkills = [];

  jobPostSkillArray.forEach(skill => {
    if (!userSkillArray.includes(skill)) {
      missingSkills.push(skill)
    }
    if (userSkillArray.includes(skill)) {
      presentSkills.push(skill)
    }
  })


  const displayMissingSkills = missingSkills.map(skill => (
    <Typography className={classes.missingSkills} variant="h5">
      {skill}
    </Typography>
  ))

  // algorithm for calculating skill match percentage:
  const matchPercent = Math.round(100 - ((missingSkills.length / jobPostSkillArray.length) * 100))

  // console.log(keywords)
  const jobKeywordList = Object.keys(keywords).map(keyword => (
    <KeywordResultsItem
      className={classes.stats}
      keyword={keyword}
      score={keywords[keyword]}
    />
  ))

  const skillMatchList = presentSkills.map(skill => (
    <KeywordSkillsItem
      className={classes.stats}
      skill={skill}
    />
  ))

  // for array of user skill objects (userHardSkills)
  // if skill is in keywordlist
  // add to output
  // after: if output does not  include keyword from post
  // output that
  // create score (percentage) based off how many userskills are in post


  return (
    <div >
      <br />
      <Typography className={classes.stats} variant="h4">Your skills have a {matchPercent}% match!</Typography>
      <br />
      <div className={classes.keywords}>
      <Typography className={classes.stats} variant="h4">Job Keywords:</Typography>
      <br />
      {jobKeywordList}
      </div>
      <div className={classes.chart}>
        <PieChart className={classes.stats} keywords={keywords}></PieChart>
      <div className={classes.matching}>
      <Typography className={classes.stats} variant="h4">Your Matching Skills:</Typography>
      <br />
      {skillMatchList}
      <br />
      </div>
      {missingSkills.length > 0 &&  
      <div className={classes.missing}>
      <Typography className={classes.stats} variant="h5">Missing Skills:</Typography>
      <br />
      {displayMissingSkills}
      <br />
      </div>
      }
      </div>
    </div>
  )
}