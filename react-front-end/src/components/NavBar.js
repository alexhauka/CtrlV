import React from 'react';
import { Link } from 'react-router-dom';
import Dialog from '@material-ui/core/Dialog';
// import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Grid from '@material-ui/core/Grid'; 
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { Button } from '@material-ui/core';
const useStyles = makeStyles(() => ({
root:{
  display:'flex',
  alignItems:'center',
  justifyContent:'space-between',
  fontFamily: 'Ubuntu',
  // backgroundImage: 'linear-gradient(45deg, rgba(63,81,181,1), rgba(63,81,181,.7), rgba(63,81,181,0))',
  position:'relative',
  // boxShadow: '0px 0px 20px 10px #00000059',
  background: 'linear-gradient(6deg, #3f51b5 30%, #476bec 90%)',
  height: '6rem',
  width:'-webkit-fill-available'
}, 
title: {
  fontFamily: 'Ubuntu',
  margin: 15,
  marginLeft: 0,
  marginRight: 30,
  paddingLeft: '3.5%',
  color: '#fff',
  textDecoration: 'none',
},
secondTitle: {
  color: '#fff',
  fontFamily: 'Ubuntu',
  textShadow: 'none'
  
},
logo: {
  fontFamily: 'Ubuntu',
  fontSize: '1.5em',
  color: 'white',
  textDecorationLine: 'none',
  textShadow: '0 0 5px #fff, 0 0 10px #fff, 0 0 20px #fff, 0 0 40px #0ff, 0 0 80px #0ff, 0 0 90px #0ff, 0 0 100px #0ff, 0 0 150px #0ff'
},

nav: {
  display:'flex',
  direction: 'column',
  width:'70%',
  justifyContent:'space-between',
},
navItem: {
  margin: 15,
  color: '#fff',
  textDecoration: 'none',
  fontSize: '1.3rem',
  fontFamily: 'Ubuntu',
  textTransform: "none",
  alignSelf:'center',
  padding: 5,
  '&:hover': {
    color:'#fff',
    textShadow: '0px 0px 20px #fff, 0 0 0px #fff, 1px 0px 15px #0ff'
    }
},
logout:{
  margin: 15,
  color: '#fff',
  textDecoration: 'none',
  textTransform: "none",
  fontSize: '1.3rem',
  fontFamily: 'Ubuntu',
  alignSelf:'center',
  padding: 5,
  '&:hover': {
    color:'white',
    textDecoration: 'none',
    textShadow: '0px 0px 20px #fff, 0 0 0px #fff, 1px 0px 10px #f00'
    }
},
divider: {
  color: 'black',
  height:'auto',
  width: 2
},
user: {
  display:'flex',
  width: '20%',
  alignItems:'center'
},
login: {
  width: '-webkit-fill-available',
},
activeNav: {
  margin: 15,
  color: '#fff',
  textShadow: '0 0 5px #fff, 0 0 0px #fff, 0 0 20px #fff, 0 0 0px #0ff, 0 0 0px #0ff, 0 0 0px #0ff, 0 0 20px #0ff, 0 0 0px #0ff',
  textDecoration: 'none',
  fontSize: '1.3rem',
  alignSelf:'center',
  padding: 5,
}
}));

export default function NavBar(props) {
  const [active, setActive] = React.useState('home')
  const name = function(event){
    console.log("My target", active)
  }

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);

  };

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.title}>
      <h1 nowrap='true' >
        <Link variant="primary" className={classes.logo} name='home' onClick={(event)=> {
              setActive(event.target.name);
              name();
            }} to="/" >C<span className={classes.secondTitle}>(trl)</span>V</Link>
      </h1>
      </div>
      {/* {props.user && <h1 className={classes.navItem}> {props.user.first_name} {props.user.last_name}</h1> } */}
      {props.user === null && 
        <div className={classes.user} >
          <Typography variant="h6" className={classes.login}>
            <Link variant="primary" className={classes.title} to="/signup">sign-up</Link>
          </Typography> 
          <Typography variant="h6" className={classes.login}>
            <Link variant="primary" className={classes.title} to="/login">login</Link>
          </Typography>
        </div>}
        {props.user &&
        <div className={classes.nav}>
          <Typography
            component={() => <Link className={active ==='skills'? classes.activeNav :classes.navItem} name='skills' onClick={(event)=> {
              setActive(event.target.name);
              name();
            }} to='/skills'>My Skills</Link>}
          />
          <Typography
            component={() => <Link className={active ==='work'? classes.activeNav :classes.navItem} name='work' onClick={(event)=> {
              setActive(event.target.name);
              name();
            }} to='/work'>Work Experience</Link>}
          />
          <Typography
            component={() => <Link className={active ==='github'? classes.activeNav :classes.navItem} name='github' onClick={(event)=> {
              setActive(event.target.name);
              name();
            }} to='/github'>Gitub</Link>}
          />
          <Typography
            component={() => <Link className={active ==='info'? classes.activeNav :classes.navItem} name='info' onClick={(event)=> {
              setActive(event.target.name);
              name();
            }} to='/basicInfo'>Contact Info</Link>}
          />
          <Typography
            component={() => <Link className={active ==='resumes'? classes.activeNav :classes.navItem} name='resumes' onClick={(event)=> {
              setActive(event.target.name);
              name();
            }} to='/myresumes'>My Resumes</Link>}
            />
            
            <Button className={active ==='tutorial'? classes.activeNav :classes.navItem} name='tutorial' onClick={(event)=> {
              setActive(event.target.name);
              name();
              handleClickOpen();
            }}
            >
              Tutorial
            </Button>
            <Dialog open={open} onClose={handleClose}
            aria-labelledby="form-dialog-title"
            >
            <DialogTitle id="form-dialog-title">Welcome to C(trl)V!</DialogTitle>
            <DialogContent>
              <DialogContentText>
                Before you get started, you'll need an Indeed account if you don't have one already. 
                <br />
                <br />
                On Indeed's site, save any job postings you're interested in by clicking 'Save Job' on that job post. This will allow you to navigate to your saved jobs, and click on a saved job posting to generate a functioning URL. 
                <br />
                <br />
                Afterwards, continue to fill out our profile and resume material in C(trl)V. Once you've done that, you can enter the URL into the our control panel on the left to see how your skills match up to the given job posting!
                <br />
                <br />
                Once you're feeling confident about getting that job, confirm your resume material and let us plug it in to a resume for you. You can of course style it and tweak to your heart's content. 
                <br />
                <br />
                Once you're happy with that resume, click the save button and you'll see it added to your My Resumes list. 
                <br />
                <br />
                Each of your resumes have their own unique id and url attached to them, allowing you to maintain multiple resumes tailored for as many different job postings as you like!
                <br />
                <br />
                We hope you find C(trl)V helpful. Like you, we've dealt with the toil and trouble of building a resume, and we built C.V. to try and help others acheive their goals faster. Happy job hunting!
              </DialogContentText>
            </DialogContent>
            <Button onClick={handleClose} color="primary">
              Get Started!
            </Button>
            </Dialog>
          <Divider className={classes.divider} orientation="vertical"/>
        </div>
        }
        {props.user && 
        <div>
        <Button  className={classes.logout} onClick={props.logout}>
          logout
        </Button>
      </div>
        }
    </div>
  );

}

