const { Router } = require('express');
const entryController = require('../controllers/entries');

const router = Router();

router.post('/', entryController.addEntry);

module.exports = router;