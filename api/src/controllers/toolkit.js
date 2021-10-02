const { Entry } = require('../db')

class EntryJS {
    constructor (reason, id, amount, date, type) {
        this.reason = reason,
        this.id = id,
        this.amount = amount,
        this.date = date,
        this.type = type
    }
};

const allEntries = async () => {
    const result = await Entry.findAll();
    return result;
};

const aditionEntries = async () => {
    const rawResult = await allEntries();
    const result = rawResult.filter(entry => entry.type == 'adition');
    return result;
};

const extractionEntries = async () => {
    const rawResult = await allEntries();
    const result = rawResult.filter(entry => entry.type == 'extraction');
    return result;
};

const buildEntries = (array) => {
    const result = array.map(entry => {return new EntryJS(entry.reason, entry.id, entry.amount, entry.date, entry.type)})
    return result;
};

const errorMsg = "Something happened. Couldn't acess data or data doesn't exist."

module.exports = {
    EntryJS,
    allEntries,
    buildEntries,
    aditionEntries,
    extractionEntries,
    errorMsg
}