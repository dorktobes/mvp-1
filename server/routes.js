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

router.route('/rideInfo')
.get((req, res) => {
  controllers.rideInfo.get(req, res);
})

//debugging routes
router.route('/debug')
.get((req, res) => {
  models.coordinates.get('15 olney ct')
  .then(coords => console.log(coords));
  res.end();
})
module.exports = router;