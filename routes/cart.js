const express = require('express');
const router = express.Router();
const expressLayouts = require('express-ejs-layouts');

router.get('/', (req,res) => {
    res.render('cart')
});

module.exports = router;