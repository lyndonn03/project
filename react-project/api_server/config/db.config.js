const knex = require('knex')({
    client: 'pg',
    connection: {
        user : 'postgres',
        password: '123',
        database: 'testdb'
    }
})

module.exports = knex
