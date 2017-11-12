const db = require('../database');

module.exports = {
  get: query => {
    return db.takenRide.findAll({ where: query });
  },
  
  post: params => {
    //TODO
  }
};