exports.up = function (knex) {
  return knex.schema.createTable('chamado', function (table) {
      //Criando a tabela Chamado com suas colunas e definições de chaves.
      table.string('codigo').notNullable().primary();

      table.timestamp('dataHoraDoChamado').notNullable();
      table.timestamp('dataHoraDeExecucao');
      table.timestamp('dataHoraDeEncerramento');

      table.string('tipoDeErro');
      table.string('descricaoDeErro');
      table.string('status');

      table.string('fk_client').notNullable();
      table.foreign('fk_client').references('codigo').inTable('parceiros_clientes');

      table.string('fk_suporte').notNullable();
      table.foreign('fk_suporte').references('codigo').inTable('suporte');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('chamado');
};
