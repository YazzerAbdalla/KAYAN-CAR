const express = require("express");
const car = require("../models/car");
const router = express.Router();

router.get("/car?carName", async (req, res) => {
  try {
    const { carName } = req.params;
    const data = await car.findOne({ carName });
    res.status(200).json(data);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
});

router.post("/car", async (req, res) => {
  try {
    const { gallaryPaths, carName } = req.body;
    const data = new car({ gallaryPaths, carName });
    await data.save();
    res.status(200).json(data);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
});

module.exports = router;
