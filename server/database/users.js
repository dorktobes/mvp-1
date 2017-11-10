module.exports = (db, DataTypes) => {
  let User = db.define('user', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    username: DataTypes.STRING,
    passwordDigest: DataTypes.STRING
  });
  
  return User;
}
