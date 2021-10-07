const EntryDAO = require('../DAOs/EntryDAO');
const toolkit = require('../toolkit');

class EntryService {
    async createEntry({reason, amount, date, type}) {
        const entry = {reason, amount, date, type};
        console.log(toolkit.messages.servCall);
        return await EntryDAO.createEntry(entry);
    }

    async getLastEntries() {
        try {
            console.log(toolkit.messages.servCall);
            return await EntryDAO.getLastEntries();
        } catch (e) {
            console.error(e);
            return toolkit.messages.error;
        }
    }
};

module.exports = new EntryService();