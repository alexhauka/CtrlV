const express = require('express');
const router  = express.Router();


const { getUserByEmail } = require('../lib/user-queries');

// post api/login
router.post('/', (req, res) => {
  const { email, password } = req.body.userInfo;
  getUserByEmail(email)
  .then((user) => {
    console.log(user);
    if (user.password === password) {
        req.session.user_id = user.id
        res.send({
          id: user.id,
          first_name: user.first_name,
          last_name: user.last_name,
          email: user.email,
          github: user.github,
          linkedin: user.linkedin,
          address: user.address,
          phone_number: user.phone_number
        });
    }
  })
  .catch(e => {
    console.error(e); 
    res.send(e);
  });
  

});




module.exports = router;