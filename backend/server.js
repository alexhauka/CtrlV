const cookieSession = require('cookie-session');
const Express = require('express');
const App = Express();
const BodyParser = require('body-parser');
const path = require('path');
const PORT = 8080;

// Express Configuration
App.use(BodyParser.urlencoded({ extended: false }));
App.use(BodyParser.json());
App.use(Express.static('public'));
App.use(cookieSession({
  name: 'session',
  keys: ['key1', 'key2']
}))


App.use(express.static(path.join(__dirname, '../react-front-end/build')))

const { getUserByID } = require('./lib/user-queries');

const loginRoutes = require('./routes/login');
const logoutRoutes = require('./routes/logout');
const usersRoutes  = require('./routes/users');
const hardSkillsRoutes = require('./routes/hardSkills');
const softSkillsRoutes = require('./routes/softSkills');
const scraperRoutes = require('./routes/scraper');
const projectsRoutes = require('./routes/projects');
const resumesRoutes = require('./routes/resumes');

App.use('/api/login', loginRoutes);
App.use('/api/logout', logoutRoutes);
App.use('/api/users', usersRoutes);
App.use('/api/hardSkills',hardSkillsRoutes);
App.use('/api/softSkills', softSkillsRoutes); 
App.use('/api/scraper', scraperRoutes);
App.use('/api/projects', projectsRoutes)
App.use('/api/resumes', resumesRoutes)

// checks the user 
App.use('/api/authcheck',(req, res) => {
  if (req.session.user_id) {
    getUserByID(req.session.user_id)
    .then((user) => {
      res.json({
        id: user.id,
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email,
        github: user.github,
        linkedin: user.linkedin,
        address: user.address,
        phone_number: user.phone_number
      }); 
    })
    return
  }
  return res.status(403).send();
})

// Sample GET route
// App.get('/api/data', (req, res) => res.json({
//   message: "Seems to work!",
// }));

App.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/../frontend/build/index.html'))
})

App.listen(PORT, () => { 
  // eslint-disable-next-line no-console
  console.log(`Express seems to be listening on port ${PORT} so that's pretty good 👍`);
});
