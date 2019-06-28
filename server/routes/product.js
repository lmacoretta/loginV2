const express = require('express');
const router = express.Router();

import { createProduct, getProductById, deleteProduct, getAllProduct } from '../controllers/product';
import { auth, role } from '../middleware/routeMiddleware';

router.route('/').post(auth, createProduct);
router.route('/:item/:type').get(getProductById);
router.route('/').get(getAllProduct);
router.route('/:id').delete(deleteProduct);

module.exports = router;