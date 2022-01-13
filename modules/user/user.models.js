const mongoose = require("mongoose");

const opt = {
  timestamps: true,
  versionKey: false,
};

const userSchema = new mongoose.Schema(
  {
    nama: {
      type: String,
    },
    email: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    jenisKelamin: {
      type: String,
      enum: ['L','P']
    },
    umur: {
      type: Number,
    },
    berat_badan: {
      type: Number,
    },
    tinggi_badan: {
      type: Number,
    },
    activity_level: {
      type: Number
      },
    kaloriHarian: {
        type: Number
    },
  },
  opt
);

const ModelUser = mongoose.model("User", userSchema);
module.exports = ModelUser