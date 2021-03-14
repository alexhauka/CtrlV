const { response } = require('express');
const client = require('../elephantsql')

// queries all users
const getAllHardSkills = () => {
    return client.query('SELECT * FROM hard_skills;')
    .then((response) => {
      return response.rows;
    });
  };

module.exports = {
    getAllHardSkills    
}