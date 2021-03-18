import React from 'react';
import { makeStyles, Grid, Typography, Container  } from '@material-ui/core'

const useStyles = makeStyles(() => ({
//   root: {

//   },
//   rootLeft: {
//     display: 'flex',
//     flexDirection: 'column',
//     justify: "space-evenly",
//     height: "100%",
//     background: 'linear-gradient(190deg, #3f51b5 30%, #7bc8f6 90%)'
//   },
  
//   left: {
//     width: "35%",
//   },
//   ResumeButtons: {
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'center',
//     justify: "space-between",
//     width: "80%",
//     marginTop: "5em",
//     margin: "auto"
//   },
//   right: {
//    width: "65%",
//    boxShadow:'19px 20px 20px 0px #00000059 inset'
//   },
//   rightRoot: {
//     maxWidth: '75%',
//     minHeight: "100vw",
//     textAlign: "center",
//     //For text 
//     padding: 10,
//     paddingTop: "5%",
//     backgroundColor:{},
//     marginLeft: "10%",
//     marginTop: 50,
//     flexShrink: 1,
//     border: "solid 1px black"
    
//   }


}));


export default function TemplateOne(props) {
  const classes = useStyles();
  console.log(props.data)
  console.log(props.font)
  // console.log(props.)
  // const {} = props.data
  // const {} = props.font
  
  return(

    <Container style={{backgroundColor: props.color}}>
      
      <Typography
          variant="h2"
          style={{fontFamily: props.font}}
      >{props.data.basicInfo.userName}
      </Typography>
      
    </Container> 

  )
}