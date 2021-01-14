const express = require("express");
import cors from "cors";
import { config } from "dotenv";
config();

const { HOST, PORT } = process.env;

const app = express();

// app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/hello", (req, res) => {
  res.send({ message: "Hello World" });
});

app.post("/user", (req, res) => {
  res.send({ message: `Do you want to find user '${req.body.username}'?` });
});

app.listen(PORT, HOST);
console.log(`Running: http://${HOST}:${PORT}`);
