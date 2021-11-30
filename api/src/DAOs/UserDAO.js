const db = require('../db');
const toolkit = require('../toolkit');

class UserDAO{
    constructor() {
        this.newUserQuery = "INSERT INTO users(name, password, email) VALUES($1, $2, $3) RETURNING id";
        this.deleteUserQuery = "DELETE FROM users WHERE id=$1 RETURNING name";
        this.findUserQuery = "SELECT * FROM users WHERE email=$1";
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

    async findUser(email) {
        try {
            const answer = await db.query(this.findUserQuery, email);
            console.log(`DAO level search user by email: ${answer.rows}`)
            return answer.rows;
        } catch (e) {
            console.error(e);
        };
    }
};

module.exports = new UserDAO();