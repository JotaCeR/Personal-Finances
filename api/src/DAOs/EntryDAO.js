const db = require('../db');
const toolkit = require('../toolkit');

class EntryDAO {
    constructor () {
        this.addEntryQuery = "INSERT INTO entries(reason, amount, date, type) VALUES($1, $2, $3, $4)";
        this.selectLastTen = "SELECT * FROM entries ORDER BY date DESC FETCH FIRST 10 ROWS ONLY";
        this.updateEntry = "UPDATE entries SET $1=$2 WHERE id=$3";
        this.deleteEntryById = "DELETE FROM entries WHERE id=$1"
    }

    async createEntry(entry) {
        const {reason, amount, date, type} = entry;
        const values = [reason, amount, date, type]
        const dbEntry = await db.query(this.addEntryQuery, values);
        return dbEntry;
    }

    async getLastEntries() {
        try {
            const lastEntries = await db.query(this.selectLastTen);
            // console.log(lastEntries.rows)
 
            if (lastEntries.rows.length <= 0) {
                return toolkit.error
            }
            return lastEntries.rows;
        } catch (e) {
            console.error(e);
            return toolkit.error;
        };
    }

    async modifyEntry(id, entry) {
        try {
            for (let i = 0; i < entry.length; i++) {
                const values = [entry[i][0], entry[i][1], id];
                await db.query(this.UpdateEntry, values);
            }

            return "Entry updated successfully.";
        } catch (e) {
            console.error(e);
            return toolkit.error;
        }
    }

    async deleteEntry(id) {
        try {
            const values = [id];
            await db.query(this.deleteEntryById, values);
            return "Entry deleted succesfully.";
        } catch (e) {
            console.error(e);
            return toolkit.error;
        };
    }
}

module.exports = new EntryDAO();