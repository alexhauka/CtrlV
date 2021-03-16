import React from 'react';
import { Typography } from '@material-ui/core';


import { makeStyles } from '@material-ui/core/styles'; 
import PieChart from './PieChart';

import KeywordResultsItem from './KeywordResultsItem'

const useStyles = makeStyles((theme) => ({
  chart: {
    opactiy: 0.2,
    marginTop: "10%",
  }
}));

export default function KeywordResults(props) {
  const classes = useStyles()
  const keywords = props.filterResults
  // console.log(keywords)
  const keywordList = Object.keys(keywords).map(keyword => (
    <KeywordResultsItem
      keyword={keyword}
      score={keywords[keyword]}
    />

  ))


  return (
    <div>
      <Typography variant="h3">Keyword Scores</Typography>
      <br/>
      {keywordList}
      <div className={classes.chart}>
        <PieChart keywords={keywords}></PieChart>
      </div>
    </div>
  )
}