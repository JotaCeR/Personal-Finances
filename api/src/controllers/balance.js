const { Entry } = require('../db');
const sequelize = require('sequelize');
const { Op } = require('sequelize');

const getBalance = async (req, res) => {
    class EntryJS {
        constructor (reason, id, amount, date, type) {
            this.reason = reason,
            this.id = id,
            this.amount = amount,
            this.date = date,
            this.type = type
        }
    }

    const addAmounts = [];
    const extAmounts = [];

    const countAll = (prev, curr) => prev + curr;

    try {
        const dbEntries = await Entry.findAll();

        let aditionBalance = dbEntries.filter(entry => entry.type == 'adition');
        let extractionBalance = dbEntries.filter(entry => entry.type == 'extraction');

        aditionBalance = aditionBalance.map((entry) => {return new EntryJS(entry.reason, entry.id, entry.amount, entry.date, entry.type)})
        extractionBalance = extractionBalance.map((entry) => {return new EntryJS(entry.reason, entry.id, entry.amount, entry.date, entry.type)})

        aditionBalance.forEach((entry) => {addAmounts.push(entry.amount)});
        extractionBalance.forEach((entry) => {extAmounts.push(entry.amount)});

        const totalAditions = addAmounts.reduce(countAll);
        const totalExtractions = extAmounts.reduce(countAll);
        const balance = totalAditions - totalExtractions;

        const finalBalance = {totalAditions, totalExtractions, balance}

        // console.log(finalBalance);
        // console.log(aditionBalance);
        // console.log(extractionBalance);
        // console.log(aditionBalance[0].amount);
        // console.log(totalExtractions);


        res.status(200).json(finalBalance)
    } catch (error) {
        console.log(error);

        const standardResponse = {totalAditions: 0, totalExtractions: 0, balance: 0};

        console.log(standardResponse);

        res.status(400).json(standardResponse)
    };
};

module.exports = {
    getBalance
}