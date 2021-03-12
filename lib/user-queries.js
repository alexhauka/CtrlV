const client = require('../elephantsql')

// example from midterm:

// get all users
const getUsers = async () => {
  const response = await client.query('SELECT * FROM users;');
  console.log("HERE IS RESPONSE!", response.rows);
  return response.rows;
};


module.exports = {
    getUsers
}