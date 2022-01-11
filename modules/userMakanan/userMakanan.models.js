const mongoose = require("mongoose");

const opt = {
  timestamps: true,
  versionKey: false,
};

const userMakananSchema = new mongoose.Schema(
  {
    id_user: {
        type: mongoose.Schema.Types.ObjectId,
        ref : "User",
    },
    id_makanan: [{
        type: mongoose.Schema.Types.ObjectId,
        ref : "Makanan",
    }],
    date_time: {
        type: String,
        default: new Date()
    },
    nilai: {
        type : Number,
    },
    jumlah_kalori: {
        type: Number,
    },
    jumlah_emisi: {
        type: Number,
    },

  },
  opt
);

const ModelUserMakanan = mongoose.model("UserMakanan", userMakananSchema);
module.exports = ModelUserMakanan