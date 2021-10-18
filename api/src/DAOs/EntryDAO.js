const db = require('../db');
const toolkit = require('../toolkit');

class EntryDAO {
    constructor () {
        this.addEntryQuery = "INSERT INTO entries(reason, amount, date, type) VALUES($1, $2, $3, $4)";
    }

    async createEntry(entry) {
        const {reason, amount, date, type} = entry;
        const values = [reason, amount, date, type]
        const dbEntry = await db.query(this.addEntryQuery, values);
        console.log(dbEntry);
        return dbEntry;
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
            for (let i = 0; i < entry.length; i++) {
                await db.query(`UPDATE entry SET ${entry[i][0]}='${entry[i][1]}' WHERE id='${id}'`);
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