// const express = require('express');
const router  = require("express-promise-router")();

const { scraper } = require('../scrapers/scraper')

const { addJobPosting } = require('../lib/jobPosting-queries')


router.get('/', (req, res) => {

})

router.post('/', async (req, res) => {
  const urlString = req.body.url

  await scraper(`${urlString}`)
  .then((jobDesc) => {
  // addJobPosting(urlString, jobDesc)
  res.send(jobDesc)
  })
})




module.exports = router;