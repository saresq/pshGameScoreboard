const { Schema, model } = require('mongoose');

const scoreSchema = new Schema({
    player: {
        type: Schema.Types.ObjectId,
        ref: 'Player'
    },
    score: Number
},{
    timestamps: true
})


module.exports = model('Score', scoreSchema);