const CategoryDAO = require('../DAOs/CategoryDAO');
const toolkit = require('../toolkit');
const catServ = "Category ";

class CategoryService {
    async createCategory (name) {
        try {
            const values = [];
            console.log(catServ, toolkit.servCall);
            values.push(name.name);
            return await CategoryDAO.createCategory(values);
        } catch (e) {
            console.error(e);
        }
    }

    async findCategory (values) {
        try {
            console.log(catServ, toolkit.servCall);
            // console.log("Service name:", values);
            return await CategoryDAO.findCategory(values);
        } catch (e) {
            console.error(e);
            return toolkit.error;
        };
    }

    async findAllCategories () {
        try {
            console.log(catServ, toolkit.servCall);
            return await CategoryDAO.findAllCategories();
        } catch (e) {
            console.error(e);
            return toolkit.error;
        }
    }
};

module.exports = new CategoryService();