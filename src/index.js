const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const JobAdModel = require("./models/JobAd");
const jobAdRoutes = require("./routes/JobAd");

require("dotenv").config();

const port = process.env.PORT;
const mongo_uri = process.env.MONGO_URI;

const app = express();

var corsOptions = {
  origin: "*",
  //credentials: true
};

app.use(cors(corsOptions));

app.use(express.json());

app.disable("x-powered-by");

mongoose.connect(mongo_uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const apiRouter = express.Router();
app.use("", apiRouter);
apiRouter.use("/jobAd", jobAdRoutes);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
