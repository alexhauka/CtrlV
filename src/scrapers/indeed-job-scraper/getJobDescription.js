const {scraper} = require('./scraper')

const alexTestURLs = {
  URL1: 'https://ca.indeed.com/viewjob?from=app-tracker-saved-appcard&hl=en&jk=66fa007093aef101&tk=1f04o91iuuepi800',
  URL2:'https://ca.indeed.com/viewjob?from=app-tracker-saved-appcard&hl=en&jk=376043ba8f62c8a0&tk=1f06u8mte3obn000'
}

scraper(alexTestURLs.URL1)