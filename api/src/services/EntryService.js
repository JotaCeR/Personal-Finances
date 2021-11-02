const EntryDAO = require('../DAOs/EntryDAO');
const CategoryDAO = require('../DAOs/CategoryDAO');
const CatEntryDAO = require('../DAOs/CatEntryDAO');
const toolkit = require('../toolkit');

class EntryService {
    async createEntry(entry) {
        try {
            // console.log(entry);
            const builtEntry = [];
            const categories = entry.categories;
            const entryKeys = [];
            console.log(toolkit.servCall);
            // console.log(JSON.stringify(entry));
            // console.log(JSON.stringify(categories));

            for (const prop in entry) {
                // console.log(entry[prop])
                if (entry[prop] !== null && prop !== "categories") {
                    builtEntry.push(entry[prop]);
                    entryKeys.push(prop);
                }
            };

            // console.log(builtEntry, entryKeys, categories);
            const getCats = await CategoryDAO.findCategory(categories);
            // console.log(getCats);

            let insertedEntry = await EntryDAO.createEntry(builtEntry, entryKeys);
            insertedEntry = insertedEntry.rows[0];

            await CatEntryDAO.createRelation(insertedEntry.id, getCats);

            return insertedEntry;
        } catch (e) {
            console.error(e);
            return toolkit.error;
        };
    }

    async getLastEntries() {
        try {
            console.log(toolkit.servCall);
            return await EntryDAO.getLastEntries();
        } catch (e) {
            console.error(e);
            return toolkit.error;
        };
    }

    async modifyEntry(id, entry) {
        console.log(toolkit.servCall);
        const valuesArray = Object.values(entry);
        valuesArray.push(id);
        return await EntryDAO.modifyEntry(valuesArray);
    }

    async deleteEntry(id) {
        try {
            console.log(toolkit.servCall);
            await CatEntryDAO.deleteRelationsByEntryId(id);
            return await EntryDAO.deleteEntry(id);
        } catch (e) {
            console.error(e);
            return toolkit.error;
        }
    }
};

module.exports = new EntryService();