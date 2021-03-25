const express = require('express'); 
const router = express.Router();

const {
    getAllSoftSkills
  } = require('../lib/softSkills-queries');

router.get('/', (req, res) => {
    getAllSoftSkills()
    .then((skills) => {
        res.json(skills)
    }); 
});

module.exports = router