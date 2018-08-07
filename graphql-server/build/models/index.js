'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _sequelize = require('sequelize');

var _sequelize2 = _interopRequireDefault(_sequelize);

var _default = require('../configs/default');

var _default2 = _interopRequireDefault(_default);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DB_URI = process.env.DB_URI || _default2.default.DB_URI;
var DB_USER = process.env.DB_USER || _default2.default.DB_USER;
var DB_USER_PASSWORD = process.env.DB_USER_PASSWORD || _default2.default.DB_USER_PASSWORD;
var DB_NAME = process.env.DB_NAME || _default2.default.DB_NAME;
var DB_PORT = process.env.DB_PORT || _default2.default.DB_PORT;
var basename = _path2.default.basename(__filename);
var models = {};

// Connect to CockroachDB through Sequelize.
var sequelize = new _sequelize2.default(DB_NAME, DB_USER, DB_USER_PASSWORD, {
  dialect: 'postgres',
  host: DB_URI,
  port: DB_PORT,
  logging: false,
  operatorsAliases: _sequelize2.default.Op
});

_fs2.default.readdirSync(__dirname).filter(function (file) {
  return file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js';
}).forEach(function (file) {
  var model = sequelize['import'](_path2.default.join(__dirname, file));
  models[model.name] = model;
});

Object.keys(models).forEach(function (modelName) {
  if (models[modelName].associate) {
    models[modelName].associate(models);
  }
});

models.sequelize = sequelize;
models.Sequelize = _sequelize2.default;

console.log('Connected to db(' + DB_NAME + ') at: ' + DB_URI + ':' + DB_PORT);

exports.default = models;
//# sourceMappingURL=index.js.map