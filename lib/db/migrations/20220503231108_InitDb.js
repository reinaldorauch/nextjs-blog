/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
  await knex.schema.createTable('contact', t => {
    t.uuid('id').defaultTo(knex.raw('uuid_generate_v4()')).primary();
    t.string('name');
    t.string('email').notNullable();
    t.text('message').notNullable();
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {
  await knex.schema.dropTable('contact');
};

