const db = require('../db');
const toolkit = require('../toolkit');

class CatEntryDAO {
    constructor () {
        this.insertRelationQuery = "INSERT INTO entries_categories(entry_id, category_id) VALUES ($1, $2)";
        this.deleteRelationsByEntryIdQuery = "DELETE FROM entries_categories WHERE entry_id=$1";
        this.deleteRelationsByCategoryIdQuery = "DELETE FROM entries_categories WHERE category_id=$1";
    }

    async createRelation(queryArray, loopLength) {
        try {
            for (let i = 0; i < loopLength; i++) {
                await db.query(this.insertRelationQuery, queryArray[i]);
            }
            return "Relationships built successfully!";
        } catch (e) {
            console.error(e);
            return toolkit.error;
        };
    }

    async deleteRelationsByEntryId (values) {
        try {
            await db.query(this.deleteRelationsByEntryIdQuery, values);
            return "Relationships deleted succesfully!";
        } catch (e) {
            console.error(e);
            return toolkit.error;
        }
    }

    async deleteRelationsByCategoryId (values) {
        try {
            await db.query(this.deleteRelationsByCategoryIdQuery, values);
            return "Relationships deleted succesfully!";
        } catch (e) {
            console.error(e);
            return toolkit.error;
        }
    }
};

module.exports = new CatEntryDAO();