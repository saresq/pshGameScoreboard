const { Schema, model } = require('mongoose');

const playerSchema = new Schema({
  nickname: String,
  profileImgURL: String,
}, {
  timestamps: true,
});

module.exports = model('Player', playerSchema);
