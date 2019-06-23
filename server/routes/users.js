const express = require('express');
const router = express.Router();

const UserController = require('../controllers/users');
const privateRoute = require('../middleware/routeMiddleware');

router.route('/users').get(privateRoute.auth, UserController.getUsers);

router.route('/user/:id').get(privateRoute.auth, UserController.getUser);

router.route('/delete_user/:id').delete(privateRoute.auth, UserController.deleteUser);

router.route('/update_user/:id').put(privateRoute.auth, UserController.updateUser);

module.exports = router;