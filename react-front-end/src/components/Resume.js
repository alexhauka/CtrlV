import React, { useState } from 'react';
import { makeStyles, Grid, Typography } from '@material-ui/core'
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import RightResume from './RightResume';
import { ColorPicker } from 'material-ui-color';
import LeftResume from './LeftResume';
import TemplateOne from './TemplateOne';
import TemplateTwo from './TemplateTwo';

//*******  FONT STYLES  *******
// font-family: 'Comfortaa', cursive;
// font-family: 'Cormorant Garamond', serif;
// font-family: 'Dancing Script', cursive;
// font-family: 'Fascinate', cursive;
// font-family: 'Holtwood One SC', serif;
// font-family: 'Josefin Slab', serif;
// font-family: 'Lato', sans-serif;
// font-family: 'League Script', cursive;
// font-family: 'Monoton', cursive;
// font-family: 'Montserrat', sans-serif;
// font-family: 'Nanum Pen Script', cursive;
// font-family: 'Open Sans', sans-serif;
// font-family: 'Press Start 2P', cursive;
// font-family: 'Redressed', cursive;
// font-family: 'Shippori Mincho B1', serif;
 

const useStyles = makeStyles(() => ({
  root: {

  },
  rootLeft: {
    display: 'flex',
    flexDirection: 'column',
    height: "100%",
    background: 'linear-gradient(190deg, #3f51b5 30%, #7bc8f6 90%)'
  },

  left: {
    width: "35%",
  },
  ResumeButtons: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    justify: "space-between",
    width: "80%",
    marginTop: "5em",
    margin: "auto"
  },
  right: {
    width: "65%",
    boxShadow: '19px 20px 20px 0px #00000059 inset'
  },
  rightRoot: {
    maxWidth: '8.5in',
    minWidth: '8.5in',
    maxHeight: '11in',
    minHeight: '11in',
    //For text 
    // padding: 10,
    // paddingTop: "5%",
    backgroundColor: {},
    marginBottom: "10%",
    // marginTop: "15%",
    marginLeft: "10%",
    marginTop: 70,
    flexShrink: 1,
    boxShadow: '0px 0px 20px 10px #00000059',
    borderBottom: "solid 1px black"
  }


}));

export default function Resume(props) {

  let data = props.location.state.output
  const { basicInfo, projects, skills, work_experience } = data

  const [template, setTemplate] = useState(1)

  const [color, setColor] = useState('#fff')
  const [borderColor, setBorderColor] = useState('#000000')

  const [font, setFont] = useState('Shippori Mincho B1')
  const [bodyFont, setBodyFont] = useState('Shippori Mincho B1')
  function handleChangeColor(event) {
    setColor({ color: event.hex })
  }
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid
        container
        direction='row'
        justify='space-between'
      >
        <div className={classes.left}>
        <div className={classes.rootLeft}>
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
          <Button onClick={() => setTemplate(1)} >Template One</Button>
          <Button onClick={() => setTemplate(2)}>Template Two</Button>
          <Button >Template Three</Button>
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
            <div>
              <Typography
                variant="subtitle1"
              >
                Heading Font: 
              </Typography>
              <ButtonGroup
                orientation="vertical"
                color="primary"
                aria-label="vertical outlined primary button group"
                variant="contained"
              >
                <Button 
                  onClick={() => {
                    setFont('Fascinate')
                }}>
                  Font One: Fascinate
                </Button>
                <Button
                  onClick={() => {
                    setFont('Redressed')
                  }}
                >
                  Font Two: Redressed
                </Button>
                <Button
                  onClick={() => {
                    setFont('Shippori Mincho B1')
                  }}
                >Font Three: Shippori Mincho B1 </Button>
              </ButtonGroup>
            </div>
        <div>
        <Typography
        variant="subtitle1"
        >
          Body Font:
        </Typography>
        <ButtonGroup
          orientation="vertical"
          color="primary"
          aria-label="vertical contained primary button group"
          variant="contained"
        >
          <Button 
            onClick={() => {
              setBodyFont('Fascinate')
            }}>
              Font One: Fascinate
            </Button>
          <Button
            onClick={() => {
              setBodyFont('Redressed')
            }}
          >
            Font Two: Redressed
          </Button>
          <Button
            onClick={() => {
              setBodyFont('Shippori Mincho B1')
            }}
          >Font Three: Shippori Mincho B1 </Button>
        </ButtonGroup>
        </div>
        <ButtonGroup
          orientation="vertical"
          color="primary"
          aria-label="vertical contained primary button group"
          variant="text"
        >
        </ButtonGroup>
      </div>
          <h1>COLORRRRS</h1>
            <div>
              <Typography
              variant="subtitle1"
              >
                Background Color
              </Typography>
                <ColorPicker name="color" defaultValue={"#fff"} value={color} onChange={(event) => {
                  console.log(event.css.backgroundColor)
                  setColor(event.css.backgroundColor);
                }} />
              </div>
              <div>
                <Typography
                  variant="subtitle1"
                >
                  Border Color
              </Typography>
                <ColorPicker name="color" defaultValue={"#fff"} value={borderColor} onChange={(event) => {
                  console.log(event.css.backgroundColor)
                  setBorderColor(event.css.backgroundColor);
                }} />
              </div>
            </div>
            <div>
            </div>
          </div>
        </div>

        <div className={classes.right}>
        <div className={classes.rightRoot}>
          {template === 1 &&
            <TemplateOne data={data} font={font} color={color} borderColor={borderColor} bodyFont={bodyFont} />
          }{template === 2 &&
            <TemplateTwo data={data} font={font} color={color} borderColor={borderColor} bodyFont={bodyFont} />
          } 
          </div>
        </div>
      </Grid>
    </div>
  );
}