models = require('../models');

module.exports.post = (req, res) => {
  models.users.post();
  res.end();
}