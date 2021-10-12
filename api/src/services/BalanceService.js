const BalanceDAO = require('../DAOs/BalanceDAO');
const toolkit = require('../toolkit');

class BalanceService {
    async getBalance () {
        try {
            console.log(toolkit.messages.servCall);
            return await BalanceDAO.getBalance();
        } catch (e) {
            console.error(e);
            return toolkit.messages.error;
        }
    }

    async getAditions () {
        try {
            console.log(toolkit.messages.servCall);
            return await BalanceDAO.getAditions();
        } catch (e) {
            console.error(e);
            return toolkit.messages.error;
        }
    }

    async getExtractions () {
        try {
            console.log(toolkit.messages.servCall);
            return await BalanceDAO.getExtractions();
        } catch (e) {
            console.error(e);
            return toolkit.messages.error;
        }
    }
};

module.exports = new BalanceService();