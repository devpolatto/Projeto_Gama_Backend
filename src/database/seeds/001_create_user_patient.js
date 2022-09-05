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
      gender: 'masculine',
      cep: '0000450',
      address: 'Rua Boa Viagem',
      city: 'Recife',
      country: 'PE'
    },
    {
      patient_id: 6473639, 
      name: 'Fabio',
      lastname: 'Lima',
      cpf: '00000000013',
      rg: '00000002',
      gender: 'masculine',
      cep: '0000451',
      address: 'Rua Bom Jesus',
      city: 'Recife',
      country: 'PE'
    },
    {
      patient_id: 6473640, 
      name: 'Laura',
      lastname: 'Ferreira',
      cpf: '00000000011',
      rg: '00000004',
      gender: 'feminine',
      cep: '0000458',
      address: 'Rua Norte',
      city: 'Recife',
      country: 'PE'
    },
    
  ]);
};
