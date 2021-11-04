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
        const { categories_names } = req.body;
        console.log(toolkit.conCall);
        const result = await CategoryService.findCategory(categories_names);
        res.status(200).json(result);
    } catch (e) {
        console.error(e);
        res.status(400).send(toolkit.error);
    }
};

const findAllCategories = async (req, res) => {
    try {
        console.log(toolkit.conCall);
        const result = await CategoryService.findAllCategories();
        res.status(200).json(result);
    } catch (e) {
        console.error(e);
        res.status(400).send(toolkit.error);
    }
};

const deleteCategory = async (req, res) => {
    try {
        console.log(toolkit.conCall);
        const { id } = req.params;
        const deletedCategory = await CategoryService.deleteCategory(id);
        res.status(200).json(deletedCategory);
    } catch (e) {
        console.error(e);
        res.status(400).send(toolkit.error);
    }
};

module.exports = {
    addCategory,
    findCategory,
    findAllCategories,
    deleteCategory,
}