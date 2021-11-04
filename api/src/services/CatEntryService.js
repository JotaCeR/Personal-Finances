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

    async deleteRelationsByEntryId(id) {
        try {
            await CatEntryDAO.deleteRelationsByEntryId([id]);
            return "Relation deleted successfully!";
        } catch (e) {
            console.error(e);
            return toolkit.error;
        }
    }

    async deleteRelationsByCategoryId(id) {
        try {
            await CatEntryDAO.deleteRelationsByCategoryId([id]);
            return "Relation deleted successfully!";
        } catch (e) {
            console.error(e);
            return toolkit.error;
        }
    }
};

module.exports = new CatEntryService();