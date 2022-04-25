exports.up = function(knex) {
    return knex.schema.createTable('billList', table => {
      table.increments('billId'); // adds an auto incrementing PK column
      table.string('billName');
      table.integer('billCost')
      table.string('dueDate').notNullable()
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('billList');
  };