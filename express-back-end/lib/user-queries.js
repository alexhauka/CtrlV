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

const getUserByEmail = (email) => {
  return client.query(`
    SELECT * FROM users WHERE email = $1;
  `, [email])
  .then((response) => {
    return response.rows[0];
  })
}

// adds a new user 
const addUser = (userInfo) => {
  return client.query(`
    INSERT INTO USERS (first_name, last_name, email, password, github, linkedin, address, phone_number)
    VALUES ($1, $2, $3, $4, null, null, 'Vancouver, BC', '604-123-4567');
  `, [userInfo.firstName, userInfo.lastName, userInfo.email, userInfo.password])
  .then((response) => {
    return response.rows; 
  });
}

const updateUserInfo = (id, userInfo) => {
  console.log(userInfo);
  const {first_name, last_name, email, address, phone_number } = userInfo; 
  return client.query(`
  UPDATE users
  SET first_name = $1, last_name = $2, email = $3, address = $4, phone_number = $5
  WHERE id = $6;
  `, [first_name, last_name, email, address, phone_number, id])
  .then((response) => {
    return response.rows[0]; 
  });
}

// queries all hard skills from a particular user
const getUserHardSkills = (id) => {
  return client.query(`
    SELECT hard_skills.* FROM hard_skills 
    JOIN user_hard_skills ON hard_skills.id = hard_skills_id
    WHERE user_id = $1;
    `, [id])
    .then((response)=> {
      return response.rows;
    });
}

// clears all the hardskills from a particular user
const removeUserHardSkill = (id, skillID) => {
  return client.query(`
  DELETE FROM user_hard_skills 
  WHERE user_id = $1 AND hard_skills_id = $2;
  `, [id, skillID])
  .then((response) => {
    return response.rows; 
  })
}

// updates the user hard skills
const addUserHardSkill = (id, skillID) => {
  return client.query(`
  INSERT INTO user_hard_skills (user_id, hard_skills_id)
  VALUES ($1, $2);
  `, [id, skillID])
  .then((response) => {
    return response.rows;
  })
}



// queries all soft skills from a particular user
const getUserSoftSkills = (id) => {
  return client.query(`
    SELECT soft_skills.* FROM soft_skills 
    JOIN user_soft_skills ON soft_skills.id = soft_skills_id
    WHERE user_id = $1;
    `, [id])
    .then((response)=> {
      return response.rows;
    });
}

  const getUserWorkExperience = (id) => {
    return client.query(`
    SELECT work_experiences.* FROM work_experiences
    WHERE user_id = $1;
    `, [id])
    .then((response) => {
      return response.rows
    })
  }



module.exports = {
    getUsers,
    getUserByID,
    getUserByEmail,
    addUser,
    updateUserInfo,
    getUserHardSkills,
    getUserSoftSkills,
    getUserWorkExperience,
    addUserHardSkill,
    removeUserHardSkill
}