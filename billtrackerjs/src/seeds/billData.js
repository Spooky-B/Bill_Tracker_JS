exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('bills').del()
      .then(function () {
        // Inserts seed entries
        return knex('appointments').insert([
          {billName: 'Verizon', billCost: 200, billDue: '28th'},
        ]);
      });
  };