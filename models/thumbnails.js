const mongoose = require("mongoose");

const ThumbnailsSchema = new mongoose.Schema(
  {
    default: {
      type: String
    },
    medium: {
        type: String
      },
    hight: {
        type: String
      },
   
  },
  { timestamps: true }
);

module.exports = mongoose.model("thumbnails", ThumbnailsSchema);