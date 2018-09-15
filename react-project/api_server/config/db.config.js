const knex = require('knex')({
    client: 'pg',
    connection: {
        user : 'postgres',
        password: 'password',
        database: 'testdb'
    }
})

module.exports = knex