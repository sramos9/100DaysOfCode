const express = require('express');
const router = express.router();

router.get('/', (req, res) => {
  res.render('authors/index.ejs');
});

module.exports = router;
