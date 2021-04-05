const scoreCtrl = {};

const Score = require('../models/Score');

scoreCtrl.getScores = async (req, res) => {
  try {
    const scores = await Score
      .find()
      .sort({ score: -1 })
      .limit(10)
      .populate('player');
    res.json(scores);
  } catch (e) {
    console.log(e);
    res.status(500).send('Server error');
  }
};

scoreCtrl.createScore = async (req, res) => {
  const { player, score } = req.body;
  const newScore = new Score({
    player,
    score,
  });
  try {
    await newScore.save();
    res.send({ message: 'Score Saved' });
  } catch (e) {
    console.log(e);
    res.status(500).send('Server error');
  }
};

module.exports = scoreCtrl;
