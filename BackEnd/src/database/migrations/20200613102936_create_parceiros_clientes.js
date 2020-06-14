exports.up = function (knex) {
  return knex.schema.createTable('parceiros_clientes', function (table) {
      table.string('codigo').notNullable().primary();
      table.string('name').notNullable();
      table.string('email').unique().notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('parceiros_clientes');
};