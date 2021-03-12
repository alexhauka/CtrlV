const { response } = require('express');
const client = require('../elephantsql')

// example from midterm:

// queries all users
const getUsers = () => {
  return client.query('SELECT * FROM users;')
  .then((response) => {
    return response.rows;
  });
};

// queries users for a particular user
const getUserByID = (id) => {
  return client.query('SELECT * FROM users WHERE id = $1;', [id])
  .then((response) => {
    return response.rows[0];
  });
}

// queries all hard skills from a particular user
const getUserHardSkills = (id) => {
  return client.query(`
    SELECT hard_skills.* FROM hard_skills 
    JOIN user_hard_skills ON hard_skills.id = hard_skills_id
    WHERE user_id = $1
    `, [id])
    .then((response)=> {
      return response.rows;
    });
}

// queries all soft skills from a particular user
const getUserSoftSkills = (id) => {
  return client.query(`
    SELECT soft_skills.* FROM soft_skills 
    JOIN user_soft_skills ON soft_skills.id = soft_skills_id
    WHERE user_id = $1
    `, [id])
    .then((response)=> {
      return response.rows;
    });
}


module.exports = {
    getUsers,
    getUserByID,
    getUserHardSkills,
    getUserSoftSkills
}