const { Router } = require('express');
const router = Router();
const entriesRoutes = require('./entries');
const balanceRoutes = require('./balance');
const categoriesRoutes = require('./categories');
const usersRoutes = require('./users');

router.use('/entries', entriesRoutes);
router.use('/balance', balanceRoutes);
router.use('/categories', categoriesRoutes);
router.use('/users', usersRoutes);

module.exports = router;