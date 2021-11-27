const db = require('../db');
const toolkit = require('../toolkit');

class UserDAO{
    constructor() {
        this.newUserQuery = "INSERT INTO users(name, password, email) VALUES($1, $2, $3) RETURNING id";
        this.deleteUserQuery = "DELETE FROM users WHERE id=$1 RETURNING name";
    }

    async createUser(values) {
        try {
            return await db.query(this.newUserQuery, values);
        } catch (e) {
            console.error(e);
        };
    }

    async deleteUser(id) {
        try {
            return await db.query(this.deleteUserQuery, id);
        } catch (e) {
            console.error(e);
        };
    }
};

module.exports = new UserDAO();