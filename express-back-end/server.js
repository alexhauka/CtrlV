const Express = require('express');
const App = Express();
const BodyParser = require('body-parser');
const PORT = 8080;

// Express Configuration
App.use(BodyParser.urlencoded({ extended: false }));
App.use(BodyParser.json());
App.use(Express.static('public'));

const loginRoutes = require('./routes/login');
const logoutRoutes = require('./routes/logout');
const signupRoutes = require('./routes/signup');
const templatesRoutes = require('./routes/templates');
const usersRoutes  = require('./routes/users');

App.use('/api/login', loginRoutes);
App.use('/api/logout', logoutRoutes);
App.use('/api/signup', signupRoutes);
App.use('/api/templates', templatesRoutes);
App.use('/api/users', usersRoutes);

// Sample GET route
App.get('/api/data', (req, res) => res.json({
  message: "Seems to work!",
}));

App.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Express seems to be listening on port ${PORT} so that's pretty good 👍`);
});
