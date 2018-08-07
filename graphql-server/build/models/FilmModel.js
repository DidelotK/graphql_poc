'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (sequelize, DataTypes) {
  return sequelize.define('films', {
    title: DataTypes.STRING,
    director: DataTypes.STRING
  });
};
//# sourceMappingURL=FilmModel.js.map