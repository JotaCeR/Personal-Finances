const { Router } = require('express');
const router = Router();
const entriesRoutes = require('./entries');

router.use('/entries', entriesRoutes);

module.exports = router;