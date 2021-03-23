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
    VALUES ($1, $2, $3, $4, null, null, null, null)
    RETURNING *;
  `, [userInfo.firstName, userInfo.lastName, userInfo.email, userInfo.password])
  .then((response) => {
    return response.rows[0]; 
  });
}

const updateUserInfo = (id, userInfo) => {
  const {first_name, last_name, email, linkedin, address, phone_number } = userInfo; 
  return client.query(`
  UPDATE users
  SET first_name = $1, last_name = $2, email = $3, linkedin = $4, address = $5, phone_number = $6
  WHERE id = $7;
  `, [first_name, last_name, email, linkedin, address, phone_number, id])
  .then((response) => {
    return response.rows[0]; 
  });
}

const updateUserGithub = (id, github) => {
  return client.query(`
  UPDATE users
  SET github = $1 
  WHERE id = $2
  `, [github, id])
  .then((response) => {
    return response.rows[0]; 
  });
}

const updateUserProject = (id, projectInfo) => {
  if (projectInfo.id !== undefined){
    return client.query(`
    UPDATE projects
    SET title= $1, primary_language = $2, primary_language_percent = $3, secondary_language = $4, secondary_language_percent = $5, description = $6, last_updated = $7, url = $8
    WHERE id = $9
    RETURNING *;
    `, [projectInfo.title, projectInfo.primary_language, projectInfo.primary_language_percent, projectInfo.secondary_language, projectInfo.secondary_language_percent, projectInfo.description, projectInfo.last_updated, projectInfo.url, projectInfo.id])
    .then((response) => {
      return response.rows[0];
    })
    
  } else {
    return client.query(`
    INSERT INTO projects (user_id, title, primary_language, description, last_updated, primary_language_percent, secondary_language, secondary_language_percent, url)
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
    RETURNING *;
    `, [id, projectInfo.title, projectInfo.primary_language, projectInfo.description, projectInfo.last_updated, projectInfo.primary_language_percent, projectInfo.secondary_language, projectInfo.secondary_language_percent, projectInfo.url])
    .then((response) => {
      return response.rows[0];
    })
  }
}

const deleteUserProject = (id, projectInfo) => {
  return client.query(`
  DELETE FROM projects
  WHERE user_id = $1 AND id = $2
  RETURNING *;
  `, [id, projectInfo.id])
  .then((response) => {
    return response.rows[0];
  })
}

const addUserWorkExperience = (id, workInfo) => {
  if (workInfo.id !== undefined){
    return client.query(`
    UPDATE work_experiences
    SET job_title = $1, job_description = $2, job_start_date = $3, job_end_date = $4, company_name = $5
    WHERE id = $6
    RETURNING *; 
    `, [workInfo.job_title, workInfo.job_description, workInfo.job_start_date, workInfo.job_end_date, workInfo.company_name, workInfo.id])
    .then((response) => {
      return response.rows[0];
    });
  } else {
    return client.query(`
    INSERT INTO work_experiences (user_id, job_title, job_description, job_start_date, job_end_date, company_name)
    VALUES ($1, $2, $3, $4, $5, $6)
    RETURNING *;
    `, [id, workInfo.job_title, workInfo.job_description, workInfo.job_start_date, workInfo.job_end_date, workInfo.company_name])
    .then((response) => {
      return response.rows[0];
    })
  }
}

const deleteUserWorkExperience = (id, workInfo) => {
  return client.query(`
  DELETE FROM work_experiences 
  WHERE user_id = $1 AND id = $2
  RETURNING *;
  `, [id, workInfo.id])
  .then((response) => {
    return response.rows[0];
  })
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
    WHERE user_id = $1
    ORDER BY job_start_date DESC;
    `, [id])
    .then((response) => {
      return response.rows
    })
  }

  const getUserProjects = (id) => {
    return client.query(`
    SELECT projects.* FROM projects
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
    updateUserGithub,
    getUserHardSkills,
    getUserSoftSkills,
    getUserWorkExperience,
    addUserHardSkill,
    removeUserHardSkill,
    addUserWorkExperience,
    deleteUserWorkExperience,
    getUserProjects,
    updateUserProject,
    deleteUserProject
}