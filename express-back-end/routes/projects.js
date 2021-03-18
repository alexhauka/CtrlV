const express = require('express');
const router  = express.Router();

const { getProject, addProject } = require('../lib/projects-queries')

// get api/projects
router.get('/', (req, res) => {
  getProject()
  .then((project) => {
    res.json(project)
  })
  .catch(e => {
    console.error(e); 
    res.send(e);
  });
}); 

// post api/projects
router.post('/', (req, res) => {
  addProject(req.body.project, req.body.id)
  .then((project) => {
    console.log("data", project);
    res.send(project)
  })
  .catch(e => {
    console.error(e); 
    res.send(e);
  });
}); 


module.exports = router;