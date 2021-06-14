const express = require("express");
const mongoose = require("mongoose");

require("dotenv").config();

const port = process.env.PORT;
const mongo_uri = process.env.MONGO_URI;

const app = express();

app.disable("x-powered-by");

mongoose.connect(mongo_uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
