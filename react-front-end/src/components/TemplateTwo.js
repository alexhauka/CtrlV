import React from 'react';
import { makeStyles, Grid, Typography, Container, Paper, TextField  } from '@material-ui/core'


const useStyles = makeStyles(() => ({

  header: {
    // maxWidth: '8.5in',
    // minWidth: '8.5in',
    // maxHeight: '9.5in',
    // minHeight: '9.5in',
    position: 'relative',
    right: 10,
    bottom: 60,
    width: '58.13em',
    height: '10em',
    paddingLeft: '1em',
    paddingRight: '1em',
    backgroundColor: '#FFF8ED'
  },
  outerHead: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  innerHeadLeft: {
    display: 'flex',
    justifyItems: 'space-between'
  },
  innerHeadRight: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    marginTop: '1em',
    marginRight: '1em'
    
  },
  links: {
    textDecoration: 'none',
    color: 'grey',
    fontWeight: 'bold'
  },
  title: {
    width: '100%'
  },
  textfield:{
    fontSize: 25,
    fontFamily: 'Shippori Mincho B1'
  },
  body: {
    
  },
  outerProjects: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  innerProjects: {
    width: '30%',
    margin: '1em',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
  },


}));


export default function TemplateTwo(props) {
  const classes = useStyles();
  console.log(props.data)
  console.log(props.font)

  const { userName, userEmail, userAddress, userPhone, userGithub, userLinkedin } = props.data.basicInfo

  // console.log(props.)
  // const {} = props.data
  // const {} = props.font
  
  return(

    <Paper elevation={0} className={classes.header} square >
      
      <div className={classes.outerHead}>
        <div classname={classes.innerHeadLeft}>
        <Typography
          variant="h3"
          style={{fontFamily: props.font}}
        >{props.data.basicInfo.userName}
        </Typography>
        <br />
        <TextField
        className={classes.title}
        
        InputProps={{
          disableUnderline: true,
          fontFamily: props.font,
          classes: {
            input: classes.textfield            
          },
        }}
        defaultValue='Full-Stack Web Developer'/>
        </div>
        <div
          className={classes.innerHeadRight}
          style={{fontFamily: props.font}}
        >
          <div>
          <a className={classes.links} href={`mailto:${userEmail}`}>
            {userEmail}
          </a>
          </div>
          <div>
          <a className={classes.links} href={`${userGithub}`}>
            github
          </a>
          </div>
          <div>
          <a className={classes.links} href={`${userLinkedin}`}>
            linkedIn
          </a>
          </div>
          {userAddress}
          {userPhone}
        </div>
      </div>
      <br/>
      <br />
      <div className={classes.body} style={{backgroundColor: props.color}}>
        <br />
        <div className={classes.outerProjects} style={{fontFamily: props.font}}>

          <div className={classes.innerProjects}>
            <div>
            {props.data.projects[0].title}
            </div>
            <div>
              <a className={classes.links} href={`${props.data.projects[0].url}`}>
                repository
              </a>
            </div>
            <div>
            Primary Languages: {props.data.projects[0].primary_language}, {props.data.projects[0].secondary_language}
            </div>
            <div>
            "{props.data.projects[0].description}"
            </div>
          </div>

          <div className={classes.innerProjects}>
            <div>
            {props.data.projects[1].title}
            </div>
            <div>
            <a className={classes.links} href={`${props.data.projects[1].url}`}>
            repository
              </a>
            </div>
            <div>
              Primary Languages: {props.data.projects[1].primary_language}, {props.data.projects[1].secondary_language}
            </div>
            <div>
            "{props.data.projects[1].description}"
            </div>
          </div>

          <div className={classes.innerProjects}>
            <div>
            {props.data.projects[2].title}
            </div>
            <div>
            <a className={classes.links} href={`${props.data.projects[2].url}`}>
            repository
              </a>
            </div>
            <div>
            Primary Languages: {props.data.projects[2].primary_language}, {props.data.projects[2].secondary_language}
            </div>
            <div>
            "{props.data.projects[2].description}"
            </div>
          </div>

        </div>

      </div>
      
    </Paper> 

  )
}