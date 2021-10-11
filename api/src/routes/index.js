const { Router } = require('express');
const router = Router();
const entriesRoutes = require('./entries');
const balanceRoutes = require('./balance');

router.use('/entries', entriesRoutes);
router.use('/balance', balanceRoutes);

module.exports = router;