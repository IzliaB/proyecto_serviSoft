const mongoose = require("mongoose");

const SolucionSchema = new mongoose.Schema(
  {
    tittle: {
      type: String
    },
    descripcion: {
      type: String
    },
    link: [
      {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Video"
      }
  ]
  },
  { timestamps: true }
);


module.exports = mongoose.model("Solucion", SolucionSchema);