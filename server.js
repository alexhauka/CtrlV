const Express = require('express');
const App = Express();
const BodyParser = require('body-parser');
const PORT = 8080;

const client = require('./elephantsql')

// Express Configuration
App.use(BodyParser.urlencoded({ extended: false }));
App.use(BodyParser.json());
App.use(Express.static('public'));



// seperated routes for each resource
const loginRoutes = require('./src/routes/login');
const logoutRoutes = require('./src/routes/logout');
const signupRoutes = require('./src/routes/signup');
const templatesRoutes = require('./src/routes/templates');
const usersRoutes  = require('./src/routes/login');

// mounted resource routes
App.use('/login', loginRoutes);
App.use('/logout', logoutRoutes);
App.use('/signup', signupRoutes);
App.use('/templates', templatesRoutes);
App.use('/users', usersRoutes);

// Sample GET route
App.get('/', (req, res) => {
  res.send("Root Page")
})

App.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Express seems to be listening on port ${PORT} so that's pretty good 👍`);
});

client.connect(function(err) {
  if(err) {
    return console.error('could not connect to postgres', err);
  }
  client.query('SELECT * FROM soft_skills', function(err, result) {
    if(err) {
      return console.error('error running query', err);
    }
    console.log(result.rows);
    client.end();
  });
});