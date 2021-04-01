const { response } = require('express')
const client = require('../elephantsql')

// add or update user education 
const addUserEducation = (id, education) => {
  if (education.id !== undefined) {
    return client.query(`
    UPDATE education 
    SET school_name = $1, program_title = $2, start_date = $3, end_date = $4, program_description = $5
    WHERE id = $6
    RETURNING *; 
    `, [education.school_name, education.program_title, education.start_date, education.end_date, education.program_description, education.id])
    .then((response) => {
      return response.rows[0]; 
    });
  } else {
    return client.query(` 
    INSERT INTO education (user_id, school_name, program_title, start_date, end_date, program_description)
    VALUES ($1, $2, $3, $4, $5, $6)
    RETURNING *;
    `, [id, education.school_name, education.program_title, education.start_date, education.end_date, education.program_description])
    .then((response) => {
      return response.rows[0]; 
    })
  }
}

// delete user education 
const deleteUserEducation = (id, education) => {
  return client.query(`
  DELETE FROM education 
  WHERE user_id = $1 AND id = $2
  RETURNING *;
  `, [id, education.id])
  .then((response) => {
    return response.rows[0];
  })
}


module.exports = {
  addUserEducation,
  deleteUserEducation
}