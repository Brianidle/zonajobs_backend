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

jobAdRouter.get("/all", (req, res) => {
  try {
    JobAdModel.find((err, jobAds) => {
      res.send(jobAds);
    });
  } catch (err) {
    console.log(err);
  }
});

jobAdRouter.get("/featuredJobs", (req, res) => {
  try {
    JobAdModel.find((err, jobAds) => {
      jobAds.forEach((jobAd) => {
        let jobAdDescriptionCutted = jobAd.description.substr(0, 350);
        jobAd.description = jobAdDescriptionCutted;
      });
      res.send(jobAds);
    }).limit(8);
  } catch (err) {
    console.log(err);
  }
});

jobAdRouter.get("/:id", async (req, res) => {
  try {
    let jobAd = await JobAdModel.findOne({ _id: req.params.id });
    res.send(jobAd);
  } catch (err) {
    console.log(err);
  }
});

module.exports = jobAdRouter;
