const axios = require('axios');
const Player = require('./models/Player');
const Score = require('./models/Score');

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const createRandomUser = async () => {
  try {
    const result = await axios.get(`https://randomuser.me/api?results=${getRandomInt(1, 10)}`);

    const users = result.data.results.map((user) => ({
      nickname: user.login.username,
      profileImgURL: user.picture.medium,
    }));

    const players = await Player.insertMany(users);

    const playerScores = players.map((player) => ({ player, score: getRandomInt(0, 100) }));

    const scores = await Score.insertMany(playerScores);

    console.log(`${scores.length} random documents feeded to the database`);
  } catch (e) {
    console.log('Error in data creation');
  }
};

module.exports = createRandomUser;
