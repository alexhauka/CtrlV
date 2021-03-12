const Express = require('express');
const App = Express();
const BodyParser = require('body-parser');
const PORT = 8080;


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
App.use('./logout', logoutRoutes);
App.use('./signup', signupRoutes);
App.use('/templates', templatesRoutes);
App.use('/users', usersRoutes);

// Sample GET route
App.get('/', (req, res) => res.json({
  message: "Seems to work!"
}));

App.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Express seems to be listening on port ${PORT} so that's pretty good 👍`);
});