const BalanceDAO = require('../DAOs/BalanceDAO');
const toolkit = require('../toolkit');
const bal = "Balance ";

class BalanceService {
    async getBalance () {
        try {
            console.log(bal, toolkit.servCall);
            const holdAditions = await BalanceDAO.getAditionsSum();
            const holdExtractions = await BalanceDAO.getExtractionsSum();
            const aditions = holdAditions[0];
            const extractions = holdExtractions[0];
            const balance = {
                totalAditions: aditions.sum,
                totalExtractions: extractions.sum,
                balance: aditions.sum - extractions.sum
            }
            // console.log(balance);
            return balance;
            // return "Problem still here!"
        } catch (e) {
            console.error(e);
            return toolkit.error;
        }
    }

    async getAditions () {
        try {
            console.log(bal, toolkit.servCall);
            const adds = await BalanceDAO.getAditions();
            // console.log(adds);
            return adds
        } catch (e) {
            console.error(e);
            return toolkit.error;
        }
    }

    async getExtractions () {
        try {
            console.log(bal, toolkit.servCall);
            const exts = await BalanceDAO.getExtractions();
            // console.log(exts);
            return exts
        } catch (e) {
            console.error(e);
            return toolkit.error;
        }
    }
};

module.exports = new BalanceService();