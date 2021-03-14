const express = require('express'); 
const router = require.Router();

const {
    getAllSoftSkills
  } = require('../lib/softSkills-queries');

router.get('/', (req, res) => {
    getAllSoftSkills
    .then((skills) => {
        res.json(skills)
    }); 
});

module.exports = router