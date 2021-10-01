const { Router } = require('express');
const balanceController = require('../controllers/balance');

const router = Router();

router.get('/', balanceController.getBalance);

module.exports = router;