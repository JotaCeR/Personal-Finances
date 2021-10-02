const { Router } = require('express');
const entryController = require('../controllers/entries');

const router = Router();

router.get('/last', entryController.getLastEntries);

// post new Entry route
router.post('/', entryController.addEntry);

module.exports = router;