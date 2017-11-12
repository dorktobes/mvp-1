module.exports = (db, DataTypes) => {
  let TakenRide = db.define('takenRide', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    provider: DataTypes.STRING,
    uberPrice: DataTypes.INTEGER,
    uberTime: DataTypes.INTEGER,
    lyftPrice: DataTypes.INTEGER,
    lyftTime: DataTypes.INTEGER
  });
  
  return TakenRide;
}