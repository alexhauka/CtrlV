const pg = require('pg');

const dotenv = require('dotenv');
dotenv.config();
//or native libpq bindings
//var pg = require('pg').native


//Can be found in the Details page
const conString = process.env.DB_URL;

const client = new pg.Client(conString);





client.connect((err) => {
  if(err) {
    return console.error('could not connect to postgres', err);
  }
  console.log('connected to database'); 
});

module.exports = client;