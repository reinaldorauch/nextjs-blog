import knex from 'knex';
import config from '../../knexfile.js';

let cached = global.pg;

if (!cached) {
  cached = global.pg = {};
}

export function getConnection() {
  if (!cached.instance) cached.instance = knex(config);
  return cached.instance;
}
