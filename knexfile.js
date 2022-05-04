const { loadEnvConfig } = require('@next/env');

const dev = process.env.NODE_ENV !== 'production';

const { PG_URI } = loadEnvConfig('./', dev).combinedEnv;

module.exports = {
  client: 'pg',
  connection: PG_URI,
  migrations: {
    directory: './lib/db/migrations',
  },
  seeds: {
    directory: './lib/db/seeds',
  },
  pool: {
    min: 0,
    max: 10,
    afterCreate: async (conn, done) => {
      try {
        await conn.query('SET timezone="UTC"');
        await conn.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');
      } catch (err) {
        return done(err);
      }
      done();
    }
  }
};
