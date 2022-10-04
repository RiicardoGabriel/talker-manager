const fs = require('fs').promises;
const path = require('path');

const talkerFile = path.resolve(__dirname, '../talker.json');

const readFile = async () => {
    try { 
      const talker = await fs.readFile(talkerFile);
      const talkerList = JSON.parse(talker);
      return talkerList;
    } catch (err) {
      return [];
    }
  };

  const getTalkers = async () => {
    const TalkersReturn = await readFile();
    return TalkersReturn;
  };

module.exports = { getTalkers };