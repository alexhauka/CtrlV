import React from 'react'; 
import { Button, AppBar, Toolbar, IconButton, Typography, Grid } from '@material-ui/core';
import ListIcon from '@material-ui/icons/List';
import { makeStyles } from '@material-ui/core/styles'; 

const useStyles = makeStyles((theme) => ({
  menuButton: {
    color: "Black"
  },
  title: {
    color: 'Black'
  },
  menuItem: {
    paddingLeft: '10px'
  }
}))


export default function Header() {
  const classes = useStyles()
  return (
    <AppBar position="static">
      <Toolbar>
      <Grid
        container
        direction="row"
        justify=""
        alignItems="center"
      >
          <Typography variant="h6" className={classes.title}>
            Ctrl-V
          </Typography>
          <Typography variant="h6" className={classes.menuItem}>
            Profile 
          </Typography>
          <Typography variant="h6" className={classes.menuItem}>
            Resumes 
          </Typography>

        </Grid>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          <ListIcon />
          </IconButton>
        </Toolbar>
  </AppBar>
  )
}