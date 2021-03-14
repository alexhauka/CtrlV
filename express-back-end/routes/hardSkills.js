const express = require('express'); 
const router = require.Router();

const {
    getAllHardSkills
  } = require('../lib/hardSkills-queries');

router.get('/', (req, res) => {
    getAllHardSkills
    .then((skills) => {
        res.json(skills)
    });
});

module.exports = router