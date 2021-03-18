import React from 'react';
import { makeStyles, Grid, Typography, Container  } from '@material-ui/core'

const useStyles = makeStyles(() => ({
  root: {},
  head: {
    display:'flex',
    direction: 'row',
    height: "20%"
  },
  contact: {
    display:'flex',
    direction:'column',

  }
}));

// userAddress: "Calgary, AB"
// userEmail: "jacobhein1892@gmail.com"
// userGithub: null
// userLinkedin: null
// userName: "Jake Hein"
// userPhone: "604-123-4567"

export default function TemplateOne(props) {
  const { basicInfo, projects, skills, work_experience } = props.data
  const classes = useStyles();
  console.log(props.data)
  console.log(props.font)
  // console.log(props.)
  // const {} = props.data
  // const {} = props.font

  return(

    <Container style={{backgroundColor: props.color}}>
      <div className={classes.head}>
      <Typography
          variant="h2"
          style={{fontFamily: props.font}}
      >{props.data.basicInfo.userName}
      </Typography>
      <div className={classes.contact}>
        {basicInfo.userAddress}
        {basicInfo.userEmail}
        {basicInfo.userGithub}
        {basicInfo.userPhone}
      </div>
      </div>
      <section name="skills">

      </section>
      <section name="basic_info">

      </section>
      <section name="projects">

      </section>
      <section name="work_experience">

      </section>
    </Container> 

  )
}