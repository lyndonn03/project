const knex = require('knex')({
    client: 'pg',
    connection: {
        user : 'postgres',
        password: 'lyndonn12',
        database: 'testdb'
    }
})

module.exports = knex