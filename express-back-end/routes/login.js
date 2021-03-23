const express = require('express');
const router  = express.Router();
const bcrypt = require('bcryptjs');


const { getUserByEmail } = require('../lib/user-queries');

// post api/login
router.post('/', (req, res) => {
  const { email, password } = req.body.userInfo;
  getUserByEmail(email)
  .then((user) => {    
    if (bcrypt.compareSync(password, user.password)) {
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
      return;
    }
    return res.status(403).send();
  })
  .catch(e => {
    console.error(e); 
    return res.status(403).send();
  });
  

});




module.exports = router;