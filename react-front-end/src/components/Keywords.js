import React, { useState, useEffect } from 'react';

import KeywordResults from './KeywordResults';
import { Button, TextField} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'; 

const { keywordFilter } = require('../scrapers/scraper')

const axios = require('axios').default

const useStyles = makeStyles((theme) => ({
  submit: {
    marginTop: 10,
    color: "white",
    size: "large",
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'
  },
  form: {
    width: "80%",
    marginRight: "auto",
    marginLeft: "auto",
    marginTop: "20%",
    marginBottom: "10%",
  },
  title: {
    backgroundColor:'white',
    borderRadius: 10,
    marginTop: 10
  }
}));

export default function Keywords(props) {
  const [url, setUrl] = useState('')
  const [showKeywords, setShowKeywords] = useState(false)
  const [filterResults, setFilterResults] = useState({})
  const classes = useStyles()

  async function fetchJob() {
    const response = await axios.post('/api/scraper', {
      url: url
    })
    console.log(response.data);
    return response.data;
  }
 
  // useEffect(() => {

    

  // }, [])
  
  const onClick = async () => {
    console.log('clicked submit url')
    const scrapeResults = await fetchJob()
    const dataForFilter = scrapeResults.replace(/[(/:!?),]/g, ' ').toLowerCase().split(' ')
    const results = keywordFilter(dataForFilter)
    // console.log(results)
    setFilterResults({
      ...results
    })
    console.log(filterResults)
    toggleKeywords()
    
    
  };

  const toggleKeywords = () => {
    if (showKeywords === true){
      setShowKeywords(false)
    } else {
      setShowKeywords(true)
    }

  }

  return (
    <div>
      <form className={classes.form} noValidate autoComplete="off">
      <TextField
      className={classes.title}
      variant="filled"
      value={url}
      onChange={(e) => setUrl(e.target.value)}
      id="standard-basic"
      label="URL"
      fullWidth= 'true'
      color="none"/>
      <br/>
      <Button className={classes.submit} variant="outlined" color="default" size="large" onClick={onClick}>Submit</Button>
      </form>
      <Button className={classes.submit} variant="outlined" color="default" size="large" onClick={toggleKeywords}>Toggle Keywords</Button>
      {showKeywords ? <KeywordResults state={props.state} filterResults={filterResults} /> : null }
    </div >
  )
}