// scraper function is in this directory
const {scraper} = require('./scraper')

// to get a scraper-friendly URL:
// 1) 'save' a job on indeed
// 2) navigate to your 'saved jobs' page
// 3) open a job and copy paste the URL from that page

// feel free to add your own collection of test URLs
const alexTestURLs = {
  URL1: 'https://ca.indeed.com/viewjob?from=app-tracker-saved-appcard&hl=en&jk=66fa007093aef101&tk=1f04o91iuuepi800',
  URL2:'https://ca.indeed.com/viewjob?from=app-tracker-saved-appcard&hl=en&jk=376043ba8f62c8a0&tk=1f06u8mte3obn000',
  URL3: 'https://ca.indeed.com/viewjob?from=app-tracker-saved-appcard&hl=en&jk=376043ba8f62c8a0&tk=1f0fp9cu03pdi000'
}

scraper(alexTestURLs.URL3)