const express = require('express');
const router  = express.Router();


router.post('/', (req, res) => {
  req.session.user_id = null;
  res.status(200).send()
});

module.exports = router;