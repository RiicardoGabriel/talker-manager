const express = require('express');

const router = express.Router();

const validatePassword = require('../middlewares/validatePassword');
const validateEmail = require('../middlewares/validateEmail');
const cryptoToken = require('../cryptonToken');

router.post('/login', validateEmail, validatePassword, (req, res) => {
    res.status(200).json({
        token: cryptoToken(),
    });
});

module.exports = router;