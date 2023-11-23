var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Sculpt Vault' });
});

router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Sculpt Vault' });
});
router.get('/about', function(req, res, next) {
  res.render('index', { title: 'About Us' });
});
router.get('/mission', function(req, res, next) {
  res.render('index', { title: 'Our Mission' });
});
router.get('/login', function(req, res, next) {
  res.render('index', { title: 'Join Us' });
});
router.get('/contact', function(req, res, next) {
  res.render('index', { title: 'Contact Us' });
});

module.exports = router;
