const EntryDAO = require('../DAOs/EntryDAO');
const toolkit = require('../toolkit');

class EntryService {
    async createEntry({reason, amount, date, type}) {
        try {
            const entry = {reason, amount, date, type};
            console.log(toolkit.messages.servCall);
            return await EntryDAO.createEntry(entry);
        } catch (e) {
            console.error(e);
            return toolkit.messages.error;
        }
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

    async modifyEntry(id, entry) {
        console.log(toolkit.messages.servCall);
        const pairedArray = Object.entries(entry);
        return await EntryDAO.modifyEntry(id, pairedArray);
    }

    async deleteEntry(id) {
        try {
            console.log(toolkit.messages.servCall);
            return await EntryDAO.deleteEntry(id);
        } catch (e) {
            console.error(e);
            return toolkit.messages.error;
        }
    }
};

module.exports = new EntryService();