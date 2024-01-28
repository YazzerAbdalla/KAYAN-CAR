const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const cars = require("./routes/modelsPage");
const car = require("./routes/carPage");
const login = require("./routes/login");
const app = express();

app.use(express.json());
app.use(cors());  

mongoose.connect(
  "mongodb://admin:admin@localhost:27017/kayan?authSource=admin"
);

const db = mongoose.connection;
db.on("error", console.error.bind("Connection error : ", console));
db.once("open", () => console.log("Connected to the DB..."));

const port = process.env.port || 3000;
app.use("/api", cars);
app.use("/api", car);
app.use("/api", login);

app.listen(port, () => console.log(`listening on port ${port}...`));
