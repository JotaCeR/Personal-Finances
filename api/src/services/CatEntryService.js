const CatEntryDAO = require('../DAOs/CatEntryDAO');
const toolkit = require('../toolkit');
const catEnt = "Category-Entry ";

class CatEntryService {
    async createRelation(entryID, categoriesID) {
        console.log(catEnt, toolkit.servCall);
        const queryValues = [];

        for (let i = 0; i < categoriesID.length; i++) {
            queryValues.push([entryID, categoriesID[i].id]);
        };

        const loopLength = queryValues.length;

        return CatEntryDAO.createRelation(queryValues, loopLength);
    };
};

module.exports = new CatEntryService();