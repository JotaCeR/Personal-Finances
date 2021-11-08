const { Router } = require('express');
const entryController = require('../controllers/entries');
const entryMiddlewares = require('../middlewares/entry');

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

// get all entries route [Development Tool]
router.get('/all', entryController.getAll);

// get one entry by ID
router.get('/one/:id', entryController.getOne);

// post new Entry route
router.post('/new', [entryMiddlewares.purgeEntryBody], entryController.addEntry);

// put existing Entry route
router.put('/update/:id', entryController.modifyEntry);

// delete existing Entry-Category relation route
router.delete('/update/categories/:id', entryController.modifyEntryCategories);

// delete existing Entry route
router.delete('/delete/:id', entryController.deleteEntry);

module.exports = router;