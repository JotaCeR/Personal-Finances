const { Router } = require('express');
const entryController = require('../controllers/entries');

const router = Router();

// get last 10 entries route
router.get('/last', entryController.getLastEntries);

// get addition entries route
router.get('/adition', entryController.getAddEntries);

// get extraction entries route
router.get('/extraction', entryController.getExtEntries);

// post new Entry route
router.post('/', entryController.addEntry);

// delete existing Entry route
router.delete('/delete/:id', entryController.deleteEntry);

module.exports = router;