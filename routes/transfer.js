var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send({ from: { account_name: "Checking", account_number: 123456789123, account_balance: 5000 }, to: { name: "Sasha Pieterse", photo_url: "http://i.imgur.com/CGILUTj.jpg" }, amount: 300 });
});

module.exports = router;
