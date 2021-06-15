const express = require("express");
const JobAdModel = require("../models/JobAd");

const jobAdRouter = express.Router();

jobAdRouter.post("", (req, res) => {
  try {
    let jobAdBody = req.body;
    let newJobAd = new JobAdModel(jobAdBody);
    newJobAd.save();
  } catch (err) {
    console.log(err);
  }
});

module.exports = jobAdRouter;
