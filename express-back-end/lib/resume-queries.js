const { response } = require('express');
const client = require('../elephantsql');


const addUserResume = function(resume) {

  const resumeData = resume.resumeObject
  // console.log(resumeData.work_2)
  return client.query(`
    INSERT INTO resumes (
      user_id, template_id, background_color, border_color, head_font, body_font, project_1, project_2, project_3, work_1, work_2, work_3
    )
    VALUES (
      $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12
    );
  `, [resumeData.user_id,
    resumeData.template_id,
    resumeData.background_color,
    resumeData.border_color,
    resumeData.head_font,
    resumeData.body_font,
    resumeData.project_1.id,
    resumeData.project_2.id,
    resumeData.project_3.id,
    resumeData.work_1.id,
    resumeData.work_2.id,
    resumeData.work_3.id])
  .then((response) => {
    console.log(response.rows)
    return response.rows;
  })
  .catch((e) => {
    console.error(e);
  })

}

const updateUserResume = function(resume) {
  return client.query(`
    UPDATE resumes
    SET user_id = $2, template_id = $3, background_color = $4, border_color = $5, head_font = $6, body_font = $7, project_1 = $8, project_2 = $9, project_3 = $10, work_1 = $11, work_2 = $12, work_3 = $13
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
    resume.work_3])
  .then((response) => {
    console.log(response)
    return response; 
  })
}

const getUserResumes = function(userID) {
  return client.query(`
    SELECT * FROM resumes
    WHERE user_id = $1;
  `, [userID])
  .then((response) => {
    console.log(response.rows)
    return response.rows;
  })
  .catch((e) => {
    console.error(e);
  })
}


/*

  reference for database

  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  template_id INTEGER REFERENCES  templates(id) ON DELETE CASCADE,
  background_color VARCHAR(255) NOT NULL DEFAULT 'white',
  border_color VARCHAR(255) NOT NULL DEFAULT 'black',
  head_font VARCHAR(255),
  body_font VARCHAR(255),
  date_uploaded TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  project_1 INTEGER REFERENCES projects(id),
  project_2 INTEGER REFERENCES projects(id),
  project_3 INTEGER REFERENCES projects(id),
  work_1 INTEGER REFERENCES work_experiences(id),
  work_2 INTEGER REFERENCES work_experiences(id),
  work_3 INTEGER REFERENCES work_experiences(id)

*/



module.exports = { addUserResume, updateUserResume, getUserResumes };