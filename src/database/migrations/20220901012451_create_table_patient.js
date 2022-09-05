/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async knex => {
  await knex.schema.createTable('patients', table => {
     table.text('patient_id').unique().notNullable,
     table.text('name').notNullable,
     table.text('lastname').notNullable,
     table.integer('cpf').unique().notNullable,
     table.integer('rg').unique().notNullable,
     table.text('gender'),
     table.integer('cep').notNullable,
     table.text('address'),
     table.text('city'),
     table.text('country'),
     

     table.timestamp('created_at').defaultTo(knex.fn.now()),
     table.timestamp('updated_at').defaultTo(knex.fn.now())
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async knex => {
  knex.schema.dropTable('patients')
};
