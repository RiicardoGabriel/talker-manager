const express = require('express');

const router = express.Router();

const { getTalkers, writeTalkerFile } = require('../utlits/readFileTalker');
const validateTalk = require('../middlewares/validateTalk');
const validateName = require('../middlewares/validateName');
const validateWatchedAs = require('../middlewares/validateWatchedAt');
const validateRate = require('../middlewares/validateRate');
const validateAge = require('../middlewares/validateAge');
const validateAuthorization = require('../middlewares/validateAuthorization');

router.post('/talker',
validateAuthorization,
validateTalk,
validateName,
validateWatchedAs,
validateRate,
validateAge, async (req, res) => {
    await writeTalkerFile(req.body);
    const atTalkers = await getTalkers();
    res.status(201).json(atTalkers[atTalkers.length - 1]);
});

module.exports = router;