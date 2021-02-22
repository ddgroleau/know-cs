const { Client, Pool } = require('pg');

// DATABASE
const client = new Client({
    user: process.env.PGUSER,
    password: process.env.PGPASS,
    host: process.env.PGHOST,
    port: process.env.PGPORT,
    database: 'knowcs'
})

client.connect()
.then(() => console.log("Database connection successful!"))
.catch(e => console.log("Database connection failed."))

module.exports = client;