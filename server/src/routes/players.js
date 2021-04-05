const { Router } = require('express');
const router = Router();

const { getPlayers, createPlayer, getPlayer } = require('../controllers/players.controller');

router.route('/')
    .get(getPlayers)
    .post(createPlayer)


router.route('/:id')
    .get(getPlayer)

module.exports = router;