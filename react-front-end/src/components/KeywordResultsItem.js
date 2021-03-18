import React from 'react';
import { Typography } from '@material-ui/core';

export default function KeywordResultsItem(props) {



    return(
      <div>
        <Typography variant="h5">
          {props.keyword} appears {props.score}x
        </Typography>
      </div>
    )





}