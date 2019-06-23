const express = require('express');
const router = express.Router();

const AuthController = require('../controllers/auth');
const validate = require('../middleware/validateMiddleware');
const privateRoute = require('../middleware/routeMiddleware');


router.route('/signUp').post(validate.signUp, AuthController.signUp);

router.route('/signIn').post(validate.signUp, AuthController.signIn);

router.route('/secret').get(privateRoute.auth, AuthController.secret);

module.exports = router;
