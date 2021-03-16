import React from 'react';
import { Typography } from '@material-ui/core';

export default function KeywordResultsItem(props) {



    return(
      <div>
        <Typography variant="h3">
          {props.keyword}: {props.score}
        </Typography>
      </div>
    )





}