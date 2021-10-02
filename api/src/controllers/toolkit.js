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

const buildEntries = (array) => {
    const result = array.map(entry => {return new EntryJS(entry.reason, entry.id, entry.amount, entry.date, entry.type)})
    return result;
}

module.exports = {
    EntryJS,
    allEntries,
    buildEntries
}