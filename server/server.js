require("dotenv").config();
const express = require("express");
const cors = require("cors");
const server = express();
require("./database/index");
const router = require("./routes/route");

const PORT = process.env.PORT || 3000;
const ORIGIN = process.env.CORS_ORIGIN;

server.use(router);

server.use(
  cors({
    origin: ORIGIN,
    allowedHeaders: ["*"],
    methods: ["*"],
  })
);

server.listen(PORT, () => {
  console.log(`Start Server... Port ${PORT}`);
});

module.exports = server;
