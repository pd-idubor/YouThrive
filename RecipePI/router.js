const express = require('express');

const router = express.Router();


router.get('*', (req, res) => {
  res.status(500).send({message: 'Page not found'});
});

module.exports = router;
