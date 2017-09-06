/**
 * Este archivo lee todos los modelos y construye
 * las asociaciones entre ellos. Si se crean más
 * modelos, deben agregarse manualmente al array
 * "models".
 */

import {
  join
} from 'path';
import Sequelize from 'sequelize';
import database from '../database/config.json';

const {
  host,
  port,
  username,
  password,
  dbname,
  dialect,
} = database[process.env.NODE_ENV || 'development'];
const db = {};

const connection = new Sequelize(dbname, username, password, {
  host,
  port,
  dialect,
});

/*
connection.authenticate().then(() => console.log('Conexion establecida')).catch(err => console.log('error al conectar', err));
*/

/* Directorio SRC */
const src = join(__dirname, '..', '..');

/* Contiene las rutas de los modelos */
const models = [
  join(src, 'union/union.js'),
  join(src, 'group/group.js'),
  join(src, 'person/index.js'),
  join(src, 'role/index.js'),
  join(src, 'user/index.js'),   
  join(src, 'grade/index.js'),
  join(src, 'schedule/index.js'),
  join(src, 'subject/index.js'),  
  join(src, 'program/program.js'),
  join(src, 'facultad/facultad.js'),
];

/* Importa y guarda los modelos en el objeto db */
models.forEach(async(path) => {
  const model = connection.import(path);
  db[model.name] = model;
});

/* Busca relaciones y las incluye */
Object.entries(db).forEach(([name, model]) => {
  if ('associate' in model) {
    model.associate(db);
  }
}); 

db.sequelize = connection;
db.Sequelize = Sequelize;

export default db;
export {
  connection
};
