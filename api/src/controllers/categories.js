const CategoryService = require('../services/CategoryService');
const toolkit = require('../toolkit');

const addCategory = async (req, res) => {
    try {
        console.log(toolkit.conCall);
        await CategoryService.createCategory(req.body);
        res.status(201).send("Category sucessfully created!");
    } catch (e) {
        console.error(e);
        res.status(400).send(toolkit.error);
    }
};

const findCategory = async (req, res) => {
    try {
        const { categories } = req.body;
        console.log(toolkit.conCall);
        const result = await CategoryService.findCategory(categories);
        res.status(200).json(result);
    } catch (e) {
        console.error(e);
        res.status(400).send(toolkit.error);
    }
}

module.exports = {
    addCategory,
    findCategory
}