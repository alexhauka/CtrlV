const axios = require('axios');
const cheerio = require('cheerio');

function scraper(indeedJobURL) {

  axios.get(indeedJobURL)
  
  .then(response => {

    //handling the success
    const html = response.data

    //loading response data into a Cheerio instance
    const $ = cheerio.load(html);

    //selecting the elements with the data
    const scrapedata = $('.jobsearch-jobDescriptionText').html()

    //outputting the scraped data
    console.log(scrapedata);
    return scrapedata;
  })
  .catch( error => {
    console.log(error);
  }); 

}

module.exports = {scraper}