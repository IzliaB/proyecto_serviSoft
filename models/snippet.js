const mongoose = require("mongoose");

const SnippetSchema = new mongoose.Schema(
  {
    videoId: {
      type: String
    },
    snippet: [
      {
      type: mongoose.Schema.Types.ObjectId,
      ref: "thumbnails"
      }
  ]
  },
  { timestamps: true }
);

module.exports = mongoose.model("snippet", SnippetSchema);