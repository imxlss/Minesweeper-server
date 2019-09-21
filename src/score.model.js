const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ScoreSchema = new Schema(
  {
    uuid: {
      type: String,
      required: true
    },
    duration: {
      type: Number,
      required: true
    },
    level: {
      type: Number,
      required: true
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Score', ScoreSchema);
