require("dotenv").config();
const express = require("express");
const cors = require("cors");
const server = express();
require("./database/index");

const budgetRoute = require("./routes/budget.route");

const PORT = process.env.PORT || 3000;
const ORIGIN = process.env.CORS_ORIGIN;

server.use(cors());
server.use(budgetRoute);

server.listen(PORT, () => {
  console.log(`Start Server... Port ${PORT}`);
});

module.exports = server;
