const pg = require('pg');

const dotenv = require('dotenv');
dotenv.config();

//Can be found in the Details page
// const conString = process.env.DB_URL;

// const client = new pg.Client(conString);


const client = new pg.Client({
  connectionString: process.env.DB_URL || "",
  ssl:{rejectUnauthorized: false}
});




client.connect((err) => {
  if(err) {
    return console.error('could not connect to postgres', err);
  }
  console.log('connected to database'); 
});

module.exports = client;