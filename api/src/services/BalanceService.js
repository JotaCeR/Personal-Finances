const BalanceDAO = require('../DAOs/BalanceDAO');
const toolkit = require('../toolkit');
const db = require('../db');

class BalanceService {
    async getBalance () {
        try {
            console.log(toolkit.servCall);
            const aditions = await BalanceDAO.getAditionsSum();
            const extractions = await BalanceDAO.getExtractionsSum();
            const balance = aditions - extractions;
            console.log(aditions);
            console.log(extractions);
            console.log(balance);
            return balance;
        } catch (e) {
            console.error(e);
            return toolkit.error;
        }
    }

    async getAditions () {
        try {
            console.log(toolkit.servCall);
            const adds = await BalanceDAO.getAditions();
            console.log(adds);
            return adds
        } catch (e) {
            console.error(e);
            return toolkit.error;
        }
    }

    async getExtractions () {
        try {
            console.log(toolkit.servCall);
            const exts = await BalanceDAO.getExtractions();
            console.log(exts);
            return exts
        } catch (e) {
            console.error(e);
            return toolkit.error;
        }
    }
};

module.exports = new BalanceService();