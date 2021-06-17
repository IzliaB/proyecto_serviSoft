const mongoose = require("mongoose");

const VideoSchema = new mongoose.Schema(
  {
    videoId: {
      type: String
    },
    snippet: [
      {
      type: mongoose.Schema.Types.ObjectId,
      ref: "snippet"
      }
  ]
  },
  { timestamps: true }
);

module.exports = mongoose.model("Video", VideoSchema);