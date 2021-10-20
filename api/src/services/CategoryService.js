const CategoryDAO = require('../DAOs/CategoryDAO');
const toolkit = require('../toolkit');
const db = require('../db');

class CategoryService {
    async createCategory (name) {
        try {
            const values = [];
            values.push(name.name);
            return await CategoryDAO.createCategory(values);
        } catch (e) {
            console.error(e);
        }
    }

    async findCategory (values) {
        try {
            // console.log("Service name:", values);
            return await CategoryDAO.findCategory(values);
        } catch (e) {
            console.error(e);
            return toolkit.error;
        };
    }
};

module.exports = new CategoryService();