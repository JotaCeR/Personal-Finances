const db = require('../db');
const toolkit = require('../toolkit');

class CategoryDAO {
    constructor () {
        this.addCategoryQuery = "INSERT INTO categories(name) VALUES ($1)";
        this.findCategoryQuery = "SELECT * FROM categories WHERE name=$1";
        this.findAllCategoryQuery = "SELECT * FROM categories";
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
            return toolkit.error;
        }
    }

    async findAllCategories () {
        try {
            const result = await db.query(this.findAllCategoryQuery);

            return result.rows;
        } catch (e) {
            console.error(e);
            return toolkit.error;
        }
    }
};

module.exports = new CategoryDAO();