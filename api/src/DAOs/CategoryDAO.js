const db = require('../db');
const toolkit = require('../toolkit');

class CategoryDAO {
    constructor () {
        this.addCategoryQuery = "INSERT INTO categories(name) VALUES ($1)";
        this.findCategoryQuery = "SELECT * FROM categories WHERE name=$1";
        this.findAllCategoryQuery = "SELECT * FROM categories";
        this.deleteCategoryById = "DELETE FROM categories WHERE id=$1";
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
            const results = [];

            for (let i = 0; i < names.length; i++) {
                console.log("Category value:", names[i]);
                const search = await db.query(this.findCategoryQuery, [names[i]]);
                console.log("Search result:", search);
                results.push(search.rows[0]);
            };

            if (results.rows.length <= 0) {
                return toolkit.error;
            };

            console.log("Full category search:", results);
            return results;
        } catch (e) {
            console.error(e);
            return toolkit.error;
        }
    }

    async findAllCategories () {
        try {
            const result = await db.query(this.findAllCategoryQuery);

            if (result.rows.length <= 0) {
                return toolkit.error;
            }

            return result.rows;
        } catch (e) {
            console.error(e);
            return toolkit.error;
        }
    }

    async deleteCategory (values) {
        try {
            await db.query(this.deleteCategoryById, values);
            return "Category deleted successfully!";
        } catch (e) {
            console.error(e);
            return toolkit.error;
        }
    }
};

module.exports = new CategoryDAO();