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
}

module.exports = {
    EntryJS,
    allEntries
}