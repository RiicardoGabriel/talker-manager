const express = require('express');
const talker = require('../talker.json');

const router = express.Router();

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

module.exports = router;