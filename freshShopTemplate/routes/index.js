const express = require('express');
const router = express();
const expressLayouts = require('express-ejs-layouts');

router.get('/', (req,res) => {
    res.render('index')
});

module.exports = router;