const db = require('../db');
const toolkit = require('../toolkit');

class CategoryDAO {
    constructor () {
        this.addCategoryQuery = "INSERT INTO categories(name) VALUES ($1)";
        this.findCategoryQuery = "SELECT * FROM categories WHERE name=$1";
    }

    async createCategory (name) {
        try {
            const newCat = await db.query(this.addCategoryQuery, name);
            console.log(newCat);
            return "New Category created successfully!";
        } catch (e) {
            console.error(e);
        };
    }

    async findCategory (names) {
        try {
            // console.log("DAO name:  ", name);
            let search;
            let results = [];

            for (let i = 0; i < names.length; i++) {
                search = await db.query(this.findCategoryQuery, [names[i]]);
                results = [...results, ...search.rows];
            };

            return results;
        } catch (e) {
            console.error(e);
        }
    }
};

module.exports = new CategoryDAO();