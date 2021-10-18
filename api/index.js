const server = require('./src/app');
const db = require('./src/db');
const entryTable = require('./src/DAOs/models/Entry');
const categoryTable = require('./src/DAOs/models/Category');

server.listen(3001, () => {
    console.log('%s listening at 3001');
});

const sql = `SELECT 1 AS "\\'/*", 2 AS "\\'*/\n + console.log(process.env)] = null;\n//"`;

async function connectionDB () {
    try {
        console.log("Connecting to PostgreSQL Database...");
        db.connect();
        console.log("Checking DataBase security...");
        await db.query(sql);
        console.log("Checking Database tables...");
        await entryTable();
        await categoryTable();
        // db.end();
        // console.log("Closing PostgreSQL Database connection...");
    } catch (e) {
        console.error(e);
    };
};

connectionDB();

