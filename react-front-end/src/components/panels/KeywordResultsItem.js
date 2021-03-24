import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'; 

const useStyles = makeStyles((theme) => ({
  stats: {
    fontFamily: 'Ubuntu'
  }
}));

export default function KeywordResultsItem(props) {
  const classes = useStyles();
  
    return(
      <div>
        <Typography className={classes.stats} variant="h5">
          {props.keyword} appears {props.score}x
        </Typography>
      </div>
    )

}