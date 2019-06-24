const express = require('express');
const router = express.Router();

import { createCategory } from '../controllers/categories';
import { createCat } from '../middleware/validateMiddleware';

router.route('/create').post(createCat, createCategory);


module.exports = router;