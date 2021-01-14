const express = require("express");
require("dotenv").config();

const { HOST, PORT } = process.env;

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(PORT, HOST);
console.log(`Running: http://${HOST}:${PORT}`);
