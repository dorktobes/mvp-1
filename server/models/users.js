db = require('../database');

module.exports = {
  post: params => {
    db.user.findOne({ where: {username: 'Luke'}})
    .then(user => {
      console.log(user.dataValues.id);
    });
  }
};