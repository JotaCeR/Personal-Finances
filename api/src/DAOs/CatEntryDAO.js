const db = require('../db');
const toolkit = require('../toolkit');

class CatEntryDAO {
    constructor () {
        this.insertRelationQuery = "INSERT INTO entries_categories(entry_id, category_id) VALUES ($1, $2)";
    }

    async createRelation (entryID, categoriesArray) {
        try {
            for (let i = 0; i < categoriesArray.length; i++) {
                let values = [entryID];
                values.push(categoriesArray[i].id)
                const dbAnswer = await db.query(this.insertRelationQuery, values);
                console.log(dbAnswer)
            }

            return "Relationships built successfully!";
        } catch (e) {
            console.error(e);
            return toolkit.error;
        };
    }
};

module.exports = new CatEntryDAO();