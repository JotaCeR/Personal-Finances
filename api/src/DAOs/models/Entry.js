const db = require('../../db');

async function buildEntry () {
    const queryText = `
    CREATE EXTENSION IF NOT EXISTS "pgcrypto";
    CREATE TYPE cash_flow AS ENUM ('adition', 'extraction');

    CREATE TABLE IF NOT EXISTS entries (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        reason VARCHAR(50) DEFAULT 'Unspecified',
        amount FLOAT NOT NULL,
        date DATE DEFAULT CURRENT_DATE,
        type cash_flow NOT NULL
    );
    `;
    
    const res = await db.query(queryText);
    console.log(JSON.stringify(res));
};

module.exports = buildEntry;