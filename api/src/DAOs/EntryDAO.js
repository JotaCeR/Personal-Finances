const Entry = require('./models/Entry');
const db = require('../db');
const toolkit = require('../toolkit');

class EntryDAO {
    async createEntry(entry) {
        const dbEntry = await Entry.create(entry);
        console.log(dbEntry.toJSON());
        return dbEntry
    }

    async getLastEntries() {
        try {
            const [lastEntries, metadata] = await db.query("SELECT * FROM entry ORDER BY date DESC FETCH FIRST 10 ROWS ONLY");
 
            if (lastEntries.length > 0) {
                console.log(JSON.stringify(lastEntries));
            } else {
                return toolkit.messages.error
            }
            
            return lastEntries;
        } catch (e) {
            console.error(e);
            return toolkit.messages.error;
        };
    }

    async deleteEntry(id) {
        try {
            const [deletedEntry, metadata] = await db.query(`DELETE FROM entry WHERE id='${id}'`);
            console.log(JSON.stringify(deletedEntry));
            return deletedEntry;
        } catch (e) {
            console.error(e);
            return toolkit.messages.error;
        };
    }
}

module.exports = new EntryDAO();