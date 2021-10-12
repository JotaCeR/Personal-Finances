const Entry = require('./models/Entry');
const db = require('../db');
const toolkit = require('../toolkit');
const { Op } = require('sequelize');

class BalanceDAO {
    async getBalance () {
        try {
            const [adds, metadata1] = await db.query("SELECT SUM(amount) FROM entry WHERE type='adition'");
            const [extrs, metadata2] = await db.query("SELECT SUM(amount) FROM entry WHERE type='extraction'");
            const balance = adds[0].sum - extrs[0].sum;
            
            console.log('The aditions balance is:', JSON.stringify(adds));
            console.log('The extractions balance is:', JSON.stringify(extrs));
            console.log('The final balance is:', JSON.stringify(balance));
            
            return {balance}
        } catch (e) {
            console.error(e);
            return toolkit.messages.error
        }
    }

    async getAditions () {
        try {
            const [adds, metadata] = await db.query("SELECT * FROM entry WHERE type='adition'");
            console.log(JSON.stringify(adds));

            return adds;
        } catch (e) {
            console.error(e);
            return toolkit.messages.error
        }
    }

    async getExtractions () {
        try {
            const [extrs, metadata] = await db.query("SELECT * FROM entry WHERE type='extraction'");
            console.log(JSON.stringify(extrs));

            return extrs;
        } catch (e) {
            console.error(e);
            return toolkit.messages.error
        }
    }
}

module.exports = new BalanceDAO();