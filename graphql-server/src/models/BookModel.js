export default (sequelize, DataTypes) => sequelize.define('books', {
  title: DataTypes.STRING,
  author: DataTypes.STRING
});
