const db = require('../db');
const toolkit = require('../toolkit');

class CategoryDAO {
    constructor () {
        this.addCategory = "INSERT INTO categories(name) VALUES ($1)";
    }

    async createCategory (name) {
        const newCat = await db.query(this.addCategory, name);
        console.log(newCat);
        return "New Category created successfully!";
    }
};

module.exports = new CategoryDAO();