const client = require('../elephantsql')

// example from midterm:

// get all users
const getUsers = () => {
  console.log("this isnt showing either")
  return client.query('SELECT * FROM "public"."users";')
  .then((response) => {
    console.log(response.rows)
    return response.rows;
  });
};


module.exports = {
    getUsers
}