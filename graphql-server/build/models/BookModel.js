'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (sequelize, DataTypes) {
  return sequelize.define('books', {
    title: DataTypes.STRING,
    author: DataTypes.STRING
  });
};
//# sourceMappingURL=BookModel.js.map