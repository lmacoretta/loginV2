const express = require('express');
const router = express.Router();


import { createCompany, getCompanys } from '../controllers/company';
import { createComp } from '../middleware/validateMiddleware';

router.route('/').post(createComp, createCompany);
router.route('/').get(getCompanys);

module.exports = router;