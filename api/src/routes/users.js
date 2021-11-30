const { Router } = require('express');
const usersController = require('../controllers/users');
const signupMiddleware = require('../middlewares/verify_signup');

const router = Router();

router.post('/', [signupMiddleware.verify_email, signupMiddleware.verify_password], usersController.createNewUser);

router.delete('/delete/:id', usersController.deleteUser);

module.exports = router;