var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('classdojo-attendance', {title: 'ClassDojo Attendance'});
});

module.exports = router;
