const db = require('../../db');

async function buildCategory () {
    const queryText = `
    CREATE EXTENSION IF NOT EXISTS "pgcrypto";

    CREATE TABLE IF NOT EXISTS categories (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        name VARCHAR(50) NOT NULL UNIQUE
    );
    `;

    const defaultCat = `
    INSERT INTO categories(name) SELECT * FROM (SELECT 'undefined' as name) as tmp WHERE NOT EXISTS (SELECT * FROM categories WHERE name='undefined');
    `;
    
    const res = await db.query(queryText);
    try {
        await db.query(defaultCat);
    } catch (e) {
        console.error(e);
        return null
    }
    // console.log(JSON.stringify(res));
    console.log("Categories successfully built!")
};

module.exports = buildCategory;