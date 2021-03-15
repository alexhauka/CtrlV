const express = require('express');
const router  = express.Router();

const {
  getUsers, getUserByID, addUser, getUserHardSkills, getUserSoftSkills
} = require('../lib/user-queries');

// get /users
router.get('/', (req, res) => {
  getUsers()
  .then((users) => {
    res.json(users)
  });
});

// post /users 
router.put('/', (req, res) => {
  addUser(req.body.registerInfo)
  .then(user => {
    res.send(user);
  })
  .catch(e => {
    console.error(e); 
    res.send(e);
  });
});

// get users/id
router.get('/:id', (req, res) => {
  getUserByID(req.params.id)
  .then((users) => {
    res.json(users)
    console.log('successfully got to user page')
  })
});

// post users/id
router.post('/:id', (req, res) => {
  
});

// get users/:id/hard_skills
router.get('/:id/hard_skills', (req, res) => {
  getUserHardSkills(req.params.id)
  .then((users) => {
    res.json(users)
  })
});

// post users/:id/hard_skills
router.post('/:id/hard_skills', (req, res) => {

});

// delete users/:id/hard_skills
router.delete('/:id/hard_skills', (req, res) => {

});

// get users/id/soft_skills
router.get('/:id/soft_skills', (req, res) => {
  getUserSoftSkills(req.params.id)
  .then((users) => {
    res.json(users)
  })
});

// post users/id/soft_skills
router.post('/:id/soft_skills', (req, res) => {

});

// delete users/id/soft_skills
router.delete('/:id/soft_skills', (req, res) => {

});

// get users/id/resumes
router.get('/:id/resumes', (req, res) => {

});

// get users/id/resumes/resumeid
router.get('/:id/resumes/:resumeid', (req, res) => {
    
}); 

// post users/id/resumes/resumeid
router.post('/:id/resumes/:resumeid', (req, res) => {
    
}); 

// delete users/id/resumes/resumeid
router.delete('/:id/resumes/:resumeid', (req, res) => {
    
}); 


module.exports = router;