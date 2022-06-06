const db = require('../db');
const toolkit = require('../toolkit');

class UserEntryDAO {
    constructor () {
        this.insertRelationQuery = "INSERT INTO users_entries(user_id, entry_id) VALUES ($1, $2)";
        this.deleteRelationByEntryIdQuery = "DELETE FROM users_entries WHERE entry_id=$1";
        this.deleteRelationByUserIdQuery = "DELETE FROM user_entries WHERE user_id=$1";
        this.deleteRelationByDoubleIdQuery = "DELETE FROM user_entries WHERE entry_id=$1 AND user_id=$2";
    };  

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
    };

    async deleteRelationByEntryId(values) {
        try {
            await db.query(this.deleteRelationByEntryId, values);
            return "Relationship deleted succesfully!";
        } catch (e) {
            console.error(e);
            return toolkit.error;
        };
    };

    async deleteRelationByUserId(values) {
        try {
          await db.query(this.deleteRelationByUserId, values);
          return "Relationship deleted succesfully!";
        } catch (e) {
            console.error(e);
            return toolkit.error;
        };
    };

    async deleteRelationByDoubleId(values) {
        try {
            await db.query(this.deleteRelationByDoubleId, values)
            return "Realtionship deleted succesfully!";
        } catch (e) {
            console.error(e);
            return toolkit.error;
        };
    };
};

module.exports = new UserEntryDAO();