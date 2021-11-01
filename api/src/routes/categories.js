const { Router } = require('express');
const categoryController = require('../controllers/categories');

const router = Router();

// post new Category route
router.post('/new', categoryController.addCategory);


router.get('/find', categoryController.findCategory);

router.get('/find/all', categoryController.findAllCategories);

module.exports = router;