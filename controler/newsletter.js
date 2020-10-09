const express = require('express');
const Newsletter = require('../models/newsletter');

exports.addSub = (req, res, next) => {
    const sub = new Newsletter({
        ...req.body
    })
    sub.save()
    .then(() => res.status(200).redirect('/'))
    .catch(error => res.status(400).json({ error }));
};



