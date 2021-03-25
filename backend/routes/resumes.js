const express = require('express');
const router  = express.Router();

const { getResume, addUserResume } = require('../lib/resume-queries')

// get api/resumes/:id (live link page)
router.get('/:id', (req, res) => {
 getResume(req.params.id)
 .then((data) => {
  res.json(data);
})
}); 

// post api/resumes
router.post('/', (req, res) => {
  addUserResume(req.body.resumeObject)
  .then((data) => {
    res.send(data);
  })
  .catch(e => {
    res.send(e);
  })
}); 


module.exports = router;