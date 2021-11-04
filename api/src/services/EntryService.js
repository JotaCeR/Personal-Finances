const EntryDAO = require('../DAOs/EntryDAO');
const CategoryService = require('./CategoryService');
const CatEntryService = require('./CatEntryService');
const toolkit = require('../toolkit');
const entr = "Entry ";

class EntryService {
    async createEntry(entry) {
        try {
            // console.log(entry);
            const builtEntry = [];
            const categories = entry.categories;
            const entryKeys = [];
            console.log(entr, toolkit.servCall);
            // console.log(JSON.stringify(entry));
            // console.log(JSON.stringify(categories));

            for (const prop in entry) {
                // console.log(entry[prop])
                if (entry[prop] !== null && prop !== "categories") {
                    builtEntry.push(entry[prop]);
                    entryKeys.push(prop);
                }
            };

            // console.log("Entry to build on DAO:", builtEntry);
            const getCats = await CategoryService.findCategory(categories);

            let insertedEntry = await EntryDAO.createEntry(builtEntry, entryKeys);
            insertedEntry = insertedEntry.rows[0];
            
            // console.log("Created Entry ID & Categories Array");
            console.log(insertedEntry, getCats);
            await CatEntryService.createRelation(insertedEntry.id, getCats);

            return insertedEntry;
        } catch (e) {
            console.error(e);
            return toolkit.error;
        };
    }

    async getLastEntries() {
        try {
            console.log(entr, toolkit.servCall);
            return await EntryDAO.getLastEntries();
        } catch (e) {
            console.error(e);
            return toolkit.error;
        };
    }

    async modifyEntry(id, entry) {
        try {
            console.log(entr, toolkit.servCall);
            const valuesArray = Object.values(entry);
            valuesArray.push(id);
            return await EntryDAO.modifyEntry(valuesArray);
        } catch (e) {
            console.error(e);
            return toolkit.error;
        }
    }

    async deleteEntry(id) {
        try {
            console.log(entr, toolkit.servCall);
            await CatEntryDAO.deleteRelationsByEntryId(id);
            return await EntryDAO.deleteEntry(id);
        } catch (e) {
            console.error(e);
            return toolkit.error;
        };
    }

    async getAll() {
        try {
            console.log(entr, toolkit.servCall);
            return await EntryDAO.selectAll();
        } catch (e) {
            console.error(e);
            return toolkit.error;
        };
    }

    async getOne(id) {
        try {
            console.log(entr, toolkit.servCall);
            const value = [id];
            return await EntryDAO.selectOne(value);
        } catch (e) {
            console.error(e);
            return toolkit.error
        }
    }

    handleEntriesWithCats(array, arrayValue, index) {
        try {
            let newValue = {...arrayValue, categories: [arrayValue.categories]};

            for (let i = 0; i < array.length; i++) {
                if (i !== index && array[i].id === arrayValue.id) {
                    newValue.categories.push(array[i].categories);
                };
            };

            return newValue;
        } catch (e) {
            console.error(e);
            return toolkit.error;
        }
    }

    async getAditionsWithCats() {
        try {
            console.log(entr, toolkit.servCall);
            const adds = await EntryDAO.getAditionsWithCats();
            let handledAditions = [];

            for (let i = 0; i < adds.length; i++) {
                const handlingAdition = this.handleEntriesWithCats(adds, adds[i], i);
                handledAditions.push(handlingAdition);
            };

            handledAditions = handledAditions.filter((fullEntry, index, arr) => index === arr.findIndex((entry) => (entry.id === fullEntry.id)));

            return handledAditions;
        } catch (e) {
            console.error(e);
            return toolkit.error;
        }
    }

    async getExtractionsWithCats() {
        try {
            console.log(entr, toolkit.servCall);
            const exts = await EntryDAO.getExtractionsWithCats();
            let handledExtractions = [];

            for (let i = 0; i < exts.length; i++) {
                const handlingExtraction = this.handleEntriesWithCats(exts, exts[i], i);
                handledExtractions.push(handlingExtraction);
            };

            handledExtractions = handledExtractions.filter((fullEntry, index, arr) => index === arr.findIndex((entry) => (entry.id === fullEntry.id)));

            return handledExtractions;
        } catch (e) {
            console.error(e);
            return toolkit.error;
        }
    }
};

module.exports = new EntryService();