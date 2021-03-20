const express = require('express');
const router  = express.Router();

const { getResume } = require('../lib/resume-queries')

// get api/resumes
router.get('/:id', (req, res) => {
 getResume(req.params.id)
 .then((data) => {
  res.json(data);
})
}); 

// post api/resumes
router.post('/', (req, res) => {
 
}); 


module.exports = router;