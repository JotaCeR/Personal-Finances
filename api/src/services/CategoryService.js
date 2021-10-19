const CategoryDAO = require('../DAOs/CategoryDAO');
const toolkit = require('../toolkit');
const db = require('../db');

class CategoryService {
    async createCategory (name) {
        const values = [];
        values.push(name.name);
        return await CategoryDAO.createCategory(values);
    }
};

module.exports = new CategoryService();