const cookieSession = require('cookie-session');
const Express = require('express');
const App = Express();
const BodyParser = require('body-parser');
const PORT = 8080;

// Express Configuration
App.use(BodyParser.urlencoded({ extended: false }));
App.use(BodyParser.json());
App.use(Express.static('public'));
App.use(cookieSession({
  name: 'session',
  keys: ['key1', 'key2']
}))

const loginRoutes = require('./routes/login');
const logoutRoutes = require('./routes/logout');
const signupRoutes = require('./routes/signup');
const templatesRoutes = require('./routes/templates');
const usersRoutes  = require('./routes/users');
const hardSkillsRoutes = require('./routes/hardSkills');
const softSkillsRoutes = require('./routes/softSkills');
const scraperRoutes = require('./routes/scraper');
const projectsRoutes = require('./routes/projects')

App.use('/api/login', loginRoutes);
App.use('/api/logout', logoutRoutes);
App.use('/api/signup', signupRoutes);
App.use('/api/templates', templatesRoutes);
App.use('/api/users', usersRoutes);
App.use('/api/hardSkills',hardSkillsRoutes);
App.use('/api/softSkills', softSkillsRoutes); 
App.use('/api/scraper', scraperRoutes);
App.use('/api/projects', projectsRoutes)

// Sample GET route
App.get('/api/data', (req, res) => res.json({
  message: "Seems to work!",
}));

App.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Express seems to be listening on port ${PORT} so that's pretty good 👍`);
});
