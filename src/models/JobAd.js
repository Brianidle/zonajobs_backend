const mongoose = require("mongoose");

const JobAdSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    area: {
      type: String,
      required: true,
    },
    subArea: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    salary: {
      type: Number,
    },
    jobType: {
      type: String,
      require: true,
    },
    modality: {
      type: String,
      required: true,
    },
    companyName: {
      type: String,
      required: true,
    },
    urlCompanyLogo: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

const JobAd = mongoose.model("JobAd", JobAdSchema);

module.exports = JobAd;
