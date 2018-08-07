import fs from 'fs';
import path from 'path';
import Sequelize from 'sequelize';
import DEFAULT_CONF from '../configs/default';


const DB_URI = process.env.DB_URI || DEFAULT_CONF.DB_URI;
const DB_USER = process.env.DB_USER || DEFAULT_CONF.DB_USER;
const DB_USER_PASSWORD = process.env.DB_USER_PASSWORD || DEFAULT_CONF.DB_USER_PASSWORD;
const DB_NAME = process.env.DB_NAME || DEFAULT_CONF.DB_NAME;
const DB_PORT = process.env.DB_PORT || DEFAULT_CONF.DB_PORT;
const basename = path.basename(__filename);
const models = {};

// Connect to CockroachDB through Sequelize.
const sequelize = new Sequelize(DB_NAME, DB_USER, DB_USER_PASSWORD, {
  dialect: 'postgres',
  host: DB_URI,
  port: DB_PORT,
  logging: false,
  operatorsAliases: Sequelize.Op,
});

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = sequelize['import'](path.join(__dirname, file));
    models[model.name] = model;
  });

Object.keys(models).forEach(modelName => {
  if (models[modelName].associate) {
    models[modelName].associate(models);
  }
});

models.sequelize = sequelize;
models.Sequelize = Sequelize;

console.log(`Connected to db(${DB_NAME}) at: ${DB_URI}:${DB_PORT}`);

export default models;
