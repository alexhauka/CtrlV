import React from 'react';
import { Link } from 'react-router-dom';
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
  boxShadow: '0px 0px 20px 10px #00000059',
  background: 'linear-gradient(6deg, #3f51b5 30%, #FF8E53 90%)',
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
  // fontSize: '30px'
},
secondTitle: {
  color: '#a9a9a9',
  fontFamily: 'Ubuntu',
},
logo: {
  fontFamily: 'Ubuntu',
  fontSize: '1.5em',
  color: 'white',
  textDecoration: 'none',
},
nav: {
  display:'flex',
  direction: 'column',
  width:'70%',
  justifyContent:'space-between',
},
navItem: {
  margin: 15,
  // marginLeft: 0,
  // marginRight: 30,
  // paddingLeft: '3.5%',
  color: '#fff',
  textDecoration: 'none',
  fontSize: '1.3rem',
  alignSelf:'center',
  // color:'transparent',
  // backdropFilter: 'hue-rotate(180deg)',
  padding: 5,
  '&:hover': {
    // background:'transparent',
    // backdropFilter: 'hue-rotate(180deg)',
    
    // borderRadius: 20,
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
}
}));

export default function NavBar(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.title}>
      <h1 nowrap='true' >
        <Link variant="primary" className={classes.logo} to="/" >C<span className={classes.secondTitle}>(trl)</span>V</Link>
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
            component={() => <Link className={classes.navItem} to='/skills'>My Skills</Link>}
          />
          <Typography
            component={() => <Link className={classes.navItem} to='/work'>Work Experience</Link>}
          />
          <Typography
            component={() => <Link className={classes.navItem} to='/github'>Gitub</Link>}
          />
          <Typography
            component={() => <Link className={classes.navItem} to='/basicInfo'>Contact Info</Link>}
          />
          <Typography
            component={() => <Link className={classes.navItem} to='/myresumes'>My Resumes</Link>}
            />
          <Divider className={classes.divider} orientation="vertical"/>
        </div>
        }
        {props.user && 
        <div>
        <Button className={classes.navItem} onClick={props.logout}>
          logout
        </Button>
      </div>
        }
    </div>
  );

}

