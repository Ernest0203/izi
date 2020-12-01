const config = require('config');
const mongoose = require('mongoose');
const postgres = require('../src/db/postgres/postgres');

const server = require('./server');

const mongoUri = config.get('db.mongo.uri');
Promise.all([
  //mongoose.connect(mongoUri).then(() => console.info('MongoDB connected...')),
  postgres.authenticate().then(() => console.info('Postgres connected...'))
]).catch(err => console.info(err));

console.info('NODE_ENV', process.env.NODE_ENV);
const HOST = config.get('server.host');
const PORT = config.get('server.port');

const instance = server.listen(PORT, HOST);

instance.on('listening', () => console.info('Available on:', `${HOST}:${PORT}`));
instance.on('error', (error) => console.error(error));

module.exports = instance;