const db = require('../db');
const toolkit = require('../toolkit');

class EntryDAO {
    constructor () {
        this.addFullEntryQuery = "INSERT INTO entries(reason, amount, date, type) VALUES($1, $2, $3, $4) RETURNING id";
        this.addReasonEntryQuery = "INSERT INTO entries(reason, amount, type) VALUES($1, $2, $3) RETURNING id";
        this.addDateEntryQuery = "INSERT INTO entries(amount, date, type) VALUES($1, $2, $3) RETURNING id";
        this.addNoneEntryQuery = "INSERT INTO entries(amount, type) VALUES($1, $2) RETURNING id";
        this.selectLastTen = "SELECT entries.*, categories.name AS categories FROM entries INNER JOIN entries_categories ON (entries.id = entries_categories.entry_id) JOIN categories ON (entries_categories.category_id = categories.id) ORDER BY date DESC FETCH FIRST 10 ROWS ONLY";
        this.updateEntry = "UPDATE entries SET reason=$1, amount=$2, date=$3 WHERE id=$4";
        this.deleteEntryById = "DELETE FROM entries WHERE id=$1";
        this.getAll = "SELECT * FROM entries";
        this.selectById = "SELECT entries.*, categories.name AS categories FROM entries INNER JOIN entries_categories ON entries.id = entries_categories.entry_id JOIN categories ON entries_categories.category_id = categories.id WHERE entries.id=$1";
        this.getAddWithCats = "SELECT entries.*, categories.name AS categories FROM entries INNER JOIN entries_categories ON (entries.id = entries_categories.entry_id) JOIN categories ON (entries_categories.category_id = categories.id) WHERE entries.type = 'adition' ORDER BY entries.date DESC";
        this.getExtWithCats = "SELECT entries.*, categories.name AS categories FROM entries INNER JOIN entries_categories ON (entries.id = entries_categories.entry_id) JOIN categories ON (entries_categories.category_id = categories.id) WHERE entries.type = 'extraction' ORDER BY entries.date DESC";
    }

    async createEntry(entry, keys) {
        try {
            // console.log("DAO:", entry, keys);
            // const values = [];
            
            // for (const prop in entry) {
            //     console.log(prop)
            //     values.push(entry[prop])
            // };

            // console.log(values);
            // console.log(keys.includes('reason'));
            // console.log(keys.includes('date'));

            if (keys.includes('reason') && keys.includes('date')) {
                return await db.query(this.addFullEntryQuery, entry);
                // return "New Entry added successfully!"
            } else if (keys.includes('reason') && !keys.includes('date')) {
                return await db.query(this.addReasonEntryQuery, entry);
                // return "New Entry added successfully!"
            } else if (keys.includes('date') && !keys.includes('reason')) {
                return await db.query(this.addDateEntryQuery, entry);
                // return "New Entry added successfully!"
            } else {
                return await db.query(this.addNoneEntryQuery, entry);
                // return "New Entry added successfully!"
            };
        } catch (e) {
            console.error(e);
        };
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

    async modifyEntry(values) {
        try {
            await db.query(this.updateEntry, values);

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

    async selectAll() {
        try {
            const result = await db.query(this.getAll);
            // console.log(result);
            return result.rows;
        } catch (e) {
            console.error(e);
            return toolkit.error;
        }
    }

    async selectOne(id) {
        try {
            const result = await db.query(this.selectById, id);
            console.log(result);
            return result.rows;
        } catch (e) {
            console.error(e);
            return toolkit.error;
        }
    }

    async getAditionsWithCats() {
        try {
            const result = await db.query(this.getAddWithCats);
            // console.log(result.rows);
            return result.rows
        } catch (e) {
            console.error(e);
            return toolkit.error;
        }
    }

    async getExtractionsWithCats() {
        try {
            const result = await db.query(this.getExtWithCats);
            // console.log(result.rows);
            return result.rows
        } catch (e) {
            console.error(e);
            return toolkit.error;
        }
    }
}

module.exports = new EntryDAO();