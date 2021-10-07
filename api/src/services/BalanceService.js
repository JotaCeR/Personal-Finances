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
};

module.exports = new BalanceService();