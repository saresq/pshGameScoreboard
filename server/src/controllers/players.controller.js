const playerCtrl = {};

const Player = require('../models/Player');

playerCtrl.getPlayers = async (req, res) => {
  try {
    const players = await Player.find();
    res.json(players);
  } catch (e) {
    console.log(e);
    res.status(500).send('Server error');
  }
};

playerCtrl.createPlayer = async (req, res) => {
  const { nickname, profileImgURL } = req.body;
  const newPlayer = new Player({
    nickname,
    profileImgURL,
  });
  try {
    await newPlayer.save();
    res.send({ message: 'Player Created' });
  } catch (e) {
    console.log(e);
    res.status(500).send('Server error');
  }
};

playerCtrl.getPlayer = async (req, res) => {
  try {
    const player = await Player.findById(req.params.id);
    res.send(player);
  } catch (e) {
    console.log(e);
    res.status(500).send('Server error');
  }
};

module.exports = playerCtrl;
