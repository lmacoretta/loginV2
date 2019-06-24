const express = require('express');
const router = express.Router();

import { createProduct } from '../controllers/product';

router.route('/').post(createProduct);

module.exports = router;