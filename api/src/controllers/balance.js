const { Entry } = require('../db');
const sequelize = require('sequelize');
const { Op } = require('sequelize');

const getBalance = async (req, res) => {
    class Balance {
        constructor (adition, extraction, total) {
            this.adition = adition,
            this.extraction = extraction,
            this.total = total
        };
    };

    class EntryJS {
        constructor (reason, id, amount, date, type) {
            this.reason = reason,
            this.id = id,
            this.amount = amount,
            this.date = date,
            this.type = type
        }
    }

    const sumVals = (prevVal, curVal) => prevVal.amount + curVal.amount;

    try {
        const dbEntries = await Entry.findAll();

        let aditionBalance = dbEntries.filter(entry => entry.type == 'adition');
        let extractionBalance = dbEntries.filter(entry => entry.type == 'extraction');

        aditionBalance = aditionBalance.map((entry) => {return new EntryJS(entry.reason, entry.id, entry.amount, entry.date, entry.type)})
        extractionBalance = extractionBalance.map((entry) => {return new EntryJS(entry.reason, entry.id, entry.amount, entry.date, entry.type)})

        const totalAditions = aditionBalance.reduce(sumVals);
        const totalExtractions = extractionBalance.reduce(sumVals);
        const balance = totalAditions - totalExtractions;

        const finalBalance = new Balance(totalAditions, totalExtractions, balance)

        // console.log(balance);
        // console.log(finalBalance);

        res.status(200).json(finalBalance)
    } catch (error) {
        console.log(error)
    };
};

module.exports = {
    getBalance
}