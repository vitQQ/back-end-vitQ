const mongoose = require("mongoose");

const opt = {
  timestamps: true,
  versionKey: false,
};

const userActivitySchema = new mongoose.Schema(
  {
    id_user: [{
        type: mongoose.Schema.Types.ObjectId,
        ref : "User",
    }],
    id_activity: [{
        type: mongoose.Schema.Types.ObjectId,
        ref : "Activity",
    }],
    date_time : {
        type: Date,
        default: Date.now
    },
    thumbnail_url : {
        type : String,
    },

  },
  opt
);

const ModelUserActivity = mongoose.model("UserActivity", userActivitySchema);
module.exports = ModelUserActivity