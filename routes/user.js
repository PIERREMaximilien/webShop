const express = require('express');
const router = express.Router();
const expressLayouts = require('express-ejs-layouts');
const userControler  = require('../controler/user');
const bcrypt = require('bcrypt');

router.get('/signup', userControler.signUpPage);
router.get('/signin', userControler.signInPage);
router.get('/signout', userControler.signOutPage)

router.post('/signup', userControler.createUser);
router.post('/signin', userControler.compareUser);

module.exports = router;