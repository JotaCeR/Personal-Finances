const { Router } = require('express');
const balanceController = require('../controllers/balance');

const router = Router();

router.get('/', balanceController.getBalance);

router.get('/full_aditions', balanceController.getAddsWithCats);

module.exports = router;