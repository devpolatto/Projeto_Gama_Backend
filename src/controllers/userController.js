const knex = require('../database/knexConfig')

module.exports = {
     async index(req, res) {
          const results = await knex('patients')
          return res.json(results)
     }
}