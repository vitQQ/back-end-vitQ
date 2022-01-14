const mongoose = require("mongoose");

const opt = {
  timestamps: true,
  versionKey: false,
};

const activitySchema = new mongoose.Schema(
  {
    namaAktivitas: {
      type: String,
    },
    petunjuk: {
        type: String,
    },
    manfaatKegiatan: {
        type: String,
    },
    manfaatKalori: {
      type: Number,
    },
    manfaatEmisi: {
      type: Number,
    },
    unit: {
      type: String,
    },
    nilai: {
      type: Number,
    },

  },
  opt
);

const ModelActivity = mongoose.model("Activity", activitySchema);
module.exports = ModelActivity