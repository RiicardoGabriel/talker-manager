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

  const writeTalkerFile = async (newTalker) => {
    try {
      const talkers = await readFile();
      const newId = talkers[talkers.length - 1].id + 1;
      const newObj = { id: newId, ...newTalker };
      const newArr = JSON.stringify([...talkers, newObj]);

      await fs.writeFile(talkerFile, newArr);
    } catch (err) {
      console.log(err.message);
    }
  };

  const getTalkers = async () => {
    const TalkersReturn = await readFile();
    return TalkersReturn;
  };

module.exports = { getTalkers, writeTalkerFile };