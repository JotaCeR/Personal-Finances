const { Router } = require('express');
const entryController = require('../controllers/entries');

const router = Router();

// get last 10 entries route
router.get('/last', entryController.getLastEntries);

// get addition entries route
// router.get('/aditions', entryController.getAddEntries);

// get extraction entries route
// router.get('/extractions', entryController.getExtEntries);

// get adition entries + categories associated route
router.get('/aditions', entryController.getAddsWithCats);

// get extraction entries + categories associated route
router.get('/extractions', entryController.getExtsWithCats);

// post new Entry route
router.post('/new', entryController.addEntry);

// put existing Entry route
router.put('/update/:id', entryController.modifyEntry);

// delete existing Entry route
router.delete('/delete/:id', entryController.deleteEntry);

router.get('/all', entryController.getAll);

router.get('/one/:id', entryController.getOne);

module.exports = router;