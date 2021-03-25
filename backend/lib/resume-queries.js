const { response } = require('express');
const client = require('../elephantsql');


const addUserResume = function(resume) {
  return client.query(`
    INSERT INTO resumes (
      user_id, template_id, background_color, border_color, head_font, body_font, project_1, project_2, project_3, work_1, work_2, work_3, about_me, profession
    )
    VALUES (
      $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14
    )
    RETURNING *;
  `, [resume.user_id,
    resume.template_id,
    resume.background_color,
    resume.border_color,
    resume.head_font,
    resume.body_font,
    resume.project_1.id,
    resume.project_2.id,
    resume.project_3.id,
    resume.work_1.id,
    resume.work_2.id,
    resume.work_3.id,
    resume.about_me,
    resume.profession])
  .then((response) => {
    return response.rows[0];
  })
  .catch((e) => {
    console.error(e);
  })
}

const deleteUserResume = function(userID, resume) {
  return client.query(`
  DELETE FROM resumes
  WHERE user_id = $1 AND id = $2
  RETURNING *;
  `, [userID, resume.id])
  .then((response) => {
    return response.rows[0];
  })
}

const updateUserResume = function(resume) {
  return client.query(`
    UPDATE resumes
    SET user_id = $2, template_id = $3, background_color = $4, border_color = $5, head_font = $6, body_font = $7, project_1 = $8, project_2 = $9, project_3 = $10, work_1 = $11, work_2 = $12, work_3 = $13, about_me = $14, profession = $15
    WHERE id = $1;
  `[resume.id,
    resume.user_id,
    resume.template_id,
    resume.background_color,
    resume.border_color,
    resume.head_font,
    resume.body_font,
    resume.project_1,
    resume.project_2,
    resume.project_3,
    resume.work_1,
    resume.work_2,
    resume.work_3,
    resume.about_me,
      resume.profession])
  .then((response) => {
    return response; 
  })
}

const getUserResumes = function(userID) {
  return client.query(`
    SELECT * FROM resumes
    WHERE user_id = $1;
  `, [userID])
  .then((response) => {
    return response.rows;
  })
  .catch((e) => {
    console.error(e);
  })
}

const getResume = function(resumeID) {
  return client.query(`
  SELECT * FROM resumes
  WHERE id = $1;
  `, [resumeID])
  .then((response) => {
    return response.rows[0];
  })
  .catch((e) => {
    console.error(e);
  })

}


module.exports = { addUserResume, updateUserResume, getUserResumes, getResume, deleteUserResume };