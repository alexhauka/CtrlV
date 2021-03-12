const axios = require('axios');
const cheerio = require('cheerio');
// var vfile = require('to-vfile')
const retext = require('retext') // installed seperately
const pos = require('retext-pos') // installed eperately 
const keywords = require('retext-keywords') //installed seperately
const toString = require('nlcst-to-string')


// array of hard skils
const hardSkills = ['javascript', 'ruby', 'c++', 'c#', 'html', 'css', 'java', 'python', 'typescript', 'express', 'express.js', 'node.js', 'django', 'rails', 'axios', 'react', 'angular', 'vue', 'jquery', 'wordpress', 'jest', 'cypress', 'storybook', 'rspec', 'mocha', 'chai', 'capybara', 'poltergeist', 'mysql', 'postgresql', 'microsql', 'sqlite', 'mongodb']

function scraper(indeedJobURL) {

  axios.get(indeedJobURL)
  
  .then(response => {

    //handling the success
    const html = response.data

    //loading response data into a Cheerio instance
    const $ = cheerio.load(html);

    //select the specific DOM elements of Indeed's job postings
    const scrapedata = $('.jobsearch-jobDescriptionText').text()
    // console.log("Scrapedata", scrapedata)
    const newdata = scrapedata.replace(/[(/:!?),]/g, ' ').toLowerCase().split(' ')
    
    const myLangs = []
  
    for (let i of newdata){
      if (hardSkills.includes(i)){
        myLangs.push(i)
        // console.log(i)
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

    // yikes
    const arrayOfSkills = Object.entries(langCounter).sort((a, b) => b[1] - a[1])   
    // the other other way:
    let otherObj = {}
    for (const pair of arrayOfSkills) {
      let key = pair[0];
      otherObj[key] = pair[1]
    }
    console.log("CHECK IT: ", otherObj);


  
    



    // console.log(newdata)  
    //outputting the scraped data
    // console.log(scrapedata);
    // return scrapedata;


const options = {
  maximum: 30
}

    retext()
      .use(pos) // Make sure to use `retext-pos` before `retext-keywords`.
      .use(keywords, options)
      .process(myLangs.join(" "), done)

    function done(err, file) {
      if (err) throw err

      console.log('Keywords:')
      file.data.keywords.forEach(function(keyword) {
        // console.log("File Data:" ,file.data)
        // console.log(toString(keyword.matches[0].node))
      })

      console.log()
      console.log('Key-phrases:')
        file.data.keyphrases.forEach(function(phrase) {
        // console.log(phrase.matches[0].nodes.map(stringify).join(''))
        function stringify(value) {
        return toString(value)
      }
    })
  }



  })
  .catch( error => {
    console.log(error);
  }); 

}



module.exports = {scraper}