const toolkit = require('./toolkit');

const getBalance = async (req, res) => {

    const addAmounts = [];
    const extAmounts = [];

    const countAll = (prev, curr) => prev + curr;

    try {
        const dbEntries = await toolkit.allEntries();

        let aditionBalance = dbEntries.filter(entry => entry.type == 'adition');
        let extractionBalance = dbEntries.filter(entry => entry.type == 'extraction');

        aditionBalance = aditionBalance.map((entry) => {return new toolkit.EntryJS(entry.reason, entry.id, entry.amount, entry.date, entry.type)})
        extractionBalance = extractionBalance.map((entry) => {return new toolkit.EntryJS(entry.reason, entry.id, entry.amount, entry.date, entry.type)})

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
        const errorMsg = {balance: "Something happened. Couldn't acess data."}
        res.status(400).json(errorMsg)
    };
};

module.exports = {
    getBalance
}