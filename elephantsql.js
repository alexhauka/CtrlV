const pg = require('pg');

const dotenv = require('dotenv');
dotenv.config();
//or native libpq bindings
//var pg = require('pg').native


//Can be found in the Details page
const conString = process.env.DB_URL;

const client = new pg.Client(conString);


// client.connect(() => {
//   console.log('connected to database')
  
// });


client.connect(function(err) {
  if(err) {
    return console.error('could not connect to postgres', err);
  }
  client.query('SELECT * FROM users', function(err, result) {
    if(err) {
      return console.error('error running query', err);
    }
    console.log(result.rows);
    client.end();
  });
});

module.exports = client;