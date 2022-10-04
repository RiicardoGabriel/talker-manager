const express = require('express');

const router = express.Router();

// const validatePassword = require('../middlewares/validatePassword');
const cryptoToken = require('../cryptonToken');

router.post('/login', (req, res) => {
    res.status(200).json({
        token: cryptoToken(),
    });
});

module.exports = router;