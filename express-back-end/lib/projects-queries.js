const client = require('../elephantsql')

const addProject = (project, id) => {
  return client.query(`
    INSERT INTO projects 
    (user_id, title, url, primary_language, primary_language_percent, secondary_language, secondary_language_percent, description, last_updated)
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
    RETURNING *;
  `, [id, project.title, project.url, project.primary_language, project.primary_language_percent, project.secondary_language, project.secondary_language_percent, project.description, project.last_updated])
  .then((response) => {
    return response.rows[0];
  })
}

const getProject = (projectName, userID) => {
  return client.query(`
    SELECT * FROM projects
    WHERE name = $1
    AND user_id = $2
  `, [projectName, userID])
  .then((response) => {
    return response.rows[0];
  })
}


module.exports = { addProject, getProject }