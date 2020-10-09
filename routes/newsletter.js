const express = require('express');
const router = express.Router();
const expressLayouts = require('express-ejs-layouts');
const newsletterControler = require('../controler/newsletter');

router.post('/', newsletterControler.addSub);

module.exports = router;