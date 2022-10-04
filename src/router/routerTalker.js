const express = require('express');
const { getTalkers } = require('../utlits/readFileTalker');

const router = express.Router();

router.get('/talker', async (_req, res) => {
    const talker = await getTalkers();
    return res.status(200).json(talker);
  });

module.exports = router;