const mongoose = require("mongoose");

const ContestantSchema = new mongoose.Schema({
    name: String,
    wins: Number,
    seasons: Number,
    image: String,
    challengeWins: Number,
    votesAgainst: Number,
    daysLasted: Number,
    strength: String,
    quote: String,
});

const Contestant = mongoose.model("Contestant", ContestantSchema);

module.exports = Contestant