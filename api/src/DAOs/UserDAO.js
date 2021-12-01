const db = require('../db');
const toolkit = require('../toolkit');

class UserDAO{
    constructor() {
        this.newUserQuery = "INSERT INTO users(name, password, email) VALUES($1, $2, $3) RETURNING id";
        this.deleteUserQuery = "DELETE FROM users WHERE id=$1 RETURNING name";
        this.findUserQuery = "SELECT * FROM users WHERE email=$1";
        this.updateName = "UPDATE users SET name=$1 WHERE id=$2";
        this.updatePassword = "";
        this.updateEmail = "UPDATE users SET email=$1 WHERE id=$2";
        this.updateRole = "UPDATE users SET role=$1 WHERE id=$2";
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

    async updateUser(type, values) {
        try {
            switch (type) {
                case "name":
                    return await db.query(this.updateName, values);
                case "password":
                    return await db.query(this.updatePassword, values);
                case "email":
                    return await db.query(this.updateEmail, values);
                case "role":
                    return await db.query(this.updateRole, values);
                default:
                    break;
            };
        } catch (e) {
            console.error(e);
        }
    }
};

module.exports = new UserDAO();