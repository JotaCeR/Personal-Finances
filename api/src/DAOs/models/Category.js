const db = require('../../db');

async function buildCategory () {
    const queryText = `
    CREATE EXTENSION IF NOT EXISTS "pgcrypto";

    CREATE TABLE IF NOT EXISTS categories (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        name VARCHAR(50) NOT NULL UNIQUE
    );
    `;
    
    const res = await db.query(queryText);
    console.log(JSON.stringify(res));
};

module.exports = buildCategory;