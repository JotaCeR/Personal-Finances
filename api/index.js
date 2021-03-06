const server = require('./src/app');
const db = require('./src/db');
const entryTable = require('./src/DAOs/models/Entry');
const categoryTable = require('./src/DAOs/models/Category');
const catEntTable = require('./src/DAOs/models/CatEntryTable');

server.listen(3001, () => {
    console.log("=====================================");
    console.log('%s listening at 3001');
    console.log("=====================================");
});

const sql = `SELECT 1 AS "\\'/*", 2 AS "\\'*/\n + console.log(process.env)] = null;\n//"`;

async function connectionDB () {
    try {
        console.log("=====================================");
        console.log("Connecting to PostgreSQL Database...");
        db.connect();
        console.log("Checking DataBase security...");
        await db.query(sql);
        console.log("Checking Database tables...");
        await entryTable();
        await categoryTable();
        await catEntTable();
        // db.end();
        // console.log("Closing PostgreSQL Database connection...");
        console.log("=====================================");
        console.log("API REST waiting for calls...");
        console.log("=====================================");
    } catch (e) {
        console.error(e);
    };
};

connectionDB();

