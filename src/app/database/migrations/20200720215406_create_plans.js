exports.up = function (knex) {
  return knex.schema.createTable("plans", function (table) {
    table.increments();
    table.string("description").notNullable();
    table.integer("period").notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("plans");
};
