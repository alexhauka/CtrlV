import React from 'react';
import { makeStyles, Grid, Typography, Container, Paper  } from '@material-ui/core'

const useStyles = makeStyles(() => ({

  root: {
    minHeight: ""
  }


}));


export default function TemplateTwo(props) {
  const classes = useStyles();
  console.log(props.data)
  console.log(props.font)
  // console.log(props.)
  // const {} = props.data
  // const {} = props.font
  
  return(
    <div>
    <Paper className={classes.root} style={{backgroundColor: props.color}}>
      
      <Typography
        variant="h2"
        style={{fontFamily: props.font}}
      >{props.data.basicInfo.userName}
      </Typography>
      
    </Paper> 


    </div>

  )
}