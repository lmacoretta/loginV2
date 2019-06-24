import express from 'express';
const router = express.Router();

import { getUsers, getUser, deleteUser, updateUser } from '../controllers/users';
import { auth, role } from '../middleware/routeMiddleware';

router.route('/users').get(auth, getUsers);

router.route('/user/:id').get(auth, getUser);

router.route('/delete_user/:id').delete(auth, role, deleteUser);

router.route('/update_user/:id').put(auth, updateUser);

module.exports = router;