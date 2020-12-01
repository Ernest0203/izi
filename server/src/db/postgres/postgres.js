const config = require('config');
const Sequelize = require('sequelize');
const pg = require('pg');

//console.log('db.postgres.uri: ', config.get('db.postgres.uri'));
const DATABASE_URI = config.get('db.postgres.uri');

module.exports =  new Sequelize(DATABASE_URI, {
  logging: false,
  native: false,
  define: {
    //underscored: true,
    //underscoredAll: true,
    //freezeTableName: true
  }
});