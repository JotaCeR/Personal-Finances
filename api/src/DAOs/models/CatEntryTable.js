const db = require('../../db');

async function buildCatEntRel () {
    const queryText = `
    CREATE EXTENSION IF NOT EXISTS "pgcrypto";
    
    CREATE TABLE IF NOT EXISTS entries_categories (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        entry_id UUID NOT NULL,
        category_id UUID NOT NULL,
        FOREIGN KEY (entry_id) REFERENCES entries(id),
        FOREIGN KEY (category_id) REFERENCES categories(id)
    );
    `;

    await db.query(queryText);
    console.log("Entries-Categories intermediate table successfully built!");
};

module.exports = buildCatEntRel;