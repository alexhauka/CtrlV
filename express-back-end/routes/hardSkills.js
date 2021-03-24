const express = require('express'); 
const router = express.Router();

const {
    getAllHardSkills,
    addUserHardSkills
  } = require('../lib/hardSkills-queries');

router.get('/', (req, res) => {
    getAllHardSkills()
    .then((skills) => {
        res.json(skills)
    });
});

router.put('/', (req, res) => {
  
})

module.exports = router