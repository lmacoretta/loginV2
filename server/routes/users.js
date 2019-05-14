const express = require('express');
const router = express.Router();

const UsersController = require('../controllers/users');
const validate = require('../middleware/routeMiddleware');

router.route('/signUp').post(validate.signUp, UsersController.signUp);

router.route('/signIn').post(UsersController.signIn);

router.route('/secret').get(UsersController.secret);

module.exports = router;
