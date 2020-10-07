const express = require('express');
const router = express.Router();
const expressLayouts = require('express-ejs-layouts');

router.get('/', (req,res) => {
    res.render('checkout')
});

module.exports = router;