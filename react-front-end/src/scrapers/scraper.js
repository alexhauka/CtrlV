const axios = require('axios');
const cheerio = require('cheerio');
const retext = require('retext') // installed seperately
const pos = require('retext-pos') // installed eperately 
const keywords = require('retext-keywords') //installed seperately
const toString = require('nlcst-to-string')




// array of hard skils
const hardSkills = ['javascript', 'ruby', 'c++', 'c#', 'html', 'css', 'java', 'python', 'typescript', 'express', 'express.js', 'node.js', 'django', 'rails', 'axios', 'react', 'angular', 'vue', 'jquery', 'wordpress', 'jest', 'cypress', 'storybook', 'rspec', 'mocha', 'chai', 'capybara', 'poltergeist', 'mysql', 'postgresql', 'microsql', 'sqlite', 'mongodb']

function scraper(indeedJobURL) {

  return new Promise((resolve, reject) => {
    axios.get(indeedJobURL)
    .then(response => {
  
      //handling the success
      const html = response.data
  
      //loading response data into a Cheerio instance
      const $ = cheerio.load(html);
  
      //select the specific DOM elements of Indeed's job postings
      const scrapedata = $('.jobsearch-jobDescriptionText').text()
        
      const dataForFilter = scrapedata.replace(/[(/:!?),]/g, ' ').toLowerCase().split(' ')
  
  
      resolve(scrapedata);
    })
  })
}


const keywordFilter = (jobText) => {

  const myLangs = []

  for (let word of jobText){
    if (hardSkills.includes(word)){
      myLangs.push(word)
      console.log(word)
    }
  } 
    
  const langCounter = {}
  
  for (const i of myLangs) {
    if (!langCounter[i]) {
      langCounter[i] = 1;
    } else {
      langCounter[i] += 1;
    }
  }
    
  const arrayOfSkills = Object.entries(langCounter).sort((a, b) => b[1] - a[1])   
  let countedObject = {}
  for (const pair of arrayOfSkills) {
    let key = pair[0];
    countedObject[key] = pair[1]
  }

  const options = {
    maximum: 30
  }
        
  return countedObject;

  
}


module.exports = {scraper, keywordFilter}