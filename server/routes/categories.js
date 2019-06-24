const express = require('express');
const router = express.Router();

import { createCategory, getCategories, deleteCategorie } from '../controllers/categories';
import { createCat } from '../middleware/validateMiddleware';

router.route('/').post(createCat, createCategory);
router.route('/').get(getCategories);
router.route('/:id').delete(deleteCategorie);

module.exports = router;