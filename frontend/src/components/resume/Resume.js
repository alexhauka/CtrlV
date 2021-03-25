import React, { useState } from 'react';
import { makeStyles, Grid, Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { ColorPicker } from 'material-ui-color';
import TemplateOne from '../templates/TemplateOne';
import TemplateTwo from '../templates/TemplateTwo';
import TemplateThree from '../templates/TemplateThree'; 
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
    textAlign: 'center',
    background: 'linear-gradient(129deg, #3f51b5 30%, #476bec 90%)'
  },
  sections:{
    border:'1px #3f51b5 solid',
    margin:'5%',
    marginTop: '0',
    padding: '5%',
    borderRadius: 10
  },
  rootLeft: {
    flexDirection: 'column',
    minHeight: "100vh",
    width:'92%',
    margin:'auto',
    borderRadius:10,
    background: 'white',
    boxShadow:'0px 0px 20px 7px #00000059 inset'
  },
  left: {
    width: "35%",
    background: 'linear-gradient(233deg, #3f51b5 30%, #476bec 90%)'
  },
  ResumeButtons: {
    display: 'flex',
    flexDirection: 'column',
    paddingTop: '10%',
    justifyContent: 'center',
    margin: "auto"
  },
  FontButton: {
    width: '80%',
    textAlign: 'center'
  },
  FontRows: {
    display:'flex',
    margin:'5px',
    marginLeft: '5%',
    width: '85%',
  },
  Font: {
    width: "33.3%",
      "&:hover": {
        backgroundColor: "#303f9f",
        color: "white"
      }
  },
  headings:{
    fontFamily: 'Ubuntu',
    margin: 15,
    textAlign:'left',
    marginLeft: 0
  },

  right: {
    width: "63%",
    minHeight: "100vh",
    boxShadow:'0px 0px 20px 7px #00000059 inset',
    background: 'white',
    margin:'auto',
    marginTop:'inherit',
    marginBottom: 'inherit',
    borderRadius:10
  },
  HeadingFont : {
    fontFamily: 'Ubuntu',
    paddingBottom: 10,
    textAlign:'left'
  },
  BodyFont : {
    fontFamily: 'Ubuntu',
    paddingBottom: 10,
    textAlign:'left'
  },
  rightRoot: {
    maxWidth: '8.5in',
    minWidth: '8.5in',
    maxHeight: '11in',
    minHeight: '11in',
    marginBottom: "5%",
    margin:'auto',
    marginTop: 70,
    flexShrink: 1,
    boxShadow: '0px 0px 20px 10px #00000059',
    borderBottom: "solid 1px black"
  },
  button: {
    marginBottom:'1.2em',
    width:'80%',
    color: "white",
    background: 'linear-gradient(45deg, transparent 20%,#FE6B8B 40%, #FF8E53 60%, transparent 80%)',
    '&:hover':{
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    },
  }


}));

export default function Resume(props) {
  console.log(props);
  let data = props.location.state.output
  console.log('this is resume data',data)
  const { basicInfo, projects, skills, work_experience } = data

  const [template, setTemplate] = useState(3)



  const [color, setColor] = useState('#fff')
  const [borderColor, setBorderColor] = useState('#000000')

  const [font, setFont] = useState('Shippori Mincho B1')
  const [bodyFont, setBodyFont] = useState('Shippori Mincho B1')

  const [ selectTemplate, setSelectTemplate ] = useState(template)
  const [ selectHeadFont, setSelectHeadFont ] = useState(font)
  const [ selectBodyFont, setSelectBodyFont ] = useState(bodyFont)

  function handleChangeColor(event) {
    setColor({ color: event.hex })
  }
  
  
function saveResume() {
  console.log("resume", resume);

  props.addResume(resume)
  .then(() => {
    console.log("here after addResume");
    props.history.push("/myresumes");
  });

}


const [aboutMe, setAboutMe] = useState('')

const liftAboutMe = (aboutMeString) => {
  setAboutMe(aboutMeString)
}

const [profession, setProfession] = useState('')

const liftProfession = (professionString) => {
  setProfession(professionString)
}

const resume = {
  template_id: template,
  user_id: projects[0].user_id,
  profession: profession,
  about_me: aboutMe,
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

  function handleTemplateChange(template) {
    setTemplate(template)
    setSelectTemplate(template)
  }

  function handleHeadFontChange(font) {
    setFont(font)
    setSelectHeadFont(font)
  }

  function handleBodyFontChange(font) {
    setBodyFont(font)
    setSelectBodyFont(font)
  }


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
            <div className={classes.sections}>
              <Typography variant="h5" className={classes.headings}>
                  Choose Your Template:
                </Typography>
              <ButtonGroup
                color="primary"
                aria-label="vertical contained primary button group"
                // variant="contained"
              >
                <Button className={classes.font} variant={selectTemplate === 1 ? "contained" : "outlined"} onClick={() => handleTemplateChange(1)} >Organized</Button>
                <Button className={classes.font} variant={selectTemplate === 2 ? "contained" : "outlined"} onClick={() => handleTemplateChange(2)}>Understated</Button>
                <Button className={classes.font} variant={selectTemplate === 3 ? "contained" : "outlined"} onClick={() => handleTemplateChange(3)} >Standout</Button>
              </ButtonGroup>
            </div>
            <div className={classes.sections}>
            <Typography variant="h5" className={classes.headings}>
              Choose Your Font:
            </Typography>
            <div className={classes.FontButtons}>
              <div className={classes.HeadingFont}>
                <Typography
                  className={classes.HeadingFont}
                  variant="subtitle1"
                >
                  Heading Font: 
                </Typography>
                <ButtonGroup
                  // orientation="vertical"
                  className={classes.FontRows}
                  color="primary"
                  aria-label="vertical outlined primary button group"
                  // variant="contained"
                >
                  <Button 
                    variant={selectHeadFont === 'Fascinate' ? "contained" : "outlined"}
                    style={{fontFamily: 'Fascinate'}}
                    className={classes.Font}
                    onClick={() => {
                      handleHeadFontChange('Fascinate')
                  }}>
                    Fascinate
                  </Button>
                  <Button
                    variant={selectHeadFont === 'Redressed' ? "contained" : "outlined"}
                    style={{fontFamily: 'Redressed'}}
                    className={classes.Font}
                    onClick={() => {
                      handleHeadFontChange('Redressed')
                    }}
                  >
                    Redressed
                  </Button>
                  <Button
                    variant={selectHeadFont === 'Shippori Mincho B1' ? "contained" : "outlined"}
                    className={classes.Font}
                    style={{fontFamily: 'Shippori Mincho B1'}}
                    onClick={() => {
                      handleHeadFontChange('Shippori Mincho B1')
                    }}
                  >Shippori Mincho B1 </Button>
                </ButtonGroup>
                <ButtonGroup
                  // orientation="vertical"
                  className={classes.FontRows}
                  color="primary"
                  aria-label="vertical outlined primary button group"
                  // variant="contained"
                >
                  <Button
                    variant={selectHeadFont === 'Comfortaa' ? "contained" : "outlined"}
                    style={{fontFamily: 'Comfortaa'}} 
                    className={classes.Font}
                    onClick={() => {
                      handleHeadFontChange('Comfortaa')
                  }}>
                    Comfortaa
                  </Button>
                  <Button
                    variant={selectHeadFont === 'Cormorant Garamond' ? "contained" : "outlined"}
                    style={{fontFamily: 'Cormorant Garamond'}}
                    className={classes.Font}  
                    onClick={() => {
                      handleHeadFontChange('Cormorant Garamond')
                    }}
                  >
                    Cormorant Garamond
                  </Button>
                  <Button
                    variant={selectHeadFont === 'Dancing Script' ? "contained" : "outlined"}
                    style={{fontFamily: 'Dancing Script'}}
                    className={classes.Font}
                    onClick={() => {
                      handleHeadFontChange('Dancing Script')
                    }}
                  >Dancing Script </Button>
                </ButtonGroup>
                <ButtonGroup
                  // orientation="vertical"
                  className={classes.FontRows}
                  color="primary"
                  aria-label="vertical outlined primary button group"
                  // variant="contained"
                >
                  <Button 
                    variant={selectHeadFont === 'Holtwood One SC' ? "contained" : "outlined"}
                    style={{fontFamily: 'Holtwood One SC'}}
                    className={classes.Font}
                    onClick={() => {
                      handleHeadFontChange('Holtwood One SC')
                  }}>
                    Holtwood One SC
                  </Button>
                  <Button
                    variant={selectHeadFont === 'Josefin Slab' ? "contained" : "outlined"}
                    style={{fontFamily: 'Josefin Slab'}}
                    className={classes.Font}
                    onClick={() => {
                      handleHeadFontChange('Josefin Slab')
                    }}
                  >
                    Josefin Slab
                  </Button>
                  <Button
                    variant={selectHeadFont === 'Lato' ? "contained" : "outlined"}
                    className={classes.Font}
                    style={{fontFamily: 'Lato'}}
                    onClick={() => {
                      handleHeadFontChange('Lato')
                    }}
                  >Lato </Button>
                </ButtonGroup>
                <ButtonGroup
                  // orientation="vertical"
                  className={classes.FontRows}
                  color="primary"
                  aria-label="vertical outlined primary button group"
                  // variant="contained"
                >
                  <Button 
                    variant={selectHeadFont === 'League Script' ? "contained" : "outlined"}
                    style={{fontFamily: 'League Script'}}
                    className={classes.Font}
                    onClick={() => {
                      handleHeadFontChange('League Script')
                  }}>
                    League Script
                  </Button>
                  <Button
                    variant={selectHeadFont === 'Monoton' ? "contained" : "outlined"}
                    style={{fontFamily: 'Monoton'}}
                    className={classes.Font}
                    onClick={() => {
                      handleHeadFontChange('Monoton')
                    }}
                  >
                    Monoton
                  </Button>
                  <Button
                    variant={selectHeadFont === 'Montserrat' ? "contained" : "outlined"}
                    style={{fontFamily: 'Montserrat'}}
                    className={classes.Font}
                    onClick={() => {
                      handleHeadFontChange('Montserrat')
                    }}
                  >Montserrat </Button>
                </ButtonGroup>
                <ButtonGroup
                  // orientation="vertical"
                  className={classes.FontRows}
                  color="primary"
                  aria-label="vertical outlined primary button group"
                  // variant="contained"
                >
                  <Button
                    variant={selectHeadFont === 'Nanum Pen Script' ? "contained" : "outlined"}
                    style={{fontFamily: 'Nanum Pen Script'}} 
                    className={classes.Font}
                    onClick={() => {
                      handleHeadFontChange('Nanum Pen Script')
                  }}>
                    Nanum Pen Script
                  </Button>
                  <Button
                    variant={selectHeadFont === 'Open Sans' ? "contained" : "outlined"}
                    className={classes.Font}
                    style={{fontFamily: 'Open Sans'}} 
                    onClick={() => {
                      handleHeadFontChange('Open Sans')
                    }}
                  >
                  Open Sans
                  </Button>
                  <Button
                    variant={selectHeadFont === 'Yeseva One' ? "contained" : "outlined"}
                    style={{fontFamily: 'Yeseva One'}}
                    className={classes.Font}
                    onClick={() => {
                      handleHeadFontChange('Yeseva One')
                    }}
                  >Yeseva One </Button>
                </ButtonGroup>
              </div>
            <div className={classes.BodyFont}>
            <Typography
                className={classes.HeadingFont}
                variant="subtitle1"
                >
                  Body Font: 
                </Typography>
                <ButtonGroup
                  // orientation="vertical"
                  className={classes.FontRows}
                  color="primary"
                  aria-label="vertical outlined primary button group"
                  // variant="contained"
                >
                  <Button
                    variant={selectBodyFont === 'Fascinate' ? "contained" : "outlined"}
                    style={{fontFamily: 'Fascinate'}} 
                    className={classes.Font}
                    onClick={() => {
                      handleBodyFontChange('Fascinate')
                  }}>
                    Fascinate
                  </Button>
                  <Button
                    variant={selectBodyFont === 'Redressed' ? "contained" : "outlined"}
                    style={{fontFamily: 'Redressed'}}
                    className={classes.Font}
                    onClick={() => {
                      handleBodyFontChange('Redressed')
                    }}
                  >
                    Redressed
                  </Button>
                  <Button
                    variant={selectBodyFont === 'Shippori Mincho B1' ? "contained" : "outlined"}
                    style={{fontFamily: 'Shippori Mincho B1'}}
                    className={classes.Font}
                    onClick={() => {
                      handleBodyFontChange('Shippori Mincho B1')
                    }}
                  >Shippori Mincho B1 </Button>
                </ButtonGroup>
                <ButtonGroup
                  // orientation="vertical"
                  className={classes.FontRows}
                  color="primary"
                  aria-label="vertical outlined primary button group"
                  // variant="contained"
                >
                  <Button 
                    variant={selectBodyFont === 'Comfortaa' ? "contained" : "outlined"}
                    style={{fontFamily: 'Comfortaa'}}
                    className={classes.Font}
                    onClick={() => {
                      handleBodyFontChange('Comfortaa')
                  }}>
                    Comfortaa
                  </Button>
                  <Button
                    variant={selectBodyFont === 'Cormorant Garamond' ? "contained" : "outlined"}
                    style={{fontFamily: 'Cormorant Garamond'}}
                    className={classes.Font}  
                    onClick={() => {
                      handleBodyFontChange('Cormorant Garamond')
                    }}
                  >
                    Cormorant Garamond
                  </Button>
                  <Button
                    variant={selectBodyFont === 'Dancing Script' ? "contained" : "outlined"}
                    style={{fontFamily: 'Dancing Script'}}
                    className={classes.Font}
                    onClick={() => {
                      handleBodyFontChange('Dancing Script')
                    }}
                  >Dancing Script </Button>
                </ButtonGroup>
                <ButtonGroup
                  // orientation="vertical"
                  className={classes.FontRows}
                  color="primary"
                  aria-label="vertical outlined primary button group"
                  // variant="contained"
                >
                  <Button 
                    variant={selectBodyFont === 'Holtwood One SC' ? "contained" : "outlined"}
                    style={{fontFamily: 'Holtwood One SC'}}
                    className={classes.Font}
                    onClick={() => {
                      handleBodyFontChange('Holtwood One SC')
                  }}>
                    Holtwood One SC
                  </Button>
                  <Button
                    variant={selectBodyFont === 'Josefin Slab' ? "contained" : "outlined"}
                    style={{fontFamily: 'Josefin Slab'}}
                    className={classes.Font}
                    onClick={() => {
                      handleBodyFontChange('Josefin Slab')
                    }}
                  >
                    Josefin Slab
                  </Button>
                  <Button
                    variant={selectBodyFont === 'Lato' ? "contained" : "outlined"}
                    style={{fontFamily: 'Lato'}}
                    className={classes.Font}
                    onClick={() => {
                      handleBodyFontChange('Lato')
                    }}
                  >Lato </Button>
                </ButtonGroup>
                <ButtonGroup
                  // orientation="vertical"
                  className={classes.FontRows}
                  color="primary"
                  aria-label="vertical outlined primary button group"
                  // variant="contained"
                >
                  <Button
                    variant={selectBodyFont === 'League Script' ? "contained" : "outlined"}
                    style={{fontFamily: 'League Script'}} 
                    className={classes.Font}
                    onClick={() => {
                      handleBodyFontChange('League Script')
                  }}>
                    League Script
                  </Button>
                  <Button
                    variant={selectBodyFont === 'Monoton' ? "contained" : "outlined"}
                    style={{fontFamily: 'Monoton'}} 
                    className={classes.Font}
                    onClick={() => {
                      handleBodyFontChange('Monoton')
                    }}
                  >
                    Monoton
                  </Button>
                  <Button
                    variant={selectBodyFont === 'Montserrat' ? "contained" : "outlined"}
                    style={{fontFamily: 'Montserrat'}}
                    className={classes.Font}
                    onClick={() => {
                      handleBodyFontChange('Montserrat')
                    }}
                  >Montserrat </Button>
                </ButtonGroup>
                <ButtonGroup
                  // orientation="vertical"
                  className={classes.FontRows}
                  color="primary"
                  aria-label="vertical outlined primary button group"
                  // variant="contained"
                >
                  <Button
                    variant={selectBodyFont === 'Nanum Pen Script' ? "contained" : "outlined"}
                    style={{fontFamily: 'Nanum Pen Script'}} 
                    className={classes.Font}
                    onClick={() => {
                      handleBodyFontChange('Nanum Pen Script')
                  }}>
                    Nanum Pen Script
                  </Button>
                  <Button
                    variant={selectBodyFont === 'Open Sans' ? "contained" : "outlined"}
                    style={{fontFamily: 'Open Sans'}}
                    className={classes.Font}
                    onClick={() => {
                      handleBodyFontChange('Open Sans')
                    }}
                  >
                  Open Sans
                  </Button>
                  <Button
                    variant={selectBodyFont === 'Yeseva One' ? "contained" : "outlined"}
                    style={{fontFamily: 'Yeseva One'}}
                    className={classes.Font}
                    onClick={() => {
                      handleBodyFontChange('Yeseva One')
                    }}
                  >Yeseva One </Button>
                </ButtonGroup>
          </div>
          </div>        
        </div>
        <div className={classes.sections}>
        <Typography variant="h5" className={classes.headings}>
              Choose Your Colors:
            </Typography>
              <div>
                <Typography
                variant="subtitle1"
                className={classes.HeadingFont}
                >
                  Background Color
                </Typography>
                  <ColorPicker name="color" defaultValue={"#fff"} value={color} onChange={(event) => {
                    setColor(event.css.backgroundColor);
                  }} />
                </div>
                <div>
                  <Typography
                    className={classes.HeadingFont}
                    variant="subtitle1"
                  >
                    Border Color
                </Typography>
                  <ColorPicker name="color" defaultValue={"#fff"} value={borderColor} onChange={(event) => {                    
                    setBorderColor(event.css.backgroundColor);
                  }} />
                </div>
                </div>
              </div>
              <div>
              </div>
          </div>
        </div>

        <div className={classes.right}>
        <div className={classes.rightRoot}>
          {template === 1 &&
            <TemplateOne building={true} active={true} profession={profession} aboutMe={aboutMe} data={data} font={font} color={color} borderColor={borderColor} bodyFont={bodyFont} liftAboutMe={liftAboutMe} liftProfession={liftProfession}/>
          }{template === 2 &&
            <TemplateTwo building={true} active={true} profession={profession} aboutMe={aboutMe} data={data} font={font} color={color} borderColor={borderColor} bodyFont={bodyFont} liftAboutMe={liftAboutMe} liftProfession={liftProfession}/>
          }{ template === 3 && 
            <TemplateThree building={true} active={true} profession={profession} aboutMe={aboutMe} data={data} font={font} color={color} borderColor={borderColor} bodyFont={bodyFont} liftAboutMe={liftAboutMe} liftProfession={liftProfession}/>
          }
          </div>
          <Button fullWidth className={classes.button} onClick={saveResume}>Save and Confirm</Button>
        </div>
      </Grid>
    </div>
  );
}
