var pg = require('pg');
//or native libpq bindings
//var pg = require('pg').native


//Can be found in the Details page
var conString = "postgres://mxdzlach:5zuESpMgo1yrHI5zzDwg5kUyLOjNv78M@kashin.db.elephantsql.com:5432/mxdzlach" 

var client = new pg.Client(conString);
client.connect(function(err) {
  if(err) {
    return console.error('could not connect to postgres', err);
  }
  client.query('SELECT * FROM hard_skills', function(err, result) {
    if(err) {
      return console.error('error running query', err);
    }
    console.log(result.rows);
    client.end();
  });
});
