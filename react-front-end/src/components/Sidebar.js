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


const drawerWidth = 240;
function ListItemLink(props) {
  return <ListItem button component={() => 
                          <Link style={{
                            display: 'flex',
                            padding: '10px',
                            textDecoration: 'none',
                            color: 'black',
                            lineHeight: 1.43,
                          }} to={props.href}>{props.children}</Link>} {...props} />;
  // return <ListItem button component="a" to={props.href} {...props}/>;
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    fontFamily: 'Ubuntu, sans-serif;',
    backgroundColor: "white",
  },
  appBar: {
    height: '7.5em',
    justifyContent: 'center',
    background: 'linear-gradient(45deg, #3f51b5 30%, #FF8E53 90%)',
    // boxShadow: 'none',
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  },
  title: {
    margin: 15,
    marginRight: 30,
    color: '#fff',
    textDecoration: 'none',
    fontSize: '30px'
  },
  secondTitle: {
    color: '#a9a9a9'
  },
  logo: {
    fontSize: '50px',
    color: 'white',
    textDecoration: 'none',
  },
  nav: {
    display:'flex',
    direction: 'column'
  }
  // hide: {
  //   display: 'none',
  //   // transform: 'scale(1.8)'
  // },
  // drawer: {
  //   width: drawerWidth,
  //   flexShrink: 0,
  // },
  // drawerPaper: {
  //   width: drawerWidth,
  // },
  // drawerHeader: {
  //   display: 'flex',
  //   alignItems: 'center',
  //   padding: theme.spacing(0, 1),
  //   // necessary for content to be below app bar
  //   ...theme.mixins.toolbar,
  //   justifyContent: 'flex-start',
  // },
  // content: {
  //   flexGrow: 1,
  //   // padding: theme.spacing(3),
  //   transition: theme.transitions.create('margin', {
  //     easing: theme.transitions.easing.sharp,
  //     duration: theme.transitions.duration.leavingScreen,
  //   }),
  //   marginRight: -drawerWidth,
  // },
  // contentShift: {
  //   transition: theme.transitions.create('margin', {
  //     easing: theme.transitions.easing.easeOut,
  //     duration: theme.transitions.duration.enteringScreen,
  //   }),
  //   marginRight: 0,
  // }, 
  // sideTitle: {
  //   textAlign: "center",
  //   textDecoration: "underline"
  // },
  // sideListItem: {
  //   display: 'flex',
  //   // height: '40px',
  // },
  // sideListText: {
  //   marginLeft: "5px"
  // }
}));

export default function Sidebar(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  // const handleDrawerOpen = () => {
  //   setOpen(true);
  // };

  // const handleDrawerClose = () => {
  //   setOpen(false);
  // };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar >
          <Grid 
            container 
            direction="row"
            justify="space-between"
            alignItems="center"
          >

          <div>

          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
          >
          <h1 nowrap='true' className={classes.title}>
            <Link variant="primary" className={classes.logo} to="/" >C<span className={classes.secondTitle}>(trl)</span>V</Link>
          </h1>
          {props.user && <h1> {props.user.first_name} {props.user.last_name}</h1> } 
          {props.user === null && 
          <>
            <Typography variant="h6">
              <Link variant="primary" className={classes.title} to="/signup">sign up</Link>
            </Typography> 
            <Typography variant="h6">
              <Link variant="primary" className={classes.title} to="/login">login</Link>
            </Typography>
          </>}
          {props.user &&
          <div className={classes.nav}>
          <Button className={classes.title} onClick={props.logout}>
            logout
          </Button>
          <Typography
            component={() => <Link to='/skills'>My Skills</Link>}
          />
          <Typography
            component={() => <Link to='/work'>Work Experience</Link>}
          />
          <Typography
            component={() => <Link to='/github'>Gitub</Link>}
          />
          <Typography
            component={() => <Link to='/basicInfo'>Contact Info</Link>}
          />
          <Typography
            component={() => <Link to='/myresumes'>My Resumes</Link>}
          />
          </div> 
          }
          </Grid>
          </div>
        
          {/* <div>
          {props.user && 
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            // fontSize='large'
            // onClick={handleDrawerOpen}
            // className={clsx(open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>}
          </div> */}
          </Grid>
        </Toolbar>
      </AppBar>
      {/* <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      > */}
        {/* <div className={classes.drawerHeader} />
      </main> */}
      {/* <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="right"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <Typography className={classes.sideTitle}>My Profile</Typography>
        <List>
          <ListItemLink className={classes.sideListItem} href="/skills">
            <ListItemIcon style={{paddingLeft: '5px'}}><InboxIcon/></ListItemIcon>
            <ListItemText className={classes.sideListText} primary="My Skills" />
          </ListItemLink>
          <ListItemLink href="/work">
            <ListItemIcon style={{paddingLeft: '5px'}}><InboxIcon/></ListItemIcon>
            <ListItemText className={classes.sideListText} primary="Work Experience" />
          </ListItemLink>
          <ListItemLink href="/github">
            <ListItemIcon style={{paddingLeft: '5px'}}><InboxIcon/></ListItemIcon>
            <ListItemText className={classes.sideListText} primary="Github" />
          </ListItemLink>
          <ListItemLink href="/basicInfo">
            <ListItemIcon style={{paddingLeft: '5px'}}><InboxIcon/></ListItemIcon>
            <ListItemText className={classes.sideListText} primary="Basic Info" />
          </ListItemLink>
        </List>
        <Divider />
        <ListItemLink href="/myresumes">
            <ListItemIcon style={{paddingLeft: '5px'}}><InboxIcon/></ListItemIcon>
            <ListItemText className={classes.sideListText} primary="My Resumes" />
          </ListItemLink>
        <List>
          {['Trash', 'Spam'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer> */}
    </div>
  );
}
