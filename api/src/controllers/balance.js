const toolkit = require('../toolkit');
const BalanceService = require('../services/BalanceService');

const getBalance = async (req, res) => {
    try {
        const totalBalance = await BalanceService.getBalance();
        // console.log(JSON.stringify(totalBalance));
        res.status(201).json(totalBalance);
    } catch (error) {
        console.error(error);
        res.status(409).json(toolkit.error);
    };
};

const getAddsFull = async (req, res) => {
    try {
        const fullAds = await BalanceService.getAditionsFull();
        res.status(201).json(fullAds);
    } catch (error) {
        console.error(error);
        res.status(409).json(toolkit.error);
    }
}

module.exports = {
    getBalance,
    getAddsFull,
}