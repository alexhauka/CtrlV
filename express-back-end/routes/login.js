const express = require('express');
const router  = express.Router();


const { getUserByEmail } = require('../lib/user-queries');

// post api/login
router.post('/', (req, res) => {
  const { email, password } = req.body.userInfo;
  getUserByEmail(email)
  .then((user) => {
      if (user.password === password) {
          req.session.user_id = user.id
          res.redirect(`/api/users/${user.id}`)
      }
  })
  .catch(e => {
    console.error(e); 
    res.send(e);
  });
  

});




module.exports = router;