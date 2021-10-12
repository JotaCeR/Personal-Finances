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

    async modifyEntry(id, entry) {
        try {
            const updatingEntry = Object.entries(entry);

            for (let i = 0; i < updatingEntry.length; i++) {
                await db.query(`UPDATE entry SET ${updatingEntry[i][0]}='${updatingEntry[i][1]}' WHERE id='${id}'`);
            };

            return "Entry updated successfully.";
        } catch (e) {
            console.error(e);
            return toolkit.messages.error;
        }
    }

    async deleteEntry(id) {
        try {
            await db.query(`DELETE FROM entry WHERE id='${id}'`);
            return "Entry deleted succesfully.";
        } catch (e) {
            console.error(e);
            return toolkit.messages.error;
        };
    }
}

module.exports = new EntryDAO();