import express from 'express';
const router = express.Router();

import { signUp, signIn, secret } from '../controllers/auth';
import { signUpVal } from '../middleware/validateMiddleware';
import { auth, role } from '../middleware/routeMiddleware';


router.route('/signUp').post(signUpVal, signUp);

router.route('/signIn').post(signIn);

router.route('/secret').get(auth, role, secret);

module.exports = router;
