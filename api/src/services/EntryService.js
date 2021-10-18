const EntryDAO = require('../DAOs/EntryDAO');
const toolkit = require('../toolkit');

class EntryService {
    async createEntry(entry) {
        try {
            const builtEntry = entry;
            let code = "";
            console.log(toolkit.servCall);
            console.log(JSON.stringify(entry));

            for (const prop in entry) {
                if (entry[prop] !== null) {
                    builtEntry[prop] = entry[prop];
                } else {
                    switch (prop) {
                        case "reason":
                            code += "r";
                            break;
                        case "date":
                            code += "d";
                            break;
                        default:
                            code;
                    }
                }
            };

            builtEntry[code] = code;

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