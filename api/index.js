const server = require('./src/app');
const db = require('./src/db');

server.listen(3001, () => {
    console.log('%s listening at 3001');
});

async function connectDB () {
    try {
        await db.authenticate();
        console.log('%s PostgreSQL DB connected');
        await db.sync();
        console.log('%s PostgreSQL DB synchronized');
    } catch (e) {
        console.error(`Unable to connect to the database: ${e}`);
    };
}

connectDB();