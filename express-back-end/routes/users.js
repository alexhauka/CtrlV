const express = require('express');
const router  = express.Router();

const {
  getUsers, 
  getUserByID, 
  addUser, 
  updateUserInfo, 
  updateUserGithub, 
  getUserHardSkills, 
  getUserSoftSkills, 
  getUserWorkExperience, 
  addUserHardSkill, 
  removeUserHardSkill, 
  addUserWorkExperience,
  deleteUserWorkExperience, 
  getUserProjects, 
  updateUserProject,
  deleteUserProject
} = require('../lib/user-queries');

const { addUserResume, updateUserResume, getUserResumes } = require("../lib/resume-queries")

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
  })
});


// post users/id
router.put('/:id', (req, res) => {
  if (req.body.github) {
    return updateUserGithub(req.params.id, req.body.github)
    .then((user) => {
      res.send(user)
    })
    .catch(e => {
      console.error(e);
      res.send(e);
    })
  }
  return updateUserInfo(req.params.id, req.body.userInfo)
  .then((user) => {
    res.send(user)
  })
  .catch(e => {
    console.error(e);
    res.send(e);
  });
});

// get users/:id/hard_skills
router.get('/:id/hard_skills', (req, res) => {
  getUserHardSkills(req.params.id)
  .then((data) => {
    res.json(data);
  })
});

// post users/:id/hard_skills
router.put('/:id/hard_skills', (req, res) => {
  addUserHardSkill(req.params.id, req.body.skill.id)
  .then((data) => {
    res.send(data);
  })
  .catch(e => {
    console.error(e);
    res.send(e);
  })
});

// delete users/:id/hard_skills
router.delete('/:id/hard_skills', (req, res) => {
  removeUserHardSkill(req.params.id, req.body.skill.id)
  .then((data) => {
    res.send(data);
  })
  .catch(e => {
    console.error(e);
    res.send(e);
  })
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

router.get('/:id/projects', (req, res) => {
  getUserProjects(req.params.id)
  .then((users) => {
    res.json(users)
  })
});

router.post('/:id/projects', (req, res) => {
  console.log("I'm in my Routes!", req.body.projectInfo)
  updateUserProject(req.params.id ,req.body.projectInfo)
  .then((data) => {
    console.log("data", data)
    res.send(data);
  })
  .catch(e => {
    console.error(e);
    res.send(e);
  })
}); 

router.delete('/:id/projects', (req, res) => {
  console.log("here in axios call", req.body.projectInfo)
  deleteUserProject(req.params.id, req.body.projectInfo)
  .then((data) => {
    console.log("data", data)
    res.send(data);
  })
  .catch(e => {
    console.error(e);
    res.send(e);
  });
})


router.get('/:id/work_experience', (req, res) => {
  getUserWorkExperience(req.params.id)
  .then((users) => {
    res.json(users)
  })
})

router.post('/:id/work_experience', (req, res) => {
  addUserWorkExperience(req.params.id, req.body.workInfo)
  .then((data) => {
    console.log("data", data)
    res.send(data);
  })
  .catch(e => {
    console.error(e);
    res.send(e);
  })
})

router.delete('/:id/work_experience', (req, res) => {
  console.log('here in axios call', req.body.workInfo)
  deleteUserWorkExperience(req.params.id, req.body.workInfo)
  .then((data) => {
    console.log("data", data)
    res.send(data);
  })
  .catch(e => {
    console.error(e);
    res.send(e);
  });
})


// get users/id/resumes
router.get('/:id/resumes', (req, res) => {
  getUserResumes(req.params.id)
  .then((resumes) => {
    res.json(resumes)
  })
});

// get users/id/resumes/resumeid
router.get('/:id/resumes/:resumeid', (req, res) => {
    
}); 

// post users/id/resumes/resumeid
router.post('/:id/resumes/:resumeid', (req, res) => {
    addUserResume(req.body)
  console.log("posting a resume route:", req.body.id);
  // if (req.body.id === undefined){
  // } else {
  //   updateUserResume(req.body)
  // }
}); 

// delete users/id/resumes/resumeid
router.delete('/:id/resumes/:resumeid', (req, res) => {
    
}); 


module.exports = router;