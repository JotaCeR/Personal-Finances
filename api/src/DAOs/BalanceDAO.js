const db = require('../db');
const toolkit = require('../toolkit');

class BalanceDAO {
    constructor() {
        this.addSumQuery = "SELECT SUM(amount) FROM entries WHERE type='adition'";
        this.extSumQuery = "SELECT SUM(amount) FROM entries WHERE type='extraction'";
        this.addEntriesOrderedQuery = "SELECT * FROM entries WHERE type='adition' ORDER BY date DESC";
        this.extEntriesOrderedQuery = "SELECT * FROM entries WHERE type='extraction' ORDER BY date DESC";
    }

    async getAditionsSum () {
        try {
            const adds = await db.query(this.addSumQuery);
            return adds.rows;
        } catch (e) {
            console.error(e);
            return toolkit.error
        }
    }

    async getExtractionsSum () {
        try {
            const exts = await db.query(this.extSumQuery);
            return exts.rows;
        } catch (e) {
            console.error(e);
            return toolkit.error
        }
    }

    async getAditions () {
        try {
            return await db.query(this.addEntriesOrderedQuery);
        } catch (e) {
            console.error(e);
            return toolkit.error
        }
    }

    async getExtractions() {
        try {
            return await db.query(this.extEntriesOrderedQuery);
        } catch (e) {
            console.error(e);
            return toolkit.error
        }
    }
};

module.exports = new BalanceDAO();