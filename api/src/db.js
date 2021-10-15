// Enviroment variables.
require('dotenv').config();
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;
// DB server connection.
const { Pool } = require('pg');
const connString = `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/personal_finances`;

const db = new Pool({
    user: DB_USER,
    host: DB_HOST,
    database: 'personal_finances',
    password: DB_PASSWORD,
    port: 5432,
});

module.exports = db;