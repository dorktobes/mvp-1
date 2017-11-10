const router = require('express').Router();
const controllers = require('./controllers');

router.route('/')
.get((req, res) => {
  res.end('Hello, myself!');
})

router.route('/login')
.get((req, res) => {
  // new session
})
.post((req, res) => {
  res.render('../client/static/login.html');
  res.end();
})

router.route('/signup')
.get((req, res) => {
  // new user
})
.post((req, res) => {
  res.render('../client/static/signup.html');
  res.end();
})

module.exports = router;