const express = require('express');
const router = express.Router();

const UsersController = require('../controllers/users');
const validate = require('../middleware/validateMiddleware');
const privateRoute = require('../middleware/routeMiddleware');


router.route('/signUp').post(validate.signUp, UsersController.signUp);

router.route('/signIn').post(validate.signUp, UsersController.signIn);

router.route('/secret').get(privateRoute.auth, UsersController.secret);

module.exports = router;
