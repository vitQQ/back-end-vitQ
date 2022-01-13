const mongoose = require("mongoose");

const opt = {
  timestamps: true,
  versionKey: false,
};

const makananSchema = new mongoose.Schema(
  {
    namaMakanan: {
      type: String,
    },
    unit: {
        type: String,
    },
    nilai: {
        type: Number,
    },
    kalori: {
      type: Number,
    },
    emisi: {
      type: Number,
    },
    protein: {
      type: Number,
    },
    carbon: {
      type: Number,
    },
    fat: {
        type: Number,
    },
    url_image: {
      type: String,
    },

  },
  opt
);

const ModelMakanan = mongoose.model("Makanan", makananSchema);
module.exports = ModelMakanan