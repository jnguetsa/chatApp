const { type } = require("express/lib/response");
const mongoose = require("mongoose");

const USER = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  pwd: {
    type: String,
    required: true,
    minlength: 6,
  },
  gender: {
    type: String,
    required: true,
    enum: ["Homme", "FEMME"],
  },
  profile: {
    type: String,
    default: "",
  },
});

module.exports = mongoose.model("User", USER);
