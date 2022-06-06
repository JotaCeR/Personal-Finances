const db = require('../../db');

async function buildUserEntryRel () {
    const queryText = `
    CREATE EXTENSION IF NOT EXISTS "pgcrypto";

    CREATE TABLE IF NOT EXISTS users_entries (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        entry_id UUID NOT NULL,
        user_id UUID NOT NULL,
        FOREIGN KEY (entry_id) REFERENCES entries(id),
        FOREIGN KEY (user_id) REFERENCES users(id)
    );
    `;

    await db.query(queryText);
    console.log("Users-Entries intermediate table successfully built!");
};

module.exports = buildUserEntryRel;