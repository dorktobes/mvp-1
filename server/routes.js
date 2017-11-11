const router = require('express').Router();
const path = require('path');
const controllers = require('./controllers');
const models = require('./models'); //for debugging


router.route('/')
.get((req, res) => {
  res.end('Hello, myself!');
})

router.route('/login')
.post((req, res) => {
  //new session
})

router.route('/signup')
.post((req, res) => {
  controllers.users.post(req, res);
})

//debugging routes
router.route('/debug')
.get((req, res) => {
  models.uberRides.get();
  res.end();
})
module.exports = router;