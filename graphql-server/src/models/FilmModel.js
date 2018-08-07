export default (sequelize, DataTypes) => sequelize.define('films', {
  title: DataTypes.STRING,
  director: DataTypes.STRING
});
