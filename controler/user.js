const express = require('express');
const User = require('../models/user.js');
const bcrypt = require('bcrypt');

exports.signUpPage = (req, res) => {
    res.render('signUp')
};

exports.signInPage = (req,res) => {
    res.render('signIn')
};

exports.signOutPage = (req, res) => {
    res.render('signOut')
}

exports.createUser = async (req, res) => {
    let user = await User.findOne({ email: req.body.email });
    if (user) {
        return res.status(400).send('That user already exisits!');
    }
    bcrypt.hash(req.body.password, 10)
    .then(passwordHash => {
        const user = new User({
            ...req.body,
            password : passwordHash
        })
        user.save()
        .then(() => res.status(200).redirect('/user/signin'))
        .catch(error => res.status(400).json({ error }));
    })
};


exports.compareUser = async (req, res) => {
    let user = await User.findOne({ email: req.body.email });
    if (!user) {
        return res.status(400).send('Incorrect email or password.!');
    }
    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if (!validPassword) {
        return res.status(400).send('Incorrect email or password.');
    }
    res.redirect('/')
}
