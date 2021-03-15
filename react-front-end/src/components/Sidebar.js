import React from 'react';
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
import {Link} from 'react-router-dom';


const drawerWidth = 240;
function ListItemLink(props) {
  return <ListItem button component="a" {...props}/>;
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    fontFamily: 'Ubuntu, sans-serif;',
    backgroundColor: "white",
  },
  logo: {
    fontSize: '50px',
    color: 'white',
    textDecoration: 'none',
  },
  appBar: {
    height: '7.5%',
    justifyContent: 'center',
    boxShadow: 'none',
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
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  // drawerIcon: {
  //   transform: 'scale(1.8)'
  // },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
  },
  content: {
    flexGrow: 1,
    // padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: 0,
  }, 
  sideTitle: {
    textAlign: "center",
    textDecoration: "underline"
  }
}));

export default function Sidebar() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar className={classes.nav}>
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
          <h1 noWrap className={classes.title}>
            <Link variant="primary" className={classes.logo} to="/" >C<span className={classes.secondTitle}>(trl)</span>V</Link>
          </h1>
          <Typography variant="h6">
            <Link variant="primary" className={classes.title} to="/signup">sign up</Link>
          </Typography>
          
          </Grid>
          </div>
        
          <div>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            // fontSize='large'
            onClick={handleDrawerOpen}
            className={clsx(open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          </div>
          </Grid>
        </Toolbar>
      </AppBar>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
      </main>
      <Drawer
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
          <ListItemLink href="/skills">
            <ListItemIcon><InboxIcon/></ListItemIcon>
            <ListItemText primary="My Skills" />
          </ListItemLink>
          <ListItemLink href="/work">
            <ListItemIcon><InboxIcon/></ListItemIcon>
            <ListItemText primary="Work Experience" />
          </ListItemLink>
          <ListItemLink href="/github">
            <ListItemIcon><InboxIcon/></ListItemIcon>
            <ListItemText primary="Github" />
          </ListItemLink>
          {['Drafts'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon >{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </div>
  );
}
