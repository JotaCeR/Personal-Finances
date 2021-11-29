const UserDAO = require('../DAOs/UserDAO');
const bcrypt = require('bcryptjs');
const toolkit = require('../toolkit');

class UserService {
    async createUser([name, password, email]) {
        try {
            const encrypted_password = this.hashPassword(password);
            return await UserDAO.createUser([name, encrypted_password, email]);
        } catch (e) {
            console.error(e);
        };
    }

    async hashPassword(password) {
        const salt = await bcrypt.genSalt(10);
        const hash = bcrypt.hash(password, salt);
        return hash;
    }

    async deleteUser(id) {
        try {
            return await UserDAO.deleteUser([id]);
        } catch (e) {
            console.error(e);
        };
    }

    async findUser(email) {
        try {
            const search = await UserDAO.findUser([email]);

            if (search.length > 0) {
                return true;
            } else {
                return false;
            };
        } catch (e) {
            console.error(e);
        }
    }
};

module.exports = new UserService();
