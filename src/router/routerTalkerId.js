const express = require('express');
const talker = require('../talker.json');

const router = express.Router();

const { putTalkerFile } = require('../utlits/readFileTalker');
const validateTalk = require('../middlewares/validateTalk');
const validateName = require('../middlewares/validateName');
const validateWatchedAs = require('../middlewares/validateWatchedAt');
const validateRate = require('../middlewares/validateRate');
const validateAge = require('../middlewares/validateAge');
const validateAuthorization = require('../middlewares/validateAuthorization');

router.get('/talker/:id', async (req, res) => {
    const requestById = talker.find(({ id }) => id === Number(req.params.id));

    if (requestById) {
    res.status(200).json(requestById);
    } else {
        res.status(404).json({
                    message: 'Pessoa palestrante não encontrada',
        });
    }
});

router.put('/talker/:id',
validateAuthorization,
validateTalk,
validateName,
validateWatchedAs,
validateRate,
validateAge,
 async (req, res) => {
    const { id } = req.params;
    const modified = await putTalkerFile(req.body, id);
    res.status(200).json(modified[modified.length - 1]);
});

module.exports = router;