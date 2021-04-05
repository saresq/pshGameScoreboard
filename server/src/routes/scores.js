const { Router } = require('express');

const router = Router();

const { getScores, createScore } = require('../controllers/scores.controller');

router.route('/')
  .get(getScores)
  .post(createScore);

module.exports = router;
