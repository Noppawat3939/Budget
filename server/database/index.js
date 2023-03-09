const mongoose = require("mongoose");

const BASE_URL = process.env.DB_URL;

mongoose
  .connect(BASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("🌱 Connect mongoDB"))
  .catch((err) => console.log("Error mongo", err));

module.exports = mongoose;
