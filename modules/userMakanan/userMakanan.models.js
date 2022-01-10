const mongoose = require("mongoose");

const opt = {
  timestamps: true,
  versionKey: false,
};

const userMakananSchema = new mongoose.Schema(
  {
    id_user: [{
        type: mongoose.Schema.Types.ObjectId,
        ref : "User",
    }],
    id_makanan: [{
        type: mongoose.Schema.Types.ObjectId,
        ref : "Makanan",
    }],
    date_time: {
        type: Date,
        default: Date.now
    },
    nilai: {
        type : Number,
    },
    jumlah_kalori: {
        Number,
    },
    jumlah_emisi: {
        type: String,
    },

  },
  opt
);

const ModelUserMakanan = mongoose.model("UserMakanan", userMakananSchema);
module.exports = ModelUserMakanan