const db = require('../../db');

async function buildCatEntRel () {
    const queryText = `
    CREATE EXTENSION IF NOT EXISTS "pgcrypto";
    
    CREATE TABLE IF NOT EXISTS entries_categories (
        id UUID PRIMARY KEY DEFAULT get_random_uuid(),
        entry_id UUID NOT NULL FOREIGN KEY REFERENCES entries(id),
        category_id UUID NOT NULL FOREIGN KEY REFERENCES categories(id)
    );
    `;

    const res = await db.query(queryText);
    console.log(JSON.stringify(res));
};

module.exports = buildCatEntRel;