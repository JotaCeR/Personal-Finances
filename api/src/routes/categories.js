const { Router } = require('express');
const categoryController = require('../controllers/categories');

const router = Router();

// post new Category route
router.post('/new', categoryController.addCategory);

// get one category
router.get('/find', categoryController.findCategory);

// get all categories
router.get('/find/all', categoryController.findAllCategories);

// delete one category
router.delete('/delete/:id', categoryController.deleteCategory);

module.exports = router;