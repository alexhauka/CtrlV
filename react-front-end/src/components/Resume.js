import React, { useState } from 'react';
import axios from 'axios';
import { makeStyles, Grid, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import RightResume from './RightResume';
import { ColorPicker } from 'material-ui-color';
import LeftResume from './LeftResume';
import TemplateOne from './TemplateOne';
import TemplateTwo from './TemplateTwo';

//*******  FONT STYLES  *******
// font-family: 'Fascinate', cursive;
// font-family: 'Redressed', cursive;
// font-family: 'Shippori Mincho B1', serif;
// font-family: 'Comfortaa', cursive;
// font-family: 'Cormorant Garamond', serif;
// font-family: 'Dancing Script', cursive;
// font-family: 'Holtwood One SC', serif;
// font-family: 'Josefin Slab', serif;
// font-family: 'Lato', sans-serif;
// font-family: 'League Script', cursive;
// font-family: 'Monoton', cursive;
// font-family: 'Montserrat', sans-serif;
// font-family: 'Nanum Pen Script', cursive;
// font-family: 'Open Sans', sans-serif;
// font-family: 'Yeseva One', cursive;


 

const useStyles = makeStyles(() => ({
  root: {
    textAlign: 'center'
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
  FontButton: {
    width: '80%',
    textAlign: 'center'
  },
  FontRows: {
    display:'flex',
    justifyItems:'space-between',
    width: '100%',
  },
  Font: {
    width: "33.3%"
  },
  right: {
    width: "65%",
    boxShadow: '19px 20px 20px 0px #00000059 inset'
  },
  HeadingFont : {
    paddingBottom: 10
  },
  BodyFont : {
    paddingBottom: 10
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
  console.log('this is resume data',data)
  const { basicInfo, projects, skills, work_experience } = data

  const [template, setTemplate] = useState(1)

  const [color, setColor] = useState('#fff')
  const [borderColor, setBorderColor] = useState('#000000')

  const [font, setFont] = useState('Shippori Mincho B1')
  const [bodyFont, setBodyFont] = useState('Shippori Mincho B1')
  function handleChangeColor(event) {
    setColor({ color: event.hex })
  }
  
  
function saveResume(resumeObject) {

  console.log("This is the resume Object: ", resumeObject);
  // console.log('user id: ', projects[0].user_id)
  axios.post('/api/users/:id/resumes/:resumeid', { resumeObject })

}

const resume = {
  template_id: template,
  user_id: projects[0].user_id, 
  background_color: color,
  border_color: borderColor,
  head_font: font,
  body_font: bodyFont, 
  project_1: projects[0],
  project_2: projects[1],
  project_3: projects[2],
  work_1: work_experience[0],
  work_2: work_experience[1],
  work_3: work_experience[2],
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
            <div className={classes.HeadingFont}>
              <Typography
                variant="h5"
              >
                Heading Font: 
              </Typography>
              <ButtonGroup
                // orientation="vertical"
                className={classes.FontRows}
                color="primary"
                aria-label="vertical outlined primary button group"
                variant="contained"
              >
                <Button 
                  className={classes.Font}
                  onClick={() => {
                    setFont('Fascinate')
                }}>
                  Fascinate
                </Button>
                <Button
                  className={classes.Font}
                  onClick={() => {
                    setFont('Redressed')
                  }}
                >
                  Redressed
                </Button>
                <Button
                  className={classes.Font}
                  onClick={() => {
                    setFont('Shippori Mincho B1')
                  }}
                >Shippori Mincho B1 </Button>
              </ButtonGroup>
              <ButtonGroup
                // orientation="vertical"
                className={classes.FontRows}
                color="primary"
                aria-label="vertical outlined primary button group"
                variant="contained"
              >
                <Button 
                  className={classes.Font}
                  onClick={() => {
                    setFont('Comfortaa')
                }}>
                  Comfortaa
                </Button>
                <Button
                  className={classes.Font}  
                  onClick={() => {
                    setFont('Cormorant Garamond')
                  }}
                >
                  Cormorant Garamond
                </Button>
                <Button
                  className={classes.Font}
                  onClick={() => {
                    setFont('Dancing Script')
                  }}
                >Dancing Script </Button>
              </ButtonGroup>
              <ButtonGroup
                // orientation="vertical"
                className={classes.FontRows}
                color="primary"
                aria-label="vertical outlined primary button group"
                variant="contained"
              >
                <Button 
                  className={classes.Font}
                  onClick={() => {
                    setFont('Holtwood One SC')
                }}>
                  Holtwood One SC
                </Button>
                <Button
                  className={classes.Font}
                  onClick={() => {
                    setFont('Josefin Slab')
                  }}
                >
                  Josefin Slab
                </Button>
                <Button
                  className={classes.Font}
                  onClick={() => {
                    setFont('Lato')
                  }}
                >Lato </Button>
              </ButtonGroup>
              <ButtonGroup
                // orientation="vertical"
                className={classes.FontRows}
                color="primary"
                aria-label="vertical outlined primary button group"
                variant="contained"
              >
                <Button 
                  className={classes.Font}
                  onClick={() => {
                    setFont('League Script')
                }}>
                  League Script
                </Button>
                <Button
                  className={classes.Font}
                  onClick={() => {
                    setFont('Monoton')
                  }}
                >
                  Monoton
                </Button>
                <Button
                  className={classes.Font}
                  onClick={() => {
                    setFont('Montserrat')
                  }}
                >Montserrat </Button>
              </ButtonGroup>
              <ButtonGroup
                // orientation="vertical"
                className={classes.FontRows}
                color="primary"
                aria-label="vertical outlined primary button group"
                variant="contained"
              >
                <Button 
                  className={classes.Font}
                  onClick={() => {
                    setFont('Nanum Pen Script')
                }}>
                  Nanum Pen Script
                </Button>
                <Button
                  className={classes.Font}
                  onClick={() => {
                    setFont('Open Sans')
                  }}
                >
                 Open Sans
                </Button>
                <Button
                  className={classes.Font}
                  onClick={() => {
                    setFont('Yeseva One')
                  }}
                >Yeseva One </Button>
              </ButtonGroup>
            </div>
          <div className={classes.BodyFont}>
          <Typography
                variant="h5"
              >
                Body Font: 
              </Typography>
              <ButtonGroup
                // orientation="vertical"
                className={classes.FontRows}
                color="primary"
                aria-label="vertical outlined primary button group"
                variant="contained"
              >
                <Button 
                  className={classes.Font}
                  onClick={() => {
                    setBodyFont('Fascinate')
                }}>
                  Fascinate
                </Button>
                <Button
                  className={classes.Font}
                  onClick={() => {
                    setBodyFont('Redressed')
                  }}
                >
                  Redressed
                </Button>
                <Button
                  className={classes.Font}
                  onClick={() => {
                    setBodyFont('Shippori Mincho B1')
                  }}
                >Shippori Mincho B1 </Button>
              </ButtonGroup>
              <ButtonGroup
                // orientation="vertical"
                className={classes.FontRows}
                color="primary"
                aria-label="vertical outlined primary button group"
                variant="contained"
              >
                <Button 
                  className={classes.Font}
                  onClick={() => {
                    setBodyFont('Comfortaa')
                }}>
                  Comfortaa
                </Button>
                <Button
                  className={classes.Font}  
                  onClick={() => {
                    setBodyFont('Cormorant Garamond')
                  }}
                >
                  Cormorant Garamond
                </Button>
                <Button
                  className={classes.Font}
                  onClick={() => {
                    setBodyFont('Dancing Script')
                  }}
                >Dancing Script </Button>
              </ButtonGroup>
              <ButtonGroup
                // orientation="vertical"
                className={classes.FontRows}
                color="primary"
                aria-label="vertical outlined primary button group"
                variant="contained"
              >
                <Button 
                  className={classes.Font}
                  onClick={() => {
                    setBodyFont('Holtwood One SC')
                }}>
                  Holtwood One SC
                </Button>
                <Button
                  className={classes.Font}
                  onClick={() => {
                    setBodyFont('Josefin Slab')
                  }}
                >
                  Josefin Slab
                </Button>
                <Button
                  className={classes.Font}
                  onClick={() => {
                    setBodyFont('Lato')
                  }}
                >Lato </Button>
              </ButtonGroup>
              <ButtonGroup
                // orientation="vertical"
                className={classes.FontRows}
                color="primary"
                aria-label="vertical outlined primary button group"
                variant="contained"
              >
                <Button 
                  className={classes.Font}
                  onClick={() => {
                    setBodyFont('League Script')
                }}>
                  League Script
                </Button>
                <Button
                  className={classes.Font}
                  onClick={() => {
                    setBodyFont('Monoton')
                  }}
                >
                  Monoton
                </Button>
                <Button
                  className={classes.Font}
                  onClick={() => {
                    setBodyFont('Montserrat')
                  }}
                >Montserrat </Button>
              </ButtonGroup>
              <ButtonGroup
                // orientation="vertical"
                className={classes.FontRows}
                color="primary"
                aria-label="vertical outlined primary button group"
                variant="contained"
              >
                <Button 
                  className={classes.Font}
                  onClick={() => {
                    setBodyFont('Nanum Pen Script')
                }}>
                  Nanum Pen Script
                </Button>
                <Button
                  className={classes.Font}
                  onClick={() => {
                    setBodyFont('Open Sans')
                  }}
                >
                 Open Sans
                </Button>
                <Button
                  className={classes.Font}
                  onClick={() => {
                    setBodyFont('Yeseva One')
                  }}
                >Yeseva One </Button>
              </ButtonGroup>
        </div>

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
          <Button onClick={() => saveResume(resume)}>Save and Confirm</Button>
        </div>
      </Grid>
    </div>
  );
}





// POST ROUTE: users/:id/resumes/:resumeid

// resumes table:
/*
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  template_id INTEGER REFERENCES  templates(id) ON DELETE CASCADE,
  background_color VARCHAR(255) NOT NULL DEFAULT 'white',
  border_color VARCHAR(255) NOT NULL DEFAULT 'black',
  head_font VARCHAR(255),
  body_font VARCHAR(255),
  date_uploaded TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  project_1 INTEGER REFERENCES projects(id),
  project_2 INTEGER REFERENCES projects(id),
  project_3 INTEGER REFERENCES projects(id),
  work_1 INTEGER REFERENCES work_experiences(id),
  work_2 INTEGER REFERENCES work_experiences(id),
  work_3 INTEGER REFERENCES work_experiences(id)

*/