import React, { useState } from 'react'; 
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles'; 
import TemplateButtons from './TemplateButtons';
import FontButtons from './FontButtons';
// import ColorButtons from './ColorButtons';
import { ColorPicker } from 'material-ui-color';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justify: "space-evenly",
    height: "100%",
    background: 'linear-gradient(190deg, #3f51b5 30%, #7bc8f6 90%)'
  },
  ResumeButtons: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    justify: "space-between",
    width: "80%",
    marginTop: "5em",
    margin: "auto"
  }
}))

export default function LeftResume() {
  const [color, setColor] = useState("#fff")
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <div className={classes.ResumeButtons}>
        <h1>choose your template:</h1>
        <div className={classes.root}>
      <ButtonGroup
        orientation="vertical"
        color="primary"
        aria-label="vertical outlined primary button group"
      >
      </ButtonGroup>
      <ButtonGroup
        orientation="vertical"
        color="primary"
        aria-label="vertical contained primary button group"
        variant="contained"
      >
        <Button>Organized</Button>
        <Button>Understated</Button>
        <Button>Template Three</Button>
      </ButtonGroup>
      <ButtonGroup
        orientation="vertical"
        color="primary"
        aria-label="vertical contained primary button group"
        variant="text"
      >
      </ButtonGroup>
    </div>
        <h1>choose your font:</h1>
        <div className={classes.FontButtons}>
      <ButtonGroup
        orientation="vertical"
        color="primary"
        aria-label="vertical outlined primary button group"
      >
      </ButtonGroup>
      <ButtonGroup
        orientation="vertical"
        color="primary"
        aria-label="vertical contained primary button group"
        variant="contained"
      >
        <Button>Font One</Button>
        <Button>Font Two</Button>
        <Button>Font Three</Button>
      </ButtonGroup>
      <ButtonGroup
        orientation="vertical"
        color="primary"
        aria-label="vertical contained primary button group"
        variant="text"
      >
      </ButtonGroup>
    </div>
        <h1>choose your colors:</h1>
          <div>
            <ColorPicker defaultValue={color} onChange={(event) => setColor(event.target.value)} />
          </div>
      </div>
      <div>
      </div>
    </div>
  )
}
