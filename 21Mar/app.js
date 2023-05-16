const express = require("express");
const dotenv = require("dotenv");
const app = express();
const router = require('./Router/router');
dotenv.config();

// middleware
app.use(express.json());
app.use(router);

// homepage routing
app.get("/", (req, res) => {
  res.status(200).send("<h1>Welcome, Aastha, have a good day :) </h1>");
});

// listing/port
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});
