var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send({ name: "Keanu Reeves", photo_url: "http://i.imgur.com/Y7u78c4.jpg" });
});

module.exports = router;
