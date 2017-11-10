const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');

let db = {};
db.sequelize = new Sequelize('mvp', 'student', 'student', {
  dialect: 'mysql'
});

fs
.readdirSync(__dirname)
.filter(file => file !== "index.js")
.forEach(file => {
  let model = db.sequelize.import(path.join(__dirname, file));
  db[model.name] = model;
});

Object.keys(db).forEach(function(modelName) {
  if ("associate" in db[modelName]) {
    db[modelName].associate(db);
  }
});

db.sequelize.sync();

module.exports = db;