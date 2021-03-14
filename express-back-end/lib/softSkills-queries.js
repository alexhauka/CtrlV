const { response } = require('express');
const client = require('../elephantsql')

// queries all users
const getAllSoftSkills = () => {
    return client.query('SELECT * FROM soft_skills;')
    .then((response) => {
      return response.rows;
    });
};

module.exports = {
    getAllSoftSkills
}