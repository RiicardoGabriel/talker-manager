const express = require('express');
const { getTalkers } = require('../utlits/readFileTalker');

const router = express.Router();

const { searchTalker } = require('../utlits/readFileTalker');
const validateAuthorization = require('../middlewares/validateAuthorization');

router.get('/talker/search', validateAuthorization, async (req, res) => {
  const { q } = req.query;
  const result = await searchTalker(q);
  res.status(200).json(result);
});

router.get('/talker', async (_req, res) => {
    const talker = await getTalkers();
    return res.status(200).json(talker);
  });

module.exports = router;