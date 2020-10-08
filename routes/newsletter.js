const express = require('express');
const router = express.Router();
const expressLayouts = require('express-ejs-layouts');
const newsletter = require('../controller/newsletter');

router.post('/', newsletter.addSub);

module.exports = router;