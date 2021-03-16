const { response } = require('express')
const client = require('../elephantsql')
// const {scraper} = require('../scrapers/scraper')

const addJobPosting = (url, description) => {

  client.query(`
    INSERT INTO job_postings
    (url, description)
    VALUES ($1, $2);
  `, [url, description]);
  return response.rows;
}


module.exports = {addJobPosting}