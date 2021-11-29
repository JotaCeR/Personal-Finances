const db = require('../../db');

async function buildUser() {
    const queryText = `
    CREATE EXTENSION IF NOT EXISTS "pgcrypto";

    DO $$
    BEGIN IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'user_roles') THEN
    CREATE TYPE user_roles AS ENUM ('client', 'admin');
    END IF;
    END $$;

    CREATE TABLE IF NOT EXISTS users (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        name VARCHAR(50) NOT NULL,
        password VARCHAR(50) NOT NULL,
        email VARCHAR(50) NOT NULL UNIQUE,
        role user_roles NOT NULL DEFAULT 'client'
    );
    `;

    const res = await db.query(queryText);
    // console.log(JSON.stringify(res));
    console.log("Users successfully built!");
};

module.exports = buildUser;