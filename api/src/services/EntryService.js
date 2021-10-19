const EntryDAO = require('../DAOs/EntryDAO');
const toolkit = require('../toolkit');

class EntryService {
    async createEntry(entry) {
        try {
            const builtEntry = {};
            console.log(toolkit.servCall);
            console.log(JSON.stringify(entry));

            for (const prop in entry) {
                if (entry[prop] !== null) {
                    builtEntry[prop] = entry[prop];
                }
            };

            return await EntryDAO.createEntry(builtEntry);
        } catch (e) {
            console.error(e);
            return toolkit.error;
        }
    }

    async getLastEntries() {
        try {
            console.log(toolkit.servCall);
            return await EntryDAO.getLastEntries();
        } catch (e) {
            console.error(e);
            return toolkit.error;
        }
    }

    async modifyEntry(id, entry) {
        console.log(toolkit.servCall);
        const pairedArray = Object.entries(entry);
        return await EntryDAO.modifyEntry(id, pairedArray);
    }

    async deleteEntry(id) {
        try {
            console.log(toolkit.servCall);
            return await EntryDAO.deleteEntry(id);
        } catch (e) {
            console.error(e);
            return toolkit.error;
        }
    }
};

module.exports = new EntryService();