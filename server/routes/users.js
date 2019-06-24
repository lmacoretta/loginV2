import express from 'express';
const router = express.Router();

import { getUsers, getUser, deleteUser, updateUser } from '../controllers/users';
import { auth, role } from '../middleware/routeMiddleware';

router.route('/').get(auth, getUsers);

router.route('/user/:id').get(auth, getUser);

router.route('/:id').delete(auth, role, deleteUser);

router.route('/:id').put(auth, updateUser);

module.exports = router;