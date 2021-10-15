const db = require('../db');
const toolkit = require('../toolkit');

class BalanceDAO {
    constructor() {
        this.addSumQuery = "SELECT SUM(amount) FROM entry WHERE type='adition'";
        this.extSumQuery = "SELECT SUM(amount) FROM entry WHERE type='extraction'";
        this.addEntriesOrderedQuery = "SELECT * FROM entry WHERE type='adition' ORDER BY date DESC";
        this.extEntriesOrderedQuery = "SELECT * FROM entry WHERE type='extraction' ORDER BY date DESC";
    }

    async getAditionsSum () {
        try {
            return await db.query(this.addSumQuery);
        } catch (e) {
            console.error(e);
            return toolkit.error
        }
    }

    async getExtractionsSum () {
        try {
            return await db.query(this.extSumQuery);
        } catch (e) {
            console.error(e);
            return toolkit.error
        }
    }

    async addEntries () {
        try {
            return await db.query(this.addEntriesOrderedQuery);
        } catch (e) {
            console.error(e);
            return toolkit.error
        }
    }

    async extEntries() {
        try {
            return await db.query(this.extEntriesOrderedQuery);
        } catch (e) {
            console.error(e);
            return toolkit.error
        }
    }
};

module.exports = new BalanceDAO();