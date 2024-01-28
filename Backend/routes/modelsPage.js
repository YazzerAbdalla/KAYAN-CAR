const express = require("express");
const cars = require("../models/cars");
const router = express.Router();

router.get("/cars", async (req, res) => {
  try {
    const data = await cars.find();
    res.status(200).json(data);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
});

router.post("/cars", async (req, res) => {
  try {
    const { imgPath, carName } = req.body;
    const data = new cars({ imgPath, carName });
    await data.save();
    res.status(200).json(data);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
});

module.exports = router;
