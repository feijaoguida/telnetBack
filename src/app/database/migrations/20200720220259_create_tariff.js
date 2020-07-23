exports.up = function (knex) {
  return knex.schema.createTable("tariff", function (table) {
    table.increments();
    table.integer("origin").notNullable();
    table.integer("destiny").notNullable();
    table.decimal("price").notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("tariff");
};
