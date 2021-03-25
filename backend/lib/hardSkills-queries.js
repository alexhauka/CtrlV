const { response } = require('express');
const client = require('../elephantsql')

// queries all users
const getAllHardSkills = () => {
    return client.query('SELECT * FROM hard_skills;')
    .then((response) => {
      return response.rows;
    });
  };

  // insert user hardskills
const addUserHardSkills = (userSkills) => {
  return client.query(`
  
  INSERT INTO user_hard_skills (user_id, hard_skills_id)
  JOIN hard_skills ON 
  VALUES ($1, $2);`, [userSkills.user_id, userSkills.hard_skills_id])
  .then((response) => {
    return response.rows
  });
}

module.exports = {
    getAllHardSkills,
    addUserHardSkills  
}