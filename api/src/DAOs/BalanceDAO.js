const Entry = require('./models/Entry');
const db = require('../db');
const toolkit = require('../toolkit');
const { Op } = require('sequelize');

class BalanceDAO {
    async getBalance () {
        try {
            const [adds, metadata1] = await db.query("SELECT SUM(amount) FROM entry WHERE type='adition'");
            console.log(JSON.stringify(adds));
            
            const [extrs, metadata2] = await db.query("SELECT SUM(amount) FROM entry WHERE type='extraction'");
            console.log(JSON.stringify(extrs));
            
            const balance = adds[0].sum - extrs[0].sum;
            console.log(JSON.stringify(balance));
            
            return {balance}
        } catch (e) {
            console.error(e);
            return toolkit.messages.error
        }
    }

    // async getAditions () {

    // }

    // async getExtractions () {

    // }
}

module.exports = new BalanceDAO();