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
  console.log("user skill array: ", userSkillArray)

  let jobPostSkillArray = [];

  // add to array of job post skills wanted
  Object.keys(keywords).map(keyword => {
    jobPostSkillArray.push([keyword][0])
  })
  console.log("job post skills wanted: ", jobPostSkillArray)

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
    <Typography variant="h5">
      {skill}
    </Typography>
  ))


  // console.log("missing skills array: ", missingSkills)
  // console.log("present skills array: ", presentSkills)

  // algorithm for calculating skill match percentage:
  const matchPercent = Math.round(100 - ((missingSkills.length / jobPostSkillArray.length) * 100))

  // console.log(keywords)
  const jobKeywordList = Object.keys(keywords).map(keyword => (
    <KeywordResultsItem
      keyword={keyword}
      score={keywords[keyword]}
    />
  ))

  const skillMatchList = presentSkills.map(skill => (
    <KeywordSkillsItem
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
    <div>
      <br />
      <Typography variant="h3">Your skills have a {matchPercent}% match!</Typography>
      <br />
      <Typography variant="h4">Job Keywords:</Typography>
      <br />
      {jobKeywordList}
      <div className={classes.chart}>
        <PieChart keywords={keywords}></PieChart>
      <Typography variant="h4">Your Matching Skills:</Typography>
      <br />
      {skillMatchList}
      <br />
      <Typography variant="h4">Missing Skills:</Typography>
      <br />
      {missingSkills.length > 0 ? displayMissingSkills : null}
      <br />
      </div>
    </div>
  )
}