const mongoose = require("mongoose");

const carSchema = mongoose.Schema({
  gallaryPaths: [String],
  carName: String,
});

module.exports = mongoose.model("car", carSchema);
