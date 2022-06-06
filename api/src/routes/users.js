const { Router } = require('express');
const usersController = require('../controllers/users');
const signupMiddleware = require('../middlewares/verify_signup');

const router = Router();

router.post('/signup', [signupMiddleware.verify_email, signupMiddleware.verify_password], usersController.createNewUser);

router.delete('/delete/:id', usersController.deleteUser);

router.put('/update/:id', usersController.updateUser);

router.post('/signin', usersController.loginUser);

module.exports = router;