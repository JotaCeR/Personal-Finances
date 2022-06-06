require('dotenv').config();
const UserDAO = require('../DAOs/UserDAO');
const bcrypt = require('bcryptjs');
const toolkit = require('../toolkit');
const jwt = require('jsonwebtoken');
const { TOKEN_SECRET } = process.env;

class UserService {
    async createUser([name, password, email]) {
        try {
            const encrypted_password = await this.hashPassword(password);
            console.log('Hashed pass:')
            console.log(encrypted_password)
            const { rows } = await UserDAO.createUser([name, encrypted_password, email]);
            const { id } = rows[0];

            const token = jwt.sign({ id }, TOKEN_SECRET, {
                expiresIn: 60 * 60 * 24 * 7
            });

            return token;
        } catch (e) {
            console.error(e);
        };
    }

    async hashPassword(password) {
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);
        return hash;
    }

    async verifyPassword(password, id) {
        try {
            const hash = await UserDAO.getPasswordById([id]);
            return bcrypt.compare(password, hash);
        } catch (e) {
            console.log("UserService - verifyPassword:");
            console.error(e);
        }
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

            if (search) return search

            return null
        } catch (e) {
            console.error(e);
        }
    }

    async updateUser(update, values, id) {
        try {
            for (const prop in update) {
                const query_values = [update[prop], id]
                if (values.includes(prop)) {
                    await UserDAO.updateUser(prop, query_values);
                };
            };
        } catch (e) {
            console.error(e);
        }
    }

    loginUser(id) {
        try {
            return jwt.sign({ id }, TOKEN_SECRET, {
                expiresIn: 60 * 60 * 24 * 7
            });
        } catch (e) {
            console.error(e);
        }
    }
};

module.exports = new UserService();
