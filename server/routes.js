const router = require('express').Router();
const path = require('path');
const controllers = require('./controllers');


router.route('/')
.get((req, res) => {
  res.end('Hello, myself!');
})

router.route('/login')
.get((req, res) => {
  res.sendFile(path.resolve('./server/views/static/login.html'));
  res.end();
})
.post((req, res) => {
  // new session
})

router.route('/signup')
.get((req, res) => {
  res.sendFile(path.resolve('./server/views/static/signup.html'));
})
.post((req, res) => {
  // new user
})

module.exports = router;