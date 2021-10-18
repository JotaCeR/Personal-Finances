const { Router } = require('express');
const entryController = require('../controllers/entries');

const router = Router();

// get last 10 entries route
router.get('/last', entryController.getLastEntries);

// get addition entries route
router.get('/aditions', entryController.getAddEntries);

// get extraction entries route
router.get('/extractions', entryController.getExtEntries);

// post new Entry route
router.post('/new', entryController.addEntry);

// put existing Entry route
router.put('/update/:id', entryController.modifyEntry);

// delete existing Entry route
router.delete('/delete/:id', entryController.deleteEntry);

module.exports = router;