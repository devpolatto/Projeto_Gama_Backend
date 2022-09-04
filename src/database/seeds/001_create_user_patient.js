/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('patients').del()
  await knex('patients').insert([
    {
      patient_id: 6473638, 
      name: 'Lucas',
      lastname: 'Felipe',
      cpf: '00000000015',
      rg: '00000001',
      cep: '0000450'
    },
    
  ]);
};
