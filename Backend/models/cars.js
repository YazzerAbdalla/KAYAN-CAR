const mongoose = require("mongoose");

const carsSchema = mongoose.Schema({
  imgPath: String,
  carName: String,
});

module.exports = mongoose.model("cars", carsSchema);
